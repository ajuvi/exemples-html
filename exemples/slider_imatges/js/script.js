var fotos = new Array();
		
fotos.push("./imatges/foto1.jpg");
fotos.push("./imatges/foto2.jpg");
fotos.push("./imatges/foto3.jpg");
fotos.push("./imatges/foto4.jpg");
fotos.push("./imatges/foto5.jpg");
var i = 0;

function seguent(){
    i = (i+1) % fotos.length;
    document.getElementById("foto").src=fotos[i];
}
function anterior(){
    i = (fotos.length + i - 1) % fotos.length;
    document.getElementById("foto").src=fotos[i];
}

seguent();