let obj1 = {age:5,name:"Person1"};
let obj2 = {name:"Person1",age:5};

if(obj1.age == obj2.age && obj1.name == obj2.name){
    console.log("Equal");
} else {
    console.log("NotEqual");
}
