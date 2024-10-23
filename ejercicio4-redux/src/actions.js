    export const INCREMENTAR = 'INCREMENTAR';
    export const DECREMENTAR = 'DECREMENTAR';

    export const incrementarContador = () => {
    return { type: INCREMENTAR };
    };

    export const decrementarContador = () => {
    return { type: DECREMENTAR };
    };
