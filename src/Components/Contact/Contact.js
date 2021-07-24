import React from 'react'
import './contact.css'
import locationIcon from '../../Images/location4.png'

const Contacts = () => {
    return (
        <div className="contact" id="contact">
            <div className="container">
    			<div className="row">
                    <div className="section-head full-width mb-50">
                        <h4 className="title-contacts">Get In Touch</h4>
                    </div>

                    <form className="form full-width" id="contact-form" method="post">
                        <div className="controls">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group mar-bottom">
                                        <input id="form_name" type="text" name="name" placeholder="Name *" required="required"></input>
                                    </div>
                                </div>

                                 <div class="col-md-6">
                                    <div class="form-group mar-bottom">
                                        <input id="form_email" type="email" name="email" placeholder="Email *" required="required"></input>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group mar-bottom">
                                        <input id="form_subject" type="text" name="subject" placeholder="Subject"></input>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group mar-bottom">
                                        <textarea id="form_message" name="message" placeholder="Your Message *" rows="4" required="required"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                            	<div class="col-md-12">
                                    <div class="form-group mar-bottom">
                                        <span class="buton buton-lg">
	                                    	<button type="submit">Send Message</button>
										</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div class="info full-width">
                    	<div class="row">
                    		<div class="col-md-4">
                    			<div class="item">
                                    <div>
                                        <span className="iconify iconSizing" data-icon="feather:phone-call" data-inline="true"></span>
                                    </div>
                                    {/* <img className="icon-contact" src={locationIcon} alt="Skills Icon"></img> */}
                    				<div class="cont">
                    					<h6>Phone</h6>
                    					<p>+1 806 283 0449</p>
                    				</div>
                    			</div>
                    		</div>
                    		<div class="col-md-4">
                    			<div class="item">
                                    <div>
                                        <span className="iconify iconSizing" data-icon="clarity:email-line" data-inline="true"></span>
                                    </div>
                                    {/* <img className="icon-contact" src={locationIcon} alt="Skills Icon"></img> */}
                    				<div class="cont">
                    					<h6>Email</h6>
                    					<p>abdullah.ejaz1@gmail.com</p>
                    				</div>
                    			</div>
                    		</div>
                    		<div class="col-md-4">
                    			<div class="item">
                                    <div>
                                        <span className="iconify iconSizing" data-icon="bx:bx-map" data-inline="false"></span>
                                    </div>
                                    {/* <img className="icon-contact" src={locationIcon} alt="Skills Icon"></img> */}
                    				<div class="cont">
                    					<h6>Address</h6>
                    					<p>1905 Oak Creek Rd, New Orleans, LA</p>
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
