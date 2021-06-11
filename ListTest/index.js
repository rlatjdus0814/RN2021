/**
 * @format
 */

import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App'; //App이 메인 컴포넌트
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

