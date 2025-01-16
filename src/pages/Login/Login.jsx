import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../shared/components/Input/Input';
import Button from '../../shared/components/Button/Button';
import useForm from '../../shared/hooks/useForm';
import { validateLoginForm } from '../../shared/utils/validations';
import authService from '../../shared/services/authServices';
import styles from './Login.module.css';

const Login = () => {
    const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { values, errors, handleChange, handleSubmit } = useForm(
    { username: '', password: '' },
    validateLoginForm
  );

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await authService.login(values.username, values.password);
      localStorage.setItem('token', response.token)
      navigate('/profile');
    } catch (error) {
      alert(error.message); // Handle error (e.g., display error message)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="Username"
          id="username"
          value={values.username}
          onChange={handleChange}
          error={errors.username}
        />
        <Input
          label="Password"
          type="password"
          id="password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
        />
        <Button type="submit" disabled={isLoading} onClick={onSubmit}>
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
      </form>
    </div>
  );
};

export default Login;