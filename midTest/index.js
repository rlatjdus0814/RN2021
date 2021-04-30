/**
 * @format
 */

 import React from 'react'
 import { AppRegistry } from 'react-native'
 import App from './app/Midterm' //Midterm 컴포넌트가 메인
import {name as appName} from './app.json';
    const TodoApp = () => <App />
AppRegistry.registerComponent(appName, () => TodoApp);
