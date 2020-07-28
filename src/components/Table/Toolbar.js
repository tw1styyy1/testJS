import React from 'react';

function Toolbar({data}) {

    function getData() {
        return (
            <>
                <textarea defaultValue={data.description}/>
                <p>Адрес проживания: <b>{data.address.streetAddress}</b></p>
                <p>Город: {data.address.city}</p>
                <p>Провинция/штат: <b>{data.address.state}</b></p>
                <p>Инедкс: <b>{data.address.zip}</b></p>
            </>
        )
    }

    if (data) {
        return (
            <div className="toolbar">
                <p>Выбран пользователь <b>{data.firstName} {data.lastName}</b></p>
                <p>Описание:</p>
                {data.address ? getData() : <p>Данных нет</p>}
            </div>
        )
    } else {
        return (
            <p>Выберите из списка</p>
        )
    }


}

export {Toolbar};