
// switch statement....


/*
// month = "march"
month = "i dont know"

switch (month) {
    case "jan":
        console.log("this is jan month")
        break;
    case "fab":
        console.log("this is fab month")
        break;
    case "march":
        console.log("this is march month")
        break;
    case "april":
        console.log("this is april month")
        break;

    default:
        console.log("month not found")
        break;
}  */


// .......................................................

// falsy value = false,0,"",-0,undefined,null,NaN
// truthy value = " ","undefined","null","NaN",[],{},"0"

// if ({}){
//     console.log("this is truthy")
// }
// else{
//     console.log("this is falsy")
// }

//..........................................................

// myArray=[10,20,90,90]
// if (myArray.length ==0){
//    console.log("length is 0")
// }
// else if(myArray.length ==1){
//     console.log("length is 1")
// }
// else if(myArray.length ==2){
//     console.log("length is 2")
// }
// else{
//     console.log("i dont know")

// }

//......................................................

// let name;
// let displayName = name ?? "Guest";
// console.log(displayName); 


// let age=23;
// let result = age ?? "age no found"
// console.log(result); 

//.........................................................


// ternary operator

// let Age = 50;
//  (Age>=80) ? console.log("person are old"):console.log("not old");


//......................................................................................

// for (let index = 0; index < 10; index++) {
//     // const element = array[index];
//     console.log("number is :"+index)
    
// }


// myarray = ["naveen","pardeep","akshya"]

// for (let index = 0; index < myarray.length; index++) {


//     const element = myarray[index];
//     if(element == "pardeep"){
//         console.log("user found....")
//         continue
//     }
//     console.log(element)
// }
// console.log(index)

//.............................................................................


// my_Array = ["naveen","rajesh","amit"]
// index=0
// do {
//     console.log("hii how are you",my_Array[index])
//     index++

// } while (index<my_Array.length);


//........................................................................


// myArray = ["naveen","rajkumar","amit","rajesh"]

// for (const name of myArray) {
//     //console.log(name)
// }

//.....................................


// let Myobject= new Map();
// Myobject.set("std1","naveen")
// Myobject.set("std2","aman")
// Myobject.set("std3","janki")


// Myobject={
//     "std1":"naveen",
//     "std2":"aman",
//     "std3":"janki"
// }                         // not itrable in case of 
 
// for (const [key,value] of Myobject) {
//     console.log(key,value)
// }

//................................................

// Myobject={
//     "std1":"naveen",
//     "std2":"aman",
//     "std3":"janki"
// }   

// for (const std in Myobject) {
//     console.log(std,Myobject[std])
// }


// MyArray = ["naveen","amit","jaykumar"]
// for (const std in MyArray) {
//     console.log(std,MyArray[std])
// }

//................................................

// let MyMap= new Map();
// MyMap.set("std1","naveen")
// MyMap.set("std2","aman")
// MyMap.set("std3","janki")

//  for (const std in MyMap) {
//      console.log(std)}       // it is give the empty result for...in सिर्फ object की top-level enumerable properties को देखता है — लेकिन Map में वैसी properties नहीं होतीं


//......................................................
//..........................................................

// myArray = ["naveen","amit","jaykuamr","shankar"]

// myArray.forEach( function (name){
//         console.log(name)
// });

//....................................................................

// function PrintName(name){
//     console.log(name)
// }

// myArray = ["naveen","amit","jaykuamr","shankar"]

// myArray.forEach(PrintName);

//............................................................

// myArray = ["naveen","amit","jaykuamr","shankar"]

// myArray.forEach((name) => {
//     console.log(name)
// });

//............................................................


// myArray = ["naveen","amit","jaykuamr","shankar"]

// myArray.forEach((name) => {
//     console.log(name)
// });

//..........................................................


// information = [
//     {
//         name:"naveen",
//         age:"23"
//     },
//      {
//         name:"amit",
//         age:"30"
//     },
//      {
//         name:"jay",
//         age:"32"
//     }
// ]


// information.forEach( function (person) {
//     console.log(`person name is ${person.name} and person age is ${person.age}`)
// });


//.................................................................................

//it is not return anything 

// names = ["naveen","amit","jay","amar"]

// names.forEach((items,position,myarray) => {
//     console.log(items,position,myarray)
// });

//..................................................................................

// names = ["naveen","amit","jay","amar"]

// const matching_user =names.forEach(items => {
//     if (items==="naveen"){
//         return items
//     }
    
// });
// console.log(matching_user)


//...............................................................................
//..............................................................................

//*********************************** */
// filter..................



//  names = ["naveen","amit","jay","amar"]

//  outnamelist = names.filter( function (name) { 
//     return name
//  });

//  console.log(outnamelist)

//......................................................

// myobject = [
//     {
//         name:"naveen",
//         salary:40000,
//         is_permanent:true
//     },
//      {
//         name:"amit",
//         salary:20000,
//         is_permanent:false
//     },
//      {
//         name:"rajesh",
//         salary:23000,
//         is_permanent:true
//     },
//      {
//         name:"jay",
//         salary:15000,
//         is_permanent:false
//     }

// ]

//  selected_emp =myobject.filter( (emp) => emp.name ==="amit" )
// selected_emp =myobject.filter( (emp) => emp.is_permanent === false)

//  console.log(selected_emp)

// selected_emp =myobject.filter( (emp) => { return emp.is_permanent === false})
// console.log(selected_emp)


// selected_emp =myobject.filter( (emp) => { return emp.is_permanent === false && emp.name === "jay"})
// console.log(selected_emp)

//...................................................................................

// names = ["naveen","amit","jay","amar"]

// emp=names.map(function (name){

//     if (name==="amit"){
//         return name
//     }
// })
   
// console.log(emp)   //[ undefined, 'amit', undefined, undefined]
//...................................................................................
//.................................................................................


// MyArray = [10,20,30,40,50]
// total = MyArray.reduce(function (accu,curval){
//             return curval = accu+curval
// },0)

// console.log(total)

//..............................................




// myArray = [10,45,23,56,89,56,232,565]

// console.log(myArray)
// total=myArray.reduce((accu,currentval)=>{
//     console.log(`accumulater value is ${accu} and the current value is ${currentval}`)
//     return accu+currentval
// },0)
// console.log(total)


//............................................................................
/*
Product_price = [
    {
        name:"fruits",
        rate :140
    },
    {
        name:"bottel",
        rate :30
    },
     {
        name:"noodle packet",
        rate :25
    },
    {
        name:"data cable",
        rate :150
    },
    {
        name:"mobile cover",
        rate :90
    }
]

info=Product_price.map( function (item){
    console.log(`item ${item.name} price ${item.rate}`)
    return item.rate
}).reduce( (accu,currentval)=> accu+currentval)
console.log("your final payment is "+info)
*/
//..................................................................










