import movies from "../assets/movies";

export default function Movie(props) {
    return (
        <li>
            <h3>{props.movie.title}</h3>
            <p>Year: {props.movie.year}</p>
            <p>Cast: {props.movie.actors}</p>
        </li>
    );
}