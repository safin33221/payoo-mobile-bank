document.getElementById('Cash-out-btn').addEventListener('click',function(event){
    event.preventDefault();

    const cashOut = document.getElementById('input-cash-out').value;
    console.log(cashOut);

    const pinNumber = document.getElementById('cashout-pin-number').value;
    console.log(pinNumber);

    if(pinNumber === "1234"){
        const balanced = document.getElementById('accoutn-balancd').innerText;
        const balancedNumber = parseFloat(balanced);
        const cashOutNum = parseFloat(cashOut);

        const newBalance = balancedNumber - cashOutNum;
        document.getElementById('accoutn-balancd').innerText = newBalance;
        
    }else{
        alert('worng pin')
    }
    

})