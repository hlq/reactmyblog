const defaultState = {
    inputBlur: true
};

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));

    if (action.type === 'search_focus_or_blur'){
        newState.inputBlur = !newState.inputBlur;
        return newState;
    }

    return state;
}