import React from 'react';

import PropTypes from 'prop-types';

import './style.css';
import Contacts from '../Contacts';

const Card = ({ avatar, name }) => {
    return (
        <div className={'card'}>
            <img src={avatar} alt={'avatar'} className={'avatar'} />
            <Contacts name={name} />
        </div>
    );
};

Card.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Card;