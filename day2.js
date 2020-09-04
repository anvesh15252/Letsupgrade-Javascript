// Question 1
// programm to find a particular character in a string

let name = "community";
console.log(name[4]);


// Question 2
// program to convert minutes to seconds

let minutes = 5;
seconds = minutes*60;
console.log(seconds);



// Question 3
// program to search for a element in a array of strings

let string = ["welcome","javascript","course","from","letsupgrade"];
let value = 'course';
c = string.find(
    function(string) {
        return string == value;
    }
);
console.log(c);



// Question 4
// program to display only elements containing 'a' in them from a array
let data1 = ["book","laptop","community","javascript","course","telegram"];
for(let i=0;i<data1.length;i++)
{
    if(data1[i].includes("a"))
    {
        console.log(data1[i]);
    }
}




// Question 5
// print an array in reverse order
let arr = ["javascript","course","from","letsupgrade"];
console.log(arr.reverse());
