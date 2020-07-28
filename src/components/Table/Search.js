import React, {useState} from "react";

function Search({setFilterData, initData, filterData, obj, deleteProperty}) {

    const [keyObj, setKeyObj] = useState('id');
    const [search, setSearch] = useState('');

    return (
        <form>
            <div className="radio_group">
                {Object.keys(deleteProperty(obj)).map((key, index) => (
                    <div key={index} className="radio">
                        <input onChange={() => {
                            setKeyObj(key);
                        }} id={key} name="radio_btn" type="radio" value={key}/>
                        <p>{key}</p>
                    </div>
                ))}
            </div>
            <input className="input_search" type="text" onChange={e => setSearch(e.target.value)}
                   placeholder="Поиск..."/>
            <input value="Найти" type="button" onClick={(e) => {
                e.preventDefault();
                setFilterData(filterData.filter(item => (
                    keyObj === 'id' ? item[keyObj] === parseInt(search) : item[keyObj].includes(search)
                )));
            }}/>
            <input onClick={() => {
                setFilterData(initData)
            }} value="Убрать фильтр" type="button"/>
        </form>
    )
}

export {Search}