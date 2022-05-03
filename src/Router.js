import VueRouter from 'vue-router'
import TopPage from "/src/pages/TopPage";
import SubPage from "/src/pages/SubPage";

const routes = [
    {path: '/', component: TopPage, name: 'TopPage'},
    {path: '/sub-page', component: SubPage, name: 'SubPage'}
]

export const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes
})