import React from 'react';
import { CgAsterisk } from 'react-icons/cg';
import Header from '../../components/Header';
import Input from '../../components/Form/Input';
import Select from '../../components/Form/DropDown';
import Button from '../../components/Form/Button';

const BillingInfo = () => {

  return (
    <div className='wrapper'>
        <Header />

        <div>
            <Input type='text' title='Name on Card' icon={<CgAsterisk />} />
            
            <Select title='State' size='sm' icon={<CgAsterisk />}>
                <option value=''>
                    Visa
                </option>
                <option value=''>
                    Verve
                </option>
                <option value=''>
                    Master Card
                </option>
            </Select>

            <div className='carddeets-grid'>
                <Input type='text' title='Card Details' icon={<CgAsterisk />} />
                <Input type='date' title='Expiry date' icon={<CgAsterisk />}/>
                <Input type='text' title='CVV' icon={<CgAsterisk />}/>
            </div>

            <div className='btn-flex'>
                <Button page='/billingdetails' content='Next'/>
                <p>Cancel Payment</p>
            </div>
        </div>
    </div>
  );
};

export default BillingInfo;