import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return <p className={css.message}>Something went wrong. Please try again later.</p>;
};

export default ErrorMessage;