// ===============================
// EJERCICIO 1
// Elevar cada número a sí mismo
// ===============================

const numbers = [4, 5, 6, 7, 8, 9, 10];

function elevados() {
    return numbers.map(n => n ** n);
}

console.log(elevados());



/* =========================================================
   EJERCICIO 2
   Transformar foodList en frases según el alimento
   ========================================================= */

const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

const result2 = foodList.map(food => {
    switch (food) {
        case "Pizza":
            return "Como soy de Italia, amo comer Pizza";
        case "Ramen":
            return "Como soy de Japón, amo comer Ramen";
        case "Paella":
            return "Como soy de Valencia, amo comer Paella";
        case "Entrecot":
            return "Aunque no como carne, el Entrecot es sabroso";
        default:
            return "";
    }
});

console.log(result2);



/* =========================================================
   EJERCICIO 3
   Describir miembros del staff
   ========================================================= */

const staff = [
    {
        name: 'Pepe',
        role: 'The Boss',
        hobbies: ['leer', 'ver pelis']
    },
    {
        name: 'Ana',
        role: 'becaria',
        hobbies: ['nadar', 'bailar']
    },
    {
        name: 'Luis',
        role: 'programador',
        hobbies: ['dormir', 'comprar']
    },
    {
        name: 'Carlos',
        role: 'secretario',
        hobbies: ['futbol', 'queso']
    }
];

const result3 = staff.map(person =>
    `${person.name} es ${person.role} y le gusta ${person.hobbies[0]} y ${person.hobbies[1]}`
);

console.log(result3);



/* =========================================================
   EJERCICIO 4
   Filtrar números impares
   ========================================================= */

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result4 = numbers2.filter(num => num % 2 !== 0);

console.log(result4);



/* =========================================================
   EJERCICIO 5
   Filtrar comida veggie y crear frases
   ========================================================= */

const foodList2 = [
    { name: 'Tempeh', isVeggie: true },
    { name: 'Cheesbacon burguer', isVeggie: false },
    { name: 'Tofu burguer', isVeggie: true },
    { name: 'Entrecot', isVeggie: false }
];

const result5 = foodList2
    .filter(item => item.isVeggie)
    .map(item => {
        if (item.name === "Tofu burguer") {
            return "Que rica Tofu burguer me voy a comer!";
        }
        return `Que rico ${item.name} me voy a comer!`;
    });

console.log(result5);



/* =========================================================
   EJERCICIO 6
   Filtrar productos caros y sacar nombres
   ========================================================= */

const inventory = [
    {
        name: 'Mobile phone',
        price: 199
    },
    {
        name: 'TV Samsung',
        price: 459
    },
    {
        name: 'Viaje a Cancún',
        price: 600
    },
    {
        name: 'Mascarilla',
        price: 1
    }
];

const result6 = inventory
    .filter(item => item.price > 300)
    .map(item => item.name);

console.log(result6);



/* =========================================================
   EJERCICIO 7
   Multiplicar todos los números del array
   ========================================================= */

const numeros3 = [39, 2, 4, 25, 62];

const result7 = numeros3.reduce((acc, num) => acc * num, 1);

console.log(result7);



/* =========================================================
   EJERCICIO 8
   Construir frase completa con reduce
   ========================================================= */

const sentenceElements = [
    'Me',
    'llamo',
    '...',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];

const result8 = sentenceElements
    .reduce((acc, word) => {
        return acc + " " + word;
    }, "")
    .trim();

console.log(result8);



/* =========================================================
   EJERCICIO 9
   Sumar precios de libros de categoría "code"
   ========================================================= */

const books = [
    {
        name: 'JS for dummies',
        author: 'Emily A. Vander Veer',
        price: 20,
        category: 'code'
    },
    {
        name: 'Don Quijote de la Mancha',
        author: 'Cervantes',
        price: 14,
        category: 'novel'
    },
    {
        name: 'Juego de tronos',
        author: 'George R. Martin',
        price: 32,
        category: 'Fantasy'
    },
    {
        name: 'javascript the good parts',
        author: 'Douglas Crockford',
        price: 40,
        category: 'code'
    }
];

const result9 = books
    .filter(book => book.category === 'code')
    .reduce((acc, book) => acc + book.price, 0);

console.log(result9);
