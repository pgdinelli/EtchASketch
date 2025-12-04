function main() {
    const frame = document.querySelector('.frame');
    const resetBtn = document.querySelector('.resetBtn');
    const resizeBtn = document.querySelector('.resizeBtn');
    let gridNumber = 16;
    createGrid(gridNumber);

    resizeBtn.addEventListener("click", () => {
        const userInput = prompt('Enter the size of the grid:');
        if (Number(userInput)) {
            gridNumber = userInput;
            createGrid(gridNumber);
        } else {
            console.log('Not a valid value! Please insert a number.');
        }
    })

    function removeGrid() {
        frame.removeChild(row);
    }

    function createGrid(gridNumber) {
        for (let i = 0; i < gridNumber; i++) {
            const row = document.createElement('div');
            row.classList.add('row');

            for (let j = 0; j < gridNumber; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                row.appendChild(cell);
            }

            frame.appendChild(row);

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
    }


}

main();