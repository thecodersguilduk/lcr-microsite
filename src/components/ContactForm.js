import React from 'react';
export default function ContactForm() {
  return (
    <section>
      <h2>Get in touch</h2>
      <form method="post" action="https://formspree.io/f/xvodzlyo">
        <div className="fields">
          <div className="field half">
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>
          <div className="field half">
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="field half">
            <input type="text" name="companyname" id="company" placeholder="Company Name" />
          </div>
          <div className="field half">
            <input type="text" name="phone" id="phone" placeholder="Contact Number" />
          </div>
          <div className="field">
            <textarea name="message" id="message" placeholder="Message" />
          </div>
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Send" className="primary" />
          </li>
        </ul>
      </form>
    </section>
  );
}
