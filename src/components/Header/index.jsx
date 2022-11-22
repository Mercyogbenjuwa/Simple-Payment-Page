import { Link } from 'react-router-dom';
import styles from './styles.module.css'

const Header = ({ personal }) => {

  return (
    <div className={styles.header}>
        <h2>Complete your Purchase</h2>

        <ul>
            <li className={personal}>
                <Link to='/'>Personal Info</Link>
                {/* <p className={styles.footer}></p> */}
            </li>
            <li>
                <Link to='/billinginfo'>Billing Info</Link>
            </li>
            <li>
                <Link to='/billingdetails'>Confirm Payment</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header;