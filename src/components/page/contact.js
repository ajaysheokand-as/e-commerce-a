import React from 'react';
import phone from '../img/iconsphone.png';
import email from '../img/iconsmail.png';
import '../css/style.css';

function contact() {
    return (
        <div className='contact'>
            <div className='home'>
                <label>Home  </label><span> /</span><span> Contact</span>
            </div>

            <div className='content_contact_'>
                <div className='content_'>
                    <div className='row_'>
                        <div className='col_lg_4'>

                            <div className='call_to_us'>
                                <div className='imgg_'>
                                    <img src={phone} alt='not found'></img>
                                    <span>Call To Us</span>
                                </div>
                                <div className='call_'>
                                    <h6>We are available 24/7, 7 days a week.</h6>
                                    <h6>Phone:8930896896, 9812902468</h6>
                                </div>

                                <hr />
                            </div>

                            <div className='write_to_us'>
                                <div className='imgg_'>
                                    <img src={email} alt='not found'></img>
                                    <span>Write To US</span>
                                </div>
                                <div className='write'>
                                    <h6>Fill out our form and we will contact<br />
                                        you within 24 hours.</h6>
                                    <h6>Emails:3rsenterprisesktl@gmail.com</h6>

                                </div>
                            </div>

                        </div>

                        <div className='col_lg_8'>

                            <div className='name_email_phone'>
                                <div className='name'>
                                    <input type='text' placeholder='     Your Name *' />
                                </div>
                                <div className='email'>
                                    <input type='email' placeholder='     Your Email *' />
                                </div>
                                <div className='phone'>
                                    <input type='tel' placeholder='     Your Phone *' />
                                </div>
                            </div>

                            <div className='message_'>
                                <input type='text' placeholder='     Your Message' />
                            </div>

                            <div className='send_btn'>
                                <button>Send Message</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default contact