import { Link } from 'react-router-dom';
import { BsCheckLg } from 'react-icons/bs';
import styles from './styles.module.css';

const PaymentSuccessful = () => {

  return (
      <div className={styles.wrapper}>
          <div>
          <p className={styles.check}>
              <span ><BsCheckLg /></span>
              </p> 

              <h1>Purchase Completed</h1>
              <p className={styles.instruction}>Please check your email for details concerning</p>
              <p className={styles.instruction}>this transaction</p>

              <p className={styles.link}>
                  <Link to='/'>Return Home</Link>
              </p>
          </div>
      </div>
  );
};

export default PaymentSuccessful;