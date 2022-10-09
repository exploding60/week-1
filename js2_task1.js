//1. Push digunkana untuk menambah satu atau lebih value di akhir dari sebuah array
let pushArray = [1,2,3]
pushArray.push(4,3)
console.log(pushArray)

//2. Splice, digunakan untuk menambahkan, menghapus atau mereplace item ke atau dari sebuah array

//contoh menghapus
let alatPendengar = ["tes","headphone","earphone"]
/* alatPendengar.splice(0,1) //menghapus 1 item pada index 0 */
alatPendengar.splice(0,1,"hedfon") //mereplace index 
console.log(alatPendengar)

//3. sort digunakan untuk mengurutkan item dalam sebuah array, urutannya bisa dari numeric ataupun alphabet dan bisa ascending atau descending

const number = [6,2,8,9,4,3,5,7,1]
const huruf = ["a","c","d","f","g","i","b","e","h"]
console.log(number.sort())
console.log(huruf.sort())

//5.toUppercase untuk mengubah text string menjadi uppercase
let message = "Rizky lagi mengerjakan tugas"
let x = message.toUpperCase()
console.log(x) // output "RIZKY LAGI MENGERJAKAN TUGAS"

//6. Concat adalah method yang dogunakan untuk menggabungkan 2 atau lebih array, tetapi tidak mengubah array yang sudah ada namun membuat array yang baru
const hobby = ["Gaming","yutuban","tidur"]
const hobby2 = ["refreshing","dengerin musik"]
const allHobby = hobby.concat(hobby2)

console.log(allHobby) // output [ 'Gaming', 'yutuban', 'tidur', 'refreshing', 'dengerin musik' ]

//7. Array.isArray digunakan untuk check apakah value yang diberikan method ini adalah sebuah array atau bukan

let realArray = "Array"
let notArray = 3
console.log(Array.isArray(realArray)) //true
console.log(Array.isArray(notArray)) //false

//8.Pop digunakan untuk menghilangkan akhir dari element/index pada sebuah aray, dan mengembalikannya. lalu method ini juga menghilangkan panjang index pada array tsb
const motor = ["Vespa","Supra X","Supra Fit", "Scoopy"]
console.log(motor.pop()) //output scoopy
console.log(motor) // output [ 'Vespa', 'Supra X', 'Supra Fit' ]

