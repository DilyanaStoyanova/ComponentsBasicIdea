import Heading from "./Heading";
import Movie from "./Movie";

export default function MovieList(props) {
    return (
        <div>
            <Heading>{props.title}</Heading>
            <ul>
            <Movie data={props.movies[0]}/>
            <Movie data={props.movies[1]}/>
            <Movie data={props.movies[2]}/>
            <Movie data={props.movies[3]}/>
            <Movie data={props.movies[4]}/>
        </ul>
        </div>
    );
}