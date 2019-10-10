import React from 'react';


const TeamForm = (props) => {

    const [info, setInfo] = React.useState({
        id: '',
        name: '',
        email: '',
        role: ''
    })

    const handleChange = e => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.addInfoFn(info);
        setInfo({
            id: '',
            name: '',
            email: '',
            role: ''
        });
    };

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <div className="formField">
                    <label htmlFor="name">Member Name:</label>
                    <input
                        id="name"
                        value={info.name}
                        name="name"
                        type="text"
                        onChange={handleChange}
                    />
                </div>

                <div className="formField">
                    <label htmlFor="email">Email Address:</label>
                    <input
                        id="email"
                        value={info.email}
                        name="email"
                        type="email"
                        onChange={handleChange}
                    />
                </div>
                
                <div className="formField">
                    <label htmlFor="role">Team Role:</label>
                    <input
                        id="role"
                        value={info.role}
                        name="role"
                        type="text"
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Add Team Member</button>
            </form>
        </div>
    );
}

export default TeamForm;