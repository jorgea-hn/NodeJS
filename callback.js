const sayHello = () => console.log("Hello wordl!!")
// setTimeout(sayHello,2000);


const calculate = (arg1,arg2,operation) => {
    console.log('calculando...')
    return  console.log(operation(arg1,arg2));
}

const sum = (num1,num2)=> num1 + num2;
const multiply = (num1,num2)=> num1*num2

calculate(5,2,sum);
calculate(5,2,multiply);