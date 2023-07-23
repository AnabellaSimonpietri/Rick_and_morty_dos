import { useState } from 'react';
import validation from './validation';
import style from './Form.css';

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    validation({ ...userData, [property]: value }, errors, setErrors);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div style={{ display: 'center', justifyContent: 'center' }}>
          <img
            src='https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png'
            alt='Rick and Morty logo'
            style={{ width: '200px', height: 'auto', margin: '0 auto' }}
          />
        </div>
        <div>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            name='username'
            placeholder='myrick@gmail.com'
            value={userData.username}
            onChange={handleInputChange}
          />
          <p>{errors.username}</p>
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            name='password'
            placeholder='mypass123'
            value={userData.password}
            onChange={handleInputChange}
          />
        </div>
        <button className={style.button} type='submit'>
          LOGIN
        </button>
      </div>
    </form>
  );
};

export default Form;
