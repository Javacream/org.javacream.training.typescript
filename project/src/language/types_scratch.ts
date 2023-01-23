function types_scratch(){
    // function demo(p1:string, p2:number){
    //     console.log(p1 + " " + p2)
    // }


    let demo:(p1:string, p2:number) => string
    demo = function(p1:string, p2:number){
        console.log(p1 + " " + p2)
        return "OK"
    }

    demo("A", 42)
//    demo(47, true)
//    demo()

}

types_scratch()
