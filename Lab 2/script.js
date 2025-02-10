var kitty = {
    cute: true,
    hungry: 0.8,
    lives: 9,
    fur: {
        fluffy: true,
        colour: "red",
    },
    threats: null,
    meow: function (){ //a function contained as a key value pair of an object is called a method
        return "meow";
    }, // annonymous functions have no name
};

console.log(kitty.meow()); // ()function invocation operator

console.log(kitty2);
// variable name that is not declared gives a error
// a undeclared perameter of an object gives undefined

kitty.lives++;
console.log(kitty);

kitty.two = 'two'; // objects are changeable and mutable (you can add to them after they are created)
console.log(kitty);

// kitty.travel(); // error because you can't not invoke undefined as a function

console.log(kitty.future++); // results in a type number with a value NaN which is not a number

console.log(kitty.lives / kitty );

// null gets coerced to 0 when changing to type number

// . accessor of an object
kitty.fur.fluffy;

if(kitty.cute){
console.log('true?');
}else{
    console.log('false?');
}

for(key in kitty){ // generics
    console.log(key);
    kitty[key]; // alternate accessor for projects in javascript
    // kitty["meow" + count];
}

var x = {};
x.y = 12; // mutates object with assignment
x.z; // returns undefined
x.z() // throws an error by trying to invoke undefined as a function
x.z= function(){}; // method
x.z(); // invokes the z method and returns undefined unless modified