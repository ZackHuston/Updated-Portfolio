const aboutMe = document.getElementById("about").addEventListener("click", about)
const firstId = $("#first")
const secondId = document.getElementById("second")
const thirdId = document.getElementById("third")

function about(){
   firstId.remove()
   secondId.remove()
   thirdId.remove()
   $(".intro").append("HEY! I'M Zack, ").css({"color": "white", "font-size": "100px"})
}

