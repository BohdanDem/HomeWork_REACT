import React, {useContext} from 'react';
import {HappyUser} from "../../../../App";

const SubChild11 = () => {
    const happyUser = useContext(HappyUser)

    return (
        <div>
            <h3>SubChild11</h3>
            <div><b>name:</b> Leanne Graham<br/>
                 <b>username:</b> Bret<br/>
                 <b>email:</b> Sincere@april.biz<br/><br/>
                 <b>GAME WINNER:</b> Hello, lucky user from SubChild2_2 is {happyUser.NewName} with email {happyUser.NewEmail}<br/>
            </div>
        </div>
    );
};

export default SubChild11;