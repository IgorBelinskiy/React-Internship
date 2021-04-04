import React from 'react';
import PropTypes from 'prop-types';

const GitItems = ({ gitItems }) => (
   <>
      {gitItems.map(({ value }, index) => <li key={index}>{value}</li>)}
   </>
)

GitItems.propTypes = {
   gitItems: PropTypes.array,
}

export default GitItems;


