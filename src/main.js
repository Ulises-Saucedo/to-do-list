import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { OhVueIcon, addIcons } from "oh-vue-icons"
import { HiSolidPencilAlt, MdDeleteoutline, RiDeleteBack2Fill, GiConfirmed, IoAddCircleOutline } from "oh-vue-icons/icons"
addIcons( HiSolidPencilAlt, MdDeleteoutline, RiDeleteBack2Fill, GiConfirmed, IoAddCircleOutline )

createApp(App).component("v-icon", OhVueIcon).mount('#app')