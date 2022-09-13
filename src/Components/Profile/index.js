import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './style.css';

import Avatar from '../Avatar';
import Contacts from '../Contacts';
import Connection from '../Connection';
import Summary from '../Summary';
import Members from '../Members';

const Profile = () => {
  const [profile, setProfile] = useState({});

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true);

  // call github users api on componentDidMount()
  // using hooks
  useEffect(() => {
    fetch('https://api.github.com/users/rimba5446')
      .then((response) => response.json())
      .then((response) => {
        setProfile(response);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <React.Fragment>
      {error ? (
        <div>{error.message}</div>
      ) : (
        <Router>
          {loading ? (
            <div>loading...</div>
          ) : (
            <React.Fragment>
              <div className={'column left'}>
                <Avatar source={profile.avatar_url} />
                <Link to='/' style={{ textDecoration: 'none' }}>
                  <Contacts name={profile.name} />
                </Link>
                <Connection
                  followers={profile.followers}
                  following={profile.following}
                />
              </div>
              <div className={'column right'}>
                <Switch>
                  <Route
                    exact
                    path='/'
                    children={(props) => <Summary profile={profile} />}
                  />
                  <Route
                    path='/followers'
                    children={() => <Members url={profile.followers_url} />}
                  />
                  <Route
                    path='/following'
                    children={() => (
                      <Members
                        url={String(profile.following_url).replace(
                          '{/other_user}',
                          ''
                        )}
                      />
                    )}
                  />
                </Switch>
              </div>
            </React.Fragment>
          )}
        </Router>
      )}
    </React.Fragment>
  );
};

export default Profile;