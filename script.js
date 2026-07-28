function createProfile () { 
    // alert("Button is working!");
    
    let name = document.getElementById('name').value;
    let age =document.getElementById('age').value;
    let subject=document.getElementById('subject').value;
    let colour = document.getElementById('colour').value;
    
    if (name == "" || age == "" || subject == "" || colour == "") {
        alert("Please fill all fields.");
        return;
    }    
    
    let todaydatebya = new Date();
    let hour = todaydatebya.getHours();
let greeting = "";

if (hour < 12) {
    greeting = "Good Morning";
} else if (hour < 18) {
    greeting = "Good Afternoon";
} else {
    greeting = "Good Evening";
}

document.getElementById("greeting").innerHTML = greeting + ", " + name + "!";
    document.getElementById("displayName").innerHTML = "Name :" + name;
    document.getElementById("displayAge").innerHTML = "Age: " + age;
    document.getElementById("displaySubject").innerHTML = "Favorite Subject: " + subject;
    document.getElementById("todaysdate").innerHTML = "Date " + todaydatebya.toDateString();
}
function resetProfile() {
    // alert("do you want to reset");
    card = document.getElementById("profileCard");
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("colour").value = "";
    document.getElementById("greeting").value="";

    document.getElementById("displayName").innerHTML = "";
    document.getElementById("displayAge").innerHTML = "";
    document.getElementById("displaySubject").innerHTML = "";
    document.getElementById("greeting").innerHTML = "";
    document.getElementById("todaysdate").innerHTML = "";
    document.getElementById("profileCard").style.backgroundColor = null;

    card.style.display = "block";

}
function changeTheme() {
    alert('changing Theme')

    let color = document.getElementById("colour").value;

    document.getElementById("profileCard").style.backgroundColor = color;

}
function hideProfile() {

    let card = document.getElementById("profileCard");

    if (card.style.display === "none") {
        card.style.display = "block";
    }
    else {
        card.style.display = "none";
    }


}

// classList.toggle()
// function changeTheme() {

//     document.body.classList.toggle("dark-theme");

