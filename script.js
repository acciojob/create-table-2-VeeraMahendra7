let table = document.getElementById('myTable');

function createTable() {
    //Write your code here
	let rows = parseInt(prompt("Input number of rows"));
	let columns = parseInt(prompt("Input number of columns"));

	if (isNaN(rows) || isNaN(columns)) {
	    alert("Please enter valid numeric values.");
	    return;
	}

	if (rows <= 0 || columns <= 0) {
	    alert("Number of rows and columns must be greater than 0.");
	    return;
	}
	
	table.innerHTML = '';

	for(let i=0;i<rows;i++){
		let tr = document.createElement('tr');
		for(let j=0;j<columns;j++){
			let td = document.createElement('td');
			td.textContent = `Row-${i} Column-${j}`;
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
}
