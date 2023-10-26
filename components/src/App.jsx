import { useState } from 'react';
import './App.css';
import movies from './assets/movies';
import Button from './components/Button';
import Counter from './components/Counter';
import Heading from './components/Heading';
import MovieList from './components/Movielist';
import Timer from './components/Timer';



function App() {
    const[clicks, setClicks] = useState(0);

    const clickHandler = () => {
        setClicks(clicks => clicks + 1);
    };

    return (
        <>
        <Heading>Vite is cool!</Heading>
        <Timer initialValue={0}/>
        <Button clickHandler={clickHandler} clicks={clicks}/>
        <Counter startValue={0}/>
        <MovieList movies={movies} title="My First Dynamic React Application"/>
        </>
    );
}

export default App;
