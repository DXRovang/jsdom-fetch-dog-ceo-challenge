console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 

document.addEventListener('DOMContentLoaded', function(){
  fetch(imgUrl).then(r => r.json()).then(data => addDogs(data))
})

const divis = document.getElementById('dog-image-container')

function addDogs(data){
  let li = document.createElement('li')
  for(element in data){
    li.innerHTML = element
    divis.appendChild(li)
  }
}
