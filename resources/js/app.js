/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
import { createMemoryHistory, createRouter } from 'vue-router'
import index from './index.vue'
import Index from './components/users/Index.vue'
import UsersList from './components/users/UsersList.vue'

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {path: '/users', component: () => import('./components/users/Index.vue'), name: 'users.Index'},
        {path: '/usersList', component: () => import('./components/users/UsersList.vue'), name: 'users.UsersList'}
    ]
})

createApp(index)
    .use(router)
    .mount('#app')



// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

