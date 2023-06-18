import React from 'react';
import './Input.css';

export default class Input extends React.Component{
    render(props) {
        const onKlickHandler = async e => {
          e.persist();
          const eventKey = e.which ? e.which : e.keyCode;
          const city = e.target.value;
    
          
          }


}
}