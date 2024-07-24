function name2(){
    return new Promise((resolve, reject) => {
        setTimeout(arr=>{
            console.log("1 sec passed");
        },1000)
        setTimeout(arr=>{
            console.log("2 sec passed");
         },2000)
        setTimeout(arr=>{
            console.log("3 sec passed");
         },3000)
        });
}
    
async function done(){
    const result = await name2();
}

done();
