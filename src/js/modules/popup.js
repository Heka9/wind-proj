const popups = () => {
   const initialDocumentWidth = document.body.clientWidth

   function bindPopup(selectorPopup, openBtnSelector, closeBtnSelector, closeClickOverlay = true) {
      const popup = document.querySelector(selectorPopup)
      const openPopupBtn = document.querySelectorAll(openBtnSelector)
      const modals = document.querySelectorAll('[data-modal]')

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

            modals.forEach((modal) => {
               modal.classList.add('close')
               modal.classList.remove('open')
            })

            openPopup()
         })
      })

      popup.addEventListener('click', (e) => {
         if (e.target.closest(closeBtnSelector) || (e.target === popup && closeClickOverlay)) {
            modals.forEach((modal) => {
               modal.classList.add('close')
               modal.classList.remove('open')
            })

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
   bindPopup('.popup_calc', '.popup_calc_btn', '.popup_calc_close')
   bindPopup('.popup_calc_profile', '.popup_calc_button', '.popup_calc_profile_close', false)
   bindPopup('.popup_calc_end', '.popup_calc_profile_button', '.popup_calc_end_close', false)
   showPopupByTime('.popup', 60000)
}

export default popups
