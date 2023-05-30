const timer = (deadline, daysSelector, hoursSelector, minutesSelector, secondsSelector) => {
   function calcTimeInfo(endtime) {
      const diff = Date.parse(endtime) - Date.parse(new Date())

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor(diff / (1000 * 60 * 60)) % 24
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      const seconds = Math.floor((diff / 1000) % 60)

      return {
         total: diff,
         days,
         hours,
         minutes,
         seconds,
      }
   }

   function checkValue(num) {
      if (num < 10) {
         return `0${num}`
      } else return num
   }

   function setTimer(deadline, daysSelector, hoursSelector, minutesSelector, secondsSelector) {
      const days = document.querySelector(daysSelector)
      const hours = document.querySelector(hoursSelector)
      const minutes = document.querySelector(minutesSelector)
      const seconds = document.querySelector(secondsSelector)
      const interval = setInterval(updateTimer, 1000)

      updateTimer()

      function updateTimer() {
         const timer = calcTimeInfo(deadline)

         if (timer.total > 0) {
            days.textContent = checkValue(timer.days)
            hours.textContent = checkValue(timer.hours)
            minutes.textContent = checkValue(timer.minutes)
            seconds.textContent = checkValue(timer.seconds)
         } else {
            clearInterval(interval)
            days.textContent = checkValue(0)
            hours.textContent = checkValue(0)
            minutes.textContent = checkValue(0)
            seconds.textContent = checkValue(0)
         }
      }
   }

   setTimer(deadline, daysSelector, hoursSelector, minutesSelector, secondsSelector)
}

export default timer
