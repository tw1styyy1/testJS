import React from 'react';

function Icons({index, getClassTd}) {

    if (getClassTd(index) === 'sort_td_up') {
        return (
            <img alt="icon" className='icon'
                 src={'https://myrusakov.ru/images/articles/css_arrows_02.jpg'}/>
        )
    }
    if (getClassTd(index) === 'sort_td_down') {
        return (
            <img alt="icon" className="icon"
                 src={'https://st2.depositphotos.com/4060975/8059/v/450/depositphotos_80596450-stock-illustration-%' +
                 'D0%B2%D0%BD%D0%B8%D0%B7-%D1%81%D1%82%D1%80%D0%B5%D0%BB%D0%BA%D0%B0-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%8' +
                 '0%D0%BD%D1%8B%D0%B9-icon.jpg'}/>
        )
    }
    return (
        <img alt="icon" className="icon icon_small"
             src={'https://image.flaticon.com/icons/png/512/36/36861.png'}/>
    )

}

export {Icons};