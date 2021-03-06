import Vue from 'vue';
require('./bootstrap');
import routes from './router/index';

//=========vform validation handel ============
import {HasError, AlertError } from 'vform'
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

// =========Toaster notification import========
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
import CxltToastr from 'cxlt-vue2-toastr'
var toastrConfigs = {
    position: 'top right',
    showDuration: 1000,
    timeOut: 5000,
    closeButton:true,
    showMethod:'fadeIn',
    hideMethod:'fadeOut',
}
Vue.use(CxltToastr, toastrConfigs)

Vue.component('app-header', require('./components/Header.vue').default);


const app = new Vue({
    el: '#app',
    router:routes,
});
