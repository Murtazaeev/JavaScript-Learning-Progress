// // // // // //string 
// // // // // console.log('hello, world');

// // // // // let email = 'temur.murtazaeveurop@gmail.com';
// // // // // console.log(email);


// // // // // //string concatenation
// // // // // let firstName = 'Temur';
// // // // // let lastName = 'Murtazaev';
// // // // // let fullName = firstName + ' ' + lastName;
// // // // // console.log(fullName);

// // // // // //getting characters

// // // // // console.log(fullName[0]);

// // // // // //string length

// // // // // console.log(fullName.length);

// // // // // //string methods

// // // // // console.log(fullName.toUpperCase());
// // // // // let result = fullName.toLowerCase();
// // // // // console.log(result, fullName);


// // // // // let index = email.indexOf('@');
// // // // // console.log(index);

// // // // //let email = 'temur.murtazaeveurope@gmail.com';
 
// // // // //let result = email.lastIndexOf('a');

// // // // //let result = email.slice(4,20);

// // // // //let result = email.substr(4,20);
// // // // //let result = email.replace('m', 'w'); 
// // // // //let result = email.replace('t', 'w'); 
// // // // //console.log(result); 

// // // // // let radious = 10;
// // // // // let pi = 3.14

// // // // //console.log(radious, pi);
// // // // //math operator +, -, /, *, **, %
// // // // // console.log(10/2);
// // // // //let result = radious % 3;

// // // // //let result = pi * radious**2;4
// // // // //order of operation - B I D M A S
// // // // //let result = 5 * (10-3)
// // // // //console.log(result);

// // // // // let likes = 10;
// // // // //likes = likes + 1;
// // // // // likes++;
// // // // // likes --;
// // // // //likes += 8;
// // // // //likes -= 8;
// // // // // likes *= 8;
// // // // // likes /= 8;
// // // // // likes **= 8;
// // // // // console.log(likes);

// // // // //NaN - not a number
// // // // // console.log(5 / 'hello');
// // // // // console.log(5  'hello');
// // // // // let result = 'the block has '

// // // // //template strings

// // // // const title = 'Best reads of 2019';
// // // // const author = 'Mario';
// // // // const likes = 30;

// // // // //concatenation way

// // // // // let rersult = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// // // // // console.log(rersult);

// // // // //template string way
// // // // let result = `The blog called ${title} by ${author} has ${likes} likes`;
// // // // console.log(result);
// // // // //creating HTML templates

// // // // let html =  `
// // // //     <h2>${title}</h2>
// // // //     <p>Bt ${author}</p>
// // // //     <span>This blog has ${likes} likes</span>

// // // // `;
// // // // console.log(html);
// // // let ninjas = ['shaun', 'ryu', 'chun-li'];

// // // // ninjas[1] = 'ken';

// // // // console.log(ninjas[1]);

// // // // let ages = [20,25,30,35];
// // // // console.log(ages[2]);

// // // // let random = ['shaun', 'crystal', 20, 25];
// // // // console.log(random);

// // // //console.log(ninjas.length);

// // // //ARRAY METHODS

// // // //let result = ninjas.join('_');

// // // //let result = ninjas.indexOf('chun-li');
// // // //let result = ninjas.concat(['ken', 'crystal']);
// // // let result = ninjas.push('ken');
// // // result = ninjas.pop();

// // // console.log(ninjas);

// // let age = null;
// // console.log(age, age + 3, `age is ${age}`);

// //boolean & comparisons
// console.log(true, false, "true", "false");

// //methods can return booleans
// let email = 'temur.murtazaeveurope@gmail.com';
// let names = ['mario', 'luigi', 'toad'];

// //let result = email.includes('!');
// //let result = names.includes('luigi');
// //console.log(result);

// //COMPARISON OPERATORS

// let age= 25;

// // console.log(age == 25);
// // console.log(age == 30);
// // console.log(age != 30);
// // console.log(age > 20);
// // console.log(age < 25);
// // console.log(age <= 25);
// // console.log(age >= 25);

// let name = 'Temur';

// console.log(name == 'Temur');
// console.log(name == 'temur');
// console.log(name < 'crystal');
// console.log(name < 'temur');
// console.log(name < 'Crystal');
// let age = 25;

// //loose comparison (different types can still be equal)

// // console.log(age == 25);
// // console.log(age == '25'); 

// // console.log(age != 25);
// // console.log(age != '25'); 

// //strict comparison (different types cannot be equal)

// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25'); 


///type conversion      
// let score = '100';

// // //score = Number(score);
// // console.log(score + 1);

// // console.log(typeof score);
// // let result = Number('hello');
// // let result = String(50);
// //let result = Boolean(100);
// let result = Boolean('0');
// console.log(result, typeof result);


//FOR loop

// for(let i = 0; i < 5; i++){
//     console.log('int loop:', i);
// }

// const names = ['Temur', 'Bobur', 'Gayrat'];

// for(let i = 0; i < names.length; i++){
//     //console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html); 
// }
//WHILE LOOPS
// const names = ['Temur', 'Bobur', 'Gayrat'];
// // let i = 0; 
// // while(i < 5){
// //     console.log('in loop:', i); 
// //     i++;
// // }
// let i = 0;
// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

//DO WHILE LOOPS

// let i = ;
// do{
//     console.log('val of i is:', i);
//     i++;
// }
// while(i < 5);

//IF STATEMENTS
// const age = 25;
// if(age > 20){
//     console.log('You are over 20 years old');
// }

// const ninjas = ['Temur', 'Bobur', "G'ayrat"];

// if(ninjas.length > 2){
//     console.log("that's a lot of ninjas");
// }
//ELSE IF STATEMENTS & LOGICAL OPERATORS: OR || and AND &&
// const password = 'p@ss';
// if(password.length >= 12 && password.includes('@')){
//     console.log('this password is might strong');
// } else if(password.length >= 8 || password.includes('@') && password.length > 5){
//     console.log("That password is strong enough!")
// } else{
//     console.log('Password is not strong enough!')
// }

//Logical NOT (!)

// let user = false;
// if(!user){
//     console.log('you must be logged in to continue');
// }

// console.log(true);
// console.log(!false);

//BREAK and CONTINUE

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++){

//     if(scores[i] === 0){
//         continue;
//     }
//     console.log('your score: ', scores[i]);

//     if(scores[i] === 100){
//         console.log('You got the top score!');
//         break;
//     }
// }

// //Switch statements
// const grade = 'P';

// switch(grade){
//     case 'A': 
//     console.log('You got an A!');
//     break;
//     case 'B': 
//     console.log('You got an B!');
//     break;
//     case 'C': 
//     console.log('You got an C!');
//     break;
//     case 'D': 
//     console.log('You got an D!');
//     break;
//     case 'E': 
//     console.log('You got an E!');
//     break;
//     default:
//         console.log('not a valid grade');    
// }

//VARIABLES & BLOCK SCOPE
// const age = 30;

// if(true){
//     const age = 40;
//     const name = 'Temur';
//     console.log('inside 1st code block: ', age, name);
//     if(true){
//         const age = 50;
//         console.log('inside 2nd code block: ', age);
//         var test = 'Hello';
//     }
// }
// console.log('outside code block: ', age, name, test);

// function declarations

// function greet(){
//     console.log('Hello There');
// }

// // function expression
// const speak = function(){  
//     console.log('Good day!');
// }
// greet();
// speak();