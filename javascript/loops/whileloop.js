// A while loop runs as long as the condition is true.
// 👉 The condition is checked before executing the loop body.


let randomnumber;


while (true){
    randomnumber=Math.floor(Math.random()*2+1)
    if(randomnumber==2){
    console.log(`random number found which is: `, randomnumber)
    break;
    }
}
