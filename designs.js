// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(rows, cells) {
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

document.getElementById('pixelCanvas').appendChild(makeGrid(50, 50));
