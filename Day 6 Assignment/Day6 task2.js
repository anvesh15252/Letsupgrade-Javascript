
// Question2
// Create a blank array and later on create a add bus functionality bus object contains {name,source,destination,number,passengercapacity}
//     A. A form to add new bus
//     B. Display data in table format
//     C. Search by source and destination
//     D. Data should be stored permanently in a local storage


window.onload = function () {
let Busservices = [





];
    if (localStorage.getItem("Busservices") == null) {
        localStorage.setItem("Busservices",JSON.stringify(Busservices));
    }
};

function display(superarray = undefined){

    let tabledata= "";
    let Busservices;
     if(superarray==undefined){
       Busservices  = JSON.parse(localStorage.getItem("Busservices"));
     }
     else
     {
        Busservices = superarray;

     }
    let Srno = 1;
Busservices.forEach(function(Busservice,index) {
    let currentrow = `<tr>
    <td>${Srno}</td>
    <td>${Busservice.Name}</td>
    <td>${Busservice.Source}</td>
    <td>${Busservice.Destination}</td>
    <td>${Busservice.Number}</td>
    <td>${Busservice.Passengercapacity}</td>

    </tr>`;
    
    tabledata += currentrow;
    Srno++;
});
// document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
document.getElementById("tdata").innerHTML = tabledata;
}
display();



function addBusservice(e){
    e.preventDefault();
    let Busservice = {};
    let Name = document.getElementById('name').value;
    let Source = document.getElementById('source').value;
    let Destination = document.getElementById('destination').value;
    let Number = document.getElementById('number').value;
    let Passengercapacity = document.getElementById('passengercapacity').value;
    Busservice.Name = Name;
    Busservice.Source = Source;
    Busservice.Destination = Destination;
    Busservice.Number = Number;
    Busservice.Passengercapacity = Passengercapacity;
     
    let Busservices = JSON.parse(localStorage.getItem("Busservices"));
    Busservices.push(Busservice);
    localStorage.setItem("Busservices", JSON.stringify(Busservices));
    
    display();

     document.getElementById('name').value="";
     document.getElementById('source').value="";
     document.getElementById('destination').value="";
     document.getElementById('number').value="";
     document.getElementById('passengercapacity').value="";

}

function searchBySource() {
    let searchValue = document.getElementById('search').value;
    let Busservices = JSON.parse(localStorage.getItem("Busservices"));

    
    let newdata = Busservices.filter(function (Busservice) {
        return (
            Busservice.Source.toUpperCase().indexOf(searchValue.toUpperCase())!=-1 
            );
   });
    display(newdata);
   }
   
   
   function searchByDestination() {
    let searchValue = document.getElementById('searchdestination').value;
    let Busservices = JSON.parse(localStorage.getItem("Busservices"));

    
    let newdatas = Busservices.filter(function (Busservice) {
        return (
            Busservice.Destination.toUpperCase().indexOf(searchValue.toUpperCase())!=-1 
            );
   });
    display(newdatas);
   }
   
   
   
 