// Iteration 1: Names and Input

const hacker1 = prompt("Type the driver's name: ");
const hacker2 = prompt("Type the navigator's name: ");

function name(name1, name2) {
  console.log(`The driver's name is ${name1}.`);
  console.log(`The driver's name is ${name2}.`);
}

name(hacker1, hacker2);

// Iteration 2: Conditionals

function longestName(name1, name2) {
  let counter = 0;
  let counter2 = 0;

  for (let i = 0; i < name1.length; i++) {
    counter += 1;
    //console.log(counter);
  }
  for (let j = 0; j < name2.length; j++) {
    counter2 += 1;
    //console.log(counter2);
  }
  if (counter > counter2) {
    console.log(
      `The driver has the longest name, it has ${counter} characters.`
    );
  } else if (counter2 > counter) {
    console.log(
      `It seems that the navigator has the longest name, it has ${counter2} characters.`
    );
  } else {
    console.log(
      `Wow, you both have equally long names, ${counter} characters!`
    );
  }
}

longestName(hacker1, hacker2);

// Iteration 3: Loops
