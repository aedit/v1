const play = document.querySelector('#play')
const menuitems = Array.from(document.querySelectorAll('.menu'))
const social = document.querySelector('#social')
const socialitems = document.querySelector('.socialicons')

play.addEventListener('click', evt => {
  if (evt.target.id === 'play')
    menuitems.forEach(menu => {
      if (
        menu.classList.contains('menuon') ||
        social.classList.contains('menuon')
      )
        menu.classList.remove('menuon')
      else menu.classList.add('menuon')
      socialitems.classList.remove('socialon')
    })
})

social.addEventListener('click', evt => {
  if (socialitems.classList.contains('socialon')) {
    socialitems.classList.remove('socialon')
    menuitems.forEach(menu => {
      menu.classList.add('menuon')
    })
  } else {
    socialitems.classList.add('socialon')
    menuitems.forEach(menu => {
      menu.classList.remove('menuon')
    })
    social.classList.add('menuon')
  }
})
