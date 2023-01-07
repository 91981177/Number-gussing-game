#!usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
import  chalkAnimation from "chalk-animation";
const sleep=()=>{
    return new Promise((res)=>{
        setTimeout(res,2000)
    })
}


 async function add() {
    const rainbow=chalkAnimation.rainbow("lets start a game")
await sleep();
rainbow.stop();
}
await add()
var playerLife=3

async function ask(){
   do{
    playerLife--;
    console.log(`player life are left ${playerLife}`)
    var randemNumber= Math.floor(Math.random() * 10 +1);
    
    var que=await inquirer
     .prompt([
         {
         type:"number",
         name:"usr_name",
         message:"plz enter a number bewteen 1 and 10;",
//  validate:(answer:number)=>{
//      if(isNaN(answer)){
//          chalk.red("plz enter a valid number");
//      }
//      return true
//  }
 }
     ]);
     if(que.usr_name==randemNumber){
         console.log(chalk.green('congratulations !!!'));
     }else if(que.usr_name < randemNumber){
         console.log(chalk.green(`your number ${que.usr_name} is less then guess number`))
     }else if(que.usr_name > randemNumber){
         console.log(chalk.yellow (`your nnumber ${que.usr_name}`))
     }

   } while (playerLife > 0 && randemNumber !== que.usr_name)
   if(playerLife == 0){
    console.log(chalk.redBright(`game is over!!`));
    
   }

}

//ask();
async function startAgain(){
    do { 
        console.clear();
        await ask();
        
        playerLife=3
        //await ask()
        var restart= await inquirer.prompt([
            {
                type:"input",
                name:"start",
                message:"do you want so start again press y or n"
            }
        ])
    } while (restart.start=== "y" || restart.start=== "n");
}
startAgain()