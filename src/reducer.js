// export interface ICalculator {
//     num1: number,
//     num2: number,
//     op: string;
//     eq: number;
// }

export var myCalculator = function(state, action) {
    console.log('state', state, 'action', action);
    switch (action.type) {
        case 'DIGIT':
            console.log('You enter digit!');
            state = {
                ...state,
            };
            return state;
        case 'OPERATOR':
            console.log('You enter operator!');
            state = {
                ...state,
            };
            return state;
        case 'CALCULATE':
            console.log('I have to calculate!');
            state = {
                ...state,
            };
            return state;
        default:
    }
    return state;
    
}

