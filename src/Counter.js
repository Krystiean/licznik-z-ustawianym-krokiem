import { useState } from "react";
import './Counter.css';
import Display from "./components/Display";
import Step from "./components/Step";
import ButtonsPanel from "./components/ButtonsPanel";


const Counter = (props) => {
    const [counter, setCounter] = useState(1);
    const [step, setStep] = useState(1);
    const [kotek, setKotek] = useState({
        name: 'krystian',
        status: 'student'
    });
    console.log(kotek)
    const updateStep = (action) => {
        if (action === 'add') {
            setCounter(counter + step);
        } else if (action === 'relnit') {
            setCounter(counter - step);
        } else if (action === 'reset'){
            setCounter(1);
        } else {
            if (kotek.name === 'krystian') {
                setKotek({name: 'ula', status: 'instruktor'});
            } else {
                setKotek({name: 'krystian', status: 'student'});
            }
        }
    }

    return (
        <div className="counter">
            <Display counter={counter} kotek={kotek}/>
            <ButtonsPanel updateStep={updateStep}/>
            <Step step={step} setStepFunction={setStep} />
        </div>
    )
}

export default Counter;