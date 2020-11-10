// 实现一个斐波那契数组
// 输出每一项
let fibonacci = []
fibonacci[1] = 1
fibonacci[2] = 1
for(let i = 3; i < 20 ;i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
}
console.log('fibonacci', fibonacci)

// method: push
Array.prototype.push = function(el){
    this[this.length] = el
}

// method: insertBefore
// unshift
Array.prototype.insertBefore = function (val) {
    for(let i = this.length; i > 0; i--){
        this[i] = this[i-1]
    }
    this[0] = val
    return this
}
// or
let a = new Array([3,5,6,7])
a.push(111)
a.reverse()

// 二维数组输出
let arr = [[1,2,3,4,5], [21, 22, 34, 43, 65]]
for(let i = 0; i<arr.length; i++){
    for(let j=0;j<arr[i].length;j++){
        console.log(arr[i][j])
    }
}
console.table(arr)

// 一些常用方法
// concat 连接两个或更多数组，并返回结果
// every 对数组中每个元素运行给定函数，如果每个函数都返回true，则返回true
// filter 对数组中每个元素运行给定函数，返回该函数会返回true的元素的值
// forEach 对数组中每个元素运行给定函数，没有返回值
// join 将所有的数组元素连接成一个字符串
// indexOf 返回第一个与给定元素相等的数组元素的索引，没有找到返回-1
// lastIndexOf 返回数组中与给定的元素相等的元素的索引的最大值
// map 对数组中的每个元素运行给定的函数，返回每个函数的运行结果组成的数组
// reverse 颠倒数组中元素的顺序
// slice 传入索引值，将数组里对应索引范围的元素作为新数组返回
// some 对数组中的每个元素运行给定函数，只要有一个返回true，则返回true
// sort 按照字母顺序进行排序，支持按照传入函数作为参数
// toString 将数组作为字符串返回
// reduce 传入两个参数pre（累加器），cur当前元素，最后返回累加器

// ECMAscript 2015+
// 数组新功能
// @@iterator 返回一个包括数组键值对的迭代器对象，可以同步调用得到数组元素的键值对
// copyWithin 复制数组中一系列元素到同一数组的指定位置
// entries 返回数组所有键值对的@@iterator
// includes 数组中是否包含某元素
// find 根据给定的回调函数内条件查找元素，如果找到则返回该元素
// findIndex 同上，返回找到元素的索引
// fill 用静态值填充数组
// from 根据已有数组创建一个新数组
// keys 返回包含数组所有索引的@@iterator
// of 根据传入参数创建一个新数组
// values 返回包含数组所有value的@@iterator

// 类型数组使用
// https://www.html5rocks.com/en/tutorials/webgl/typed_arrays/


// leetcode 练习

// https://leetcode-cn.com/problems/volume-of-histogram-lcci/
// 面试题 17.21. 直方图的水量
// 20201109 第一次

// https://leetcode-cn.com/problems/find-majority-element-lcci/
// 面试题 17.10. 主要元素
// 20201110 第一次


// https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
// 面试题4. 二维数组中的查找
// 20201110 第一次

// https://leetcode-cn.com/problems/smallest-difference-lcci/
// 面试题 16.06. 最小差
// https://leetcode-cn.com/problems/living-people-lcci/
// 面试题 16.10. 生存人数
// https://leetcode-cn.com/problems/master-mind-lcci/
// 面试题 16.15. 珠玑妙算

// https://leetcode-cn.com/problems/t9-lcci/
// 面试题 16.20. T9键盘

// https://leetcode-cn.com/problems/find-longest-subarray-lcci/
// 面试题 17.05.  字母与数字

// https://leetcode-cn.com/problems/pairs-with-sum-lcci/
// 面试题 16.24. 数对和

// https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/
// 剑指 Offer 53 - II. 0～n-1中缺失的数字
// 20201109 第一次

// https://leetcode-cn.com/problems/draw-line-lcci/
// 面试题 05.08. 绘制直线

// https://leetcode-cn.com/problems/missing-number-lcci/
// 面试题 17.04. 消失的数字

// https://leetcode-cn.com/problems/langtons-ant-lcci/
// 面试题 16.22. 兰顿蚂蚁

// https://leetcode-cn.com/problems/check-permutation-lcci/
// 面试题 01.02. 判定是否互为字符重排

// https://leetcode-cn.com/problems/zero-matrix-lcci/
// 面试题 01.08. 零矩阵

// https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
// 剑指 Offer 03. 数组中重复的数字
// 20201109 第一次

// https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/
// 剑指 Offer 29. 顺时针打印矩阵
// 20201109 第一次

// https://leetcode-cn.com/problems/is-unique-lcci/
// 面试题 01.01. 判定字符是否唯一

// https://leetcode-cn.com/problems/tic-tac-toe-lcci/
// 面试题 16.04. 井字游戏

// https://leetcode-cn.com/problems/contiguous-sequence-lcci/
// 面试题 16.17. 连续数列

// https://leetcode-cn.com/problems/sorted-merge-lcci/
// 面试题 10.01. 合并排序的数组

// https://leetcode-cn.com/problems/search-rotate-array-lcci/
// 面试题 10.03. 搜索旋转数组

// https://leetcode-cn.com/problems/magic-index-lcci/
// 面试题 08.03. 魔术索引

// https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/
// 剑指 Offer 53 - I. 在排序数组中查找数字 I
// 20201109 第一次

// https://leetcode-cn.com/problems/sub-sort-lcci/
// 面试题 16.16. 部分排序

// https://leetcode-cn.com/problems/rotate-matrix-lcci/
// 面试题 01.07. 旋转矩阵

// https://leetcode-cn.com/problems/missing-two-lcci/
// 面试题 17.19. 消失的两个数字

// https://leetcode-cn.com/problems/power-set-lcci/
// 面试题 08.04. 幂集

// https://leetcode-cn.com/problems/word-transformer-lcci/
// 面试题 17.22. 单词转换

// https://leetcode-cn.com/problems/sum-swap-lcci/
// 面试题 16.21. 交换和







