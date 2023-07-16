import React, {useEffect} from 'react';

const SubChild22 = ({setNewName, setNewUsername, setNewEmail}) => {
    const name = 'Clementina DuBuque'
    const username = 'Moriah.Stanton'
    const email = 'Rey.Padberg@karina.biz'

    useEffect(() => {
        setNewName(name)
        setNewUsername(username)
        setNewEmail(email)
    }, [name, username, email, setNewName, setNewUsername, setNewEmail])

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