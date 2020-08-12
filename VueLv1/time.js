let i = 0;
//setTimeout
console.log(`start`);
setTimeout( function(){
    console.log(`hi hi`);
},1000);
console.log(`done`);

//setInterval
console.log(`start interval`);
let intervalTime = setInterval( function(){
    console.log(`${++i}. hello!`);
    if( i === 10 )
        clearInterval(intervalTime);
},500);

