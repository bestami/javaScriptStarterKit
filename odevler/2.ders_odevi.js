//1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız.
//Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. 
//(Araştırma konusu : şart blokları : if )
//Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)

function asallik(...numbers) {
    for (let i = 0; i<numbers.length; i++) {
      if (numbers[i]%2===0) {
          console.log(`${numbers[i]} asal değil`)
      }
       else
       {
        console.log(`${numbers[i]} asal `)
       }
    }
}

asallik(0,10,21,56,91)