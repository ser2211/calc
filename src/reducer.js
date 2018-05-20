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
            var num1 = 0;
            var num2 = 0;
            var num = action.num;
            console.log('You enter digit - ' + num);
            if (state.oper) {
                num1 = state.num1;
                num2 = state.num2 * 10 + num;
            } else {
                num1 = state.num1 * 10 + num;
                num2 = state.num2;
            }
            state = {
                ...state,
                num1 : num1,
                num2 : num2,
            };
            return state;
        case 'OPERATOR':
            var op = action.op;
            console.log('You enter operator - ' + op);
            state = {
                ...state,
                oper : op,
            };
            return state;
        case 'CALCULATE':
            console.log('I have to calculate!');
            var op = state.oper;
            var num1 = state.num1;
            var num2 = state.num2;
            var rslt = 0;
            switch (op) {
                case '+':
                    rslt = num1 + num2;
                    break;
                default:
                    rslt = 0;
                    break;
            }
            state = {
                ...state,
                rslt : rslt,
            };
            return state;
        case 'CLEAR_ALL':
            state = {
                num1 : 0,
                num2 : 0,
                op   : "",
                rslt : 0,
            }
        default:
    }
    return state;
    
}

