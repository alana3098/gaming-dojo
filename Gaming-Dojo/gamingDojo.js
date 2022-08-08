function imagefun() {
    var Image_Id = document.getElementById('getImage');
    if (Image_Id.src.match("stonepunk.png")) {
        Image_Id.src = "pixel-ninjas-2.png";
    }
    else {
        Image_Id.src = "stonepunk.png";
    }
}      
var i = 0;
    function buttonClick() {
        document.getElementById('inc').value = ++i;
    }  