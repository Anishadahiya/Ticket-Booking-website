let buttons = document.querySelectorAll(".book-btn");

buttons.forEach(function(button){

    button.addEventListener("click",function(){

        button.style.backgroundColor="orange";

        alert("Ticket Booked Successfully!");

    });

});
document.getElementById("bookingForm")
.addEventListener("submit",function(e){

e.preventDefault();

let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

if(name==="" || email==="")
{
    alert("Please fill all fields");
}
else
{
    alert("Booking Successful");
}

});

function scrollToEvents(){
    document.querySelector(".events")
    .scrollIntoView({
        behavior:"smooth"
    });
}

function showForm(){
    document.getElementById("bookingForm").style.display = "block";
}
function confirmBooking(){
    alert("🎉 Ticket Booked Successfully!");
}