/**
 * Created by XiaoTong on 2017/7/31.
 */

const  assert = require('assert');

//断言:表达式如果不成立,中断代码执行,给出后面的错误提示
// console.assert(1 === 2,'1不等于2');
// console.log(1111);

//deepEqual: 判断第一个参数与第二个参数是否同等相等
//相等什么都没有,不相等报错
var a = 1;
var b = 1;
assert.deepEqual(a,b);


//deepStrictEqual: 判断第一个参数与第二个参数是否绝对相等
//相等什么都没有,不相等报错
var c = 2;
var d = 3;
assert.deepStrictEqual(c,d);


//doesNotThrow: 如果抛出错误且错误类型与 error 参数指定的相同，则抛出 AssertionError
// 如果错误类型不相同，或 error 参数是 undefined，则错误会被抛回给调用者
