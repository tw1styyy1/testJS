import React from "react";

function ButtonCreate({setForm}) {

    return(
        <button onClick={(e) => {
            e.preventDefault();
            setForm(true)
        }}>Добавить</button>
    )

}

export {ButtonCreate}