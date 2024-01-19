var j = 0
function addExpense(event) {
    event.preventDefault()
    let expenseDetail = {
        expenseName: event.target.expenseName.value,
        expenseAmt: event.target.expenseAmt.value,
        date: event.target.date.value,
    };

    localStorage.setItem(event.target.expenseName.value, JSON.stringify(expenseDetail));


    if (j == 0) {
        var div = document.getElementById('show-table')
        div.innerHTML = `
    <table class="table">
        <tr>
            <th>Expense Name</th>
            <th>Expense Amount</th>
            <th>Date</th>
            <th>Action</th>
        </tr>
    </table>`
    j++
    }


    var table = document.getElementsByClassName('table')[0];

    var newRow = table.insertRow();

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = expenseDetail.expenseName;
    cell2.innerHTML = expenseDetail.expenseAmt;
    cell3.innerHTML = expenseDetail.date;
    cell4.innerHTML = `<button>Edit</button> <button>Delete</button>`;
}