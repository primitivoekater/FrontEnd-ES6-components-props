console.log('==========Sem Otimização==========')

const classA = ["Daniel", "Guido", "Léo", "Vitor", "Ruliana", "Diego", "José"];
const classB = ["Marcos", "Maria", "Juliana", "Cristina", "Paula"];
const classC = ["Marcela", "Pedro", "João", "Jorge", "Carlos", "Henrique"];

let allClasses = classA.concat(classB);

allClasses = allClasses.concat(classC[0], classC[1], classC[4], classC[5]);

console.log(allClasses);

console.log('==========Com Otimização==========')

const ClassA = ["Daniel", "Guido", "Léo", "Vitor", "Ruliana", "Diego", "José"];
const ClassB = ["Marcos", "Maria", "Juliana", "Cristina", "Paula"];
const ClassC = ["Marcela", "Pedro", "João", "Jorge", "Carlos", "Henrique"];

let AllClasses = [...classA,...classB,classC[0], classC[1], classC[4], classC[5]]

             console.log(AllClasses);


