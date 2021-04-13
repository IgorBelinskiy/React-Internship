import React from 'react';
import PropTypes from 'prop-types';

const GitItems = ({ gitItems }) => (
   <>
      {gitItems.map(({ value }) => <li key={value}>{value}</li>)}
   </>
)

GitItems.propTypes = {
   gitItems: PropTypes.array,
}

export default GitItems;


