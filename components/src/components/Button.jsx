export default function Button(props) {
    return (
        <button onClick={props.clickHandler}>{props.clicks}</button>
    );
}