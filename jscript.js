









//(2) arrow func

function showText(text) {
    console.log(text);
}

showText("JavaScript Text");


//Examp 2

const showTheText2 = (text) => {
    console.log(text);
}

showTheText2("normal text");

const showTheText3 = () => {
    console.log("normal text");
}

showTheText3();

// 4

const showResult = (number) => {
    return number * 2;
}

console.log(showResult(2));


// 4

const showResult2 = number => number * 9;

console.log(showResult2(2));


//// spread operator

/// array example


const nub1 = [5, 4, 3, 2];

console.log(nub1);

const num2 = [...nub1, 3, 4, 5];

console.log(num2);

//object example

const user1 = {
    fName: "Jahid",
    Lname : "Hossain",
};

// const user3 = {
//     ...user1,
//     age: 40,
// };

// console.log(user2);

//

// const getNumbers = (...number) => {

//     console.log(number[1])
//  };

// getNumbers(32, 33, 23);

// destructureing

const num1 = [1, 2, 3];

const [n1, n2, n3] = num1;

console.log(n1);



const user2 = {
    fName: "Anayzha",
    LName : "bitu Jahid",
    age : 1,
};

const { age, fName, LName } = user2;

console.log(age);



