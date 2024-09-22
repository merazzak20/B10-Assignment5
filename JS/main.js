

// For Card 1

document.getElementById('noakhalButton').addEventListener('click', function(){
    const totalBalance = getInnerText('totalBalance');

    const amountNoakhali = getInputValue('noakhalAmounField');
    const previousAmoun = getInnerText('noakhaliDemoAmount');
    const newAmount = parseFloat(previousAmoun) + parseFloat(amountNoakhali);
    const newBalance = parseFloat(totalBalance) - parseFloat(amountNoakhali);
    console.log(2)
    document.getElementById('noakhaliDemoAmount').innerText = newAmount;
    document.getElementById('totalBalance').innerText = newBalance;
})