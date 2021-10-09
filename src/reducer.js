
/*=====================
        NORMAL
===================== */

// const initState = [];

// const postReducer = (state = initState,action) => {
//     switch (action.type) {
//         case ('FETCH_POST'):
//             return action.payload;
//             default:
//                 return state;
//         }
//     }
// export default postReducer;
        
/*=======================================
        REQUEST/SUCCESS/FAILURE
======================================== */
const initState = {
    items: [],
    loading: false,
    error: null,
};

const postReducer = (state = initState,action) => {
    switch (action.type) {
        case ('FETCH_POST_REQUEST'):
            return {
                ...state,
                items: action.payload,
                loading: true,
                error: null
            };
        case ('FETCH_POST_SUCCESS'):
            return {
                ...state,
                items: action.payload,
                loading: false,
                error: null
            };
        case ('FETCH_POST_FAILURE'):
            return {
                ...state,
                items: [],
                loading: false,
                error: action.payload
            };
            default:
                return state;
        }
    }
export default postReducer;




















