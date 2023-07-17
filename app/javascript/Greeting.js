import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchGreeting } from './actions';

const Greeting = ({ greeting, fetchGreeting }) => {
  useEffect(() => {
    fetchGreeting();
  }, [fetchGreeting]);

  return (
    <div className=" rounded-md bg-gray-100  p-10  shadow-sm">
      <h2 className="text-center font-bold">Message From Api end point</h2>
      <p className="font-bold p-5">{greeting}</p>
    </div>
  );
};

Greeting.propTypes = {
  greeting: PropTypes.string.isRequired,
  fetchGreeting: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  greeting: state.greeting,
});

const mapDispatchToProps = {
  fetchGreeting,
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
