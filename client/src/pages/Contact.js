import React, { useState, useContext } from 'react';
import MessageContext from '../context/messageContext';
import {TextArea} from '@adobe/react-spectrum'

const Contact = () => {
    const inputProps = {
        style: {
            height: '75px'
        }
    }
    const { style } = inputProps
    const messageContext = useContext(MessageContext);
    const { addMessage } = messageContext;
    const [fullMessageOne, setFullMessageOne] = useState({
        name: "",
        email: "",
        messages: ""
    })
    const { name, email, messages} = fullMessageOne;

    const onChange = (e) => {
        e.preventDefault();
        setFullMessageOne({ ...fullMessageOne, [e.target.name]: e.target.value})
        // if (messages.length < 25) {
        //     let newHeight = 0;
        //     let updatedHeight = 0;
        //     newHeight = parseInt(style.height) * 2;
        //     updatedHeight = newHeight.toString() += 'px';
        //     return height = updatedHeight;
        // }
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
            <h1 className='text-center aboutMe'>Contact Me!</h1>
            <div>
                <form onSubmit={onSubmit}>
                    <h3 className='aboutMe'>Name</h3>
                    <input type="text" onChange={onChange} name='name' value={name} placeholder='Name...' className='input-width' />
                    <h3 className='aboutMe'>Email</h3>
                    <input type="email" onChange={onChange} name='email' value={email} placeholder='Email Address...' className='input-width' />
                    <h3 className='aboutMe'>Message</h3>
                    <div className='custom-text-area'>
                    <TextArea alignSelf='center' flexGrow='2' maxWidth='500px' justifySelf='center' name='messages' onInput={onChange} placeholder='Type your message here...' />
                    </div>
                    <input type="submit" className='btn form-submit' />
                </form>
            </div>
        </div>
    )
}

export default Contact
