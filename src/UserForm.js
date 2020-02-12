import React from 'react';

function UserForm(props) {

  const fetchUser = (e) => {
    e.preventDefault();
    const username = e.target.input.value;
    console.log(e.target.input.value)
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

export default UserForm;