/**
 * Selector used as argument for ToggleTest's useSelector
 * @param {*} state 
 * @returns 
 */
export const isToggleOn = (state) => {
    return state.toggle === "true"
}