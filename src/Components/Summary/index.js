import React from 'react';

import PropTypes from 'prop-types';

import './style.css';

import Profile from './Profile';

/**
 * @description Formats date object to human readable format
 * i didn't want to use the packages
 * @param {String} value date string
 * @returns String
 */
const formatDate = (value) => {
  if (!value) return;
  const date = new Date(value);
  if (isNaN(date)) {
    return 'Invalid Date';
  }
  if (date === 'Invalid Date') {
    return 'Invalid Date';
  }
  if (value.length < 10) {
    return 'Invalid Date';
  }
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }
  return `${year}-${month}-${day}`;
};

const Summary = ({ profile }) => {
  const website = profile.blog ? profile.blog : '#';
  const anchor = <a href={website}> Blog</a>;
  return profile ? (
    <div className={'profile profile-striped'}>
      <Profile name={'ID'} value={profile.id} />
      <Profile name={'Type'} value={profile.type} />
      <Profile
        name={'Site Admin'}
        value={Boolean(profile.site_admin) ? 'Yes' : 'No'}
      />
      <Profile name={'Website'} value={anchor} />
      <Profile name={'Location'} value={profile.location} />
      <Profile name={'Email'} value={profile.email} />
      <Profile name={'Bio'} value={profile.bio} />
      <Profile name={'Public Repository'} value={profile.public_repos} />
      <Profile name={'Public Gists'} value={profile.public_gists} />
      <Profile name={'Date Created'} value={formatDate(profile.created_at)} />
      <Profile name={'Date Updated'} value={formatDate(profile.updated_at)} />
    </div>
  ) : (
    <div>no profile data</div>
  );
};

Summary.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default Summary;