import React from 'react';
import SubChild21 from "./SubChild/SubChild2_1";
import {SubChild22} from "./SubChild/SubChild2_2";

const Child2 = ({setNewName, setNewUsername, setNewEmail}) => {
    return (
        <div>
            <SubChild21/>
            <SubChild22 setNewName={setNewName} setNewUsername={setNewUsername} setNewEmail={setNewEmail}/>
        </div>
    );
};

export default Child2;