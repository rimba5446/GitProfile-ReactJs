import React from 'react';

import PropTypes from 'prop-types';

import './style.css';

const Profile = ({ name, value }) => {
  return (
    <div className={'profile-row'}>
      <div className={'row-name'}>
        {name}
      </div>
      <div className={'row-value'}>
        {value}
      </div>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
};

export default Profile;