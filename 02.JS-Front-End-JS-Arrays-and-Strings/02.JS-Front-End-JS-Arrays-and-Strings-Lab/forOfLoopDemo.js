let myArr = [10,20,30,40,50,60,70];


//Regular for-loop with indexation
for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);    
}

console.log('--------------------------------')

//For-of loop without indexation
for(element of myArr) {
    console.log(element);
}

console.log('--------------------------------')

//Foreach - 2 times slower than the above loops
myArr.forEach((element) => console.log(element));
