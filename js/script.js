var dayIndex, gender;

function calculateDay(){
    var date = document.getElementById("birthdate").value;
    var dt = new Date(date);
    dayIndex = dt.getDay();
    alert(dayIndex);
    display();
    
}

function display(){
    var checkedValue = null;
    gender = document.getElementsByName("gender");
        for(var i=0; gender[i]; ++i){
            if(gender[i].checked){
                 checkedValue = gender[i].value;
            break;
            }
        }
    alert(checkedValue);
    var boysNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku","Yaw", "Kofi", "Kwame"];
    var girlsNames = ["Akosua", "Adwoa", "Abenaa", "Akua","Yaa", "Afua", "Ama"];
    if (dayIndex === 0 && checkedValue === male)
    {}

     //var lName = document.getElementById("name").value = ""+"";

}
