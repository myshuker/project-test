import React from 'react';
import './ResultMessageModalWindow.styles.css';
import PropTypes from 'prop-types';


export default function Result({correctAnswer}) {
  if(correctAnswer >3){
  return (
    <div className="result-component">
     <h1>Congratulations!</h1>
     </div>
  )
}
  return (
   <div className="result-component">
       <h1>Incorrect Answered!</h1>
     </div>
  )
}


Result.propTypes = {
    correctAnswer: PropTypes.number.isRequired,
};
