// learning the getElementById
let heading = document.getElementById("headings");
//console.log(heading)

let para = document.getElementsByClassName("paratext");
for (let i=0; i< para.length; i++){
    para[i].style.color="red";
}

let maindiv= document.getElementById("maindiv");
maindiv.style.border="2px solid red"
document.getElementById("artone").innerHTML="changed content";

let spanone = document.getElementsByClassName("spanone");
//console.log(spanone[1])
for (let i=0; i<spanone.length; i++){
    if (i === 1){
        spanone[i].style.color="green";
    }
    else{
        spanone[i].style.color="blue";
    }  
}

let ptag=document.getElementsByTagName("p");
//console.log(ptag);
ptag[0].innerHTML="change paragraph";

let divpara = document.querySelector("#divpara");
let divbutton = document.querySelector("#divbutton");

divbutton.addEventListener("click", clickButton);

function clickButton(){
    //divpara.innerHTML="changed"
    divpara.classList.toggle("test");
} 

let username = document.getElementById("username");
let submit = document.getElementById("submit");



submit.addEventListener("click", (e)=>{
    e.preventDefault();
    let email=document.getElementById("email")
    console.log(username.value);
    console.log(email.value)
})

//document.createChild("p")


class Shape{
    constructor(noOfSides){
        this.noOfSides = noOfSides;
    }
    determineShape(){
        if(this.noOfSides < 3){
            return `this is not a valid shape`
        }
        else if(this.noOfSides === 3){
            return `this is a triangle because it has ${this.noOfSides} sides`
        }
        else if(this.noOfSides === 4){
            return `this is a square because it has ${this.noOfSides} sides`
        }
        else{
            return `this is a polygon with ${this.noOfSides} sides`
        }
    }       
        
}
let shape = new Shape(10);
console.log(shape.determineShape())