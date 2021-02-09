import React from 'react';
import PropTypes from 'prop-types';

const GitItems = (props) => {
   return (
      <li>{props.value}</li>
   )
}
GitItems.propTypes = {
   value: PropTypes.string,
}

export default GitItems;