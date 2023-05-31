import checkNumInputs from './checkNumInputs'

const forms = (state) => {
   const formsArray = document.querySelectorAll('form')

   const messages = {
      pending: 'Идет отправка',
      reject: 'Ошибка',
      resolve: 'Отправлено',
   }

   async function postForm(url, data) {
      document.querySelector('.status').textContent = messages.pending

      const res = await fetch(url, {
         method: 'POST',
         // headers: {
         //    'Content-Type': 'application/json',
         // },
         body: data,
      })

      if (!res.ok) {
         throw new Error('Что-то пошло не так')
      }

      return await res.text()
   }

   checkNumInputs('input[name="user_phone"]')

   formsArray.forEach((form) => {
      form.addEventListener('submit', (e) => {
         e.preventDefault()

         let status = document.createElement('div')
         status.classList.add('status')
         form.append(status)

         // const formData = JSON.stringify(Object.fromEntries(new FormData(form).entries()))

         const formData = new FormData(form)
         if (form.getAttribute('data-form') === 'end') {
            for (const key in state) {
               formData.append(key, state[key])
               delete state[key]
            }
         }

         postForm('./assets/server.php', formData)
            .then((result) => {
               status.textContent = messages.resolve
            })
            .catch((error) => {
               console.log(error.message)
               status.textContent = messages.reject
            })
            .finally(() => {
               form.reset()
               setTimeout(() => {
                  status.remove()
               }, 3000)
               setTimeout(() => {
                  if (form.getAttribute('data-form') === 'end') {
                     const popup = form.closest('.popup_calc_end')
                     popup.classList.add('close-popup')
                     popup.classList.remove('open-popup')

                     document.body.classList.remove('lock')
                     document.body.style.paddingRight = ``
                  }
               }, 5000)
            })
      })
   })
}

export default forms
