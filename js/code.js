//elemento fechar
// var btFechar = document.getElementById('btFechar')
var btFechar = document.querySelector('.popup .fechar')
var oferta = document.getElementById('oferta')

//Evento clique no elemento fechar
btFechar.addEventListener('click', ()=>{
    alert('Fui clicado')
    //alteração de CSS em tempo real
    oferta.style.display = 'none'
})



// var num = 12
// var raiz = Math.sqrt(num)

// console.log(raiz)
// console.log(Math.round(raiz))
// console.log(Number(raiz.toFixed(2)) + 4)