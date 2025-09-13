


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

