console.log("merhaba kodlama.io")

//NOT : js type safe değildir.
let dolardun=9.20
let dolarbugun=9.30

{
    let dolardun=9.10
}

console.log(dolardun)

const euroDun=11.2
//euroDun=11
console.log(euroDun)

//array
let konutKredıleri=["konut kredisi","ev kredisi","dükkan kredisi","arsa kredisi"]

console.log("<ul>")
for (let i = 0; i <konutKredıleri.length; i++) {
    console.log("<li>"+konutKredıleri[i]+"</li>")
    
}
console.log("</ul>")

console.log(konutKredıleri)