import React, { Component } from 'react';
import Mybutton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';
import { render } from '@testing-library/react';

class Pricing extends Component{
    state={
        prices:[10,15,25],
        types:['S-persso' ,'Cappuccino' ,'Mochachino'  ],
        dec:[
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolores incidunt, ratione cumque dolor error unde consequuntur ut minus molestiae quisquam ea deserunt placeat voluptates est, beatae deleniti animi? Quia!',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolores incidunt, ratione cumque dolor error unde consequuntur ut minus molestiae quisquam ea deserunt placeat voluptates est, beatae deleniti animi? Quia!',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolores incidunt, ratione cumque dolor error unde consequuntur ut minus molestiae quisquam ea deserunt placeat voluptates est, beatae deleniti animi? Quia!'
        ],
        linkto:[
          'https://www.google.com/' ,
          'https://www.google.com/',
          'https://www.google.com/'

        ],
        delay:[500,0,500]
    };
    showBox=()=>{
        this.state.prices.map((box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>${ this.state.types[i]}</span>
                        </div>
                        <div className="pricing_description">${this.state.dec[i]}</div>
                        <div className="pricing_buutons">
                            <Mybutton 
                            text="Purchase"
                            bck="#ffa8800"
                            color="#ffffff"
                            link={this.state.linkto[i]} 
                            />
                        </div>
                    </div>
                </div>
            </Zoom>

        ));
        render(){
            return(
                <div className="bck_black">
                    <div className="center_erapper pricing_section">
                        <h2>Pricing</h2>
                        <div className="pricing_wrapper">{this.showBox()}</div>
                    </div>
                </div>
            );
        }
    }
}
export default Pricing;