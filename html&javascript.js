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
var btn = document.getElementById('btn');
btn.addEventListener('click', function(){

  var inputBox = document.getElementById('inputBox');

  var h2 = document.getElementById('h2');

  var inputValue = inputBox.value;
  h2.innerText = inputValue

})