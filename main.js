const botaoMenu = document.querySelector('.cabecalho_menu');
const menu = document.querySelector('.menu-lateral');

botaoMenu.addEventListener ('click', () => {
   menu.classList.toggle('menu-lateral--ativo');
})

let contagem = 1;
document.getElementById('radio1').checked = true;

setInterval( function () {
   proximaimagem();
}, 5000)

function proximaimagem () {
   contagem++;   
   if (contagem>4) {
      contagem = 1;
   }

   document.getElementById('radio'+ contagem).checked = true;
   
}



