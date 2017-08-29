/* @module template */

import './sass/main.scss';
import angular from 'angular';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngDragDrop from 'angular-native-dragdrop';

import Components from './components';
import SwingWeightComponent from './template.component';


angular.module('Template', [
    ngMaterial,
    ngAnimate,
    ngDragDrop, 
    Components
])
.component('template', TemplateComponent);