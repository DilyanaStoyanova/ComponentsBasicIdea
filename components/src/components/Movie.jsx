export default function Movie(props) {
    return (
        <li>
            <h5>{props.data.title}</h5>
            <p>Year: {props.data.year}</p>
            <p>Actors: {props.data.actors}</p>
        </li>
    );
}