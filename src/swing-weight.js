/* @module swing-weight */

import './sass/main.scss';
import angular from 'angular';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngDragDrop from 'angular-native-dragdrop';

import Components from './components';
import SwingWeightComponent from './swing-weight.component';


angular.module('SwingWeight', [
    ngMaterial,
    ngAnimate,
    ngDragDrop, 
    Components
])
.component('swingWeight', SwingWeightComponent);