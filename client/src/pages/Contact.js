import React, { useState, useContext } from 'react';
import MessageContext from '../context/messageContext';

const Contact = () => {
    const messageContext = useContext(MessageContext);
    const { addMessage } = messageContext;
    const [fullMessageOne, setFullMessageOne] = useState({
        name: "",
        email: "",
        messages: ""
    })
    const { name, email, messages} = fullMessageOne;

    const onChange = (e) => {
        setFullMessageOne({ ...fullMessageOne, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addMessage(fullMessageOne);
        setFullMessageOne({
            name: "",
            email: "",
            messages: ""
        })
    }
    return (
        <div>
            <div>
                <form onSubmit={onSubmit}>
                    <h3 className='aboutMe'>Name</h3>
                    <input type="text" onChange={onChange} name='name' value={name} placeholder='Name...' className='input-width' />
                    <h3 className='aboutMe'>Email</h3>
                    <input type="email" onChange={onChange} name='email' value={email} placeholder='Email Address...' className='input-width' />
                    <h3 className='aboutMe'>Message</h3>
                    <input type="text" onChange={onChange} name='messages' value={messages} placeholder='Type your message here...' className='input-width message-box' />
                    <input type="submit" className='btn form-submit' />
                </form>
            </div>
        </div>
    )
}

export default Contact
