'use strict'

import './slider'
import popups from './modules/popup'
import tabs from './modules/tabs'
import forms from './modules/forms'
import timer from './modules/timer'
import gallery from './modules/gallery'

window.addEventListener('DOMContentLoaded', () => {
   const deadline = '2023-05-31T24:00:00'

   popups()
   tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active')
   tabs('.decoration_slider', '.no_click', '.decoration_content-item', 'after_click')
   tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline')
   forms()
   timer(deadline, '#days', '#hours', '#minutes', '#seconds')
   gallery()
})
