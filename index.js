let i = 0

const delay = ms => {
    return new Promise(r => setTimeout(() => r(),ms))
}

async function start() {
    
    while(true){

    await delay(1000);
    console.log(++i) 
    }
}
    


function loop() {

    let p = new Promise((resolve,reject)=>{
        

        setTimeout(()=>{

            console.log(++i);
            return resolve()
        },1000)   
       
    
        
    })
}    



start()