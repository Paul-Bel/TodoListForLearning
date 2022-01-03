import {multyReducer, ActionType} from "./tasks";

test('multyReducer', () => {

    let jun = 1000
    let summ: ActionType = {type: 'summ', payload: 50}
    let div: ActionType = {type: 'div', payload: 50}
    let mult: ActionType = {type: 'mult', payload: 50}
    let sub: ActionType = {type: 'sub', payload: 50}
    let nullT: ActionType = {type: 'sub', payload: 50}
    let resalt = multyReducer(jun, summ)
expect(resalt).toBe(1050)
expect(multyReducer(jun, div)).toBe(20)
expect(multyReducer(jun, mult)).toBe(50000)
expect(multyReducer(jun, sub)).toBe(950)
expect(multyReducer(jun, nullT)).not.toBe(960)
expect(multyReducer(jun, nullT)).not.toBe(4960)

})