// * TODO REDUCER
const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    title: action.title,
                    description: action.description,
                    completed: true,
                    class: undefined
                }
            ];
        case 'REMOVE_TODO':
            return state.filter(todo => todo.title !== action.title);
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.completed === true) {
                    todo.class = 'completed'
                    console.log(todo)

                    // * BREAKS IF TODO IS NOT RETURNED
                    return todo
                }
            })
        default:
            return state;
    }
}

export { todoReducer as default }