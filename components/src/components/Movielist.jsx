import Movie from "./Movie";

export default function MovieList(props) {
    return (
        <div className="site-list">
            <h1>Movie List</h1>
            <ul>
                <Movie />
                <Movie />
                <Movie />
            </ul>
        </div>
    );
}