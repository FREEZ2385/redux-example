import { ADD, SUBTRACT, SETZERO } from "../actions";

const initState = {
    value: 0
};

const counterReducer = (state = initState, action) => {
    switch(action.type) {
        case ADD: {
            return {
              ...state,
              value: Math.abs(state.value + 1) % 10
            };
          }

        case SUBTRACT: {
            if(state.value === 0) state.value = 10;
            return {
            ...state,
            value: Math.abs(state.value - 1) % 10
            };
        }

        case SETZERO: {
            return {
            ...state,
            value: 0
            };
        }

        default:
            return state;
    }
}

export default counterReducer

