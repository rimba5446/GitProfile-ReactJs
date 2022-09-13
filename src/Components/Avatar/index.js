import React from 'react';

import PropTypes from 'prop-types';

import './style.css';

const Avatar = ({ source }) => {
  return (
    <span className={'profile'}>
      <img src={source} alt={'avatar'} className={'avatar'} />
    </span>
  );
};

Avatar.propTypes = {
  source: PropTypes.string.isRequired,
};

export default Avatar;