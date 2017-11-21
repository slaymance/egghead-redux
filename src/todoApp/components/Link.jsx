import React from 'react';
import PropTypes from 'prop-types';

const Link = ({
  active,
  children,
  onClick,
}) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <button
      href="#"
      onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
    >
      {children}
    </button>
  );
};

// react prop types
Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
