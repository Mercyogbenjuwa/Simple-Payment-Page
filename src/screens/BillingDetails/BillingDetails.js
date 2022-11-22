import { TbCurrencyNaira } from 'react-icons/tb';
import Button from '../../components/Form/Button';
import Header from '../../components/Header';

const BillingDetails = () => {

  return (
    <>
        <div className='wrapper'>
            <Header />

            <div className='table'>
                <section className=' table-head'>
                    <div className='table-flex'>
                        <p>Item Name</p>
                        <p><TbCurrencyNaira /> Price</p>
                    </div>
                </section>

                <div className='table-body'>
                    <div className='table-flex'>
                        <p>Data Science and Usability</p>
                        <p className='price'>50,000.00</p>
                    </div>

                    <div className='table-flex'>
                        <p>Shipping</p>
                        <p className='shipping-price'>0.00</p>
                    </div>

                    
                </div>

                <hr />

                <div className='table-flex table-footer'>
                    <p className='tot'>Total</p>
                    <p className='price'>50,000.00</p>
                </div>
        
            </div>

            <div className='btn-flex'>
                <Button content='Pay' page='/payment/successful'/>
                <p>Cancel Payment</p>
            </div>
        </div>

    </>
  );
};

export default BillingDetails;