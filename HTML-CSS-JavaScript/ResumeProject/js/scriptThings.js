// I REALIZE I CAN USE JQUERY BUT THIS IS MY WEBSITE SO I SHOULD DO IT ALL
// Plus more learning, maybe?
// I just forgot about it to be honest.

const resumeBtn = document.getElementById("resBtn");
var resumeState = false;
resumeBtn.addEventListener("click", function(){
    imageOpen('../Images/OctResume.jpg', 'resumeAppear', 'resBtn')
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