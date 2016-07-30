import deepFreeze from 'deep-freeze';

/**
 * Middleware that prevents state from being mutated anywhere in the app.
 */
export function freeze(reducer) {

    return function (state = {}, action) {

        deepFreeze(state);

        let nextState;

        try {
            nextState = reducer(state, action);
        } catch (err) {
            console.error('You cannot mutate state.');
            throw err;
        }

        return nextState;
    };
}
