document.getElementById('add-money-btn').addEventListener('click', function (event) {
    //for previews page reload
    event.preventDefault()

    // add money to the account
    const addMoney = document.getElementById("add-money").value;

    // get pin number provided
    const inputPin = document.getElementById('pin-number').value;

    if (inputPin === '1234') {
        // setp 4
        const accoutnBalance = document.getElementById('accoutn-balancd').innerText;

        const balanceNumber = parseFloat(accoutnBalance);

        const addNumber = parseFloat(addMoney);

        const newBalance = balanceNumber + addNumber;
        // console.log(newBalance);

        document.getElementById('accoutn-balancd').innerText = newBalance;
    } else {
        alert('faild to add money! plese try again ')
    }


})
