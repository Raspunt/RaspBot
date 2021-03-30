const  config  = require('./config');
const token = config.tok

const Week = require('./Week')

const telbot = require('node-telegram-bot-api');
const bot = new telbot(token,{polling:true});

let date = new Date();

let users = {
    'me':'765549938'
}

bot.sendMessage(users['me'],`бот работает`);





class Timer {
    
    
    constructor(){
        this.numberLes = 0
        this.delay = ms => {
            return new Promise(r => setTimeout(() => r(),ms))
        }
    }


    

   async startTime(del) {
    
        while (true){
        
            
            this.loop()
            await this.delay(del)


            
        }
    }
    
    GetRightTime() {
        return this.RightTime
    }
    
    loop(){
        
   
            let dat = new Date();
            let h = dat.getHours()
            let m = dat.getMinutes()
            let s = dat.getSeconds()
            
            let rasp = Week.GetRasp()
            let raspTime = Week.GetTimeRasp()

            if (this.numberLes >= raspTime.length){
                this.numberLes = 0
            }

            if (rasp != null){
                
                let newTime = []
                
                newTime = raspTime[this.numberLes].split(" ")
                
                console.log(` newTime ${newTime}\n hour ${h == parseInt(newTime[0])}\n min ${m == parseInt(newTime[1])}\n num  ${this.numberLes } \n ${h}:${m}:${s} \n`);
                
                if (h == parseInt(newTime[0]) &&  m == parseInt(newTime[1]) && s == 0){
                   
                    bot.sendMessage(users['me'],rasp[i]);

                    this.RightTime = true
                    this.numberLes ++ ;
                    console.log("Стаботало");
                }
            }else {
                console.log("Нет уроков " + `${h}:${m}:${s}`);
            }
                
    }
}

let t = new Timer()


t.startTime(1000)






