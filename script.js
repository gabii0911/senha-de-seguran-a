const tamanhoTexto=document.getElementById("tamanho");

let tamanho=12;

const senhaDiv=document.getElementById("senha");

const tempo=document.getElementById("tempo");

const barra=document.getElementById("forca");

const textoForca=document.getElementById("textoForca");

document.getElementById("mais").onclick=()=>{

if(tamanho<50){

tamanho++;

tamanhoTexto.innerText=tamanho;

gerarSenha();

}

}

document.getElementById("menos").onclick=()=>{

if(tamanho>4){

tamanho--;

tamanhoTexto.innerText=tamanho;

gerarSenha();

}

}

document.querySelectorAll("input").forEach(e=>{

e.onchange=gerarSenha;

});

document.getElementById("gerar").onclick=gerarSenha;

function gerarSenha(){

let caracteres="";

if(document.getElementById("maiusculas").checked)

caracteres+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

if(document.getElementById("minusculas").checked)

caracteres+="abcdefghijklmnopqrstuvwxyz";

if(document.getElementById("numeros").checked)

caracteres+="0123456789";

if(document.getElementById("simbolos").checked)

caracteres+="!@#$%&*()_+-=[]{}<>?/";

if(caracteres==""){

senhaDiv.innerHTML="Selecione pelo menos uma opção";

tempo.innerHTML="";

return;

}

let senha="";

for(let i=0;i<tamanho;i++){

senha+=caracteres[Math.floor(Math.random()*caracteres.length)];

}

senhaDiv.innerHTML=senha;

calcularForca();

calcularTempo(caracteres.length);

}

function calcularForca(){

let pontos=0;

if(document.getElementById("maiusculas").checked)pontos++;

if(document.getElementById("minusculas").checked)pontos++;

if(document.getElementById("numeros").checked)pontos++;

if(document.getElementById("simbolos").checked)pontos++;

pontos+=Math.floor(tamanho/6);

if(pontos<=3){

barra.style.width="30%";

barra.style.background="red";

textoForca.innerHTML="Fraca";

}

else if(pontos<=5){

barra.style.width="65%";

barra.style.background="orange";

textoForca.innerHTML="Média";

}

else{

barra.style.width="100%";

barra.style.background="lime";

textoForca.innerHTML="Forte";

}

}

function calcularTempo(base){

const combinacoes=Math.pow(base,tamanho);

const tentativasSegundo=1000000000000;

const segundos=combinacoes/tentativasSegundo;

const dias=segundos/86400;

const anos=dias/365;

if(anos<1){

tempo.innerHTML=`≈ ${dias.toFixed(2)} dias`;

}

else if(anos<1000000){

tempo.innerHTML=`≈ ${anos.toLocaleString()} anos`;

}

else{

tempo.innerHTML=`≈ ${(anos/1000000000).toFixed(2)} bilhões de anos`;

}

}

gerarSenha();