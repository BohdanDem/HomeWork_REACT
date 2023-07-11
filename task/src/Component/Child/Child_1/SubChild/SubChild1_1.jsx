import React, {useContext} from 'react';

const SubChild11 = () => {
    const SubChild22Context = useContext(SubChild22Context)

    return (
        <div>
            <h3>SubChild11</h3>
            <div><b>name:</b> Leanne Graham<br/>
                 <b>username:</b> Bret<br/>
                 <b>email:</b> Sincere@april.biz
                 <b>new name:</b> {SubChild22Context.email}<br/>
            </div>
        </div>
    );
};

export default SubChild11;