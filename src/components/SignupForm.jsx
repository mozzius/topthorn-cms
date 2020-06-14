import React, { useState } from 'react';
import MailChimp from 'react-mailchimp-subscribe';
import styled from '@emotion/styled';

import { Panel } from './Layout';

// [
//   {
//     name: 'EMAIL',
//     placeholder: 'Email',
//     type: 'email',
//     required: true,
//   },
//   {
//     name: 'FNAME',
//     placeholder: 'First Name',
//     type: 'text',
//     required: true,
//   },
//   {
//     name: 'LNAME',
//     placeholder: 'Last Name',
//     type: 'text',
//     required: true,
//   },
// ]

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  input {
    border-radius: 5px;
    font-size: 16px;
    box-sizing: border-box;
    margin: 5px 0 20px;
  }

  span {
    color: red;
    font-size: 12px;
    vertical-align: text-top;
  }

  input[type='text'],
  input[type='email'] {
    border: 2px solid #ccc;
    background-color: white;
    padding: 10px;

    &:focus {
      border-color: ${({ theme }) => theme.blue};
    }
  }

  input[type='submit'] {
    border: none;
    color: white;
    background-color: ${({ theme }) => theme.blue};
    align-self: flex-end;
    padding: 10px 20px;
    cursor: pointer;
  }
`;

const SignupForm = ({ text }) => {
  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');

  return (
    <Panel>
      <MailChimp
        url="https://topthornarena.us4.list-manage.com/subscribe/post?u=21f7dd026528bab3a75bda6b5&amp;id=b1c6ea6e11"
        render={({ status, message, subscribe }) => {
          return (
            <>
              <h3>{text}</h3>
              <Form
                onSubmit={(evt) => {
                  evt.preventDefault();
                  if (email && fname && lname && email.includes('@')) {
                    subscribe({ EMAIL: email, FNAME: fname, LNAME: lname });
                  }
                }}
              >
                <label htmlFor="email">
                  Email <span>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="fname">
                  First Name <span>*</span>
                </label>
                <input
                  type="text"
                  name="fname"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
                <label htmlFor="lname">
                  Last Name <span>*</span>
                </label>
                <input
                  type="text"
                  name="lname"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
                <span>* required</span>
                <input type="submit" value="Subscribe" />
              </Form>
              {status === 'sending' && <p>Sending...</p>}
              {status === 'success' && (
                <p dangerouslySetInnerHTML={{ __html: message }} />
              )}
              {status === 'error' && (
                <p>
                  Sorry, that didn't work.{' '}
                  <a
                    href="https://mailchi.mp/7b8b794317ca/topthorn-newsletter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Please click here to sign up through MailChimp
                  </a>
                </p>
              )}
            </>
          );
        }}
      />
    </Panel>
  );
};

export default SignupForm;
