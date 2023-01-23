function types_scratch(){
    function demo(flag:boolean){
        if(flag){
            return "OK"
        }else{
            return 42
        }
    }
    let result = demo(true)

    if (typeof result === "string"){
        let s = result as string
    }else{
        let n = result as number
    }
}

types_scratch()
