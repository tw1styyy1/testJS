import React, {useState} from 'react';
import {Table} from "../Table/Table";
import './Data.scss';

function Data() {

    let arr = [
        {
            name: '32 записи',
            classNamePersonal: 'small_data',
            className: 'btn_data',
            data: 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
        },
        {
            name: '1000 записей',
            classNamePersonal: 'big_data',
            className: 'btn_data',
            data: 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
        },
    ]

    const [ready, setReady] = useState(false);
    const [data, setData] = useState('');

    if (ready) {
        return (
            <Table dataLoad={data}/>
        )
    } else {
        return (
            <div className="choose_data">
                <h1>Выберите объем данных</h1>
                <div>
                    {arr.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setData(item.data);
                                setReady(true);
                            }}
                            className={item.classNamePersonal + ' ' + item.className}>
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>
        )
    }

}

export {Data};