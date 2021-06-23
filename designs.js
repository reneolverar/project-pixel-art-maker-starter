// Select color input

// When size is submitted by the user, call makeGrid()
function addTable() {
    document.getElementById('pixelCanvas').innerHTML = "";
    var size = document.getElementById("sizePicker");
    rows = size.elements[0].value
    cells = size.elements[1].value
    document.getElementById('pixelCanvas').appendChild(makeGrid());
    return false;  // to stop submission
}

// Make grid using row and cell values
function makeGrid() {
    table = document.createElement('table');
    for (var i = 0; i < rows; ++i) {
        var row = document.createElement('tr');
        for (var j = 0; j < cells; ++j) {
            row.appendChild(document.createElement('td'));
        }
        table.appendChild(row);
    }
    return table;
    }

// Paint grid
document.getElementById('pixelCanvas').addEventListener('click', function(event) {
    var td = event.target
    if (td.tagName !== 'TD') {
    return
    }
    td.className = 'selected'
})