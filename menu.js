

// Função que deixa o li ativo
var menuItem = document.querySelectorAll('.item-menu');

function selectlink(){
    menuItem.forEach((item)=>
            item.classList.remove('ativo')  
    )

    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectlink)
)

// Expandir menu
var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
    
})
navMenu.forEach(x => x.classList.toggle('expandir'));