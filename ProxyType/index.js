import { proxyDemo } from './modules/proxyDemo.js';

export let main = (function () {
    console.log('Main function loaded')
    proxyDemo()
})()