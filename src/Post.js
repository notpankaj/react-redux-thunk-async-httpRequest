import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './actions';


const styles ={
    centerAll : {
        display: "grid",
        placeItems : "center",
    }
}

function Post() {

    const dispatch = useDispatch();
    // const posts = useSelector(state => state);

    // REQUEST/SUCCESS/FAILURE
    const state = useSelector(state => state);
    
    useEffect(()=>{
        dispatch(fetchPosts())
    },[dispatch])
    
    console.log(state);
    return (
        <div style={styles.centerAll}>
            <h1>POST'S</h1>

            {/* <ul>
                {posts.map(post => <p key={post.id} >{post.title}</p>)}
            </ul>     */}
            
            {/* // REQUEST/SUCCESS/FAILURE */}
            { 
                state.error && 
                <div>
                    <h1>{state.error.message}</h1>
                    <p>{state.error.stack}</p>
                </div>
            }
            { state.loading 
                ? <h1>LOADING...</h1>
                : <ul> {state.items.map(post => <p key={post.id} >{post.title}</p>)}  </ul>
            }
            
        </div>
    )
}

export default Post


