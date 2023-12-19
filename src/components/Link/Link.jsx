import React from 'react';
import cx from 'classnames';
import { bool, string, func } from 'prop-types';

import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from 'constants/index';

import s from './Link.module.scss';

const FILTERS_TITLE = {
  [SHOW_ALL]: 'all',
  [SHOW_ACTIVE]: 'active',
  [SHOW_COMPLETED]: 'completed',
};

const Link = ({ filter, onClick, isActive, id, className }) => {
  return (
    <a
      className={cx(s.link, { [s.linkActive]: isActive === id }, className)}
      id={id}
      href={`#${FILTERS_TITLE[filter]}`}
      onClick={onClick}>
      {FILTERS_TITLE[filter]}
    </a>
  );
};

Link.propTypes = {
  filter: string,
  onClick: func,
  isActive: bool,
  className: string,
};

export default Link;
