const $ = (id) => document.getElementById(id);

// VARIABLES

let btnOwnerName = $('ownerName');
let btnDeposit = $('deposit');
let btnWithdrawal = $('withdrawal');
let divDisplayInfo = $('displayInfo');

let balance = 0;
let owner;

function bankAccount (ownerName) {
    // LOCAL MEMBERS
        owner = ownerName;

        let numRegex = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;
    
    // PUBLIC MEMBERS
    return  {
        withdrawalAmount: function(amount) {
            if(numRegex.test(amount)){
                if(balance >= amount) {
                    balance -= Number(amount);
                    this.getBalance(balance);
                }else {
                    alert('Error - you do not have sufficient funds to withdraw this amount')
                    this.getBalance();
                }
            }else {
                alert('Please, enter a valid number');
            }
        },
        depositAmount: function(amount) {
            // let amount = prompt('How much do you want to deposit?')
            console.log('test: ', );
            if(numRegex.test(amount)){
                balance += Number(amount);
                this.getBalance();
            } else {
                alert('Please, enter a valid number');
            }
            
            // console.log('balanc')
        },
        getBalance: function() {
            console.log('balance: ', balance);
            if(owner){
                divDisplayInfo.innerHTML = `Welcome ${owner} <br>Your balance is: ${balance}`
                return  balance;
            }
        },
        getOwnerName: function() {
            // owner = prompt('Your name: ');
            console.log('name: ', owner);
            if(owner){
                return owner;
            }
        }
    }
};

btnOwnerName.addEventListener('click', function() {
    owner = prompt('Your name: ');
    bankAccount(owner).getOwnerName();
});

btnDeposit.addEventListener('click', function() {
    let amount = prompt('How much do you want to deposit?')
    bankAccount(owner).depositAmount(amount);
    // bankAccount('Alex').depositAmount(amount);
});

btnWithdrawal.addEventListener('click', function() {
    let amount = prompt('How much do you want to withdraw?')
    bankAccount(owner).withdrawalAmount(amount);
});


// console.log(bankAccount(owner).getBalance());