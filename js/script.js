var dayIndex, gender;
var boysNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku","Yaw", "Kofi", "Kwame"];
var girlsNames = ["Akosua", "Adwoa", "Abenaa", "Akua","Yaa", "Afua", "Ama"];

function calculateDay(){
    var date = document.getElementById("birthdate").value;
    if (date == "") {
        alert("Date must be filled out");
    }
    var dt = new Date(date);
    dayIndex = dt.getDay();
    display(); 
}

function display(){
    var checkedValue = null;
    gender = document.getElementsByName("gender");

        for(var i=0; gender[i]; i++){
            
             if(gender[i].checked){
                if (gender[i].value ==="male")
                    alert(boysNames[dayIndex]);   
                else if (gender[i].value ==="female")
                    alert(girlsNames[dayIndex]);                             
            }
            else 
            alert("Please enter your gender");        

    }
}
