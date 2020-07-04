import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Mybutton from '../utils/MyButton';

class Discount extends Component{
    state={
        DiscountStart:0,
        DiscountEnd:30
    };
    percentage=()=>{
        if (this.state.DiscountStart<this.state.DiscountEnd){
            this.setState({
                DiscountStart:this.state.DiscountStart + 1
            });
        }
    };
    componentDidUpdate(){
        setTimeout(()=>{
            this.percentage();
        },30);
    }
    render(){
        return(
            <div className='center_wrapper'>
                <div className='discount_wrapper'>
                    <Fade  onReveal={()=>this.percentage()}>
                        <div className='discount_percentage'>
                            <span>{this.state.DiscountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className='discount_description'>
                            <h3>say hello to farid October 25th</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                                dolor aspernatur hic, quisquam quibusdam dolorum nesciunt rem ut
                                nemo, illum reiciendis sint mollitia exercitationem sapiente,
                                earum unde ducimus sequi similique?
                            </p>
                            <Mybutton text="purchase Ticket"
                             bck="#ffa800"
                             color="#ffffff"
                             link="http://google.com"
                             />
                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
}
export default Discount;