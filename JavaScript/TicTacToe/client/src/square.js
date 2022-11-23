// square has no internal state and has only the render function. This means it can be implemented as a funcctional component
export default function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}
