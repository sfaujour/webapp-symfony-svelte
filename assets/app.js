import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';
import './styles/global.css';
import App from './components/App.svelte';

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

const app = new App({
    target: document.getElementById('app')
});

export default app;
