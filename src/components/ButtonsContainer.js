import { useState } from 'react';

import style from '../css/ButtonsContainer.module.css';

function ButtonsContainer() {

    const [buttonsValues, setButtonsValues] = useState([
        7, 8, 9, "/", 4, 5, 6, "x", 1, 2, 3, "-", "clear", 0, "+", "="
    ])

    return (
        <div className={style.buttons}>
            {buttonsValues.map((value) => (
                <p key={value}>{value}</p>
            ))}
        </div>
    )

}

export default ButtonsContainer;