function main() {
    const frame = document.querySelector('.frame');
    const resetBtn = document.querySelector('.resetBtn');
    const resizeBtn = document.querySelector('.resizeBtn');
    let gridNumber = 16;
    generateGrid(gridNumber);

    resizeBtn.addEventListener("click", () => {
        const userInput = prompt('Enter the size of the grid (between 1 and 100):');

        if (isNaN(userInput) || userInput < 1 || userInput > 100) {
            alert('Not a valid value! Enter sizes between 1 and 100.');
        } else {
            gridNumber = parseInt(userInput);
            removeGrid();
            generateGrid(gridNumber);
        }
    })

    function generateGrid(gridNumber) {
        for (let i = 0; i < gridNumber; i++) {
            const row = document.createElement('div');
            row.classList.add('row');

            for (let j = 0; j < gridNumber; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                row.appendChild(cell);
            }

            frame.appendChild(row);
        }

        const cells = document.querySelectorAll('.cell');

        cells.forEach(cell => {
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = 'black';
            });
        })

        resetBtn.addEventListener("click", () => {
            cells.forEach(cell => {
                cell.style.backgroundColor = 'white'
            });
        })
    }

    function removeGrid() {
        while (frame.firstChild) {
            frame.removeChild(frame.lastChild);
        }
    }
}

main();