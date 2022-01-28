let tipPercentage = document.querySelectorAll(".button-percent-formatter")
const bill = document.querySelector(".bill")
const reset = document.querySelector(".reset-button")
const inputField = [
    document.querySelector('.people'),
    document.querySelector('.bill'),
    document.querySelector('.custom-percent')
]
const people = document.querySelector('.people')
let clickedBtnValue
let billValue
let noOfPerson
let customPercent
const customTipPercent = document.querySelector(".custom-percent")
const tipAmountPerPerson = document.querySelector(".tip-amount-number")
const totalAmountPerPerson = document.querySelector(".total-number")


//bill
bill.addEventListener('input',() =>{
    reset.classList.add("reset-btn-mute")
    billValue = parseFloat(bill.value)
    if(bill.value === '0'){
        console.log("Nah bruhhh")
    }
})

// tip percentage button active
tipPercentage.forEach(item =>{
    item.addEventListener('click', () => {
        clickedBtnValue = item.value
        //adding button active to only the clicked button
         tipPercentage.forEach(button =>{
             if(button.value === clickedBtnValue){
                    button.classList.add("button-active");
                    tipCalculator(billValue,clickedBtnValue,noOfPerson)
             }
             else{
                 button.classList.remove("button-active");
             }
         })
    })
})

//tip custom percent
customTipPercent.addEventListener('input',()=>{
    if(customTipPercent === document.activeElement){
        btnInactive()
        customPercent = parseInt(customTipPercent.value)
        tipCalculator(billValue,customPercent,noOfPerson)
    }
})

// no of person
people.addEventListener('input',() =>{
   noOfPerson = people.value
       if(clickedBtnValue){
            tipCalculator(billValue,clickedBtnValue,noOfPerson)
       }
        else{
            if(isNaN(customTipPercent.value) ){
                return
           }
           else{  tipCalculator(billValue,customPercent,noOfPerson) }
        }   
})

//TIP CALCULATION FUNCTION
function tipCalculator(bill,tip,people){
    let sum 
    let tipPerPerson 
    let totalPerPerson 
  
    if(isNaN(people) || people === '' || people === 0) { 
        makeZero()
    return
}
    else{
        console.log(`tip bill : ${tip/100}`)
        sum = (bill + (bill*(tip/100)) )
        totalPerPerson = (sum/people).toFixed(2)
        tipPerPerson = ((bill*(tip/100))/people).toFixed(2);
        tipAmountPerPerson.textContent = `$${tipPerPerson}`
        totalAmountPerPerson.textContent = `$${totalPerPerson}`
    }    
}

// reset button handler
reset.addEventListener('click',()=>{
    reset.classList.remove("reset-btn-mute")
    //making tip percentage button inactive
    btnInactive()
    
    inputField.forEach((element)=>{
        element.value = ''
    })

    makeZero()

})

//makeZero function
const makeZero = () =>{
    tipAmountPerPerson.textContent = `$0.00`
    totalAmountPerPerson.textContent = `$0.00`
}

//make button inactive

const btnInactive = () => {
    tipPercentage.forEach(item =>{
        item.classList.remove("button-active")
    })
}

