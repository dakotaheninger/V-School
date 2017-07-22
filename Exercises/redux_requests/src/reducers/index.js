let defaultState = {
    backgroundColor: "cadetblue",
    lastColor: "",
    thirdColor: "",
    fourthColor: "",
    colorName: ""
};
let count = 0;

let mainReducer = (state = defaultState, action) => {
    if (action.type === "CHANGE") {
        if (count < 1) {
            count++;
            return {
                ...state,
                backgroundColor: action.color,
                colorName: action.name
            }
        } else if (count < 2) {
            count++;
            return {
                ...state,
                backgroundColor: action.color,
                lastColor: state.backgroundColor,
                colorName: action.name
            }

        } else if (count < 3) {
            count++;
            return {
                ...state,
                backgroundColor: action.color,
                lastColor: state.backgroundColor,
                thirdColor: state.lastColor,
                colorName: action.name

            }
        } else {
            return {
                ...state,
                backgroundColor: action.color,
                lastColor: state.backgroundColor,
                thirdColor: state.lastColor,
                fourthColor: state.thirdColor,
                colorName: action.name
            }

        }
    } else {
        return {
            ...state
        }
    }
};

export default mainReducer;