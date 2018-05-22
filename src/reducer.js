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
                num1 = '' + state.num1;
                num2 = '' + state.num2 + num;
            } else {
                num1 = '' + state.num1 + num;
                num2 = '' + state.num2;
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
        case 'DOT':
            if (state.oper) {
                num1 = '' + state.num1;
                if (!~state.num2.indexOf('.')) {
                    num2 = '' + state.num2 + '.';
                }
                else {
                    num2 = '' + state.num2;
                }
            } else {
                if (!~state.num1.indexOf('.')) {
                    num1 = '' + state.num1 + '.';
                }
                else {
                    num2 = '' + state.num2;
                }
                num2 = '' + state.num2;
            }
            state = {
                ...state,
                num1 : num1,
                num2 : num2,
            };
            return state;
        case 'CALCULATE':
            //console.log('I have to calculate!');
            var op = state.oper;
            var num1 = parseFloat(state.num1);
            var num2 = parseFloat(state.num2);
            var rslt = 0;
            switch (op) {
                case '+':
                    rslt = num1 + num2;
                    break;
                case '-':
                    rslt = num1 - num2;
                    break;
                case '*':
                    rslt = num1 * num2;
                    break;
                case '/':
                    if (num2 === 0) {
                        rslt = 'Деление на 0!';
                    }
                    else {
                        rslt = num1 / num2;
                    };
                    break;
                default:
                    rslt = "";
            }
            state = {
                ...state,
                rslt : rslt,
            };
            return state;
        case 'CLEAR_ALL':
            state = {
                num1 : "",
                num2 : "",
                op   : "",
                rslt : "",
            }
            break;
        default:
    }
    return state;
    
}

