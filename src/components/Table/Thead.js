import {Icons} from "../Icons/Icons";
import React from "react";

function Thead({obj, handleSort, sort, deleteProperty}) {

    function getClassTd(index) {
        if (sort.item === index && sort.level === 1) {
            return 'sort_td_up';
        }
        if (sort.item === index && sort.level === 2) {
            return 'sort_td_down';
        }
        return 'dont_sort'
    }

    return (
        <thead>
        <tr className="table__thead_tr">
            {
                Object.keys(deleteProperty(obj)).map((item, index) => (
                    <th
                        className={getClassTd(index)}
                        key={index}
                        onClick={(e) => {
                            handleSort(index);
                        }}>
                        {item}
                        <Icons
                            getClassTd={getClassTd}
                            index={index}/>
                    </th>
                ))
            }
        </tr>
        </thead>
    )
}

export {Thead}