// Promise: test 1
let aPromise = new Promise((resolve, reject) => {
    resolve(` resolve`);
  // reject(` reject`);
});

aPromise
.then(
  (msg) => {
    setTimeout( () => {
        console.log(`\n\nthis is msg from resolve: ${msg}`);
    },2000);
  },
  (err) => console.log(`this is msg from reject: ${err}`)
);


// Promise: test 2

let sum = function() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            for(let i in arguments){
                if( typeof arguments[i] != `number` )
                    rej(`type err`);
            }
            let rs = 0;
            for(let i =0; i < arguments.length; i++)
                rs +=arguments[i];
            res(rs);
        }, 1000);
       
    });
};

sum(4, 5, 7 ,8 ,12, "c")
.then( res => console.log(`sum is ${res}`))
.catch( err => console.log(`${err}: not a number!`));
