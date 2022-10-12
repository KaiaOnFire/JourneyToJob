// I REALIZE I CAN USE JQUERY BUT THIS IS MY WEBSITE SO I SHOULD DO IT ALL
// Plus more learning, maybe?
// I just forgot about it to be honest.

const resumeBtn = document.getElementById("resBtn");
const UserModel = require("/HTML-CSS-JavaScript-Project/models/user.js")
var resumeState = false;

resumeBtn.addEventListener("click", function(){
    imageOpen('/HTML-CSS-JavaScript-Project/Images/OctResume.jpg', 'resumeAppear', 'resBtn')
});


function hide(ElementId) {
    var thing = document.getElementById(ElementId);
    thing.style.display = "none";
}

function show(ElementId) {
    var thing = document.getElementById(ElementId);
    thing.style.display = "block"
}

function imageOpen(src, location, buttonId) {
    if (resumeState == false) {
        var img = "<img src='" + src + "'/>"

        var btn = document.getElementById(buttonId);

        btn.innerHTML = img;
        btn.id = buttonId;

        resumeState = true;

    } else { 
        var btn = document.getElementById(buttonId);

        btn.innerHTML = "You've already seen it but up to you??";
        btn.id = buttonId;

        resumeState = false;
    }
    

    document.getElementById(location).appendChild(btn);
}

function hello() {
    alert("HELLO")
}

function openBigTab(tabName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(tabName).style.display = "block";
    
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
    document.body.backgroundColor = color;
}
  
document.getElementById("defaultOpen").click(); 
  