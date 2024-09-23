

// Sticky Navbar
window.addEventListener('scroll', function(){

    if(window.scrollY >= 80){
        tag('header').classList.add('sticky');
        tag('headerButtons').classList.remove('bg-white');
        tag('headerButtons').classList.remove('pt-12');
    }
    else{
        tag('header').classList.remove('sticky');
        tag('headerButtons').classList.add('bg-white');
        tag('headerButtons').classList.add('pt-12');
    }
})


// Blogs
document.getElementById('btnBlogs').addEventListener('click',function(){
    window.location.href ='https://merazzak20.github.io/B10-Assignment5/blog.html';
})

// tag('btnHome').addEventListener('click',function(){
//     window.location.href ='./index.html';
// })


// Donation Button & History Button
document.getElementById('btnHistory').addEventListener('click',function(){  
    tag('btnHistory').classList.add('bg-primaryColor');
    tag('btnHistory').classList.remove('btn-outline');
    tag('btnDonation').classList.remove('bg-primaryColor');
    tag('btnDonation').classList.add('btn-outline');
    tag('cards').classList.add('hidden');
    tag('historyContainer').classList.remove('hidden');

})
document.getElementById('btnDonation').addEventListener('click',function(){
    tag('btnHistory').classList.remove('bg-primaryColor');
    tag('btnHistory').classList.add('btn-outline');
    tag('btnDonation').classList.add('bg-primaryColor');
    tag('btnDonation').classList.remove('btn-outline');
    tag('cards').classList.remove('hidden');
    tag('historyContainer').classList.add('hidden');

})

// For Card 1
document.getElementById('noakhaliButton').addEventListener('click', function(){
    const totalBalance = getInnerText('totalBalance');
    const amountNoakhali = getInputValue('noakhaliAmounField');
    const previousAmount = getInnerText('noakhaliDemoAmount');
    if(isNaN(amountNoakhali) || amountNoakhali <= 0 || amountNoakhali > totalBalance){
        alert('Invalid Transaction.');
        return;
    }
    const newAmount = previousAmount + amountNoakhali;
    const newBalance = totalBalance - amountNoakhali;
    tag('noakhaliDemoAmount').innerText = newAmount;
    tag('totalBalance').innerText = newBalance;

    tag('modal').classList.add('modal-box-open');
    tag('btnModal').addEventListener('click', function(){
        tag('modal').classList.remove('modal-box-open');
    })

    // history
    const campaignTitle1 = tag('campaignTitle1');
    const divHistory = document.createElement('div');
    divHistory.className = 'bg-base-100 border border-gray-200 rounded-lg px-6 py-4';
    divHistory.innerHTML = `
    <h4 class"text-base font-bold">${amountNoakhali} Taka is Donate for ${campaignTitle1.innerText}</h4>
        <p>${new Date().toLocaleString()}</p>
    `
    tag('historyContainer').insertBefore(divHistory,  historyContainer.firstChild);
})

// For Card 2
document.getElementById('feniButton').addEventListener('click', function(){
    const totalBalance = getInnerText('totalBalance');
    const amountFeni = getInputValue('feniAmounField');
    const previousAmount = getInnerText('feniDemoAmount');
    if(isNaN(amountFeni) || amountFeni <= 0 || amountFeni > totalBalance){
        alert('Invalid Transaction.');
        return;
    }
    const newAmount = previousAmount + amountFeni;
    const newBalance = totalBalance - amountFeni;
    tag('feniDemoAmount').innerText = newAmount;
    tag('totalBalance').innerText = newBalance;

    tag('modal').classList.add('modal-box-open');
    tag('btnModal').addEventListener('click', function(){
        tag('modal').classList.remove('modal-box-open');
    })

    // history
    const campaignTitle2 = tag('campaignTitle2');
    const divHistory = document.createElement('div');
    divHistory.className = 'bg-base-100 border border-gray-200rounded-lg px-6 py-4';
    divHistory.innerHTML = `
        <h4 class"text-base font-bold">${amountFeni} Taka isDonate for ${campaignTitle2.innerText}</h4>
        <p>${new Date().toLocaleString()}</p>
    `
    tag('historyContainer').insertBefore(divHistory,historyContainer.firstChild);
})

// For Card 3
document.getElementById('quotaButton').addEventListener('click', function(){
    const totalBalance = getInnerText('totalBalance');
    const amountQuota = getInputValue('quotaAmounField');
    const previousAmount = getInnerText('quotaDemoAmount');
    if(isNaN(amountQuota) || amountQuota <= 0 || amountQuota > totalBalance){
        alert('Invalid Transaction.');
        return;
    }
    const newAmount = previousAmount + amountQuota;
    const newBalance = totalBalance - amountQuota;
    tag('quotaDemoAmount').innerText = newAmount;
    tag('totalBalance').innerText = newBalance;

    tag('modal').classList.add('modal-box-open');
    tag('btnModal').addEventListener('click', function(){
        tag('modal').classList.remove('modal-box-open');
    })

    // history
    const campaignTitle3 = tag('campaignTitle3');
    const divHistory = document.createElement('div');
    divHistory.className = 'bg-base-100 border border-gray-200 rounded-lg px-6 py-4';
    divHistory.innerHTML = `
        <h4 class"text-base font-bold">${amountQuota} Taka is Donate for ${campaignTitle3.innerText}</h4>
        <p>${new Date().toLocaleString()}</p>
    `
    tag('historyContainer').insertBefore(divHistory,historyContainer.firstChild);
})


