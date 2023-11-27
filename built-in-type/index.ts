// built-in data type: number,string,bollean,void,undefined,null

let userId: number;
let firstName: string;
let lastName: string;
let age: number;
let fullName: string;
let classActive: boolean;

userId = 787834473493;
firstName = "Jubaeair Hossen";
lastName = "Seyam";
age = 20;
classActive = true;

fullName = firstName.concat(lastName);

console.log(
  `My name is ${fullName}, I'm ${age} years old. My student id ${userId}. I'm class in regular :${classActive}`
);
