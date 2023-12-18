// object 对象 {}
let a: object;
a = {}
a = function () {
}

// b也是对象 {}用来指定对象中可以包括什么东西
let b: { name: string, age?: number }
// 此时b里面必须有一个name才可以,多了也不行，少了也不行,如果你不确定有没有那个属性，那就在定义的时候加一个问号
// 这时候的age是可有可无的
b = {name: 'gtt', age: 18}

// 你c后面可以加任何字符串的属性名，注意是名字，然后这个属性可以跟任意类型的属性
let c: { name: string, [propName: string]: any }
c = {name: "gtt", gender: "男"}

// 函数结构的类型说明
// 语法：(形参:类型,形参:类型,形参:类型...)=>返回值
// 意思：希望d是一个函数，里面的AB两个参数都是数字，返回的值也是数字
let d: (a: number, b: number) => number;
d = function (n1, n2) {
    return n1 + n2
}


// 数组的几种表示方式
// string[]表示:希望e里存的都是字符串数组
let e: string[]
// number[]
let f: number[]
// 这两个是相等的
let g: Array<number>


/*
* 元组,长度固定的数组
* 语法:[类型,类型...]
* */
// h是一个元组,里面只能有两个字符串类型的元素
let h: [string, string]


/*
* enum枚举
*
* */
enum Gender {
    Male,
    Female
}

let i: { name: string, gender: Gender }
i = {
    name: "gtt",
    gender: Gender.Male
}
console.log(i.gender === 1)