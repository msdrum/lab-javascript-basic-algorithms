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

function changeName(name1, name2) {
  const driver = name1;
  const navigator = name2;
  let newDriver = "";
  let newNavigator = "";

  for (let i = 0; i < driver.length; i++) {
    newDriver += driver[i].toUpperCase() + " ";
  }
  console.log(newDriver);

  for (let i = navigator.length - 1; i >= 0; i--) {
    newNavigator += navigator[i];
  }
  console.log(newNavigator);
}
changeName(hacker1, hacker2);

// Iteration 3.1

function orderName(name1, name2) {
  let driverFirstLetter = name1.substr(0, 1);
  let navigatorFirstLetter = name2.substr(0, 1);

  if (driverFirstLetter < navigatorFirstLetter) {
    console.log("The driver's name goes first");
  } else if (navigatorFirstLetter < driverFirstLetter) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }
}
orderName(hacker1, hacker2);
