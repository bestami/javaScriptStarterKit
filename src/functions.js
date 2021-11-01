function addToCart(quantity,productName="elma") {
    console.log("sepete eklendi : ürün : " + productName + " adet : " + quantity)
}

addToCart(15)

let sayHello = ()=>{
    console.log("hello world")
}

sayHello()

let sayHello2 = function () {
    console.log("hello world 2")
}

sayHello2()

function addToCart4(x) {
    console.log(x)
}

let products=[
    {productName:"elma", unitPrice:10, quantity:5},
    {productName:"armut", unitPrice:10, quantity:5},
    {productName:"karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)


function add(...numbers) {//rest
    let total=0;
    for(let i=0; i<numbers.length; i++) {
        total=total+numbers[i]
    }
    console.log(total)
}

add(20,30)
add(20,30,40)
add(20,30,40,50)

let numbers=[30,50,600]
console.log(Math.max(...numbers))

let [icanadolu,marmara,karadeniz]=["İç Anadolu", "Marmara", "Karadeniz"]

console.log(icanadolu)
