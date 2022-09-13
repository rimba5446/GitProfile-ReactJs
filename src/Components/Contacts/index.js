import React from 'react';

import PropTypes from 'prop-types';

import './style.css';

const Contacts = ({ name }) => {
  return (
    <div className={'contact'} style={{ cursor: 'pointer' }}>
      <span style={{ textAlign: 'center' }} className={'purple'}>
        {name}
      </span>
    </div>
  );
};

Contacts.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Contacts;