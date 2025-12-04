function main() {
    const frame = document.querySelector('.frame');
    const resetBtn = document.querySelector('.resetBtn');
    const gridNumber = 16;

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

main();