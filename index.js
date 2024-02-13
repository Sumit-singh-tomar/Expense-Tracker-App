function addExpense(event) {
    event.preventDefault()
    let expenseDetail = {
        expensename: event.target.expenseName.value,
        amount: event.target.expenseAmt.value,
        date: event.target.date.value,
    };

    axios.post("http://localhost:4000/data/add-expense", expenseDetail)
        .then((result) => {
            console.log(result);
            location.reload()
        })
        .catch((e) => { console.log(e) })

    event.target.expenseAmt.value = ''
    event.target.expenseName.value = ''
    event.target.date.value = ''
}


document.addEventListener("DOMContentLoaded", () => {

    axios.get("http://localhost:4000/data/get-all-expense")
        .then((result) => {

            if (result.data.data.length > 0) {
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

                result.data.data.map((item) => {

                    let table = document.getElementsByClassName('table')[0];
                    let newRow = table.insertRow();

                    let editButton = document.createElement('button')
                    editButton.innerHTML = `<a href="/edit.html?name=${item.expensename}&amount=${item.amount}&date=${item.date}&uid=${item.id}">Edit</a>`
                    editButton.className = 'btn btn-primary'
                    editButton.onclick = function (e) {
                        // const rowToEdit = e.target.parentElement.parentElement
                        // rowToEdit.remove()
                        // amountEdit.value = item.amount
                        // dateEdit.value = item.date
                        if (table.rows.length == 1) {
                            table.remove();
                        }
                    }

                    let deleteButton = document.createElement('button')
                    deleteButton.innerText = "DELETE"
                    deleteButton.style.marginLeft = '5px'
                    deleteButton.className = 'btn btn-danger'
                    deleteButton.onclick = function (e) {
                        axios.delete(`http://localhost:4000/data/delete-expense/${item.id}`)
                            .then(() => {
                                location.reload()
                                if (table.rows.length == 1) {
                                    table.remove();
                                }

                            })
                            .catch((e) => { console.log(e) })
                    }

                    newRow.insertCell(0).innerHTML = item.expensename;
                    newRow.insertCell(1).innerHTML = item.amount;
                    newRow.insertCell(2).innerHTML = item.date;
                    newRow.insertCell(3).append(editButton, deleteButton);

                })
            }
        })


})