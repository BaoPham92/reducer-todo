// * TODO REDUCER

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'POPULATE_LIST':
            return action.list;
        case 'ADD_TODO':
            return [
                ...state,
                {
                    title: action.title,
                    description: action.description
                }
            ];
        case 'REMOVE_TODO':
            return state.filter(todo => todo.title !== action.title);
        default:
            return state;
    }
}

export { todoReducer as default }