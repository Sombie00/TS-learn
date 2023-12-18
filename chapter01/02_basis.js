// 生命一个变量a,同时指定了它的类型,=
var a;
// a的类型是number,在以后的使用过程中只能是数字
a = 10;
// a = 'hello'; a is number so you cant give a str to a
var b;
b = 'hello';
// 声明后直接复制
// let c: boolean = false;
// 如果变量声明和赋值是同时进行的,ts会自动进行类型的检测
var c = false;
// 这时候ts的编译器会默认变成let c:boolean=false
// JS中的函数是不考虑参数的类型和个数的
function sum(a, b) {
    return a + b;
}
console.log(sum(123, "456"));
