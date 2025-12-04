function main() {
    const frame = document.querySelector('.frame');
    const resetBtn = document.querySelector('.resetBtn');

    resetBtn.addEventListener("click", () => {
        const cells = document.querySelectorAll('.cell').forEach(cell => {
            cell.style.backgroundColor = 'white'
        });
    })

    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < 16; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        
        frame.appendChild(row);
        
        const cells = document.querySelectorAll('.cell').forEach(cell => {
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = 'black';
            })
        })
    }
}

main();