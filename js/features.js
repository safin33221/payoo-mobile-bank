document.getElementById('display-cashout').addEventListener('click',function(){
    document.getElementById('cash-out-form').classList.remove('hidden')
    document.getElementById('add-money-form').classList.add('hidden')
})

document.getElementById('display-cashin').addEventListener('click',function(){
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('add-money-form').classList.remove('hidden')
})