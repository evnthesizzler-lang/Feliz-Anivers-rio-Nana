const botao = document.getElementById("botaoComecar");

const inicio = document.getElementById("inicio");

const jogo = document.getElementById("jogo");


botao.onclick = function(){

inicio.style.display="none";

jogo.style.display="block";

};



const envelope = document.getElementById("envelope");


const carta = document.getElementById("carta");



let mensagem = `Gui, feliz aniversário 💗

Antes de tudo, eu quero agradecer por todas as vezes que você foi incrível comigo.

Obrigado pelas conversas, pelos momentos e por sempre ter sido uma pessoa especial.

Eu sei que em algum momento eu errei e acabei quebrando sua confiança.

Eu me arrependo disso de verdade, porque você merece receber o melhor de mim.

Eu amo muito quem você é.

Amo ver você crescendo, evoluindo e conquistando seus sonhos.

É muito bonito ver a pessoa incrível que você está se tornando.

Espero que seu aniversário seja cheio de felicidade, amor e momentos inesquecíveis.

Obrigado por existir 🤍`;



envelope.onclick=function(){


envelope.style.display="none";


carta.style.display="block";


digitar();


criarCoracoes();


};




function digitar(){

let texto=document.getElementById("texto");

let i=0;


function escrever(){


if(i < mensagem.length){

texto.innerHTML += mensagem[i];

i++;

setTimeout(escrever,35);

}


}


escrever();


}





function criarCoracoes(){


setInterval(()=>{


let coracao=document.createElement("div");


coracao.innerHTML="❤️";


coracao.style.position="absolute";

coracao.style.left=Math.random()*100+"vw";

coracao.style.bottom="-20px";


document.body.appendChild(coracao);



let animacao=coracao.animate(

[

{
transform:"translateY(0)",
opacity:1
},

{
transform:"translateY(-100vh)",
opacity:0
}

],

{

duration:4000

}

);



animacao.onfinish=()=>coracao.remove();



},500);



}




// estrelas


const canvas=document.getElementById("stars");

const ctx=canvas.getContext("2d");


canvas.width=window.innerWidth;

canvas.height=window.innerHeight;


let estrelas=[];


for(let i=0;i<150;i++){


estrelas.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height

});


}



function animarEstrelas(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);


ctx.fillStyle="white";


estrelas.forEach(e=>{


ctx.fillRect(
e.x,
e.y,
2,
2
);



e.y+=0.3;



if(e.y>canvas.height){

e.y=0;

}



});



requestAnimationFrame(animarEstrelas);


}



animarEstrelas();
