import { InferencePriority } from "typescript"

if(window?.location.href){
    console.log('ww')
}
function sum(...args: number[]){
    return args.reduce(prev: Number, cur: Number) => {
        return prev + cur
    }, 0)
}

// 元组 数字下标 结构获取值 
const tuple = [number, string]
tuple
//================= 枚举========================
// 不指定 默认累加 指定后接着累加
// if string init every one
// 入侵运行时代码
// will be removed most of ts
// 常量枚举 推荐 const enum <name>{}
enum POS{
    Draft ,
    unpublish= 1,
}

const Post

// 函数================
// args input
// args.length 
// args?
// es6 = val, default value
// in the last by args
// ...rest number[]
function fjunc(a:number, b: number): number {
    return 'dfdf'
}
// args output

const fss = function (a:number):string {
    return  3
}

// ============== any type ================
// any dynamic type
// there is no any check
// should be 
function string(val: any) {
    return JSON.stringify(val)
    
}
// Type Inference===================
// prompt use less
// there is a conflict in jsx when react
// it is not switching type
let a = 33
a = '3'


// Type assertions
// <?type>object
// object as type

// ============= Interface ===============
// limit object structure
// type used in object
interface nmae {
    title: string;
    age: number;
    // not have to
    subtitle?: string
    // readonly
    readonly summary: string
    
}
interface Cache{
    // dynamic member
    [key: string]: string
}
const c : Cache = {}
c.a = '1'

// ======== classes ===========
// extends 
// parent class
// child class
// describe member in object 
// public is default 
// protected  used in child class

class Person{
    private name: string = null
    protected gender = null
    // can't be instance ,
    // private constructor cound be invoke inside class
    // protected constructor could be extends
    // readonly props init by constructor or first 
    // 
    private constructor(name: string, age: number){
        this.name = name
        this.gender = 333
    }
    // private/protected/public name:string = null
    con(){
        // this.con.length = this.anme
    }
}
new Person().name  = '1'
new Person().gender  = '1'

class st extends Person{
    constructor(){
        super(name, age)
        
    }
}

// class and interface

interface Eat{
    eat(food: string): void
}
interface Run{
    run(food: number): void
}
class Personff implements Eat, Run{
    eat(){}
    run(){}
}
// ======== abstract class ==============
abstract class A {
    constructor(parameters) {
        
    }
    abstract run (){}
}


// ========= Generic ==========
// 定义时不能明确的类型，使用时传入

// ==========type declaration =====================
// ts exclude type declaration module
// install @types/moduleName 
