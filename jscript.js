// var heading = document.getElementsByClassName("heading");

// var change = heading[1];

// change.innerText = "jahid hossain"

// console.log(heading[0].innerText);





// heading[0].innerText ="change";

// // console.log(heading[0]);

// var inputBox = document.getElementById("inputBox");

// // console.log(inputBox);

// var headings = document.querySelectorAll(".heading");

// // console.log(headings[1]);

// var input = document.querySelector("#inputBox");

// console.log(input.value);

// function onclick(){
//   var h1 = document.getElementById('p');

//   h1.style.color = 'red';
// }

// function test(){
//   alert('bismillah');
// }

// var btn1= document.getElementById('btn');

// btn1.addEventListener( 'click', function(){
//     alert('hello');
// });
// var btn = document.getElementById('btn');
// btn.addEventListener('click', function(){

//   var inputBox = document.getElementById('inputBox');

//   var h2 = document.getElementById('h2');

//   var inputValue = inputBox.value;
//   h2.innerText = inputValue

// })

// var Fname = "jahid";
// var lastName = "karim"

// console.log(`hellow i am jahid ${Fname} ${lastName}`);

// let i = 10;

// for ( let i = 0; i < 10; i++){

//     console.log(i);

// }
// console.log(` i = ${i}`);

// var form  = document.getElementById('form');

// form.addEventListener('submit', function(event){
//   event.preventDefault();

//   var fName = event.target.fName.value;
//   var lName = event.target.lName.value;
//   var email = event.target.email.value;
//   var password = event.target.passWord.value;
//   var countrty = event.target.countrty.value;
//   var address = event.target.address.value;


//   var info ={

//     fName : fName,
//     lName : lName,
//     email : email,
//     passWord : password,
//     city : countrty,
//     address: address
// }

// console.log(info);

// })

// var date = new Date();

// console.log(date.getUTCMilliseconds());

// console.log(date.getHours());

// console.log(date.toString());

// var seconds = document.getElementById('seconds');

// var minutes = document.getElementById('minutes');

// var hours = document.getElementById('hours');

 
// setInterval(function(){

//   var date = new Date();

//   var s = date.getSeconds();
//   var m = date.getMinutes();
//   var h = date.getHours();

//   seconds.innerText = s;
//   minutes.innerText = m;
//   hours.innerText = h


// }, 1000);

// var name = "jahid";

// var roll = 20;
  
// var output = `

//   My name is ${name}
//   my roll is ${roll}

// `

// console.log(output);


// var url = "https://www.youtube.com/watch?v=72EFpaHN30c&list=PLi0Z6fJg6wRjKyowxwufUFtBn5wVgIgwu&index=30";

// var title = "Simple products";

// var des = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus numquam, molestias beatae praesentium enim hic earum sit? Esse provident minus eaque, in eos fugit eligendi nostrum facere, dolores deleniti perferendis?"


// var product = `

//     <div class="product">

//         <img src ="${url}" />;

//         <h2>${title} </h2

//         <p>${des}</p>

//     </div>

// `

// document.getElementById('root').innerHTML = product;


// function product(info){

//   var htmlCode = `
  
//   <div class="product">

//     <img src="${info.productURL}" alt="">

//     <h3>${info.title}</h3>

//     <p>${info.productInfo}</p>

//     <a href="${info.des}"><button>Add new products</button></a>

//   </div>
  
//   `;

//   return htmlCode;
// }

// var form = document.getElementById('form');

// form.addEventListener('submit', function(e){
//     e.preventDefault();

    
//     var title = e.target.title.value;
//     var productURL = e.target.productURL.value;
//     var prodecURL = e.target.prodecURL.value;
//     var des = e.target.des.value;


//     var productInfo ={

//       title,
//       productURL,
//       prodecURL,
//       des

//     }

//     var code = product(productInfo);

//     var root = document.getElementById('root');

//     root.innerHTML += code;


// })

// let poorCountry = ['bangladesh', 'sirilanka'];

// let richCountry = [...poorCountry, 'Itali', 'china'];

// console.log(richCountry);


// let poorCountry = ['bangladesh', 'sirilanka'];

// let richCountry = [ 'Itali', 'china'];

// richCountry.push(poorCountry);

// console.log(richCountry);

// rest operator

// function cal(...number){

//     let sum = 0;

//     for( let i of number){
        
//         sum = sum+i;
//     }
//     console.log(sum);
// }

// cal(1,2,3,4,5,6);

// dynamic function

// var name = function (namevalue){

//     return namevalue;
// }

// console.log (name("Rabbil Hasan"));
//sample array

// var i ;

// for ( i = 0; i <=100; i++){

//     console.log();
// }


// var myCountry = ['dhka', 'rangpur', 'khulna', 'student'];

// for (let mycity of myCountry){

//     console.log('mycity');

// }


// var bismillah ={

//     shirt :{
//         color : 'offwite',
//         quality : 'Good',
//         pirce : '200es'
//     },

//     swatter: {
//         color: 'gray',
//         pircei: '2030us',
//         wiarm: 'best'
//     }

// }

// console.log(bismillah['shirt']['color']);



// var bismillah = { color: 'gray', pircei: '2030us', wiarm: 'best'};

// for ( let porps in bismillah){

//     console.log(bismillah[porps]);
// }

// function something(...e){

//     console.log(e[3]);

// }

// something(1,2,3,'a');

// var myArrow = () => {
    
// }

// var myArrow = ['dhka', 'rangpur', 'khulna', 'student'];

// for (let items in myArrow){

//     console.log(items);

// }

// var bangladesh = ["kahakd", "ranpur", "ctg"];

// var india = ["mumbi", "chennai", "kolkata"];

// var asia = [bangladesh, india];

// console.log(asia);

//  var bangladesh = ["kahakd", "ranpur", "ctg"];

//  var [a,,b] = bangladesh;

//  console.log(b);



//  var myMap = new Map();


//  myMap.set("key1", "Bangladesh");
//  myMap.set("key2", "india");
//  myMap.set("key3", "sirilanka");
//  myMap.set("key4", "bhutan");
//  myMap.set("key5", "Thailand");

//  myMap.delete("key1");
//  myMap.delete("key2");

//  myMap.clear();

//  for(let myvalue of myMap.keys()){
//     console.log(myvalue);
//  }

// var mySet = new Set();


// mySet.add("Bangladesh");

// mySet.add("india");

// mySet.add("Thailand");

// mySet.add("Bangladesh");


// console.log(mySet);




































// let life ="Beautiful";
// if(life === "Beautiful") alert("life is Beautiful ");


// let firstName = "Jahid";

// let lastName = "karim";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);









// let age = 20;

// console.log(age);

// let firstName = "Jahid";

// console.log();


//blooen

// let isSinger = true;
// console.log(isSinger);

// //undified
// let homeCity;
// console.log(homeCity);


// //null

// let income = null;
// console.log(income);


// console.log(typeof age);
// console.log(typeof homeCity);
// console.log(typeof income);



// homeCity = "dhaka";

// console.log(homeCity);

// console.log(isSinger);


// isSinger = "Bangladesh Singer";

// console.log(homeCity);

// console.log(isSinger);


// let firstName1 = "Karim";

// //let
// //var
// //const

// let myAge = 33;
// console.log(myAge);

// myAge = 35;
// console.log(myAge);


//const

// const brithYear = 1982;

// console.log(brithYear);


// //var

// // var job = "teacher";

// // console.log(job);


// // let profit = 32 - 40;

// // console.log(profit);

// // let currentAge = 2022;

// // let yAge = currentAge - 1998;

// // console.log(myAge);

// // let adritAge = currentAge - 2017;

// // console.log(yAge , adritAge);



// // let


// function sum() {

//     let num1 = 10;
//     let num2 = 20;
//     const total = num1 + num2;

//     return total;
     
// }

let item = 10 + 5;

console.log(item);

let x = 15;

x += 10;
console.log(x);


let y = 20;

y -= 15;

console.log(y);

let z = 5;

z *= 5;

console.log(z);









 
// console.log(sum());

// // console.log(num1);

// var old = "new";

// var old = "new";


// let age1 = 12;
// age = 23; // resign

//ডিফল প্যারমিটার

// function say(message ="Salam") {
    
//     console.log(message)
// };

// say("hellow bhi kemon aachen?");


// রেষ্ট প্যারিামিটার [ প্যারিামিটা আগে তিনটা ডট ব্যবহার করতে হয়]

// function rest (a, b, ...jahid){   // আরগুমেন্ট অনেক, প্যারামিটার কম দিলে
//     console.log(a, b, jahid);
// }

// rest(1, 2, 3, 3, 4, 4, 4, 5, 6, 6);



// স্প্রেড অপারেটর [ স্প্রেড অপারেটরের আগে তিনটা ডট ব্যবহার করতে হয়... ২টা  এ্যারে এক সাথে নিয়ে কাজ করতে স্প্রেড অপারেটরের ব্যবহার ]

// const arr1 = [1,2,3];
// const arr2 = [...arr1, 4, 5, 6];

// console.log(arr2);

































