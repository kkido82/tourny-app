import { Action } from '../../models';

export const types = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
}

export const increment = (amount: number = 1): Action => {
    return { type: types.INCREMENT, payload: { amount }, loading: true };
}

export const decrement = (amount: number = 1): Action => {
    return { type: types.DECREMENT, payload: { amount }, loading: true };
}
