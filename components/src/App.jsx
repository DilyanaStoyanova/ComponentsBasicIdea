import './App.css';
import movies from './assets/movies';
import MovieList from './components/Movielist';

function App() {
    return (
        <>
          <h1>My First Dynamic React Application</h1> 
          <MovieList movies={movies} headingText="Movie List exclusive Hype" secondaryHeading="Best of best"/>
        </>
    );
}

export default App;
