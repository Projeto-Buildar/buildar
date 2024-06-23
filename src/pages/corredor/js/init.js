import Overworld from './Overworld'; // Importa a classe Overworld

// Na sua função init
export default function init(element, navigate, showMessage) {
    const overworld = new Overworld({
        element: element,
        navigate: navigate,
        showMessage: showMessage
    });

    overworld.init();

    return overworld;
}