import Axios from "axios"

/*===============
PROBLEM
================*/
// export const fetchPosts =  () => {
//     const promise =  Axios.get('https://jsonplaceholder.typicode.com/posts');
//     return {
//         type : "FETCH_POST",
//         payload : promise
//     }
// }

/*===============
SOLUTION
================*/
// now action can return function ,
// what we are doing is returning a function that will force action to wait until we get data from API asynchronisly 


// export const fetchPosts = () => {
//     return async (dispatch,getState) => {
//         const response = await Axios.get('https://jsonplaceholder.typicode.com/posts');
//         dispatch({
//             type : "FETCH_POST",
//             payload : response.data
//         })
//     }
// }



/*=====================
            NORMAL - way
===================== */

// ---> SHORTHAND
// export const fetchPosts = () => async (dispatch, getState) => {
//     const response = await Axios.get('https://jsonplaceholder.typicode.com/posts');
//     dispatch({
//         type: "FETCH_POST",
//         payload: response.data
//     })
// }


/*=======================================
        REQUEST/SUCCESS/FAILURE  - way
======================================== */

export const fetchPosts = () => async (dispatch,getState) => {
   
    dispatch({ type: "FETCH_POST_REQUEST" });
   
    // try{
    //     const response = await Axios.get('https://jsonplaceholsder.typicode.com/posts');
    //     dispatch({ type: "FETCH_POST_SUCCESS", payload : response.data });
    // }catch (error){
    //     dispatch({ type: "FETCH_POST_FAILURE", payload: error });
    // }

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => dispatch({ type: "FETCH_POST_SUCCESS", payload : data }))
        .catch(err => dispatch({ type: "FETCH_POST_FAILURE", payload: err }))
  
}











