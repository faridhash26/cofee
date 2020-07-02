import React from  'react';
import Fade from 'react-reveal/Fade';



const Footer =()=>{
    return (
        <footer className="bck_red">
            <Fade delay={500}>
                <div className='font_right footer_logo'>farid's site</div>
                <div className='farid_copyright'>
                The FARID 2018. Created by Shane FARIDHASH. All Rights Reserved.
                </div>
            </Fade>
        </footer>
    );
};
export default Footer;