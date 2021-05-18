const $ = (id) => document.getElementById(id);

// VARIABLES

let btnOwnerName = $("ownerName");
let btnDeposit = $("deposit");
let btnWithdrawal = $("withdrawal");
let divDisplayInfo = $("displayInfo");

let bankAccount = function () {

  // LOCAL MEMBERS
  let balance = 0;
  let owner = "";

  // REGEX TEST
  let numRegex = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;

  return {
    getBalance: function () {
    //   console.log("balance: ", balance);
    //   console.log("owner: ", owner);
    //   console.log("this in get: ", this); // OBJECT
    //   console.log("self: ", self); // WINDOW
      if (owner) {
        divDisplayInfo.innerHTML = `Welcome ${owner} <br>Your balance is: ${balance}`;
      } else {
        divDisplayInfo.innerHTML = `Please, enter your name first`;
      }
    },
    withdrawalAmount: function () {
        var self = this;
        return function() { // TO USE 'THIS' 
            if (owner) {
              let amount = prompt("How much do you want to withdraw?");

              if (numRegex.test(amount)) {
                if (balance >= amount) {
                  balance -= Number(amount);
                  self.getBalance(balance);
                } else {
                  alert(
                    "Error - you do not have sufficient funds to withdraw this amount"
                  );
                  self.getBalance();
                }
              } else {
                alert("Please, enter a valid number");
              }
            } else {
              alert("Please, provide your name");
            }
        }
    },
    depositAmount: function () {
        let self = this;
        return function () { // THE ONLY WAY TO GET 'THIS' KEYWORD IS TO RETURN WHOLE FUNCTION
            if (owner) {
              let amount = prompt("How much do you want to deposit?");
            //   console.log("this: ", this); // BUTTON
            //   console.log("self: ", self); // OBJECT WITH METHODS
      
              if (numRegex.test(amount)) {
                balance += Number(amount);
                // console.log("balance deposit: ", balance);
                self.getBalance();
              } else {
                alert("Please, enter a valid number");
              }
            } else {
              alert("Please, provide your name");
            }
        }
    },
    getOwnerName: function () {
      owner = prompt("Your name: ");
      if (owner) {
        divDisplayInfo.innerHTML = `Welcome ${owner} <br>Your balance is: ${balance}`;
        return owner;
      }
    },
  };
};

let account1 = bankAccount(); // STORE THE FUNCTION TO ACCOUNT1 VARIABLE - NOW WE CAN PERSIST VARIABLES

btnOwnerName.onclick = account1.getOwnerName;

btnDeposit.onclick =  account1.depositAmount(); // SINCE WE RETURN THE FUNCTION USE ()

btnWithdrawal.addEventListener("click", account1.withdrawalAmount());
