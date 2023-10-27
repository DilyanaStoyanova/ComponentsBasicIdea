import './App.css';
import movies from './assets/movies.js';
import Button from './components/Button';
import Counter from './components/Counter';
import Heading from './components/Heading';
import MovieList from './components/MovieList';
import Timer from './components/Timer';
import { useState } from 'react';


function App() {
    const [clicks, setClicks] = useState(0);

    const clickHandler = () => {
        setClicks(c => c + 1);
    };

    return(
        <>
        <Heading>My First Dynamic Application</Heading>
        <Button clicks={clicks} clickHandler={clickHandler}/>
        <Counter />
        <Timer />
        <MovieList movies={movies} title="Movie List"/>
        </>
    );
}

export default App;
