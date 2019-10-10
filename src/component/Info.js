import React from 'react';


const Info = (props) => {
    console.log(props);
    return(
        <div className="member-list">
            {props.infoList.map(info => {
                return (
                    <div className="info" key={info.id}>
                        <h2>{info.name}</h2>
                        <div className="p-cont">
                            <p>{info.email}</p>
                            <p>{info.role}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};


export default Info;