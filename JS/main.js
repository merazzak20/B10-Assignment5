

// Sticky Navbar
window.addEventListener('scroll', function(){

    if(window.scrollY >= 80){
        tag('header').classList.add('sticky');
        tag('headerButtons').classList.remove('bg-white');
        tag('headerButtons').classList.remove('pt-16');
    }
    else{
        tag('header').classList.remove('sticky');
        tag('headerButtons').classList.add('bg-white');
        tag('headerButtons').classList.add('pt-16');
    }
})

// For Card 1
document.getElementById('noakhaliButton').addEventListener('click', function(){
    const totalBalance = getInnerText('totalBalance');
    const amountNoakhali = getInputValue('noakhaliAmounField');
    const previousAmount = getInnerText('noakhaliDemoAmount');
    const newAmount = previousAmount + amountNoakhali;
    const newBalance = totalBalance - amountNoakhali;
    tag('noakhaliDemoAmount').innerText = newAmount;
    tag('totalBalance').innerText = newBalance;
})

// For Card 2
document.getElementById('feniButton').addEventListener('click', function(){
    const totalBalance = getInnerText('totalBalance');
    const amountFeni = getInputValue('feniAmounField');
    const previousAmount = getInnerText('feniDemoAmount');
    const newAmount = previousAmount + amountFeni;
    const newBalance = totalBalance - amountFeni;
    tag('feniDemoAmount').innerText = newAmount;
    tag('totalBalance').innerText = newBalance;
})

// For Card 3
document.getElementById('quotaButton').addEventListener('click', function(){
    const totalBalance = getInnerText('totalBalance');
    const amountQuota = getInputValue('quotaAmounField');
    const previousAmount = getInnerText('quotaDemoAmount');
    const newAmount = previousAmount + amountQuota;
    const newBalance = totalBalance - amountQuota;
    tag('quotaDemoAmount').innerText = newAmount;
    tag('totalBalance').innerText = newBalance;
})