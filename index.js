function addExpense(event) {
    event.preventDefault()
    let expenseDetail = {
        expenseName: event.target.expenseName.value,
        expenseAmt: event.target.expenseAmt.value,
        date: event.target.date.value,
    }
    localStorage.setItem(event.target.expenseName.value, JSON.stringify(expenseDetail))

    var div = document.getElementById('show-table')

    var table = document.createElement('table')
    table.className = "table"
    table.innerHTML = `
    <tr>
        <th>Expense Name</th>
        <th>Expense Amount</th>
        <th>Date</th></td>
        <th>Action</th>
    </tr>

    <tr>
        <td>${expenseDetail.expenseName}</td>
        <td>&#8377;${expenseDetail.expenseAmt}.00</td>
        <td>${expenseDetail.date}</td>
        <td><button>Edit</button> <button>Delete</button></td>
    </tr>`

    div.appendChild(table)
}