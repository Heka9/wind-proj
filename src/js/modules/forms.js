const forms = (url) => {
   const formsArray = document.querySelectorAll('form')
   const phones = document.querySelectorAll('input[name="user_phone"]')

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

   phones.forEach((phone) => {
      phone.addEventListener('input', () => {
         phone.value = phone.value.replace(/\D+/g, '')
      })
   })

   formsArray.forEach((form) => {
      form.addEventListener('submit', (e) => {
         e.preventDefault()

         let status = document.createElement('div')
         status.classList.add('status')
         form.append(status)

         // const formData = JSON.stringify(Object.fromEntries(new FormData(form).entries()))

         const formData = new FormData(form)

         postForm('./assets/server.php', formData)
            .then((res) => {
               console.log(res)
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
            })
      })
   })
}

export default forms
