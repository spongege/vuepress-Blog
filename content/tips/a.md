# 数组排序
![image](https://camo.githubusercontent.com/1e3caaff1bad189238445096025d9d961fd359d0/687474703a2f2f696d672e626c6f672e6373646e2e6e65742f3230313630393136313534303336383837)
## 1、冒泡排序
```javascript
// 时间复杂度  最好 O(n) 最坏 O(n^2) 平均O(n^2) 空间复杂度O(1) 属于内排序  稳定 
// 普通冒泡排序
function bubbleSort(arr) {
  console.time('冒泡排序')
  var len = arr.length
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        // var temp = arr[j]
        // arr[j] = arr[j + 1]
        // arr[j + 1] = temp
      }
    }
  }
  console.timeEnd('冒泡排序')
  return arr
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(bubbleSort(arr))

//第一次改进冒泡排序 设置一个标志性的变量pos，用来记录每趟排序中最后一次
//进行交换的位置。由于pos位置之后的记录均已交换到位，因此在进行下一次的拍讯时只要扫描到pos位置
function bubbleSort1(arr) {
  console.time('第一次改进冒泡排序')
  var i = arr.length - 1
  while (i > 0) {
    var pos = 0
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        pos = j;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
    i = pos;
  }
  console.timeEnd('第一次改进冒泡排序')
  return arr
}
console.log(bubbleSort1(arr))

//  第二次的冒泡排序改进  之前的两种排序方法 每次操作都是找到一个最大值或最小值，
// 因此我们可以考虑利用在每趟的排序操作中进行正向和方向两遍的冒泡方法来一次获得两个值(最大值和最小值)
// 从而使用拍讯趟数几乎较小一半

function bubbleSort2(arr) {
  var low = 0;
  var high = arr.length - 1
  var j;
  console.time('第二次改进后的冒泡排序')
  while (low < high) {
    for (j = low; j < high; ++j) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
    --high
    for (j = high; j > low; --j) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      }
    }
    ++low
  }
  console.timeEnd('第二次改进后的冒泡排序')
  return arr
}
console.log(bubbleSort2(arr))
```
![image](https://camo.githubusercontent.com/bc20131e2ee7ad70c06e7c71eefc04c3a3cc18a2/687474703a2f2f696d672e626c6f672e6373646e2e6e65742f3230313630393136313630373438333839)
## 2、选择排序
```javascript
//时间复杂度 最好O(n^2) 最坏O(n^2) 平均O(n^2)       空间复杂度O(1) 属于内排序 不稳定
// 每次找到最小值  放在前面
function selectionSort(arr) {
  var len = arr.length
  var minIndex, j;
  console.time('选择排序')
  for (var i = 0; i < len - 1; i++) {
    minIndex = i
    for (j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
  }
  console.timeEnd('选择排序')
  return arr
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(selectionSort(arr)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
```
![image](https://camo.githubusercontent.com/603dd620708cd52e8d60af45ffbcb1c7986c98ba/687474703a2f2f696d672e626c6f672e6373646e2e6e65742f3230313630393136313634373534303133)
## 3、插入排序
```javascript
//时间复杂度 最好O(n) 最坏O(n^2) 平均O(n^2)       空间复杂度O(1) 属于内排序 稳定
//插入排序
function insertionSort(arr) {
  console.time('插入排序')
  for (var i = 1; i < arr.length; i++) {
    var j = i - 1;
    var key = arr[i]
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = key
  }
  console.timeEnd('插入排序')
  return arr
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(insertionSort(arr))
//改进插入排序：查找插入位置时使用二分的查找方式
function insertionSort1(arr) {
  console.time('改进后的插入排序')
  for (var i = 1; i < arr.length; i++) {
    var key = arr[i],
      left = 0,
      right = i - 1;
    while (left <= right) {
      var middle = parseInt((left + right) / 2)
      if (key < arr[middle]) {
        right = middle - 1
      } else {
        left = middle + 1
      }
    }
    for (var j = i - 1; j >= left; j++) {
      arr[j + 1] = arr[j]
    }
    arr[left] = key
  }
  console.timeEnd('改进后的插入排序')
  return arr
}
console.log(insertionSort1(arr))
```
![image](https://camo.githubusercontent.com/419cbfed21e0d421b56abc402563649d73dcc453/687474703a2f2f696d672e626c6f672e6373646e2e6e65742f3230313630393136313733383032353937)
## 4、希尔排序
```javascript
// 时间复杂度  最好 O(nlog2 n) 最坏 O(nlog2 n) 平均O(nlog2 n) 空间复杂度O(1) 属于内排序  不稳定 
function shellSort(arr) {
  var len = arr.length,
    temp,
    gap = 1
  console.time('希尔排序')
  while (gap < len / 5) {
    gap = gap * 5 + 1
  }
  for (gap; gap > 0; gap = Math.floor(gap / 5)) {
    for (var i = gap; i < len; i++) {
      temp = arr[i]
      for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
  }
  console.timeEnd('希尔排序')
  return arr
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(shellSort(arr)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
```
![image](https://camo.githubusercontent.com/566f29b741c91b49352e1d98150e109f6ae500ce/687474703a2f2f696d672e626c6f672e6373646e2e6e65742f3230313630393136323335323033343137)

## 5、归并排序

```javascript
//时间复杂度 最好O(nlogn) 最坏O(nlogn) 平均O(nlogn)       空间复杂度O(n) 属于外排序 稳定
function mergeSort(arr) {
  var len = arr.length;
  if (len < 2) {
    return arr
  }
  var middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right) {
  var result = [];
  console.time('归并排序')
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  while (left.length) {
    result.push(left.shift())
  }
  while (right.length) {
    result.push(right.shift())
  }
  console.timeEnd('归并排序')
  return result
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(mergeSort(arr));
```
![image](https://camo.githubusercontent.com/0a7ed1ffe79aba1d560a6ab75823f9e74ad122da/687474703a2f2f696d672e626c6f672e6373646e2e6e65742f3230313630393137303031333236323534)

## 6、快速排序
```javascript
//时间复杂度 最好O(log n) 最坏O(n^2) 平均O(nlogn)       空间复杂度O(logn) 属于内排序 不稳定
console.time('快速排序')
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  var pivotIndex = Math.floor(arr.length / 2)
  var pivot = arr.splice(pivotIndex, 1)[0]
  var left = []
  var right = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(pivot, quickSort(right))
}
console.timeEnd('快速排序')
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(quickSort(arr)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
```
![image](https://camo.githubusercontent.com/253b22840353c9759694d63839fe7565d48f9df6/687474703a2f2f696d672e626c6f672e6373646e2e6e65742f3230313630393137303033303034393036)







