/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import axios from 'axios';
if (process.env.API) axios.defaults.baseURL = process.env.API;
axios.defaults.baseURL = 'https://physiotherapy-api.herokuapp.com/';

AppRegistry.registerComponent(appName, () => App);
