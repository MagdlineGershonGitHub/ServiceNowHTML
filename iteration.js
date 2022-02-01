'use strict'
let a=100;
while (a<=200)
{
    a++;
    console.log(`a = ${a}`);
}
//Flowchar for while and for loop
let b=100;
while(b<=200){
    if (b%2 ==0){
        console.log("-");
    }else{
        console.log("*");
    }
b++;
    }

    // Method to print out the number 1-10 10 times each
    for(let i=0;i<10;i++)
    {
        for(let j=1;j<=10;j++){
            console.log(j)
        }
    }

    //replace with for loop
    for (let c=100;c<=200;c++){
        console.log(`c=${c}`);
    }

    // solution 2 for loop
    for(let d=100;d<=200;d++){
        if(d%2==0){
            console.log("-");
            }
            else
            {console.log("*");
                }
    }

    // switch statement
    let date= new Date();
    let day=date.getDate();
    switch(day){
        case 0:
            console.log(`It  is Monday`);
         case 1:
            console.log(`It is Tuesday`);
            
        case 2:
            console.log(`It  is Wednessday`);
            
        case 3:
            console.log(`It is Thursday`);
            
         case 4:
            console.log(`It  is Friday`);
            console.log(`It is a weekday`)
            break;
        case 5:
            console.log(`It is Saturday`);
            break;
        case 6:
            console.log(`It is Sunday`);
            break;
        default:
        console.log(`Sorry give me the correct day?`);
        break;
    }