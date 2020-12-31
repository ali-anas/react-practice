import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

export const initialState = {
    dishes: DISHES,
	comments: COMMENTS,
	promotions: PROMOTIONS,
	leaders: LEADERS
};

// ES6 way to providing default value to a parameter
export const Reducer = (state = initialState, action) => {
    return state;
};