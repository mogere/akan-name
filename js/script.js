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

        for(var i=0; gender[i]; ++i){
            if(gender[i].checked){
                if(gender[i].value ==="male")
                alert(boysNames[dayIndex]);
                else if (gender[i].value ==="female")
                alert(girlsNames[dayIndex]);
                break;
            }
            else {
                alert("Please enter your gender");
               
        }
       
    }
   

    // if (dayIndex === 0 && checkedValue === "male")
    // {
    //     var akan = boysNames[0];
    //     alert(akan);
    //     document.getElementById("akan").innerHTML= akan;
    // }
    // else if (dayIndex === 1 && checkedValue === "male"){
    //     var akan = boysNames[1];
    //     alert(akan);
    // }
    // else if (dayIndex === 2 && checkedValue === "male"){
    //     var akan = boysNames[2];
    //     alert(akan);  
    // }
    // else if (dayIndex === 3 && checkedValue === "male"){
    //     var akan = boysNames[3];
    //     alert(akan);
    // }
    // else if (dayIndex === 4 && checkedValue === "male"){
    //     var akan = boysNames[4];
    //     alert(akan);
    // }
    // else if (dayIndex === 5 && checkedValue === "male"){
    //     var akan = boysNames[5];
    //     alert(akan);
    // }
    // else if (dayIndex === 6 && checkedValue === "male"){
    //     var akan = boysNames[6];
    //     alert(akan);
    // }
    // else if (dayIndex === 0 && checkedValue === "female"){
    //     var akan = girlsNames[0];
    //     alert(akan);
    // }
    // else if (dayIndex === 1 && checkedValue === "female"){
    //     var akan = girlsNames[1];
    //     alert(akan);  
    // }
    // else if (dayIndex === 2 && checkedValue === "female"){
    //     var akan = girlsNames[2];
    //     alert(akan);
    // }
    // else if (dayIndex === 3 && checkedValue === "female"){
    //     var akan = boysNames[3];
    //     alert(akan);
    // }
    // else if (dayIndex === 4 && checkedValue === "female"){
    //     var akan = girlsNames[4];
    //     alert(akan);
    // }
    // else if (dayIndex === 5 && checkedValue === "female"){
    //     var akan = girlsNames[5];
    //     alert(akan);
    // }
    // else if (dayIndex === 6 && checkedValue === "female"){
    //     var akan = girlsNames[6];
    //     alert(akan);
    // }

}

