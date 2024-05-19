import React from 'react'
import './ContactMe.css'
import Button from '../Button/Button'
import {FaPaperPlane} from 'react-icons/fa'

export default function ContactMe() {
    function handleButtonClick() {
        const emailInput = document.querySelector(".input-email")
        const messageInput = document.querySelector(".input-message").value

        const email = emailInput.value
        const message = messageInput

        if(email==="" || !message==="") {
            alert("Please fill in all the fields!")
        }
        else{
            alert("Thank you for your message!")
            emailInput.reset()
            messageInput.reset()
        }
    }   
    return(
        <div className="contact-me">
            <h1 className='title-contact-me'>Contact me</h1>
            <input type="email" placeholder="Email" className='input-email'/>
            <textarea type="text" placeholder="Message" className='input-message'></textarea>
            <Button ButtonText={'Submit'} Icon={<FaPaperPlane className='icon' />} onClick={handleButtonClick} />
        </div>
    )
}