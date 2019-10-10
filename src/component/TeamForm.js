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
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Member Name</label>
            <input
                id="name"
                value={info.name}
                name="name"
                type="text"
                onChange={handleChange}
            />

            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                value={info.email}
                name="email"
                type="email"
                onChange={handleChange}
            />
            
            <label htmlFor="role">Team Role</label>
            <input
                id="role"
                value={info.role}
                name="role"
                type="text"
                onChange={handleChange}
            />

            <button type="submit">Add Team Member</button>
        </form>
    );
}

export default TeamForm;