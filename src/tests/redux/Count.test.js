import { add, subtract , ADD, SUBTRACT}  from "../../actions";


describe('counter', () => {
    describe('actions', () => {
      it('should create actions', () => {
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
    });
  });