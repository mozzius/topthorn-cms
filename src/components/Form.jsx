import styled from '@emotion/styled';
import React from 'react';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  & label {
    margin: 10px 0;
  }

  & li,
  label {
    max-width: 600px;
  }

  & input[type='submit'] {
    align-self: flex-end;
    border: none;
    border-radius: 5px;
    color: white;
    background: #2f2d5f;
    padding: 5px 20px;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & input[type='text'],
  input[type='email'] {
    width: 300px;
    border-radius: 3px;
    border: 1px solid black;
    padding: 5px 10px;
  }
`;

const Form = () => (
  <StyledForm
    name="health-form"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    {/* for netlify forms */}
    <input type="hidden" name="form-name" value="health-form" />

    <Label>
      Your name:
      <input type="text" name="owner" required />
    </Label>
    <Label>
      Your email address:
      <input type="email" name="owner" required />
    </Label>
    <Label>
      Your role (rider/owner/administrator):
      <input type="text" name="owner" required />
    </Label>

    <Label>
      Horse name:
      <input type="text" name="horse" required />
    </Label>
    <Label>
      Rider name:
      <input type="text" name="rider" required />
    </Label>
    <Label>
      Owner name:
      <input type="text" name="owner" required />
    </Label>
    <Label>
      Event you wish to attend (name and date):
      <input type="text" name="owner" required />
    </Label>
    <div>
      Under no circumstances must your horse have:
      <ul>
        <li>recent cough of unknown cause</li>
        <li>recent nasal discharge of unknown cause</li>
        <li>enlarged lymph nodes</li>
        <li>
          fever ({'>'}38.5<sup>o</sup>C)
        </li>
        <li>recent onset of neurological signs of unknown cause</li>
        <li>diarrhoea</li>
      </ul>
    </div>
    <label>
      <input type="checkbox" name="no-symptoms" required /> I confirm that my
      horse has none of the above symptons
    </label>
    <div>
      The aforementioned horse:
      <ul>
        <li>is not under current investigation for EHV infection.</li>
        <li>
          has not been in contact with and is not kept on the same premises as a
          horse known to have or be under investigation for EHV.
        </li>
        <li>has been resident in the UK for the last 28 days.</li>
      </ul>
    </div>
    <label>
      <input type="checkbox" name="confirm-statements" required /> I confirm
      that the above statements are true
    </label>
    <label>
      <input type="checkbox" name="temp-check" required /> I confirm that the
      horse named above will have its temperature taken prior to travel and will
      not travel should the temperature be {'>'}38.5<sup>o</sup>C
    </label>
    <label>
      <input type="checkbox" name="declaration" required /> To the best of my
      knowledge, I confirm and agree to all the statements outlined above. I
      confirm that I am over 18 years of age.
    </label>
    <input type="submit" value="Submit form" />
  </StyledForm>
);

export default Form;
