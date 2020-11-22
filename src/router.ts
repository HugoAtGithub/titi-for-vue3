import {createRouter, createWebHashHistory} from "vue-router";
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Markdown from './components/Markdown.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import {h} from "vue";
import getStarted from './markdown/get-started.md';
import install from './markdown/install.md';
import intro from './markdown/intro.md';

const md = content => h(Markdown, {content: content, key: content})
const history = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {
            path: '/doc', component: Doc, children: [
                {path: '', redirect: '/doc/intro'},
                {path: 'get-started', component: md(getStarted)},
                {path: 'install', component: md(install)},
                {path: 'intro', component: md(intro)},
                {path: 'switch', component: SwitchDemo},
                {path: 'button', component: ButtonDemo},
                {path: 'dialog', component: DialogDemo},
                {path: 'tabs', component: TabsDemo},
            ]
        }
    ]
})
