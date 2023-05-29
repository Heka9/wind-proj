const popups = () => {
   const initialDocumentWidth = document.body.clientWidth

   function bindPopup(selectorPopup, openBtnSelector, closeBtnSelector) {
      const popup = document.querySelector(selectorPopup)
      const openPopupBtn = document.querySelectorAll(openBtnSelector)

      function lockScroll() {
         document.body.classList.add('lock')
         document.body.style.paddingRight = `${document.body.clientWidth - initialDocumentWidth}px`
      }

      function unlockScroll() {
         document.body.classList.remove('lock')
         document.body.style.paddingRight = ``
      }

      function openPopup() {
         popup.classList.add('open')
         popup.classList.remove('close')
         lockScroll()
      }

      function closePopup() {
         popup.classList.add('close')
         popup.classList.remove('open')
         unlockScroll()
      }

      openPopupBtn.forEach((btn) => {
         btn.addEventListener('click', (e) => {
            e.preventDefault()
            openPopup()
         })
      })

      popup.addEventListener('click', (e) => {
         if (e.target.closest(closeBtnSelector) || e.target === popup) {
            closePopup()
         }
      })
   }

   function showPopupByTime(selectorPopup, time) {
      setTimeout(() => {
         document.querySelector(selectorPopup).classList.add('open')

         document.body.classList.add('lock')
         document.body.style.paddingRight = `${document.body.clientWidth - initialDocumentWidth}px`
      }, time)
   }

   bindPopup('.popup_engineer', '.popup_engineer_btn', '.popup_close')
   bindPopup('.popup', '.phone_link', '.popup_close')
   showPopupByTime('.popup', 3000)
}

export default popups
