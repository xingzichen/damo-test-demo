import React from "react";
import ReactDOM from 'react-dom';
import damo from 'damo-core';
import {errorReducer} from 'damo-antd';
import Root from './scenes';
import './app.less';
//import {TestService} from './services/TestService'

damo.init({}, {errors: errorReducer});

damo.autoLoadModels(require.context('./models', true, /\.js$/));

damo.route('/', Root);

//TestService.displayName = 'testService';
//damo.service(TestService);
// damo.service({testService:TestService});
// damo.service([TestService]);

damo.bootstrap(document.getElementById('container'))
