import React from 'react';
import { css } from '@emotion/react';

import Layout, { Panel } from '../components/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <Panel
        css={css`
          h1 {
            font-size: 32px;
          }
          h2 {
            font-size: 19px;
            font-weight: bold;
          }
          h3 {
            font-size: 19px;
            font-weight: bold;
            margin-bottom: 0;
          }
          .centered {
            text-align: center;
          }
        `}
      >
        <h1 className="centered">Privacy Policy</h1>
        <h2 className="centered">
          Respecting your privacy and safeguarding your data
        </h2>
        <p className="centered">
          <i>
            This policy was updated on the 11<sup>th</sup> of June 2020
          </i>
        </p>
        <p>
          We are committed to upholding your privacy and taking care with the
          personal information that you may volunteer as part of your
          e-newsletter sign up or when you book to participate in events with
          us.
        </p>
        <p>
          The personal information we collect or use is treated securely and in
          accordance with our privacy policy (described below). Whenever you
          give us personal information, you are consenting to its collection and
          use in accordance with this policy.
        </p>
        <h3>What personal information we collect and use</h3>
        <p>
          You may be asked for personal information whenever you interact with
          us, for example when you:
        </p>
        <ul>
          <li>Book an up to an event online or over the phone</li>
          <li>Sign up to receive e-newsletter updates</li>
          <li>Post content to our social media sites (including Facebook)</li>
          <li>
            Contact us through the following channels: online, email, phone,
            SMS, social media or by post.
          </li>
        </ul>
        <p>
          We will retain your name, full address, and contact details including
          email and telephone number, together with your contact preferences.
        </p>
        <h3>When you book with us</h3>
        <p>
          We will retain your name and contact details when you make a booking
          via our website or over the telephone. We do not keep a record of your
          bank or credit card details used to pay for your events.
        </p>
        <h3>Sensitive Information</h3>
        <p>
          Some of the information we collect from you (for example, your horse’s
          details) may constitute sensitive personal data. We will only ever use
          this in accordance with this policy and shall maintain necessary
          measures to protect this information and its confidentiality.
        </p>
        <h3>What we use your information for</h3>
        <p>
          Depending on the preferences you have indicated, we will use the
          personal information you have provided to:
        </p>
        <ul>
          <li>Provide information to you.</li>
          <li>
            Send you communications by post, telephone or digital means in order
            to inform you of other services or events, which may include emails
            from us containing relevant news or competitions.
          </li>
          <li>Confirm your bookings with us.</li>
          <li>
            Ask you to participate in surveys we use for research, although you
            do not have to respond to them.
          </li>
          <li>
            Notify you of changes and improvements to services, website and this
            privacy policy.
          </li>
        </ul>
        <h3>Opting into and out of marketing communications</h3>
        <p>
          With your explicit consent we will contact you to let you know about
          upcoming events, offers and updates on our business. Occasionally we
          may include information about other businesses that we work with,
          including, but not exclusively, British Dressage.
        </p>
        <p>
          We use a third party provider, MailChimp, to deliver our
          e-newsletters. We review statistics around email opening and clicks
          using industry standard technology to help us monitor and improve our
          e-newsletters. For more information, please see MailChimp’s privacy
          notice.
        </p>
        <p>
          You can opt out of any or all of the above communications at any time
          simply by selecting ‘unsubscribe’ at the bottom of any email
          communication or by contacting us at topthornarena@gmail.com
        </p>
        <h3>Who we share your personal information with</h3>
        <p>
          We share your personal data with two organisations who specifically:
        </p>
        <ul>
          <li>administer our booking system</li>
          <li>process your payments when booking online for event entries</li>
        </ul>
        <p>
          We do not trade email lists with other organisations and businesses
          and will not share your information for promotional purposes.
        </p>
        <h3>How we keep your personal information safe</h3>
        <p>
          We place great importance on the security of your personal information
          and will always take appropriate precautions to protect it from
          unauthorized or unlawful processing and against its accidental loss.
          The personal details that you provide will be held securely and will
          not be used for any other purpose than as provided for in this policy.
        </p>
        <p>
          Where you have chosen a password, which enables you to access certain
          parts of our site, you are responsible for keeping this password
          confidential.
        </p>
        <h3>How we keep your information up to date</h3>
        <p>
          We will endeavour to keep your personal information accurate and up to
          date. If you become aware of errors or inaccuracies, please email us
          at topthornarena@gmail.com. We would really appreciate it if you could
          let us know if your contact details change.
        </p>
        <h3>How you can access the information we hold about you</h3>
        <p>
          You have the right to know what personal information we hold about you
          and request to receive a copy of that information. Any access requests
          will be subject to a £10 fee to meet the costs in providing you with
          the details of the information we hold about you.
        </p>
        <h3>Links</h3>
        <p>
          Our website may occasionally contain links to other websites. We are
          not responsible for the privacy practices of these and you should read
          their own privacy policies.
        </p>
        <h3>Changes to this policy</h3>
        <p>
          Our privacy policy may change at any time, so you may wish to check it
          each time you visit our website. Any changes will apply from the time
          they are posted to this page. If we make any significant changes in
          the way we treat your personal information we will make this clear on
          our website or by contacting you directly.
        </p>
        <h3>How long we keep your information for</h3>
        <p>
          We will hold your personal information for as long as is necessary for
          the relevant services, for example we will keep a record of any
          appointments you have made with us for at least five years. If you
          have not been a customer for more than five years your personal data
          will be erased from our records.
        </p>
        <h3>Your Rights</h3>
        <p>
          Under the General Data Protection Regulation, which becomes law in the
          UK in May 2018, you are also granted a number of additional rights.
          These include:
        </p>
        <ul>
          <li>The right to rectification</li>
          <li>The right to erasure</li>
          <li>The right to data portability</li>
          <li>The right to object</li>
          <li>Rights in relation to automated decision making and profiling</li>
        </ul>
        <p>
          For more information on these rights please read the relevant guidance
          issued by the ICO at{' '}
          <a href="https://ico.org.uk/for-organisations/guide-to-the-general-data-protection-regulation-gdpr">
            https://ico.org.uk/for-organisations/guide-to-the-general-data-protection-regulation-gdpr
          </a>
        </p>
        <p>
          <strong>
            If you have any questions at all about the ways in which we collect
            and use your personal information, please contact us at
            topthornarena@gmail.com at any time.
          </strong>
        </p>
        <p>
          <b>Inderwick Equestrian Activities Ltd.</b>
          <br />
          Registered office: The Lodge Grove Farm, Debenham Road, Stonham Aspal,
          Suffolk, IP14 6BX
          <br />
          Company Reg No. 11103898
        </p>
      </Panel>
    </Layout>
  );
};

export default PrivacyPolicy;
