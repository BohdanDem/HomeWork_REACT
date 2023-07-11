import React from 'react';
import SubChild21 from "./SubChild/SubChild2_1";
import {SubChild22} from "./SubChild/SubChild2_2";

const Child2 = ({NewName, NewUsername, NewEmail}) => {
    return (
        <div>
            <SubChild21/>
            <SubChild22 NewName={NewName} NewUsername={NewUsername} NewEmail={NewEmail}/>
        </div>
    );
};

export default Child2;