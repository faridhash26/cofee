import React from 'react';
import Button from '@material-ui/core/Button';
import Cashicon from '../../resources/images/icons/cashicon.png';

const MyButton = props => {
  return (
    <Button
      href={props.link}
      variant="contained"
      size="small"
      style={{
        background: props.bck,
        color: props.color
      }}
    >
      <img src={Cashicon} className="iconImage" alt="icon_button" />
      {props.text}
    </Button>
  );
};

export default MyButton;