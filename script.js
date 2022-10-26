const aboutMe = document.getElementById("about").addEventListener("click", about)
const myWork = document.getElementById("my-work").addEventListener("click", work)
const firstId = $("#first")
const secondId = $("#second")
const thirdId = $("#third")
const forWork = $("#for-work")
const hoirsean = $("#horisean")
const project = $("#project-one")
const backgroundOne = $("#background")

function about(){
   firstId.remove()
   secondId.remove()
   thirdId.remove()
   $(".intro").append("I am a new developer looking for my first real job. I've been coding for about 2 months and have beginner knowledge. I currently attend Butler Executive Education bootcamp. I have learned alot so far and will continue to do so. Before this and currently, I worked at Xfinity. I got very tired of it and wanted a change. I used to do a bit of base programing in school and loved it. Its been hard but rewarding and I cant wait to see where my journey takes me next! ").css({"color": "white", "font-size": "25px"})
}

function work(){
    $(".intro").remove()
    forWork.append("My Work.").css({"color": "white", "position": "absolute", "margin-top": "40%", "font-size": "30px"})
    backgroundOne.append("").css({"color": "#f0860c", "background-color": "#f0860c", "position": "absolute", "margin-top": "50%", "width": "100%", "height": "26.5%"})
    var elem = document.createElement("img");
    elem.setAttribute("src", "https://i.imgur.com/CLxUfgE.png");
    elem.setAttribute("height", "250");
    elem.setAttribute("width", "300");
    elem.setAttribute("alt", "Code Refactor");
    hoirsean.append(elem);
    if (aboutMe === "clicked") {
        forWork.remove()
        backgroundOne.remove()
        hoirsean.remove()
    }
}