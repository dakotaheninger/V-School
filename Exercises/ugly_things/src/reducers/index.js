let defaultState = {
    allPics: [],
    editedPics: []
};

const mainReducer = (state = defaultState, action) => {
    if (action.type === "SUBMIT") {
        return {
            ...state,
            allPics: [...state.allPics, action.pic]
        }
    } else if(action.type === "REMOVE") {
        let newArr = [...state.allPics];
        newArr.splice(action.index, 1);
        return {
            ...state,
            allPics: newArr
        }
    } else if(action.type === "EDSUB"){
        let editPic = [...state.allPics];
        editPic.splice(action.index, 1, action.item);
        return {
            ...state,
            allPics: editPic
        }
    } else {
        return {
            ...state
        }
    }
};

export default mainReducer;