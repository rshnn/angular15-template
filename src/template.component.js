/* @component template */

import controller from './template.controller';
import templateTemplate from './template.html';


const TemplateComponent = {

    bindings: {
        data: '<'
    },
    controller,
    templateUrl: templateTemplate

};


export default TemplateComponent;