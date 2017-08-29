/* @controller swingweight */

class SwingWeightController { 

    constructor(){}


    $onChanges(changes){
        console.log(changes);
    }


    dropSuccessHandler($event, index, array){
        array.slice(index+1);
    }


    onDrop($event, $data, array){
        array.push($data);
    }

}


export default SwingWeightController;