// console.log("shoaib soomro")

// var name = 
// console.log(name)

// console.log(20 + '10')
// concat 

// console.log(10 - 5) 
// bug

// console.log('java' + "script")
//  String concat

// console.log('-' + '0')

// data type 

// console.log(true + true)  result 2 

// console.log(false + true) result 1

// console.log(false - true) result -1

// what is nan 

// console.log('vind' - 'shoaib') result nan


// console.log(isNaN === NaN)

// console.log(isNaN(Number.NaN))
// console.log(Number.isNaN(NaN))

// Expression and operators /////////


// 1  Assignment opertors
    
// // 5 + 4  
// //  5 is operand and + operators and 4 operand hai 

// var x = 5;
// var y = 5;


// // console.log(" is both x and y value are equal " + x === y)

// console.log(` is both x and y value are equal  ${x === y}`)


// 2 Arthmetic Operators  

// console.log(22 + 34)





// Arthmetic operator

// var  nam = 56;

// var namenum = nam++;

// console.log(nam);
// console.log(namenum)



// const num = [12,3,5,7,5,2]

// const add = num.reduce((accom, value)=>{
//     return accom + value
// })
// console.log(add)

  

// function sum(a){
//     return (b)=>(c)=>(d)=> a+b+c+d

// }

// const add = sum(23)(12)(12)(223);
// console.log(add)


// compersion operators 

// var n = 30
// var b = 30

// console.log(n === b)

// var a = 30;
// var b = 23
// console.log(a === b )


// > greater then 
// < lesss then 



// var a = 30;
//  var b = 23

//  console.log(b > a)


// console.log(3**3) ----- Exponentiation operator (**)


// var a = 10;
// var b = 30 ;

// swap num 

// var c = b ;  // c = 30
// b = a;
// a = c 
//  console.log(a);
//  console.log(b)


// what is == equal to and === equal 


// const a = 5 ;  type of number 

// const b = "5"; type of string 

// console.log(a == b)   == equal check value 

// === equal to 

// const a = 5 ;  //type of number 

// const b = "5";  

// console.log(a === b )   === equal typeof check


// const tomr = "no";

// if(tomr == "reining"){
//     console.log("berish mei maza hota hia")
// }else{
//     console.log("allah kheir ")
// }
 


// const tomr = "nhi ";

// if(tomr == "rain"){
//     console.log("allah lheir kara aj barish hoge ")
// }else{
//     console.log("barish nhi hoge ")
// }


// var tomr = "nhi"

// if(tomr == "barish"){
//     console.log("barish ati hai toh apni ati hai warna nhi ata")
// }else{
//     console.log("warna nhi ata ")
// }


// falsy value in javaScript
// 1 ==== 0,
// 2 ==== " " String
// 3, ==== undefined 
// 4, null
// 5 === NaN

// if(score = 10){
//     console.log("OMG, we lose the game")
// }else{
//     console.log("YAy we the game ")
// }


// Conditional (tenery ) operator 

//the conditional (tenery) operator is only javaScript operator that takes three operends

// var age = 1;
// console.log( (age > 18)? "you can vote" : "you can not vote")


// var area = "squarekeke"
// var PI = 3.142, l=5, b=4, r=4

// switch(area){
//     case 'circle':
//         console.log("the area of the circle is :" + PI*r**2);
//         break;
//         case "triangle":
//             console.log("the area of triangle is : " + (l*b)/2);
//             break;
//             case "rectangle": 
//             console.log("the area of rectangle is : " + (l*b));
//             break;
//              case "square":
//                  console.log("the area of  the square of : " + (l*b));
//                  break;
//                  default: 
//                  console.log("please inter your valid data ")


// }


// while loop statement

// var num = 10;
// while(num <= 10){ ================= infinte loop
//     console.log(num)
// }
 ///////     While Loop
// var num = 0;
// while(num <= 10){
//     console.log(num)
//     num++
// }
// while Loop hai sb se phala value ko check karta hai us bad result data hai


// Do while loop statement

// var num = 0;
// do{
//         console.log(num)
//         num++
//     }while(num <= 10)

//     do-while loop hai wo result show karta hai us k bad value check karta hai

// const num =  ["shoaib",'abdullah', 'hussain',"noman"];

// for(var num )

// for LOOP Statement
//      var num = 12;     num < 10 kaha tak value ko print karn hai            num++
// for(initialzer;              condition                                      iteration  ){
//                   code to be executed

// }

// for(var num = 0; num <= 20; num++){
//     console.log(num)
// }

// for loop statement table create 

// for(num = 1; num <= 30; num++){
//     var table = 10;
//     console.log(table + " * " + num  + "  =  " + table * num )

// }'
  


// function  start


// function sum(a, b){
//     var add = a+b
//     console.log(add)

// }

// sum(12,34)


// //////////////////////////////////////////////function Expression

// function sum (a, b ){
//     return a + b
// }

// var add = sum(77, 88)
// console.log(add)

////////////////////////////////////////////     anonymous function expression 





// var funexpr  = function(a,b,c){
//     return a + b + c
// }


// console.log(funexpr(12,34,56))


/////////////////////////////////////////////////////////////




// var function scope 

// let and const   block scope

// var name = "shoaib soomro"
// console.log(name)

// name = "shoaib khan"
// console.log(name)

//let ////////////////////////////////////////////////////

// let name = "shoaib soomro"
// console.log(name)

// name = "shoaib khan"
// console.log(name)



///////////////////   const meaning constant or const ki jb ek hoge toh dubra se change nhi kar skhta


// const name = "shoaib soomro"
// console.log(name)

// name = "shoaib khan"
// console.log(name)

///////////////////block scope

// function bio(){
//     let myName = "shoaib "
//     console.log(myName)
//     if(true){
//         let myLastName = "soomro "
//         console.log(myName)
//         console.log(myLastName)
//     }
//     console.log(myLastName)
// }


// bio()


// what is Array =>    

// 1variable mei multple date ko store karta hai is called array 

// var names = ['shoaib', 'soomro', "abdullah", "tanveer",'noman']
// length mei array k under kitna element hai 

// console.log(names[names.length -1 ])
//(names[names.length -1 ])  array name .length -1 mean last wala nane check 


// var names = ['shoaib', 'soomro', "abdullah", "tanveer",'noman']

// for(var i=0; i<names.length; i++){
//     console.log(names[i])
// }


// var names = ['shoaib', 'soomro', "abdullah", "tanveer",'noman']

// for(var i = 0; i<names.length; i++){
//     console.log(names[i])
// }


// var names = ['shoaib', 'soomro', "abdullah", "tanveer",'noman']

// for(let elem in names){
//     console.log(elem)              for in Loop  jo hai humein array ki index bat hai 
// }

// var names = ['shoaib', 'soomro', "abdullah", "tanveer",'noman']

// for(let elem of names){
//     console.log(elem)          or for of loop jo hai humein array ki value bat hai 
// }


// var names = ['shoaib', 'soomro', "abdullah", "tanveer",'noman']

// names.forEach(function(elem , ind){
//     console.log(ind + " " + elem)      forEach loop jo hai wo humein array ki value bhi or array ki index bhi show kara ata hai
// })


// Array Push mmethod 

// const add = ["shoaib", 'husssan', 'abdullah',"tanveer"];

// add.push('ali hussan ')
// console.log(add)



/// push mean array ki end mei value ko add karna 


// Array unshift method 

// const add = ["shoaib", 'husssan', 'abdullah',"tanveer"];

// add.unshift("abbas",'hussan Ahmed')
// console.log(add)

// unshift meaning array ki frist mei value ko add karna


// Array pop method 

// const add = ["shoaib", 'husssan', 'abdullah',"tanveer"];
// console.log(add.pop())

// pop method meaning k array ki end wali value ko remove karna 

//array  shift   Method

// const add = ["shoaib", 'husssan', 'abdullah',"tanveer"];
// console.log(add.shift());


// array shift method mean array ki frist ko remove karna


//const frnd = ["shoaib",'abdullah', 'hussain',"noman"];

// frnd.splice(4,0,"ali hussan");
// frnd.splice(1,2,"Abdullah soomro");
// frnd.splice(3,1,)


// console.log(frnd)


// const frnd = ["shoaib",'abdullah', 'hussain',"noman"];


// frnd.splice(1,1,"Abdullah")
// console.log(frnd)



// const frnd = ["shoaib",'abdullah', 'hussain',"noman"];
// const friendupdate = frnd.indexOf('abdullah')

// if(friendupdate / -1){
//     const  fridupdate = frnd.splice(friendupdate,1, "shoaib soomro")
//     console.log(frnd)
//     console.log(fridupdate)


// }else{
// console.log(" no found data")
// }

////////////////////////////////////////            Map method in Array

// const  frnd = ['shoaib', 'soomro', "abdullah", "tanveer",'noman']

// const newArr = frnd.map((elem, ind, Array)=>{
//          return `${elem} ,  ----- ${ind}   =================== ${Array}`
// })
// console.log(newArr)


///////////////////////////////////////////////// Map method square Root 

// const arr = [25,36,49,64,81]



// const newarr = arr.map((elem)=>{
//       return Math.sqrt(elem)
// })

// console.log(newarr)


// const frnd = ["shoaib",'abdullah', 'hussain',"noman"];

// const indexfrind = frnd.indexOf("abdullah")

// if(indexfrind / -1){
//       const friends = frnd.splice(indexfrind,1,"ABDULLAH")
//       console.log(friends)
//       console.log(frnd) 
// }else{
//       console.log("this data is valid ")
// }


// const num = [25,35,50,100]
//   const swt = num.map((elem)=>{
//         return Math.sqrt(elem)
//   })


// console.log(swt)


// const frnd = ["shoaib",'abdullah', 'hussain',"noman"];
// for(let elem of frnd){
//       console.log(elem)
// }
// const frnd = ["shoaib",'abdullah', 'hussain',"noman"];
// for(let elem in frnd){
//       console.log(elem)
// }

// const frnd = ["shoaib",'abdullah', 'hussain',"noman"];
// frnd.forEach((ele,ind)=>{
//       console.log(ind + " " + ele)
// });


//  var name = new String("shoaib soomro")  string constrorure
//  console.log(name)

// const num = "shoaib soomro "
// console.log(num.toUpperCase)


///////////////////////////////////////////////// String vs String 



//Escape Character 

//  expample no 1
// const num = "shoaib soomro \"bdullah\"  and Ahmad soomr "

// console.log(num)


// example 2 

// const num = 'shoaib soome  "abdullah soomr "'


////////////////////////////////////////////////////////////data and time

// const dat = new Date();
// console.log(dat)


/////6 pack progmmar

const arr = [1,2,34,56,89];
arr.push(2)  
// push meaning array  ki last  value add 
// arr.pop()     pop meaning array ki last mei value ko delete
// arr.shift()      shift meaning remove the first Element array 
// arr.unshift(44)    unshift meaning add the first Element array 
//arr.splice(2,2,)     splice meaning add delete all in one 
//arr.reverse()            reverse  meaning reverse
// const newarr = arr.slice(1,3)   slice meaning new array create 
// console.log(newarr)
// console.log(arr)

// let arr = []

// for(let i = 0; i< 10; i++){
//   arr.push("soomr 123")
// }
// console.log(arr)
 ////////////////////////////////////////addEventListener

// const on1 = document.getElementById('box1') 
// const on2 = document.getElementById('box2') 
// const btn = document.getElementById('box3') 

// btn.addEventListener('click',()=>{
    
//     on2.classList.add("box2")


// })

// on2.addEventListener("mouseover",()=>{
//     btn.style.transform = "scale(2.3)"
// })

// on2.addEventListener("mouseout",()=>{
//     btn.style.transform = ""
// })


const a = [1, 3, 45, 6 ]

a.push()