import React, {useContext, useEffect} from 'react';
import {HappyUser} from "../../../../App";

const SubChild22 = () => {
    const name = 'Clementina DuBuque'
    const username = 'Moriah.Stanton'
    const email = 'Rey.Padberg@karina.biz'

    const data = useContext(HappyUser)

    useEffect(() => {
        data.setNewName(name)
        data.setNewUsername(username)
        data.setNewEmail(email)
    }, [name, username, email, data])


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