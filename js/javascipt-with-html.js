//alert

    alert("Hello!");

//Confirm gives two options
//function returns a boolean(Ok:True, Cancel:False)

  let userChoice = confirm("Are you sure you don't want to buy stuff?");
    if (userChoice) {
        alert("Yay!");
    }else {
        alert("Booo! :(");
}

  console.log(userChoice);

//Prompt
  let name = prompt("What's your name?");
  console.log(name);
