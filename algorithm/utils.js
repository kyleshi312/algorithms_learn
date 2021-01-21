function checkTime(func){
    var a = Math.floor(Math.random() * 100)
    console.time(a)
    func(Array.from(arguments).slice(1))
    console.log(func(Array.from(arguments).slice(1)))
    console.timeEnd(a)
}
