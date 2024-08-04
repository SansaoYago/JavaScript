let num = [1, 5, 4, 9, 8]
num.push(3)
num.sort()
let bus = num.indexOf(12)

for ( let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} 

if (bus == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor está na posição ${bus}`)
}


