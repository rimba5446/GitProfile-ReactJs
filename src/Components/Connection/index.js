import React, { Fragment } from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './style.css';

const Connection = ({ followers, following }) => {
  return (
    <Fragment>
      <Fragment>
        <Link to={'followers'}>
          <div className={'grid'}>
            <span>
              {followers}
            </span>
            <div>Followers</div>
          </div>
        </Link>
        <Link to={'following'}>
          <div className={'grid'}>
            <span>
              {following}
            </span>
            <div>Following</div>
          </div>
        </Link>
      </Fragment>
    </Fragment>
  );
};

Connection.propTypes = {
  followers: PropTypes.number,
  following: PropTypes.number,
};

export default Connection;