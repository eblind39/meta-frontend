import React, { useState } from "react";
import RegisterFormType from "./types/registrerform";
import MyVideo from "./MediaPlayer";
import BirdSounds from "./BirdSounds";

const RegisterForm = () => {
    const [form, setForm] = useState<RegisterFormType>({
        firstName: 'Luke',
        lastName: 'Jones',
        email: 'lukejones@sculpture.com'
    });

    return (
        <React.Fragment>
            <label>
                First Name:
                <input value={form.firstName} 
                    onChange={e => {
                        setForm({
                            ...form,
                            firstName: e.target.value
                        });
                    }}/>
            </label><br />
            <label>
                Last Name:
                <input value={form.lastName} 
                    onChange={e => {
                        setForm({
                            ...form,
                            lastName: e.target.value
                        });
                    }}/>
            </label><br />
            <label>
                Email:
                <input value={form.email} 
                    onChange={e => {
                        setForm({
                            ...form,
                            email: e.target.value
                        })
                    }}/>
            </label><br />
            <p>
                {form.firstName}{' '}
                {form.lastName}{' '}
                {form.email}
            </p>
            <BirdSounds />
            <MyVideo />
        </React.Fragment>
    )
}

export default RegisterForm;