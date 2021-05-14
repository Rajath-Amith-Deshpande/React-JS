import InitialValueOfStore from '../ReduxStore/InitialValue'

const myReducer = (state=InitialValueOfStore, action) => {
    switch(action.type){
        case 'NAME':
            state={
                ...state,
                name:action.payload
            }
            break;

        case 'EMAIL':
            state={
                ...state,
                email:action.payload
            } 
        }
    return state

}

export default myReducer;