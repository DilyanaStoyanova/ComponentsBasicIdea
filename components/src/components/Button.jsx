export default function Button(props) {
    return (
        <button onClick={props.clickHandler}>I am a button clicked {props.clicks}</button>
    );
}