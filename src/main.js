import { createApp } from "vue";
//import {createStore} from "vuex";
import App from "./App.vue";
import Axios from "axios";
import router from "./router";
console.log(process.env.BASE_URL)

const myAxios = Axios.create({baseURL:"http://localhost"})
export {myAxios}

createApp(App).use(router).mount("#app");
