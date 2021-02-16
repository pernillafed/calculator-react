import style from '../css/Calculator.module.css';
import Display from './Display';

function Calculator() {

    return (
        <div className={style.calculator}>
            <Display />
        </div>
    )

}

export default Calculator;