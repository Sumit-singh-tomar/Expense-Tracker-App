const urlParams = new URLSearchParams(window.location.search);
const expensename = urlParams.get('name');
const amount = urlParams.get('amount');
const date = urlParams.get('date');
const uid = urlParams.get('uid');

console.log('dddd',uid,amount)

document.getElementById("expensenameEdit").value = expensename
document.getElementById("amountEdit").value = amount
document.getElementById("dateEdit").value = date
document.getElementById("uid").value = uid


function editExpense(event) {
    event.preventDefault()
    let expenseDetail = {
        expensename: event.target.expensenameEdit.value,
        amount: event.target.amountEdit.value,
        date: event.target.dateEdit.value,
        id : event.target.uid.value
    };

    axios.put(`http://localhost:4000/data/edit-expense`, expenseDetail)
        .then((result) => {
            console.log(result);
        })
        .catch((e) => { console.log(e) })

    event.target.expenseAmt.value = ''
    event.target.expenseName.value = ''
    event.target.date.value = ''
}

