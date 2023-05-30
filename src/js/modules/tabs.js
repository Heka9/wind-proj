const tabs = (tabBtnsParent, tabBtn, tabContent, activeClassTab, display = 'block') => {
   const btnsParent = document.querySelector(tabBtnsParent)
   const tabsBtns = document.querySelectorAll(tabBtn)
   const tabsContent = document.querySelectorAll(tabContent)

   function hideTabContent() {
      tabsContent.forEach((tab) => {
         if (display === 'block') {
            tab.classList.remove('open')
         } else {
            tab.classList.remove('open-inline')
         }
         tab.classList.add('close')
      })
      tabsBtns.forEach((tab) => {
         tab.classList.remove(activeClassTab)
      })
   }

   function showTabContent(i = 0) {
      if (display === 'block') {
         tabsContent[i].classList.add('open')
      } else {
         tabsContent[i].classList.add('open-inline')
      }
      tabsContent[i].classList.remove('close')
      tabsBtns[i].classList.add(activeClassTab)
   }

   hideTabContent()
   showTabContent()

   btnsParent.addEventListener('click', (e) => {
      const targetElement = e.target

      if (targetElement.closest(tabBtn)) {
         tabsBtns.forEach((btn, index) => {
            if (targetElement.closest(tabBtn) === btn) {
               hideTabContent()
               showTabContent(index)
            }
         })
      }
   })
}

export default tabs
