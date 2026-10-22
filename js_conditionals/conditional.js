let time = new Date().getHours(); 

console.log(time) // 24hour format 
if(time > 0 && time <= 11){
    console.log("Good Morning!.")
}
else if(time >= 12 && time <= 15){
    console.log("Good Afternoon!.")
}
else if(time >= 16 && time <= 20){
    console.log("Good Evening!")
}
else{
    console.log("Good Night!");
}