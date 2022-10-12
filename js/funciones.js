//usar dom//
const title = document.createElement('h1')
title.innerText = 'Algo'
const button = document.createElement('button')
button.innerText = 'click'
button.style = 'background: red; color: white;'
button.addEventListener('click', function(){
    title.innerText = 'Otro texto'
    alert('ojito')
})
document.body.append(title)
document.body.append(button)
