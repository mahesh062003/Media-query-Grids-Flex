// script.js

var removedGrids = [];

function showAlert() {
    alert('Button Clicked!');
}

document.getElementById('myButton').addEventListener('click', function () {
    console.log('Button Clicked!');
    
});

function removeGrid() {
    var grids = document.querySelectorAll('.grid');
    var lastGrid = grids[grids.length - 1];
    if (lastGrid) {
        lastGrid.remove();
        removedGrids.push(lastGrid.cloneNode(true)); 
    }
}

function addGrid() {
    if (removedGrids.length > 0) {
        var container = document.querySelector('.container');
        var lastRemovedGrid = removedGrids.pop(); 
        container.appendChild(lastRemovedGrid);
    }
}

function removeBackground() {
    document.body.style.backgroundImage = 'none';
}

function addBackground() {
    document.body.style.backgroundImage = "url('bg.jpeg')";
}
