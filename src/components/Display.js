import style from '../css/Display.module.css';

function Display() {

    return (
        <div className={style.displayWrapper}>
            <div className={style.display}>
                <span className={style.input}>Data...</span>
            </div>
        </div>
    )

}

export default Display;