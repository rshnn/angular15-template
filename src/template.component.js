/* @component swingweight */

import controller from './swingweight.controller';
import swingweightTemplate from './swingweight.html';


const SwingWeightComponent = {

    bindings: {
        data: '<'
    },
    controller,
    templateUrl: swingweightTemplate

};


export default SwingWeightComponent;