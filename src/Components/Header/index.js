import React from 'react';

import PropTypes from 'prop-types';

import './style.css';

const Header = ({ caption }) => {
  return (
    <div className={'header'}>
      {caption}
    </div>
  );
};

Header.propTypes = {
  caption: PropTypes.string,
};

export default Header;