let num = [];

for(let i = 0; i <= 1000; i+=2) {
  num.push(i);
   console.log(i);
}

  let numTwo = [];

   for (let i = 0; i < num.length; i++){
    if (num [i] % 3 === 0) {
     numTwo.push(num [i] ** 2);
     
  }
} 

console.log(numTwo);

let index = 10; 

for (let i = 0; i < numTwo.length; i++) {
  if (numTwo[i] === 324) {
    index = i;
  }
}

console.log(index);

index = 3;

console.log(index);



const methods = [3,6,9,];

methods.push(12);  

a = methods.pop(1);

methods.unshift(10);

b = methods.shift(12);

console.log(methods,a,b);