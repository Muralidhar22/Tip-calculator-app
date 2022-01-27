const tipPercentage = document.querySelectorAll(".button-percent-formatter")
const bill = document.querySelector(".bill")
const reset = document.querySelector(".reset-button")

bill.addEventListener('input',() =>{
    console.log(bill.value)
    if(bill.value === '0'){
        console.log("0 bruhhh")
       
    }
})

reset.addEventListener('click',()=>{
    reset.classList.remove("reset-btn-mute")
})