console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 

document.addEventListener('DOMContentLoaded', function(){
  fetch(imgUrl).then(r => r.json()).then(data => addDogs(data))
})

function addDogs(data){
  let firstDiv = document.getElementById('dog-image-container')
  let array = data.message
  for(i = 0; i < array.length; i++){
    let images = document.createElement('img')
    images.src = array[i]
    firstDiv.appendChild(images)
  }
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function(){
  fetch(breedUrl).then(r => r.json()).then(data => addBreed(data))
})

function addBreed(data){
  let uls = document.getElementById('dog-breeds')
  let hash = data.message
  let array = Object.keys(hash)
  for(i = 0; i < array.length; i++){
    let li = document.createElement('li')
    li.innerText = array[i]
    uls.appendChild(li)
  }
}
let lister = document.querySelectorAll('li')

document.addEventListener('DOMContentLoaded', function(){
  
  for (i = 0; i <lister.length; i++){
    lister[i].addEventListener('click', function(){
      if (lister[i].innerHTML.fontcolor === "black"){
        lister[i].innerHTML.fontcolor = 'red'
      }else{
        lister[i].innerHTML.fontcolor = 'black'
      }
    })
  }
})




