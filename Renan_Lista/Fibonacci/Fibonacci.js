
let n1 = 0;
let n2 = 1;
let Fibo = [n1, n2];

for( i = 2; i <= 15; i++);{

    let n3 = n1 + n2;

    Fibo.push(n3);
    n1 = n2;
    n2 = n3;

    
};

document.write(Fibo);