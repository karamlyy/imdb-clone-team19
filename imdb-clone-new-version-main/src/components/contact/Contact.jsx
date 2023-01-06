import React from 'react'
import { useState } from 'react'
import { submitContact } from '../../api'
import './Contact.css';




function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")

    const submitContactData = () => {
        submitContact({ name, email, subject })
            .then(response => {
                alert("successfull submission")
            }).catch(error => {
                alert(error)
            })
    }


    const submit = (e) => {
        e.preventDefault()
        submitContactData()
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input className = "inputField" type="text" placeholder='enter name' value={name} onChange={(e) => setName(e.target.value)} />
                <input className = "inputField" type="email" placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className = "inputField" type="text" placeholder='enter subject' value={subject} onChange={(e) => setSubject(e.target.value)} />

                <input className = "button" type="submit" />
            </form>
        </div>
    )
}

export default Contact
