


// let MObile_No = Symbol(9829582621)
// const information={
//     name : "Naveen",
//     is_male : true,
//     Roll : 23,
//     "Addresh":"Rajsthan",
//     [MObile_No] : 123400
    
// }

// console.log(information.name)
// console.log(information["Roll"])
// console.log(information.Addresh)
// console.log(information["Addresh"])

//..............................................................................................


// let info = {
//     name : "naveen",
//     date : Date().toString(),
//     wish : function(){
//         console.log("happy birthday")
//      },
//     Wish_with_name : function(){
//      console.log(`happy birthday ${this.name}`)
// }
// }

// console.log(info.name)
// console.log(info.date)
// console.log(info.wish())
// console.log(info.Wish_with_name())

//********************************************************************* */
// let info = {
//     name : "naveen",
//     date : Date().toString(),
   
// }

// info.Wish = function(){
//     console.log("happy birthday")
// }

// info.Wish_with_name = function(){
//     console.log(`happy birthday ${this.name}`)
// }
// console.log(info.name)
// console.log(info.date)
// console.log(info.Wish())
// console.log(info.Wish_with_name())

//..............................


// if we have already a function

// let Wish = function(){
// console.log("happy birthday ")
// }


// let info={
//     name:"Naveen",
//     class:"BCA",
//     Wishing : Wish,
//     WishingNext:function(){
//         console.log(`happy birthday  ${this.name} baby`)
        
//     },
//     age : ()=>{
//             console.log("hii my age is 23")
//     }
// }


// console.log(info.name)
// console.log(info.class)
// console.log(info.Wishing())
// console.log(info.WishingNext())
// console.log(info.age())


//....................................................................................
//...................................................................................

// let info = {}
// let information = new Object()
// console.log(information)
// console.log(info)


// let info = {
//     name:"naveen",
//     age:34
// }
// console.log(info)
// console.log(info.name)

//...................................

// let information = new Object()
// information.Name = "Naveen"
// information.Age = "23"
// information.Addresh = "Jaipur"

// console.log(information)

//...........................................

// like this object nesting are posible 

// let information = new Object()
// information.Name = "Naveen"
// information.Age = "23"
// information.Addresh = {
//     country: "india",
//     // state : {
//     //     mystate: "rajshan"
//     // }
// }
// information.education = "MCA"


// console.log(information)
// console.log("name is :"+information.Name)
// console.log("country is :"+information.Addresh.country)
// console.log("state is :"+information.Addresh.state?.mystate)

//.....................................................................


// let obj1 = {1:'a',2:'b',3:'c'}
// let obj2 = {6:'f',7:'g',8:'h',info:{name:"naveen"}}

// console.log(obj1.hasOwnProperty(6))


// let obj3 = {obj1,obj2}
// console.log(obj3)

// let obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)


// let obj3 = Object.assign(obj1,obj2)
// console.log(obj3)
// console.log(obj1)  //{ '1': 'a', '2': 'b', '3': 'c', '6': 'f', '7': 'g', '8': 'h' }

// console.log(obj3===obj1) // true

// let obj3 = {...obj1,...obj2}
// console.log(obj3)

// console.log(obj1[2])
// console.log(obj2["info"].name)

// console.log(Object.keys(obj1))
// console.log(Object.values(obj2))
// console.log(Object.entries(obj2))


//........................................................................................


// const information = {
//     name:"naveen",
//     class:"MCA",
//     rollNo : "434"
// }

// // console.log(information.name)

// const {name} = information
// const {class:course} = information
// const {rollNo:roll} = information
// console.log(name)
// console.log(course)
// console.log(roll)

//....................................................................................

/* functions .............  */

// function Test(num1,num2){
    
//     return num1+num2
//     console.log("hii this is Test function")
// }
// total=Test(12,12)
// console.log(total)



//******************************************************************* */
// function Test(num1){

//     if (num1 ===undefined){
//         console.log("plese provid ea number")
//     }
//     else {
//         console.log(`my number is ${num1}`)
//     }

//     return num1
    
// }

// total=Test(23)
// console.log(total)

//******************************************************* */


// rest parameater

// function multiple_rates(...rates){
//     console.log(rates)
// }

// multiple_rates(100,200,300,350,356)


//********************************************************* */

//object in function parameater
/*
function Test(rate1,rate2, ...all_other_rate){
    console.log(`hii this rate of items ${rate1}  and  ${rate2}   or ${all_other_rate} `)
}
  
Test(10,304,23,55)   */

/*
info ={
    name:"naveen",
    rollNo:"123",
    Addresh:"bhiwani"

}

function Test(my_object){
            console.log(my_object.name)
            console.log(my_object.rollNo)
            console.log(my_object.Addresh)
            console.log(my_object.stream)

}

// Test(info)
Test({ name:"naveen",
    rollNo:"123",
    Addresh:"bhiwani"})
*/



// Array in function parameater

// myArray=["naveen","ankit","lankesh","ranakumbha"]
// function Test(myArray,...otherdata){
//         console.log(`my Array is ${myArray} and my other array is ${otherdata}`)
// }

// Test(myArray,["a","b"],[90,10])
// Test([10,30,50,34])


// ..................................................................
//..................................................................



// function One(){
//     const Comapany="Techqware"

//     function empoyee() {
//         ceo="shatrughan bhatti"
//         console.log(Comapany)
//         console.log(ceo)
//     }
//     empoyee()
// }
// One()
//......................................................................
//.....................................................................

/*

function Proparty() {
    name="Techware private ltd"
    

    function employee(){
        var softwareLead="shatrughan bhatti"
        console.log(name)
        console.log(softwareLead)

        function refrence(){
            node_employee1 = "maitree"
            node_employee2 = "Naveen"

            console.log("employee1 :",node_employee1)
            console.log("employee2 :",node_employee2)
        }
        
        refrence()
    }
    employee()
    
}

Proparty()  */



// function are store in the variable 

// const myinfo = function(...Test){
//     return(Test)
// }

// console.log(myinfo("naveen","kumar"))
// myinfo()


//......................................................................


// let Info ={
//     name:"Naveen",
//     roll:"34",

//     msg : function (){
//         console.log(`hii good morning ${this.name}`)

//     }
    
// }
// console.log(Info.msg())


// function Test(){
//         console.log(this)

//     }
// Test()


// here this are come in (arrow function)
// const info = () => {
//         console.log(this)
//     }
// info()


//********************************************************************************** */
// const info = (num1,num2) => {
//         return num1+num2
//      }
// console.log(info(12,12))


// const info = (num1,num2) =>  num1+num2
// console.log(info(12,12))

// const info = (num1,num2) => ( num1+num2)
// console.log(info(12,12))

// if we give any object 

// const info = () => ({username:"naveen"})
// console.log(info())



// we use a block  then we must use the return 

// const info = (num1,num2) =>  {
//     return num1+num2

// }
// console.log(info(12,12))

//....................................................................................

