import React, { useState } from 'react'
import './contact.css'
import axios from 'axios';


const Contacts = () => {

    const formId = 'QqeVOluy';
    const formSparkURL = `https://submit-form.com/${formId}`;

    const initialFormState = {
        email: "",
        name: "",
        subject: "",
        message: "",
    };

    const initialServiceMessage = {
        class: "",
        text: "",
    };


        const [formState, setFormState] = useState(initialFormState);
        const [submitting, setSubmitting] = useState(false);
        const [message, setMessage] = useState(initialServiceMessage);

        const submitForm = async (event) => {
            event.preventDefault();
            setSubmitting(true);
            await postSubmission();
            setSubmitting(false);
          };

          const postSubmission = async () => {
            const payload = {
              ...formState
            };
        
            try {
              const result = await axios.post(formSparkURL, payload);
              console.log(result);
            setMessage({
                 class: "bg-green-500",
                 text: "Thanks, I will be in touch shortly.",
               });
              setFormState(initialFormState);
            } catch (error) {
              console.log(error);
               setMessage({
                 class: "bg-red-500",
                 text: "Sorry, there was a problem. Please try again later.",
               });
            }
          };

          const updateFormControl = (
            event
          ) => {
            const { id, value } = event.target;
            const key = id;
            const updatedFormState = { ...formState };
            updatedFormState[key] = value;
            setFormState(updatedFormState);
          };
    

    return (
        <div className="contact" id="contact">
            <div className="container">
    			<div className="row">
                    <div className="section-head full-width mb-50">
                        <h4 className="title-contacts">Get In Touch</h4>
                    </div>

                    <form className="form full-width" id="contact-form" method="post" onSubmit={submitForm}>
                        {message && (
                            <div className={`text-white mb-4 ${message.class}`}>
                                {message.text}
                            </div>
                        )}
                        <div className="controls">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mar-bottom">
                                        <input id="name" onChange={updateFormControl} type="text" name="name" placeholder="Name *" required="required" value={formState?.name}></input>
                                    </div>
                                </div>

                                 <div className="col-md-6">
                                    <div className="form-group mar-bottom">
                                        <input id="email" onChange={updateFormControl} type="email" name="email" placeholder="Email *" required="required" value={formState?.email}></input>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group mar-bottom">
                                        <input id="subject" type="text" onChange={updateFormControl} name="subject" placeholder="Subject" value={formState?.subject}></input>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group mar-bottom">
                                        <textarea id="message" onChange={updateFormControl} name="message" placeholder="Your Message *" rows="4" required="required" value={formState?.message}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                            	<div className="col-md-12">
                                    <div className="form-group mar-bottom">
                                        <span className="buton buton-lg">
	                                    	<button disabled={submitting} type="submit">
                                               {submitting? 'Sending...' : 'Send Message'}
                                                </button>
										</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div className="info full-width">
                    	<div className="row">
                    		<div className="col-md-4">
                    			<div className="item">
                                    <div>
                                        <span className="iconify iconSizing" data-icon="feather:phone-call" data-inline="true"></span>
                                    </div>
                    				<div className="cont">
                    					<h6>Phone</h6>
                    					<p>+1 806 283 0449</p>
                    				</div>
                    			</div>
                    		</div>
                    		<div className="col-md-4">
                    			<div className="item">
                                    <div>
                                        <span className="iconify iconSizing" data-icon="clarity:email-line" data-inline="true"></span>
                                    </div>
                    				<div className="cont">
                    					<h6>Email</h6>
                    					<p>abdullah.ejaz1@gmail.com</p>
                    				</div>
                    			</div>
                    		</div>
                    		<div className="col-md-4">
                    			<div className="item">
                                    <div>
                                        <span className="iconify iconSizing" data-icon="bx:bx-map" data-inline="false"></span>
                                    </div>
                    				<div className="cont">
                    					<h6>Address</h6>
                    					<p>San Diego, CA</p>
                    				</div>
                    			</div>
                    		</div>
                    	</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contacts
