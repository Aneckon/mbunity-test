'use client';
import React from 'react';
import { toast } from 'react-toastify';

import { useForm, SubmitHandler } from 'react-hook-form';

import { Button } from '@/ui';

import styles from './form.module.scss';

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  general: string;
  messages: string;
};

export const Form = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    toast.success('Success form send');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.form__item}>
        <label>
          First Name
          <input
            {...(register('firstName'), { required: true })}
            type="text"
            placeholder="Write your first name..."
          />
        </label>
        <label>
          Last Name
          <input
            {...(register('lastName'), { required: true })}
            type="text"
            placeholder="Write your last name..."
          />
        </label>
      </div>
      <div className={styles.form__item}>
        <label>
          Email
          <input
            {...(register('email'), { required: true })}
            type="text"
            placeholder="Write your email..."
          />
        </label>
        <label>
          Phone Number
          <input
            {...(register('phone'), { required: true })}
            type="text"
            placeholder="Write your phone number..."
          />
        </label>
      </div>
      <div className={styles.form__radios}>
        <p>Select Subject?</p>
        <div className={styles.form__item}>
          <div className={styles.form__radio}>
            <input
              {...(register('general'), { required: true })}
              type="radio"
              id="radio"
              name="radio"
              value="General"
            />
            <label htmlFor="radio">General Inquiry</label>
          </div>
          <div className={styles.form__radio}>
            <input
              {...(register('general'), { required: true })}
              type="radio"
              id="radio1"
              name="radio"
              value="General1"
            />
            <label htmlFor="radio1">General Inquiry</label>
          </div>
          <div className={styles.form__radio}>
            <input
              {...(register('general'), { required: true })}
              type="radio"
              id="radio2"
              name="radio"
              value="General2"
            />
            <label htmlFor="radio2">General Inquiry</label>
          </div>
          <div className={styles.form__radio}>
            <input
              {...(register('general'), { required: true })}
              type="radio"
              id="radio3"
              name="radio"
              value="General3"
            />
            <label htmlFor="radio3">General Inquiry</label>
          </div>
        </div>
      </div>
      <div className={styles.form__item}>
        <label style={{ maxWidth: '100%' }}>
          Message
          <input
            {...(register('messages'), { required: true })}
            type="text"
            placeholder="Write your message.."
          />
        </label>
      </div>
      <Button className="primary" type={'submit'}>
        Send Message
      </Button>
    </form>
  );
};
