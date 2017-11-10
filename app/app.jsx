import React from "react";
import ReactDOM from 'react-dom';
import damo from 'damo-core';
import {errorReducer} from 'damo-antd';
import Root from './scenes';
import Page2 from './scenes/page2/page2';
import Page3 from './scenes';
import './app.less';

damo.init({}, {errors: errorReducer});

damo.autoLoadModels(require.context('./models', true, /\.js$/));

const router = damo.route('/', Root, {childRoutes:[{path:'/page2', component:Page2}]});
//const router = damo.route('/', Root);
//damo.route('/page2', Page2);
//router.route('/page3', Page3);

damo.bootstrap(document.getElementById('container'));
