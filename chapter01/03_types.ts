// 可以直接使用字面量进行类型生命
let a: 10;
a = 10;
a = 11;

// 可以使用|来链接多个类型
let b: "male" | "false"
b = "male"
b = "false"

let c: boolean | string
c = true
c = 'hello'

// any 啥都行
// 设置成any后相当于对这个变量关闭了ts的类型检测
// 不建议使用这个any
// 相当于一个let d; 那岂不是和js默认的一模一样了?
let d: any;
d = 10;
d = 'hello'

// unknown 未知类型
let e: unknown
e = 10;
e = "hello";
e = true;

let s: string;

// d是any,可以复制给任意变量
// s = d; // 这也是不推荐使用any的原因
e = "hello"
// e的类型是未知的,你把一个未知的类型赋值给string类型的,所以会报错
// unknown 实际上就是一个类型安全的any
// unknown 不能直接赋值给其他变量
if (typeof e === 'string') {
    s = e
}

// 类型断言
s = e as string; // 告诉编译器e就是字符串,放心用
s = <string>e
// 效果是一样的

// void
function fn(): void {
    // 你的函数没有返回值,void是空
    return
}

// never 永远都不会有返回结果
function fn2(): never {
    throw new Error("报错了!")
}
