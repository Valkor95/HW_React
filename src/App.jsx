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
            <h1>CAT SPECIES GALLERY</h1>
            <p>Images of different species of cats. Lots of cats for your viewing pleasure.</p>
            <hr/>
            <div className='Gallery'>
                {cats.map( cat =>
                    <div key={cat.id} className='row'>
                        <div className='column column-left'>
                            <img
                                alt={cat.name}
                                src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
                                width='200'
                                height='200'
                            />
                        </div>
                        <div className='column column-right'>
                            <h2>{cat.name}</h2>
                            <h5>Temperament: {cat.temperament}</h5>
                            <p>{cat.description}</p>
                        </div>
                    </div>
                )}
            </div>
            <button>VIEW MORE CATS</button>
        </div>
    );
};

export default App;