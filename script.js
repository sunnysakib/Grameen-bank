
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
   const submit = document.getElementById('login-box');
   submit.style.display ='none';
   const transactionArea = document.getElementById('transaction-area');
   transactionArea.style.display = 'block';
})


    const depositBtn = document.getElementById('addDeposit');
    depositBtn.addEventListener('click', function(){
    // const depositAmount = document.getElementById("depositAmount").value;
    // const depositNumber = parseFloat(depositAmount);
     const depositNumber = getInputNumber('depositAmount');

     updateCurrency('currentDeposit', depositNumber);
     updateCurrency('currentBalance', depositNumber);
    
     document.getElementById("depositAmount").value = '';
      
 })

    const withdrawBtn = document.getElementById('addWithdraw');
    withdrawBtn.addEventListener('click', function() {
        // const withdrawAmount = document.getElementById('withdrawAmount').value;
        // const withdrawNumber = parseFloat(withdrawAmount);
        const withdrawAmount = getInputNumber('withdrawAmount');
        updateCurrency('currentWithdraw', withdrawAmount);
        updateCurrency('currentBalance', -1*withdrawAmount);
        
        document.getElementById("depositAmount").value = '';
    })

    function getInputNumber(id) {
        const inputAmount = document.getElementById(id).value;
        const inputNumber = parseFloat(inputAmount);
        return inputNumber;
    }

 function updateCurrency(id, addedNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalCurrency = addedNumber + currentNumber;
    document.getElementById(id).innerText = totalCurrency;
 }

    //  const currentDeposit = document.getElementById('currentDeposit').innerText;
    //  const currentDepositNumber = parseFloat(currentDeposit);
    //  const totalDeposit = depositNumber + currentDepositNumber; 
    //  document.getElementById('currentDeposit').innerText = totalDeposit;


    // const currentWithdraw = document.getElementById('currentWithdraw').innerText;
    //     const currentWithdrawNumber = parseFloat(currentWithdraw);
    //     const totalWithdraw = withdrawNumber + currentWithdrawNumber;
    //     document.getElementById('currentWithdraw').innerText = totalWithdraw;