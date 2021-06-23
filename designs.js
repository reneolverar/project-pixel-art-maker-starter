// When size is submitted by the user, call makeGrid()
function addTable() {
    document.getElementById('pixelCanvas').innerHTML = "";
    const size = document.getElementById("sizePicker");
    const rows = size.elements[0].value;
    const cells = size.elements[1].value;
    document.getElementById('pixelCanvas').appendChild(makeGrid(rows, cells));
    return false;  // to stop resetting the page
}

// Make grid using row and cell values from user
function makeGrid(rows, cells) {
    let table = document.createElement('table');
    for (let i = 0; i < rows; ++i) {
        let row = document.createElement('tr');
        for (let j = 0; j < cells; ++j) {
            row.appendChild(document.createElement('td'));
        }
        table.appendChild(row);
    }
    return table;
    }

// Paint grid using user´s chosen color
document.getElementById('pixelCanvas').addEventListener('click', function(event) {
    let td = event.target;
    if (td.tagName !== 'TD') {
    return;
    }
    let color = document.getElementById("colorPicker").value;
    td.style.backgroundColor = color ;
});