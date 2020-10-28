import { add, subtract , ADD, SUBTRACT}  from "../../actions";
import { counterReducer } from "../../reducers";


describe('counter', () => {
    describe('actions', () => {
      it('actions only', () => {
        const expectedActions =[
          { type: ADD },
          { type: SUBTRACT },
        ];
        const actions = [
          add(),
          subtract(),
        ];
        expect(actions).toEqual(expectedActions);
      });
      it('actions and reducer', () => {
        const dummyState = {
          value: 9
        }
        const expectedReducers ={
          value: 0
        };
        expect(counterReducer(dummyState, add())).toEqual(expectedReducers);
      });
    });
  });