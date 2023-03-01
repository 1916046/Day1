function checkValidity(){
    var form = document.getElementById("form");
    return form.checkValidity();
}

function showTable(){
    if(checkValidity()){
    var name= document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var contact= document.getElementById("contact").value;
    var age= document.getElementById("age").value;

    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);

    var nameCell = row.insertCell(0);
    var emailCell = row.insertCell(1);
    var contactCell = row.insertCell(2);
    var ageCell = row.insertCell(3);

    nameCell.innerHTML = name;
    emailCell.innerHTML = email;
    contactCell.innerHTML = contact;
    ageCell.innerHTML = age;

    table.style.display = "table";}
    else{
        alert("Please enter valid format");
    
}}