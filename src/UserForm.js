import React from 'react';
import { connect } from 'react-redux';
import { addUsername } from './redux/actions/index';

function mapDispatchToProps(dispatch) {
  return {
    addUsername: username => dispatch(addUsername(username))
  }
}

function ConnectedForm(props) {

  const fetchUser = (e) => {
    e.preventDefault();
    const username = e.target.input.value;
    props.addUsername(username);
  }

  const toggleFocus = (e) => {
  	const classList = e.target.classList;
  	classList.contains('focus') ? classList.remove('focus') : classList.add('focus');
  }

  return (
    <form className="header-form" onSubmit={fetchUser}>
      <label className="header-form-label">
        <input type="text" name="input" placeholder="enter user login" className="header-form-input"
          onFocus={toggleFocus} onBlur={toggleFocus}
        />
      </label>
    </form>
  );
}

const UserForm = connect(null, mapDispatchToProps)(ConnectedForm);

export default UserForm;