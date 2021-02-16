import { useState } from 'react';
<<<<<<< HEAD
import Button from './Button';
=======
>>>>>>> dev

import style from '../css/ButtonsContainer.module.css';

function ButtonsContainer() {

    const [buttonsValues, setButtonsValues] = useState([
        7, 8, 9, "/", 4, 5, 6, "x", 1, 2, 3, "-", "clear", 0, "+", "="
<<<<<<< HEAD
    ]);
=======
    ])
>>>>>>> dev

    return (
        <div className={style.buttons}>
            {buttonsValues.map((value) => (
<<<<<<< HEAD
                <Button key={value} />
=======
>>>>>>> dev
            ))}
        </div>
    )

}

export default ButtonsContainer;