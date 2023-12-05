// variable array single type data
let userNames: Array<string | number | [] | {}>;

userNames = [
  "seyam",
  "rasel",
  {
    name: "seyam",
    age: 20,
    subject: ["Bangla", "English", "Math", "Since"],
  },
  "mahi",
  33,
  55,
  "akbor",
  [],
];

userNames.sort(); // first sort of array
userNames.reverse(); // second reverse of array

console.log(userNames);

// multiply type array data
let student: (string | number)[];

student = ["seyam", 22];

console.log(student[0], student[1]);
