/**
 * Created by dakotaheninger on 7/17/17.
 */
let defaultState = {
    currentName: ""
};

const mainReducer = (state = defaultState, action) => {
    if (action.type === "RAND") {
        let randomNumb = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        return {
            ...state,
            currentName: action.arr[randomNumb(0, 2)]

        }
    } else {
        return {
            ...state
        }
    }
};

export default mainReducer;