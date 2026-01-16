let btn = document.getElementById('button')

let Balance = 500
btn.addEventListener('click', function() {
    let Name = document.getElementById('Name').value  
    let age = document.getElementById('age').value

    if (!Name || !age) {
        alert ("Please enter a valid name and age")
    } else {
        let Namel = document.getElementById('Namel')
        Namel.innerText = Name
        let agel = document.getElementById('agel')
        agel.innerText = age
        let balancel = document.getElementById('balancel')
        balancel.innerText = Balance
        let Store = document.getElementsByClassName('store')
        Store[0].style.display='block'
        let button = document.getElementsByClassName('button-container')
        button[0].style.display='none'
    }

    
})

let buy=document.getElementsByClassName('buy')

buy[0].addEventListener('click', function() {
    if (Balance >= 200){
        Balance -= 200
        let balancel = document.getElementById ('balancel')
        balancel.innerText = Balance
        Purchase()
        
    } else{
        alert('You do not have enough balance')
    }
    
})


buy[1].addEventListener('click', function() {
    if (Balance >= 200){
        Balance -= 200
        let balancel = document.getElementById ('balancel')
        balancel.innerText = Balance
    } else{
        alert('You do not have enough balance')
    }
    
})



buy[2].addEventListener('click', function() {
    if (Balance >= 200){
        Balance -= 200
        let balancel = document.getElementById ('balancel')
        balancel.innerText = Balance
    } else{
        alert('You do not have enough balance')
    }
    
})



buy[3].addEventListener('click', function() {
    if (Balance >= 200){
        Balance -= 200
        let balancel = document.getElementById ('balancel')
        balancel.innerText = Balance
    } else{
        alert('You do not have enough balance')
    }
    
})


buy[4].addEventListener('click', function() {
    if (Balance >= 200){
        Balance -= 200
        let balancel = document.getElementById ('balancel')
        balancel.innerText = Balance
    } else{
        alert('You do not have enough balance')
    }
    
})


buy[5].addEventListener('click', function() {
    if (Balance >= 200){
        Balance -= 200
        let balancel = document.getElementById ('balancel')
        balancel.innerText = Balance
    } else{
        alert('You do not have enough balance')
    }
    
})



function Purchase() {
    purchase = document.getElementsByClassName('purchase')
    purchase[0].style.display='block'
    setTimeout(() => {
        purchase[0].style.display='none'
    }, 3000)
}


// console.log(Name, age, balance)

// if (Name == "em") {
//     console.log('You are allowed')
// } else if (Name == "carl") {
//     console.log('You are not allowed')
// } else {
//     console.log('You may wait')
// }


