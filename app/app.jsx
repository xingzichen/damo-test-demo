import React from "react";
import ReactDOM from 'react-dom';
import damo from 'damo-core';

import {errorReducer} from 'damo-antd';

import Root from './scenes';

import './app.less';

damo.init({}, {errors: errorReducer});

damo.autoLoadModels(require.context('./models', true, /\.js$/));

damo.route('/', Root);

damo.bootstrap(document.getElementById('container'))
