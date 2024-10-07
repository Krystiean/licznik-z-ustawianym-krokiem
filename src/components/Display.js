const Display = (props) => {
    return (
        <div className="displayBox">
            <p>Licznik: {props.counter}</p>
            <p>Imię: {props.kotek.name}</p>
        </div>
    )
}

export default Display;