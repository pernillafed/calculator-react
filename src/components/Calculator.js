import style from '../css/Calculator.module.css';
import ButtonsContainer from './ButtonsContainer';
import Display from './Display';

function Calculator() {

    return (
        <div className={style.calculator}>
            <Display />
            <ButtonsContainer />
        </div>
    )

}

export default Calculator;