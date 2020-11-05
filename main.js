//income

const incomeSalary = document.getElementById('income-salary') 
const incomeFreelance = document.getElementById('income-freelance') 
const incomeExtra1 = document.getElementById('income-extra-1') 
const incomeExtra2 = document.getElementById('income-extra-2') 


//costs

const costsFlat = document.getElementById('costs-flat') 
const costHouseServices = document.getElementById('cost-house-services') 
const costsCredit = document.getElementById('costs-credit') 
const costTransport = document.getElementById('cost-transport') 


//total inputs

const totalMonthInput = document.getElementById('total-month')
const totalDayInput = document.getElementById('total-day') 
const totalYearInput = document.getElementById('total-year') 
const totalPodatkyInput = document.getElementById('total-podatky')

let totalMonth=0,
 totalDay=0, 
 totalYear=0


//money box

const moneyBoxRange = document.getElementById('money-box-range')
const accumulationInput = document.getElementById('accumulation')
const spend = document.getElementById('spend')

let accumulation = 0;
let totalPercents = 0;


const inputs = document.querySelectorAll('.input')
for (input of inputs){
 input.addEventListener('input', ()=>{
  countingAvailableMoney();
 })
}

const strToNumb = str => str.value ? parseInt(str.value): 0

const countingAvailableMoney = ()=>{
   const totalPerMonth = strToNumb(incomeSalary) + strToNumb(incomeFreelance) +  strToNumb(incomeExtra1) +  strToNumb(incomeExtra2)
   const totalCost = strToNumb(costsFlat) + strToNumb(costHouseServices) +  strToNumb(costsCredit) +  strToNumb(costTransport)
 
  totalMonth = totalPerMonth - totalCost - totalPerMonth/100*5 -1100
  totalMonthInput.value = totalMonth

  totalPodatkyInput.value = totalPerMonth/100*5 +1100
  calculattionPrecents()
}


moneyBoxRange.addEventListener('input', e =>{
  const totalPrecentEl = document.getElementById('total-percantages')
  totalPercents = e.target.value
  totalPrecentEl.innerHTML = totalPercents
  calculattionPrecents()
})

const calculattionPrecents = () => {
  accumulation = ((totalMonth * totalPercents)/100).toFixed();
  accumulationInput.value = accumulation;
  spend.value = totalMonth - accumulation

  totalDay = (spend.value/30).toFixed() 
  totalDayInput.value = totalDay
  totalYear = accumulation*12
  totalYearInput.value = totalYear

}