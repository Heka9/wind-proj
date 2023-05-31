const gallery = () => {
   const initialDocumentWidth = document.body.clientWidth

   function lockScroll() {
      document.body.classList.add('lock')
      document.body.style.paddingRight = `${document.body.clientWidth - initialDocumentWidth}px`
   }

   function unlockScroll() {
      document.body.classList.remove('lock')
      document.body.style.paddingRight = ``
   }

   const gallery = document.querySelector('.works')
   const imagePopup = document.createElement('div')
   const bigImg = document.createElement('img')

   imagePopup.classList.add('popup_gallery')
   imagePopup.style.justifyContent = 'center'
   imagePopup.style.alignItems = 'center'
   bigImg.style.maxWidth = '80%'
   bigImg.style.maxHeight = '80%'

   gallery.append(imagePopup)
   imagePopup.append(bigImg)

   gallery.addEventListener('click', (e) => {
      e.preventDefault()

      if (e.target.closest('.preview')) {
         imagePopup.style.display = 'flex'
         const path = e.target.parentElement.getAttribute('href')
         bigImg.setAttribute('src', path)
         lockScroll()
      }

      if (e.target === imagePopup) {
         imagePopup.style.display = 'none'
         unlockScroll()
      }
   })
}

export default gallery
