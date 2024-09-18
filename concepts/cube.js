function createCube(size) {
    const arrayA = [];
    const frenteA = '/\\';
    const atrasA = '_\\';
    const frenteB = '\\/';
    const atrasB = '_/';

    for (let i = 0; i < size; i++) {
        let fila = ' '.repeat(size - i - 1);
        fila += frenteA.repeat(i + 1);
        fila += atrasA.repeat(size);
        arrayA.push(fila); 
    }

    for (let i = 0; i < size; i++) {
        let fila = ' '.repeat(i);
        fila += frenteB.repeat(size - i);
        fila += atrasB.repeat(size);
        arrayA.push(fila);
    }

    return arrayA.join('\n');
}

const cube = createCube(11);
console.log(cube);