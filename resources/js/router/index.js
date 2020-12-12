import Vue from 'vue';
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Home from '../pages/Home.vue'
import CategoryList from '../pages/category/index.vue';
import CategoryCreate from '../pages/category/create.vue';
import CategoryEdit from '../pages/category/edit.vue';

const routes= new VueRouter({
    mode: 'history',
    routes:[
        {
            path:'/',
            component:Home,
            name:'home',
        },
        {
            path:'/category',
            component:CategoryList,
            name:'category_list',
        },
        {
            path:'/category/create',
            component:CategoryCreate,
            name:'category_create',
        },
        {
            path:'/category/edit/:id',
            component:CategoryEdit,
            name:'category_edit',
        },
    ]
});
export default routes;
