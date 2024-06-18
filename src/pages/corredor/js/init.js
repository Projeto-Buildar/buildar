import Overworld from './Overworld';

export default function init(element) {
    const overworld = new Overworld({
        element: element
    });
    overworld.init();
    return overworld;
}
