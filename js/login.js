// set event handaler

document.getElementById('login-btn').addEventListener('click',function(event){
    // prevent reloding browser
    event.preventDefault();
    console.log('bnt clicked');
    // get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    
    console.log(phoneNumber,pinNumber);
    if(phoneNumber === '018' & pinNumber === "1234"){
        console.log('Your are logind');
        window.location.href = '/home.html'
    }
    else{
        alert('wrong phone number or pin')
    }
})