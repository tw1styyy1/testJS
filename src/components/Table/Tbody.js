import React, {useEffect} from "react";

function Tbody({filterData, obj, sort: {item, level}, page, MAX_ELEMENTS, setToolbar, toolbar}) {

    const sortArray = item => {
        Object.keys(obj).map((name, index) => {
            if (item === index) {
                return item = name;
            }
        })
        if (level === 1) {
            return (a, b) => a[item] < b[item] ? 1 : -1;
        }
        if (level === 2) {
            return (a, b) => a[item] > b[item] ? 1 : -1;
        }
    };

    useEffect(() => {
        getTbody()
    })

    function getTbody() {
        return(
            filterData
                .sort(sortArray(item))
                .slice(page * MAX_ELEMENTS, (page * MAX_ELEMENTS) + MAX_ELEMENTS)
                .map((item, index) => {
                    const {id, firstName, lastName, email, phone} = item;
                    return (
                        <tr
                            onClick={(e) => {
                                setToolbar(page === 0 ? index : index + (page * MAX_ELEMENTS));
                            }}
                            className={toolbar === index + (page * MAX_ELEMENTS) ? 'active_tr' : ''}
                            key={index}>
                            <td>{id}</td>
                            <td>{firstName}</td>
                            <td>{lastName}</td>
                            <td>{email}</td>
                            <td>{phone}</td>
                        </tr>
                    )
                })
        )
    }

    return (
        <tbody>
        {
            getTbody()
        }
        </tbody>
    )
}

export {Tbody}