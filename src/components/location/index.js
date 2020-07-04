import React from 'react';

const Location =()=>{
    return (
        <div className='location_wrapper'>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d202.49018344730484!2d51.3488924311376!3d35.705482523710636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d35.705571299999995!2d51.3489917!5e0!3m2!1sen!2s!4v1593863319328!5m2!1sen!2s"
            width='100%'
            height='500px'
            frameBorder='0'
            allowFullScreen />
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;
