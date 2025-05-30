function toggleMenu() {

    let x = document.getElementById("links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

    let m = document.getElementById("bars");
    if (m.src.endsWith("images/menu.png")) {
        m.src = "images/cross.png";
    } else {
        m.src = "images/menu.png";
    }
}

// if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

//     document.write("mobile device");
//     console.log("mobile");
// }else{

//     document.writeln("<div style='position:fixed;width:100%;height:100%;top:150px;left:0px;background-color:black;'><img style='width:50%;margin:0 auto;display:block;' src='ma.jpg'></div>");
//     window.stop();
// }

window.onload = function (){
    if (document.getElementById('video2') != undefined){
        document.getElementById('video2').addEventListener('ended', videoHandler, false);
    } else {
        document.getElementById('content2').style.display = 'block';
        console.log("No video");
    }
};
function videoHandler(e) {
    // What you want to do after the event
    document.getElementById('content2').style.display = 'block';
    document.getElementById('video2').style.display = 'none';
}
