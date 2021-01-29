var x = 20;
var a = {
    x: 15,
    fn: function(){
        var x = 30;
        return function(){
            return this.x
        }
    }
}
// function(){return this.x}
console.log(a.fn())
// 20
console.log((a.fn())())
// 15
console.log(a.fn()())
// false
console.log(a.fn()() == (a.fn()()))
// 
console.log(a.fn().call(this))