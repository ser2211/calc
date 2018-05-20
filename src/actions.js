// export enum ActionTypes {
//     // PLUS  = 'PLUS',
//     // MINUS   = 'MINUS',
//     // MULTIPLY = 'MULTIPLY',
//     // DIVIDE = 'DIVIDE',
//     DIGIT = 'DIGIT',
//     OPERATOR = 'OPERATOR',
//     CALCULATE = 'CALCULATE'
// }

export function digit(num) {
    return {
        type    : 'DIGIT',
        num,
    }
}

export function operator(op) {
    return {
        type    : 'OPERATOR',
        op,
    }
}

export function calculate() {
    return {
        type    : 'CALCULATE',
    }
}
