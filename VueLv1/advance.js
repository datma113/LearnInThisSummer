//bind

let obj = {
    name: "datma",
    print: function(){
        console.log(`Hi ${this.name}`);
    }
}

obj.print();
let testBind = obj.print;
testBind.bind(obj)();


//argument 

function sumArg(){
    let total = 0;
    for( let i = 0; i < arguments.length; i++)
       total += arguments[i];
    console.log(total);
}
sumArg(1, 3, 5, 7, 9);

function sumArray(){
    const arr = Array.from(arguments);
    console.log( arr.reduce((x, y) =>  x + y, 0 ) );
}
sumArray(1, 3, 5, 7, 9, 10);

// default parameters

function sayHi(name = "User"){
    console.log(name);
}
//test default parameters
sayHi();
sayHi("DatMaXM");
// the different between bind, call and apply
// bind will return a function. if using bind, when revoke a function will have () in the end. 
// call is the first parameter that is assigned value be an object. after the first parameter is more parameters
// apply  is the first parameter that is assigned value be an object. after the first parameter is 1 Array or Array like object

//rest

function concat(char, ...rest){
    return rest.join(char);
}
console.log(concat("***","dat","ma","xm"));


