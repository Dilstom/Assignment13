// class ClassCar {
//     constructor(mileage) {
//       this.mileage = mileage; //this is public
//       var privateMember = mileage;//this is private
//       this.getPrivateMember = function() { return this.privateMember; }
//       this.setPrivateMember = function(v) { this.privateMember = v; }
//     }
//     drive() {
//       this.mileage ++;
//       console.log('Drive!' +this.mileage);
//       console.log('privateMember? '+this.privateMember); //undefined
//     }
//    }
//    const car1 = new ClassCar(100);
//    console.log('privateMember: '+car1.privateMember);//undefined
//    car1.getPrivateMember();
//    car1.drive();
//    car1.drive();
//    car1.drive();
//    car1.drive();
//    car1;

   const $ = (id) => document.getElementById(id);

// VARIABLES

let btnOwnerName = $('ownerName');
let btnDeposit = $('deposit');
let btnWithdrawal = $('withdrawal');
let divDisplayInfo = $('displayInfo');

let name;

function BankAccount (ownerName) {
    // PRIVATE MEMBERS
    this._balance = 0;
    this.owner = ownerName;
    
    console.log('balance outside: ', this._balance)
    // PUBLIC MEMBERS
    return  {
        withdrawalAmount: function(amount) {
            if(this._balance > amount) {
                this._balance -= Number(amount);
                this.getBalance(this._balance);
            } else {
                alert('Sorry you do not have sufficient funds to withdraw this amount')
                this.getBalance(balance);
            }
        },
        depositAmount: function(amount) {
            this.balance += Number(amount);
            this.getBalance(this.balance);
        },
        getBalance: function() {
            console.log('balance: ', this._balance)
            return  this._balance;
        },
        getOwnerName: function() {
            owner = prompt('Your name: ');
            console.log('name: ', owner);
        }
    }
    
};

const newAccount = new BankAccount('Alex');

btnOwnerName.addEventListener('click', function() {
    newAccount.getOwnerName();
});

btnDeposit.addEventListener('click', function() {
    let amount = prompt('How much do you want to deposit?')
    newAccount.depositAmount(amount);
});

btnWithdrawal.addEventListener('click', function() {
    let amount = prompt('How much do you want to withdraw?')
    newAccount.withdrawalAmount(amount);
});


console.log(newAccount.getBalance());
console.log(newAccount);