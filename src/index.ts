import { ActionReducer } from '@ngrx/store';
import * as deepFreeze from 'deep-freeze';

/**
 * Middleware that prevents state from being mutated anywhere in the app.
 */
export function storeFreeze(reducer): ActionReducer<any> {

    return function (state = {}, action) {

        deepFreeze(state);
        deepFreeze(action.payload);

        let nextState;

        try {
            nextState = reducer(state, action);
        } catch (error) {
            console.error('State mutation is prohibited inside of reducers.');
            throw error;
        }

        return nextState;
    };
}
