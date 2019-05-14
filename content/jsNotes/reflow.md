# 回流（reflow）与重绘(repaint)

## 浏览器的渲染过程

在了解回流与重绘之前，我们先大概了解一下浏览器的渲染过程，如图（来自[mdn](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction?hl=zh-cn)）:
![生成渲染树](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/images/render-tree-construction.png?hl=zh-cn)

> 渲染过程如下：

1. 解析 HTML，生成 DOM 树，解析 CSS，生成 CSSOM 树,
2. 将 DOM 树和 CSSOM 树结合，生成渲染树(Render Tree)，为构建渲染树，浏览器大体上完成了下列工作：

   2.1 从 DOM 树的根节点开始遍历每个可见节点。（不可见节点包括一些不会渲染输出的节点，比如 script、meta、link 等，以及一些通过 css 进行隐藏的节点。比如 display:none）  
   2.2 对于每个可见节点，为其找到适配的 CSSOM 规则并应用它们。  
   2.3 发射可见节点，连同其内容和计算的样式。

3. Layout(回流):根据生成的渲染树，进行回流(Layout)，得到节点的几何信息（位置，大小）
4. Painting(重绘):根据渲染树以及回流得到的几何信息，得到节点的绝对像素
5. Display:将像素发送给 GPU，展示在页面上。

## 回流 reflow

回流又称为重排，指的是浏览器为了重新渲染文档而重新计算文档中元素的位置和几何结构的过程，简单来说就是当页面布局或者几何属性改变时就需要回流。回流阶段是计算 DOM 在视口内位置和大小的阶段。

> 当渲染树的一部分或全部的元素因改变了自身的宽高，布局，显示或隐藏，或者元素内部的文字结构（图片内容以及应用广泛的输入控件内容）发生变化 导致需要重新构建页面的时候，或者添加删除 dom 以及改变浏览器的窗口的时候，或者计算读取元素的 offsetWidth 等，都会产生回流。

## 重绘 repaint

重绘是知道 DOM 确定位置和大小后，将渲染树的每个节点都转换为屏幕上的实际像素的过程。

> 当一个元素自身的宽高，布局，及显示或隐藏没有改变，而只是改变了元素的样式风格相关的属性的时候，就会产生重绘。

**_回流必定触发重绘，而重绘不一定触发回流_**

## 浏览器的优化机制

由于回流会造成额外计算的消耗，所以大多数浏览器都会收集 reflow 操作到缓存队列中，直到过了一段时间或者操作达到了一个阈值，才一次性地清空队列，反馈到渲染树中。但是**当你获取布局信息的操作的时候，会强制队列刷新**，比如当你访问以下属性或者使用以下方法：

- `offsetTop、offsetLeft、offsetWidth、offsetHeight`
- `scrollTop、scrollLeft、scrollWidth、scrollHeight`
- `clientTop、clientLeft、clientWidth、clientHeight`
- `getComputedStyle() 或者 currentStyle() (IE)`
- `getBoundingClientRect`
- [其他的一些操作](https://link.juejin.im/?target=https%3A%2F%2Fgist.github.com%2Fpaulirish%2F5d52fb081b3570c81e3a)

以上属性和方法都需要返回最新的布局信息，因此浏览器不得不清空队列，触发回流重绘来返回正确的值。因此，我们在修改样式的时候，**最好避免使用上面列出的属性，他们都会刷新渲染队列**。如果要使用它们，**最好将值缓存起来**。

了解有哪些属性值改变会触发回流或者重绘点击[这里](https://csstriggers.com/)

## 减少回流和重绘

### 1、尽量使用 flexbox 而不是较早的布局模型，可以大大缩减回流的时间。

### 2、对频繁发生回流的元素做特殊处理

- 使用 `DocumentFragment` 进行缓存操作,引发一次回流和重绘；
- 使用 `display:none`，只引发两次回流和重绘；
- 使用 `cloneNode(true or false)` 和 `replaceChild` 技术，引发一次回流和重绘；

Dom 规定文档片段（document fragment）是一种“轻量级”的文档，可以包含和控制节点，但不会想完整的文档那样占用额外的资源。虽然不能把文档片段直接添加到文档中，但是可以将它作为一个“仓库”来使用，即可以在里面保存将来可能会添加到文档中的节点。
比如最开始的样例结合 DocumentFragment 就可以这样写：

```javascript
document.addEventListener('DOMContentLoaded', function() {
  var date = new Date(),
    fragment = document.createDocumentFragment()
  for (var i = 0; i < 7000; i++) {
    var tmpNode = document.createElement('div')
    tmpNode.innerHTML = 'test' + i
    fragment.appendChild(tmpNode)
  }
  document.body.appendChild(fragment)
  console.log('speed time', new Date() - date)
})
```

将多个修改结果收纳到了 documentFragment 这个“仓库”中，这个过程并不会影响到 render tree，待循环完毕再将这个“仓库”的“存货”添加到 dom 上，以此达到减少 reflow 的目的，使用 cloneNode 也是同理。
而使用 display：none 来降低 reflow 的性能开销的原理在于使节点从 render tree 中失效，等经过多个会触发 reflow 操作后再“上线”。

### 3、避免强制同步布局

首先 JavaScript 运行，然后计算样式，然后布局。但是，可以使用 JavaScript 强制浏览器提前执行布局。这被称为强制同步布局。
要记住的第一件事是，在 JavaScript 运行时，来自上一帧的所有旧布局值是已知的，并且可供您查询。因此，如果（例如）您要在帧的开头写出一个元素（让我们称其为“框”）的高度，可能编写一些如下代码：

```javascript
function getHeight() {
  box.classList.add('test')

  console.log(box.offsetHeight)
}
```

现在，为了回答高度问题，浏览器必须先应用样式更改（由于增加了 super-big 类），然后运行布局。这时它才能返回正确的高度。这是不必要的，并且可能是开销很大的工作。

因此，始终应先批量读取样式并执行（浏览器可以使用上一帧的布局值），然后执行任何写操作：

```javascript
function getHeight() {
  console.log(box.offsetHeight) // 先读取后执行更改

  box.classList.add('test')
}
```

大部分情况下，并不需要应用样式然后查询值；使用上一帧的值就足够了。与浏览器同步（或比其提前）运行样式计算和布局可能成为瓶颈，并且您一般不想做这种设计

### 4、避免布局抖动

当我们访问元素的一些属性的时候，会导致浏览器强制清空队列，进行强制同步布局，我们也能会写如下的业务代码：

```javascript
function init() {
  for (let i = 0; i < arr.length; i++) {
    arr[i].style.width = box.offsetWidth + 'px'
  }
}
```

此时就会造成很大的性能开销，每次循环都会获取`box`的`offsetWidth`，造成回流，导致**每一次循环都会强制浏览器刷新队列**，我们可以做如下优化：

```javascript
const width = box.offsetWidth // 依旧遵循先读取执行更改
function init() {
  for (let i = 0; i < arr.length; i++) {
    arr[i].style.width = width + 'px'
  }
}
```

### 5、对于复杂动画效果,使用绝对定位让其脱离文档流

### 6、css3 硬件加速（GPU 加速）

- 用 translate 代替 top，用 opacity 替代 visibility

- 使用 css3 硬件加速，可以让 `transform、opacity、filters` 这些动画不会引起回流重绘 。

- 对于动画的其它属性，比如 `background-color` 这些，还是会引起回流重绘的，不过它还是可以提升这些动画的性能。

常见的触发硬件加速的 `css` 属性：

- `transform`
- `opacity`
- `filters`
- `Will-change`

重点

- 使用 css3 硬件加速，可以让`transform、opacity、filters`这些动画不会引起回流重绘
- 对于动画的其它属性，比如`background-color`这些，还是会引起回流重绘的，不过它还是可以提升这些动画的性能

## 参考

- [渲染树构建、布局及绘制](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction?hl=zh-cn)
- [避免大型、复杂的布局和布局抖动](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing#avoid-forced-synchronous-layouts)
- [你真的了解回流和重绘吗](https://juejin.im/post/5c6cb7b4f265da2dae511a3d)
- [reflow 和 repaint 引发的性能问题](https://juejin.im/post/5a9372895188257a6b06132e#heading-11)
