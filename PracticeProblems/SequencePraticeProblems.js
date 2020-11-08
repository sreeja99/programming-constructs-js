//1
{
    let digit = Math.floor(Math.random()*10);
    console.log(digit);
}

//2
{
    let digit = Math.floor(Math.random()*10)%6+1;
    console.log("Dice Roll: "+digit);
}

//3
{
    let dice1 = Math.floor(Math.random()*10)%6+1;
    let dice2 = Math.floor(Math.random()*10)%6+1;
    let sum = dice1+dice2;
    console.log("Dice Roll Sum: "+sum);
}

//4
{
    let digit1 = Math.floor(Math.random()*100);  
    let digit2 = Math.floor(Math.random()*100);
    let digit3 = Math.floor(Math.random()*100);
    let digit4 = Math.floor(Math.random()*100);
    let digit5 = Math.floor(Math.random()*100);
    let sum = digit1+digit2+digit3+digit4+digit5;
    let avg = sum/5;
    console.log("sum: "+ sum+ " avg: "+avg); 
}
//5
{
    console.log("42 inches is:"+42/12);
    let length = 60;
    let breadth = 40;
    let lengthInMtrs = length / 3.28084;
    let breadthInMtrs = breadth / 3.28084;
    let area = lengthInMtrs * breadthInMtrs;
    console.log("Area in meters : " + area);
    let areaInAcres = area * 0.000247105;
    console.log("Area in acres of 25 plots : " + areaInAcres*25);
}
