function imageDisplay(src, givenId, location, buttonId) {
    var img = document.createElement("img");
    img.src = src;
    img.id = givenId;
    alert(buttonId);
    //getElementById(buttonId).style.visibility="hidden";

    document.getElementById(location).appendChild(img);
}

function hello() {
    alert("HELLO")
}

function toggleText() {
    var text = document.getElementById("resumeAppear");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }