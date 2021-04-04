import React from 'react';
import PropTypes from 'prop-types';

const GitItems = ({ gitItems }) => {
   return (
      <>
         {gitItems.map(({ value }, index) => {
            return (
               <li key={index}>{value}</li>
            )
         })}
      </>
   )
}

GitItems.propTypes = {
   gitItems: PropTypes.array,
}

export default GitItems;


