import React from 'react';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getCatsFetch} from './store/slice/state.js';
import './css/App.css'

const App = () => {
    const cats = useSelector(state => state.cats.cats);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCatsFetch());
    }, [dispatch])
    console.log(cats)

    return (
        <div className='App'>
            Hello
        </div>
    );
};

export default App;