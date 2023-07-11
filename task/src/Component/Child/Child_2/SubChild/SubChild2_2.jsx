import React, {createContext} from 'react';

export const SubChild22Context = createContext(null)
const SubChild22 = (props) => {
    const name = 'Clementina DuBuque'
    const username = 'Moriah.Stanton'
    const email = 'Rey.Padberg@karina.biz'

    return (
        <div>
            <h3>SubChild22</h3>
            <div><b>name:</b> {name}<br/>
                 <b>username:</b> {username}<br/>
                 <b>email:</b> {email}
            </div>
        </div>
    );
};

export {SubChild22};