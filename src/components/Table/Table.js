import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Loader} from "../Loader/Loader";
import {Toolbar} from "./Toolbar";
import {Form} from "./Form";
import {Tbody} from "./Tbody";
import {Thead} from "./Thead";
import {Search} from "./Search";
import {Pagination} from "./Pagination";
import {ButtonCreate} from "./ButtonCreate";
import './Table.scss';

function Table(props) {

    const [form, setForm] = useState(false);
    const [initData, setInitData] = useState([]);

    const [filterData, setFilterData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    const [page, setPage] = useState(0);
    const MAX_ELEMENTS = 50;

    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

    const [obj, setObj] = useState({});
    const [property, setProperty] = useState({})

    const [toolbar, setToolbar] = useState(0);
    const [user, setUser] = useState({
        firstName: '',
        description: '',
        address: {
            streetAddress: '',
            city: '',
            state: '',
            zip: ''
        }
    })

    const [sort, setSort] = useState({
        item: -1,
        level: 0
    });

    function handleSort(index) {
        if (sort.item !== index) {
            setSort({
                item: index,
                level: 1
            })
        }
        if (sort.level === 1 && sort.item === index) {
            setSort({
                item: index,
                level: 2
            })
        }
        if (sort.level === 2 && sort.item === index) {
            setSort({
                item: index,
                level: 1
            })
        }
    }

    function deleteProperty(obj) {
        if (obj.hasOwnProperty('address')) {
            delete obj.address;
        }
        if (obj.hasOwnProperty('description')) {
            delete obj.description;
        }
        return obj;
    }

    function getData() {
        axios.get(props.dataLoad)
            .then(res => {
                setInitData(res.data);
                setObj(JSON.parse(JSON.stringify(res.data[0])));
                setProperty(JSON.parse(JSON.stringify(res.data[0])));
                setTotalPages(Math.ceil(res.data.length / MAX_ELEMENTS));
                setLoad(true);
            })
            .catch(err => {
                setError(err.message);
                setLoad(true)
            })
    }

    useEffect(getData, [props.dataLoad]);

    useEffect(() => {
        setFilterData(initData);
    }, [initData, setInitData]);

    useEffect(() => {
        setTotalPages(Math.ceil(filterData.length / MAX_ELEMENTS));
    }, [filterData]);

    useEffect(() => {
        if (property.hasOwnProperty('firstName') && filterData[toolbar].address) {
            setUser({
                firstName: filterData[toolbar].firstName,
                lastName: filterData[toolbar].lastName,
                description: filterData[toolbar].description,
                address: {
                    streetAddress: filterData[toolbar].address.streetAddress,
                    city: filterData[toolbar].address.city,
                    state: filterData[toolbar].address.state,
                    zip: filterData[toolbar].address.zip,
                }
            })
        }else {
            if (property.hasOwnProperty('firstName')){
                setUser({
                    firstName: filterData[toolbar].firstName,
                    lastName: filterData[toolbar].lastName,
                })
            }
        }

    }, [property, sort, toolbar])

    if (load) {
        return (
            error ? <p>{error}</p> :
                <div className="table_page">
                    {form ? <Form
                        setForm={setForm}
                        filterData={filterData}
                        setInitData={setInitData}
                    /> : null}
                    <Toolbar index={toolbar} data={user} sort={sort}/>
                    <div className="table_block">
                        <ButtonCreate setForm={setForm}/>
                        <Search
                            filterData={filterData}
                            initData={initData}
                            setFilterData={setFilterData}
                            obj={obj}
                            deleteProperty={deleteProperty}
                        />
                        <table className="table">
                            <Thead
                                handleSort={handleSort}
                                deleteProperty={deleteProperty}
                                obj={obj}
                                sort={sort}
                            />
                            <Tbody
                                sort={sort}
                                filterData={filterData}
                                MAX_ELEMENTS={MAX_ELEMENTS}
                                page={page}
                                setToolbar={setToolbar}
                                toolbar={toolbar}
                                obj={obj}
                            />
                        </table>
                        <Pagination
                            page={page}
                            setPage={setPage}
                            totalPages={totalPages}
                        />
                    </div>
                </div>
        )
    } else {
        return (
            <Loader/>
        )
    }
}

export {Table};
