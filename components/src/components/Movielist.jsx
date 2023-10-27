import Movie from "./Movie";

export default function MovieList(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <ul>
            <Movie data={props.movies[0]} />
            <Movie data={props.movies[1]} />
            <Movie data={props.movies[2]} />
            <Movie data={props.movies[3]} />
            <Movie data={props.movies[4]} />
        </ul>
        </div>
    );
}