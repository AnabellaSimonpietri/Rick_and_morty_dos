const validation = (userData, errors, setErrors) => {
  // username
  if (!userData.username)
    setErrors({ ...errors, username: 'Please complete this field' });
  else if (userData.username.length > 35)
    setErrors({ ...errors, username: 'Cannot exceed 35 characters' });
  else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)
  ) {
    setErrors({ ...errors, username: 'Invalid email' });
  } else {
    setErrors({ ...errors, username: '' });
  }

  // password
  if (userData.password.length < 6 || userData.password.length > 10) {
    setErrors({ ...errors, password: 'Invalid password length' });
  } else if (!/\d/.test(userData.password)) {
    setErrors({ ...errors, password: 'Must contain at least one number' });
  } else {
    setErrors({ ...errors, password: '' });
  }
};

export default validation;
