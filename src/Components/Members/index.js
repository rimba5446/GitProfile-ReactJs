import React, { useEffect, useState } from 'react';
import Card from '../Card';

import './style.css';

const Members = ({ url }) => {
  const [members, setMembers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setMembers(response);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [url]);

  const Error = () => {
    return <div>{error.message}</div>;
  };

  const Fans = () => {
    return (
      <div className='container'>
        {members.map((member) => (
          <Card
            key={member.id}
            avatar={member.avatar_url}
            name={member.login}
          />
        ))}
      </div>
    );
  };

  const Loading = () => {
    return <span>Loading...</span>;
  };

  return (
    <React.Fragment>
      {loading ? <Loading /> : error ? <Error /> : <Fans />}
    </React.Fragment>
  );
};

export default Members;