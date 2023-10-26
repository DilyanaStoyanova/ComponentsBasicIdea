import Movie from "./Movie";

export default function MovieList(props) {
    console.log(props)
    return (
        <div className="site-list">
            <h1>{props.headingText}</h1>
            <h2>{props.secondaryHeading}</h2>
            <ul>
                <li>{props.movies[0].title}</li>
                <li>{props.movies[1].title}</li>
                <li>{props.movies[2].title}</li>
                <li>{props.movies[3].title}</li>
                <li>{props.movies[4].title}</li>
            </ul>
        </div>
    );
}