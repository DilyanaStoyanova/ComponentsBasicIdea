import Movie from "./Movie";

export default function MovieList(props) {
    return (
        <div className="site-list">
            <h1>{props.headingText}</h1>
            <h2>{props.secondaryHeading}</h2>
            <ul>
                <Movie movie={props.movies[0]}/>
                <Movie movie={props.movies[1]}/>
                <Movie movie={props.movies[2]}/>
                <Movie movie={props.movies[3]}/>
                <Movie movie={props.movies[4]}/>
            </ul>
        </div>
    );
}