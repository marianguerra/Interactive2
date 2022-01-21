
let hoverables = document.querySelectorAll('.hoverable')
let loupe = document.querySelector('#loupe')



for(let counter = 0; counter < hoverables.length; counter ++){
  hoverables[counter].addEventListener('mouseenter',function(event){
    loupe.classList.add('active')
    loupe.style.background = 'url('+hoverables[counter].src+')'

  })

  hoverables[counter].addEventListener('mouseleave',function(event){
    loupe.classList.remove('active')
  })


  hoverables[counter].addEventListener('mousemove',function(event){
    let x = event.pageX - loupe.clientWidth / 2
    let y = event.pageY - loupe.clientHeight / 2

    let pictureX = event.offsetX / this.clientWidth
    let pictureY = event.offsetY / this.clientHeight

    loupe.style.left = x + "px"
    loupe.style.top = y + "px"


    let imageWidth = this.naturalWidth - loupe.clientWidth
    let imageHeight = this.naturalHeight - loupe.clientHeight

    loupe.style.backgroundPositionX = -(imageWidth * pictureX) + "px"
    loupe.style.backgroundPositionY = -(imageHeight * pictureY) + "px"
  })
}
