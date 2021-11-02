import {InitialStateInterface, MainReducerActionInterface} from "../interfaces/interfaces";


const initialState: InitialStateInterface = {
    selectedCategory: 'default',
    inputText: ''
}

const mainReducer = (state = initialState, action: MainReducerActionInterface): InitialStateInterface=> {
    const { type, payload } = action

    switch (type) {
        case 'set_category':
            return {
                ...state,
                selectedCategory: payload
            }
        case 'set_input_text':
            return {
                ...state,
                inputText: payload
            }

        default:
            return state
    }
}

export default mainReducer
