/* @component swing-weight */

import controller from './swing-weight.controller';
import swingWeightTemplate from './swing-weight.html';


const SwingWeightComponent = {

    bindings: {
        data: '<'
    },
    controller,
    templateUrl: swingWeightTemplate

};


export default SwingWeightComponent;