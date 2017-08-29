/* @module template */

import './sass/main.scss';
import angular from 'angular';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngDragDrop from 'angular-native-dragdrop';

import Components from './components';
import TemplateComponent from './template.component';


angular.module('TemplateTool', [
    ngMaterial,
    ngAnimate,
    ngDragDrop, 
    Components
])
.component('templateTool', TemplateComponent);