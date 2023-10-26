import './App.css';
import MovieList from './components/Movielist';

const movies = [
    {
        title: 'The Matrix',
        description: 'Sth here'
    },
    {
        title: 'The Man of Steel',
        description: 'Sth here'
    },
    {
        title: 'Harry Potter',
        description: 'Sth here'
    }
];

function App() {
    return (
        <>
          <h1>My First Dynamic React Application</h1> 
          <MovieList headingText="Movie List exclusive" />
        </>
    );
}

export default App;
