import './ButtonsPanel.css';

const ButtonsPanel = (props) => {
    return (
        <div className='buttonsPanel'>
            <button onClick={()=>props.updateStep('add')}>Add 1</button>
            <button onClick={()=>props.updateStep('relnit')}>Relnit</button>
            <button onClick={()=>props.updateStep('reset')}>Reset</button>
            <button onClick={()=>props.updateStep("change")}>Change</button>
        </div>
    )
}

export default ButtonsPanel;