// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. 
//Все це із замиканнями, наприклад:

// sum(3) = 3 
// sum(5) = 8
// sum(20) = 28

function createCalc() {
   let total = 0;
    return function (x) {
        return total += x
    }
}

const sum = createCalc()
console.log(sum(3))
console.log(sum(5))
console.log(sum(20))

//independent function
const sum2 = createCalc()
console.log(sum2(10))
console.log(sum2(8))
