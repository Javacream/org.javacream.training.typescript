function types_scratch(){
    // function demo(p1:string, p2:number){
    //     console.log(p1 + " " + p2)
    // }


    let demo:(flag:boolean) => string|number
    demo = function(flag:boolean){
        if(flag){
            return "OK"
        }else{
            return 42
        }
    }

    let result = demo(true)
//    demo(47, true)
//    demo()

}

types_scratch()
