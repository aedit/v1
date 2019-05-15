const buttons = Array.from(document.querySelectorAll('.button'))
const contents = Array.from(document.querySelectorAll('.content'))

//Typewriter Effect

function setupTypewriter(t) {
  var HTML = t.innerHTML
  t.innerHTML = ''
  var cursorPosition = 0,
    tag = '',
    writingTag = false,
    tagOpen = false,
    typeSpeed = 100,
    tempTypeSpeed = 0

  var type = function() {
    if (writingTag === true) {
      tag += HTML[cursorPosition]
    }

    if (HTML[cursorPosition] === '<') {
      tempTypeSpeed = 0
      if (tagOpen) {
        tagOpen = false
        writingTag = true
      } else {
        tag = ''
        tagOpen = true
        writingTag = true
        tag += HTML[cursorPosition]
      }
    }
    if (!writingTag && tagOpen) {
      tag.innerHTML += HTML[cursorPosition]
    }
    if (!writingTag && !tagOpen) {
      if (HTML[cursorPosition] === ' ') {
        tempTypeSpeed = 0
      } else {
        tempTypeSpeed = Math.random() * typeSpeed + 50
      }
      t.innerHTML += HTML[cursorPosition]
    }
    if (writingTag === true && HTML[cursorPosition] === '>') {
      tempTypeSpeed = Math.random() * typeSpeed + 50
      writingTag = false
      if (tagOpen) {
        var newSpan = document.createElement('span')
        t.appendChild(newSpan)
        newSpan.innerHTML = tag
        tag = newSpan.firstChild
      }
    }

    cursorPosition += 1
    if (cursorPosition < HTML.length - 1) {
      setTimeout(type, tempTypeSpeed)
    }
  }

  return {
    type: type,
  }
}

var typewriter = document.getElementById('typewriter')

typewriter = setupTypewriter(typewriter)

let x = true

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('about') && x) {
      typewriter.type()
      x = false
    }
    buttons.forEach(b => {
      b.classList.remove('buttonoff')
    })
    btn.classList.add('buttonoff')
    const contentclass = btn.classList[1] + 'window'
    contents.forEach(ctn => {
      ctn.classList.add('contentoff')
      ctn.classList.remove('contenton')
      if (ctn.classList.contains(contentclass)) {
        ctn.classList.remove('contentoff')
        ctn.classList.add('contenton')
      }
    })
  })
})
//Caraousel Effect
const carouselslide = document.querySelector('.slidecontainer')
const carouseldivs = Array.from(document.querySelectorAll('.carouseldiv'))

const workleft = document.querySelector('.workleft')
const workright = document.querySelector('.workright')

let counter = 1

const size = carouseldivs[0].clientWidth

carouselslide.style.transform = `translateX(${-size * counter}px)`

workright.addEventListener('click', () => {
  if (counter >= carouseldivs.length - 1) return
  carouselslide.style.transition =
    'transform 2.2s cubic-bezier(1,-0.8,.02,1.71)'
  counter++
  carouselslide.style.transform = `translateX(${-size * counter}px)`
})

workleft.addEventListener('click', () => {
  if (counter <= 0) return
  carouselslide.style.transition =
    'transform 2.2s cubic-bezier(1,-0.8,.02,1.71)'
  counter--
  carouselslide.style.transform = `translateX(${-size * counter}px)`
})

carouselslide.addEventListener('transitionend', () => {
  if (carouseldivs[counter].id === 'lastclone') {
    carouselslide.style.transition = 'none'
    counter = carouseldivs.length - 2
    carouselslide.style.transform = `translateX(${-size * counter}px)`
  }
  if (carouseldivs[counter].id === 'firstclone') {
    carouselslide.style.transition = 'none'
    counter = carouseldivs.length - counter
    carouselslide.style.transform = `translateX(${-size * counter}px)`
  }
})
