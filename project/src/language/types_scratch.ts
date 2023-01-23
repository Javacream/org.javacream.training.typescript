function types_scratch(){
    //Type Inference, preferred
    let message = "Hello"
    console.log(message)
//    message = 42
//    console.log(message)

    //Type Annotations, hier optional
    let m2:string = "Hello"
    console.log(m2)

    let value:any = "Hello" 
    let m3:string = value //impliziter Cast, "toString"
    //explicit type cast
    let m4:string = <string>value
    let m5:string = value as string

}

types_scratch()
