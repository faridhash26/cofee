import React, { Component } from 'react';
import Mybutton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';




class Pricing extends Component {
    state = {
      prices: [10, 15, 25],
      type: ['spresso', 'chapochino', 'mochacino'],
      desc: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolores incidunt, ratione cumque dolor error unde consequuntur ut minus molestiae quisquam ea deserunt placeat voluptates est, beatae deleniti animi? Quia!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolores incidunt, ratione cumque dolor error unde consequuntur ut minus molestiae quisquam ea deserunt placeat voluptates est, beatae deleniti animi? Quia!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolores incidunt, ratione cumque dolor error unde consequuntur ut minus molestiae quisquam ea deserunt placeat voluptates est, beatae deleniti animi? Quia!'
      ],
      linkto: [
        'https://www.google.com',
        'https://www.google.com',
        'https://www.google.com'
      ],
      // Sets delay on Zoom transition.
      delay: [500, 0, 500]
    };
  
    showBoxes = () =>
      this.state.prices.map((box, i) => (
        // Zoom transition using react-reveal.
        <Zoom delay={this.state.delay[i]} key={i}>
          <div className="pricing_item">
            <div className="pricing_inner_wrapper">
              <div className="pricing_title">
                <span>${this.state.prices[i]}</span>
                <span>${this.state.type[i]}</span>
              </div>
              <div className="pricing_description">${this.state.desc[i]}</div>
              <div className="pricing_buttons">
                {/* reusable button component. */}
                <Mybutton
                  text="Purchase"
                  bck="#ffa800"
                  color="#ffffff"
                  link={this.state.linkto[i]}
                />
              </div>
            </div>
          </div>
        </Zoom>
      ));
  
    render() {
      return (
        <div className="bck_black">
          <div className="center_wrapper pricing_section">
            <h2>Pricing</h2>
  
            <div className="pricing_wrapper">{this.showBoxes()}</div>
          </div>
        </div>
      );
    }
  }
  
  export default Pricing;


