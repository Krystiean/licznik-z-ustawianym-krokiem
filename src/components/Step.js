const Step = (props) => {
    return (
        <div className="stepBox">
            <span>Krok: </span>
            <input type="number" value={props.step} onChange={(e) => {
                props.setStepFunction(+e.target.value);
                console.log(e);
                console.log(typeof +e.target.value)
            }} />
        </div>
    )
}

export default Step;