let matriz = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

let i =0;
let j =0;

for (i = 0; i < matriz.length; i++) {
    for (j = 0; j < matriz[i].length; j++) {
        matriz[i, j] = 0;
        if (i==j) {
            matriz[i, j] = 1;
        };
    };
    console.log(matriz);
};
