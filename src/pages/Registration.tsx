import { IRegistration } from '@/types/IRegistration'
import React, { useState } from 'react'

const Registration = () => {

    const [form, setForm] = useState<IRegistration>()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setForm({ ...form, [e.target.name]: e.target.type == "checkbox" ? e.target.checked : e.target.value })
        console.log(form);
    }

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
        e.preventDefault()
        console.log(form)
    }

    return (
        <div>

            <form action="" onSubmit={handleSubmit}>
                <input type="text" name='firstName' onChange={handleChange} />
                <input type="text" name='lastName' onChange={handleChange} />
                <input type="checkbox" name="isActive" onChange={handleChange} />
                <input type="submit" value="Save" />
            </form>

        </div>
    )
}

export default Registration
