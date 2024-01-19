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
        let div = document.getElementById('show-table')
        let newTable = document.createElement('table')
        newTable.className = "table"

        let row = newTable.insertRow()
        row.style.fontWeight = "bold"
        row.insertCell(0).innerHTML = "Expense Name"
        row.insertCell(1).innerHTML = "Expense Amount"
        row.insertCell(2).innerHTML = "Date"
        row.insertCell(3).innerHTML = "Action"

        div.appendChild(newTable)
        j++
    }


    let table = document.getElementsByClassName('table')[0];
    let newRow = table.insertRow();

    let editButton = document.createElement('button')
    editButton.innerHTML = "EDIT"
    editButton.className = 'btn btn-primary'
    editButton.onclick = function (e) {
        const rowToEdit = e.target.parentElement.parentElement
        rowToEdit.remove()
        let editDetail = JSON.parse(localStorage.getItem(expenseDetail.expenseName))
        localStorage.removeItem(expenseDetail.expenseName)
        expenseName.value = editDetail.expenseName
        expenseAmt.value = editDetail.expenseAmt
        date.value = editDetail.date
        if (table.rows.length == 1) {
            document.getElementsByClassName('table')[0].remove();
        }
    }

    let deleteButton = document.createElement('button')
    deleteButton.innerText = "DELETE"
    deleteButton.style.marginLeft = '5px'
    deleteButton.className = 'btn btn-danger'
    deleteButton.onclick = function (e) {
        const rowToDelete = e.target.parentElement.parentElement
        rowToDelete.remove()

        localStorage.removeItem(expenseDetail.expenseName)
        if (table.rows.length == 1) {
            document.getElementsByClassName('table')[0].remove();
        }
    }

    newRow.insertCell(0).innerHTML = expenseDetail.expenseName;
    newRow.insertCell(1).innerHTML = expenseDetail.expenseAmt;
    newRow.insertCell(2).innerHTML = expenseDetail.date;
    newRow.insertCell(3).append(editButton, deleteButton);


    event.target.expenseAmt.value = ''
    event.target.expenseName.value = ''
    event.target.date.value = ''
}