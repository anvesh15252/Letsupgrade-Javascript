// Question 1
// Create a webpage containing an image and a Three buttons
//  A. On click of second button a change the existing image to new image
//  B. On click of Third button change it once again
//  C.  On click of first, first image should come back


function changeImage() {
    const ele = document.getElementById("image");
 const newUrl = "https://i.pinimg.com/originals/dd/e4/da/dde4da8175c71a2559bba80224818f82.jpg"
 ele.src = newUrl;
 
 }
 
 function ChangeImageAgain() {
     const ele = document.getElementById("image");
 const newUrl ="https://www.denofgeek.com/wp-content/uploads/2019/04/ant-man-1-main.jpg?resize=768%2C432"
 ele.src = newUrl;
 }
 function firstImage(){
     const ele = document.getElementById("image");
 const newUrl ="https://www.syfy.com/sites/syfy/files/styles/1200x680_hero/public/2019/07/spider-man.jpg";
 ele.src = newUrl;
 }



// Question 2
// create a webpage containing two input fields and a button
//  A. Write something in the firstinput
//  B. On click of the button, the content of input one should be copied in the second input


function printValue()
{
    const elem = document.getElementsByClassName("input");
    elem[1].value = elem[0].value;
}




// Question 3
// Create a array of objects with objects have the following properties
// A. {name(string),age(number), country(string),hobbies array(string[])}
// B. Write a function to display all the objects on the console




 console.log("                         THIRD TASK                               ");


let heroes = [
    { 
        name: "spiderman",
        age: 20,
        country: "USA",
        hobbies: ["flying","helping","playing games"],
        
    },
    {
        name: "Antman",
        age: 35,
        country: "India",
        hobbies: ["eating","playing"],
    },
    {
        name: "Batsman",
        age: 25,
        country: "UK",
        hobbies: ["fighting","playing","reading"],
    },
    {
        name: "superman",
        age: 45,
        country: "India",
        hobbies: ["flying","reading","playing games"]
    },
];
for(let i = 0; i <= 3; i++) {
    console.log(heroes[i]);
}





// Question 4
// Following the 3rd Question
// A. Write a function to display all the objects having age less than 30
// B. Write a function to display all the objects having country India


console.log("                        FOURTH TASK                               ");


console.log("                        Age less than 30                    ")
function getAge(){
    for(let i=0; i<=3; i++){
        if(heroes[i].age<30){
            const element = heroes[i];
            console.log(element);
        }
    }
}
getAge();


console.log("                       Having Country India                    ")

function getCountry(){
    for(let i=0; i<=3; i++){
        if(heroes[i].country == "India"){
            const element = heroes[i];
            console.log(element);
        }
    }
}
getCountry();





