/**
 * Conversion de metros, pulgdas, pies y yardas
 * @method conversionUnidades
 * @param (string) id -id de los inouts del formulario
 * @param (Number) valor- Si valor de los inputs del formulario
 * @return Valor que retorna
 */
function conversionUnidades(id, value) {
    let metro, pulgada, pie, yarda;

    if (value.includes(",")){
        value = value.replace(",", ".");
    }

    if (isNaN(value)){
        alert("Se ingreso un valor incorrecto");
        metro ="";
        pulgada ="";
        pie ="";
        yarda="";
    } else if (id=="metro"){
        metro = value;
        pulgada ="39.3701"*value;
        pie ="3.28084"*value;
        yarda ="1.09361"*value;
    } else if (id=="pulgada"){
        pulgada = value;
        metro ="0.0254"*value;
        pie ="0.0833333"*value;
        yarda ="0.0277778"*value;
    } else if (id=="pie"){
        pie = value;
        metro ="0.3048"*value;
        pulgada ="12"*value;
        yarda ="0.333333"*value;
    } else if (id=="yarda"){
        yarda = value;
        metro ="0.9144"*value;
        pulgada ="36"*value;
        pie ="3"*value;
    }
    document.lasUnidades.unid_metro.value = Math.round(metro*100)/100;
    document.lasUnidades.unid_pulgada.value = Math.round(pulgada*100)/100;
    document.lasUnidades.unid_pie.value = Math.round(pie*100)/100;
    document.lasUnidades.unid_yarda.value = Math.round(yarda*100)/100;
}

function convertirGR(id) {
    var grad, rad;
    if (id=="grados") {
        grad = document.getElementById("grados").value;
        rad = (grad* Math.PI)/180;
    } else if (id=="radianes") {
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

function mostrar_ocultar(valorMo){
    if (valorMo == "val_mostrar") {
        document.getElementById("divMo").style.display = 'block';
    } else if (valorMo == "val_ocultar") {
        document.getElementById("divMo").style.display = 'none';
    }
}

function calcularSuma() {
    let num1, num2;
    num1 = Number(document.getElementById("nums1").value);
    num2 = document.getElementsByName("sum_num2")[0].value;
    document.getElementById("totalS").innerHTML = num1 + Number(num2);
}
function calcularResta() {
    let num1, num2;
    num1 = Number(document.getElementById("numr1").value);
    num2 = document.getElementsByName("res_num2")[0].value;
    document.getElementById("totalR").innerHTML = num1 - Number(num2);
}
function calcularMultiplicacion() {
    let num1, num2;
    num1 = Number(document.getElementById("numm1").value);
    num2 = document.getElementsByName("mul_num2")[0].value;
    document.getElementById("totalM").innerHTML = num1 * Number(num2);
}
function calcularDivision() {
    let num1, num2;
    num1 = Number(document.getElementById("numd1").value);
    num2 = document.getElementsByName("div_num2")[0].value;
    document.getElementById("totalD").innerHTML = num1 / Number(num2);
}


function cargarWeb() {
    let cantidad, unidad, urlComp;

    cantidad = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp = "segundaWeb.html#" + cantidad + "#" + unidad;
    window.open(urlComp);
}

function cargarResultado() {
    let urlComp, can, unid;

    urlComp = window.location.href.split("/")[5];
    can = urlComp.split("#")[1];
    unid = urlComp.split("#")[2];
    document.getElementById("dist").value = can + " " + unid;
}
function DibujarCirCua(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var  xMax = canvas.width;
    var yMax = canvas.height;
    var Margen = 5;
    ctx.fillStyle = "#333899";
    ctx.fillRect(0+Margen,yMax-40-Margen,40,40);
    ctx.arc(xMax/2, yMax/2,20, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
}

var bandera;
function Dibujar(event){
    var canvas = document.getElementById("CanvasADibujar");
    var ctx = canvas.getContext("2d");
    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX, posY);
    canvas.onmousedown = function () {bandera=true};
    canvas.onmouseup = function () {bandera=false};
    if (bandera){
        ctx.fillRect(posX, posY, 10, 10);
        ctx.fill;
    }
}

function Limpiar(){
    var canvas = document.getElementById("CanvasADibujar");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;
}

function DibujarCuadriculado() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var AlturaMax = canvas.height;
    var AnchoMax = canvas.width;
    ctx.beginPath();
    for (var i=0; i<AlturaMax;){
        ctx.moveTo(0,i);
        ctx.lineTo(AnchoMax,i);
        ctx.strokeStyle = "#2d4fb0";
        ctx.stroke();
        i = i+20;
    }
    ctx.closePath();
    ctx.beginPath();
    for (var i=0; i<AnchoMax;){
        ctx.moveTo(i,0);
        ctx.lineTo(i,AlturaMax);
        ctx.strokeStyle = "#2d4fb0";
        ctx.stroke();
        i = i+20;
    }
    ctx.closePath();
    ctx.beginPath();
        ctx.moveTo(0,AlturaMax/2);
        ctx.lineTo(AnchoMax,AlturaMax/2);
        ctx.strokeStyle = "#de0b35";
        ctx.stroke();
        ctx.moveTo(AnchoMax/2,0);
        ctx.lineTo(AnchoMax/2,AlturaMax);
        ctx.strokeStyle = "#de0b35";
        ctx.stroke();
        ctx.closePath();
}

function DibujarImagen(Posx, Posy){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    console.log(Posx, Posy);
    var img = new Image();
    canvas.width = canvas.width;
    img.src = "images/auto.png"
    img.onload = function (){
        ctx.drawImage(img, Posx, Posy);
    }
}