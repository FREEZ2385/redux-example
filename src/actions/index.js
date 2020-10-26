export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const SETZERO = 'SETZERO';

export function add() {
    return {
        type: ADD,
    };
}

export function subtract() {
    return {
        type: SUBTRACT,
    };
}

export function setZero() {
    return {
        type: SETZERO,
    };
}