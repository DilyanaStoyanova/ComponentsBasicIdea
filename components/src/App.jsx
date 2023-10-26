import './App.css';
import movies from './assets/movies';
import Heading from './components/Heading';
import MovieList from './components/Movielist';

function App() {
    return (
        <>
          <Heading>My New First Dynamic React Application</Heading>
          <MovieList movies={movies} headingText="Movie List exclusive Hype" secondaryHeading="Best of best"/>
        </>
    );
}

export default App;
