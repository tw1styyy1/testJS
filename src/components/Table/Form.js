import React, {useEffect, useState} from "react";

function Form({setForm, setInitData, filterData}) {

    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [user, setUser] = useState({})

    useEffect(() => {
        if (id.length > 1 && firstName.length > 3 && lastName.length > 3 && email.length > 3 && phone.length > 3) {
            setInitData([user, ...filterData]);
            setId('')
            setFirstName('')
            setLastName('')
            setEmail('')
            setPhone('')
            setUser('')
        }
    }, [user])

    return (
        <div className="form-popup" id="myForm">
            <form className="form-container">
                <h1>Новая запись</h1>
                <label htmlFor="id"><b>id</b></label>
                <input value={id} onChange={(e) => {
                    setId(e.target.value)
                }} type="text" placeholder="id" name="id" required/>

                <label htmlFor="firstName"><b>firstName</b></label>
                <input value={firstName} onChange={(e) => {
                    setFirstName(e.target.value)
                }} type="text" placeholder="Имя" name="firstName" required/>

                <label htmlFor="lastName"><b>lastName</b></label>
                <input value={lastName} onChange={(e) => {
                    setLastName(e.target.value)
                }} type="text" placeholder="Фамилия" name="lastName" required/>

                <label htmlFor="email"><b>email</b></label>
                <input value={email} onChange={(e) => {
                    setEmail(e.target.value);
                }} type="text" placeholder="Почта" name="email" required/>

                <label htmlFor="phone"><b>phone</b></label>
                <input value={phone} onChange={(e) => {
                    setPhone(e.target.value)
                }} type="text" placeholder="Телефон" name="phone" required/>

                <button onClick={(e) => {
                    e.preventDefault();
                    setUser({
                        id: parseInt(id),
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        phone: phone
                    });
                }} type="submit" className="btn">Добавить
                </button>
                <button type="submit" className="btn cancel" onClick={(e) => {
                    e.preventDefault();
                    setForm(false)
                }}>Закрыть
                </button>
            </form>
        </div>
    )
}

export {Form}