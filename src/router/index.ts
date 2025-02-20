import { createRouter, createWebHistory } from 'vue-router';
import SearchPage from '../views/SearchPage.vue';
import InfoStreamPage from '../views/InfoStreamPage.vue';
import FavoritesPage from '../views/FavoritesPage.vue';
import ChatPage from '../views/ChatPage.vue';
import SettingsPage from '../views/SettingsPage.vue';

const routes = [
  { path: '/search', component: SearchPage },
  { path: '/communication', component: InfoStreamPage },
  { path: '/favorites', component: FavoritesPage },
  { path: '/chat', component: ChatPage },
  { path: '/settings', component: SettingsPage },
  { path: '/', redirect: '/settings' } // default route
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
