
// Question 1
// Create a array containing five objects with properties{name,age,city,salary}
//     A. Display all objects in a table
//     B. Create a Search functionality for name and city
//     C. Delete button to delete records
//     D. Data is not permanent


let Employeedatas = [
    {
        Name: "Lokesh",
        Age:  25,
        City: "Tirupati",
        Salary: "30000",
    },
    {
        Name: "Keerthi",
        Age: 23,
        City: "Vijayawada",
        Salary: "25000",
    },
    {
        Name: "Simhadri",
        Age: 24,
        City: "Guntur",
        Salary: "32000",
    },
    {
        Name: "Sreedhar",
        Age: 35,
        City: "Hyderabad",
        Salary: "40000",
    },
    {
        Name: "Dinesh",
        Age: 27,
        City: "Vizag",
        Salary: "35000",
    },
];

function display(superarray){
    let tabledata= "";
    let Srno = 1;
superarray.forEach(function(Employeedata,index) {
    let currentrow = `<tr>
    <td>${Srno}</td>
    <td>${Employeedata.Name}</td>
    <td>${Employeedata.Age}</td>
    <td>${Employeedata.City}</td>
    <td>${Employeedata.Salary}</td>
    <td><button onclick='deleteEmployeedata(${index})'>delete</button></td>
    </tr>`;
    
    tabledata += currentrow;
    Srno++;
});
// document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
document.getElementById("tdata").innerHTML = tabledata;
}
display(Employeedatas);

function addEmployeedata(e){
    e.preventDefault();
    let Employeedata = {};
    let Name = document.getElementById('name').value;
    let Age = document.getElementById('age').value;
    let City = document.getElementById('city').value;
    let Salary = document.getElementById('salary').value;
    Employeedata.Name = Name;
    Employeedata.Age = Number(Age);
    Employeedata.City = City;
    Employeedata.Salary = Number(Salary);

    Employeedatas.push(Employeedata);
    
    display(Employeedatas);

     document.getElementById('name').value="";
     document.getElementById('age').value="";
     document.getElementById('city').value="";
     document.getElementById('salary').value="";

}







function searchByName() {
 let searchValue = document.getElementById('searchbyname').value;

 
 let newdata = Employeedatas.filter(function (Employeedata) {
     return (
         Employeedata.Name.toUpperCase().indexOf(searchValue.toUpperCase())!=-1 
         );
});
 display(newdata);
}

function searchByCity() {
    let searchValue = document.getElementById('searchbycity').value;
   
    
    let newdatas = Employeedatas.filter(function (Employeedata) {
        return (
            Employeedata.City.toUpperCase().indexOf(searchValue.toUpperCase())!=-1 
            );
   });
    display(newdatas);
   }
   





function deleteEmployeedata(index){
    Employeedatas.splice(index,1);
    display(Employeedatas);
}