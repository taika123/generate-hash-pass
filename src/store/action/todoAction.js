export const addTodo = newTodo => dispatch => {
    dispatch({
        type:"ADD_TODO",
        payload: newTodo
    })
}
