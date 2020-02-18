import React from 'react';
import Loader from './Loader';
import { connect } from 'react-redux';
import { addUser } from './redux/actions/index';

function mapDispatchToProps(dispatch) {
  return {
    addUser: user => dispatch(addUser(user))
  }
}

function ConnectedForm(props) {

  const fetchUser = async (e) => {
    e.preventDefault();
    const username = e.target.input.value;
    const {login, avatar_url, name} = await Loader.getUser(username);
    props.addUser({login, avatar_url, name});
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