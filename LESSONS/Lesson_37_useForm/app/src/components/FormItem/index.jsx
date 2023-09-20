import React from 'react'
import FormButton from '../FormButton'
import FormInput from '../FormInput'
import s from './index.module.css'
import { useForm } from 'react-hook-form'

export default function FormItem({title, infoText, btn, formType}) {

    const { register, handleSubmit, reset, formState: {errors} } = useForm();

    const emailRegister = register('email', {
        required: '*This field is required',
        pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: '*please enter valid email address'
        }
    });

    const passwordRegister = register('password', {
        required: '*This field is required', 
        pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            message:  '*Your password should contain minimum eight characters, at least one letter, one number and one special character'
        }
    });

    const submit = data => {
        console.log(data);
        reset()
    };

  return (
    <form className={s.form} onSubmit={handleSubmit(submit)}>
        <h3>{title}</h3>

        <div>          

            <FormInput
                type='text'
                placeholder='Email'
                name='email'
                {...emailRegister}
            />

          
        {errors.email && <p className={s.error_msg}>{errors.email.message}</p>}

            <FormInput
                type='password'
                placeholder='Password'
                name='password'
                {...passwordRegister}
            />

        {errors.password && <p className={s.error_msg}>{errors.password.message} </p>}

        </div>

        <p>{infoText}</p>

        <div>
            <FormButton color='yellow_btn'>{btn.submit}</FormButton>     

            {
                formType === 'reset_password' 
                ? '' 
                : <FormButton color='white_btn'>{btn.redirect}</FormButton>
            }
        </div>
        
    </form>
  )
}
