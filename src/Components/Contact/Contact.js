import React, { Component } from 'react';

class Contact extends Component {
  render() {
    // TODO Update to only pass Contact json  
    if(this.props.data){
      var name = this.props.data.name;
      var city = this.props.data.address.city;
      var country = this.props.data.address.country;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact" class="s-contact target-section">

        <div class="overlay"></div>

        <div class="row narrow section-intro">
            <div class="col-full">
                <h3>Contact</h3>
                <h1>Drop Me A Line.</h1>
                
                <p class="lead">{message}</p>
            </div>
        </div>

        <div class="row contact__main">
            <div class="col-eight tab-full contact__form">
                <form name="contactForm" id="contactForm" method="post" action="">
                    <fieldset>
    
                    <div class="form-field">
                        <input name="contactName" type="text" id="contactName" placeholder="Name" value="" minLength="2" required="" aria-required="true" class="full-width"/>
                    </div>
                    <div class="form-field">
                        <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" value="" required="" aria-required="true" class="full-width"/>
                    </div>
                    <div class="form-field">
                        <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" value="" class="full-width"/>
                    </div>
                    <div class="form-field">
                        <textarea name="contactMessage" id="contactMessage" placeholder="Message" rows="10" cols="50" required="" aria-required="true" class="full-width"></textarea>
                    </div>
                    <div class="form-field">
                        <button class="full-width btn--primary">Submit</button>
                        <div class="submit-loader">
                            <div class="text-loader">Sending...</div>
                            <div class="s-loader">
                                <div class="bounce1"></div>
                                <div class="bounce2"></div>
                                <div class="bounce3"></div>
                            </div>
                        </div>
                    </div>
    
                    </fieldset>
                </form>

                {/* <!-- contact-warning --> */}
                <div class="message-warning">
                    Something went wrong. Please try again.
                </div> 
            
                {/* <!-- contact-success --> */}
                <div class="message-success">
                    Your message was sent to {name}, thank you!<br/>
                </div>
                        
            </div>
            <div class="col-four tab-full contact__infos">
                <h4 class="h06">Phone</h4>
                <p>Mobile: {phone}<br/>
                </p>

                <h4 class="h06">Email</h4>
                <p>{email}<br/>
                {email}
                </p>

                <h4 class="h06">Address</h4>
                <p>
                {city}<br/>
                {country}<br/>
                </p>
            </div>

        </div>

    </section>
    );
  }
}

export default Contact;
