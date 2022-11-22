import React from 'react';
import { CgAsterisk } from 'react-icons/cg';
import Header from '../../components/Header';
import Input from '../../components/Form/Input';
import Select from '../../components/Form/DropDown';
import Button from '../../components/Form/Button';

const PersonalInfo = () => {

  return (
    <div className='wrapper'>
        <Header personal='active'/>

        <div>
            <Input type='text' title='Name' />
            <Input type='text' title='Email Address' instruction='The purchase receipt would be sent to this address' icon={<CgAsterisk />} />
            <Input type='text' title='Address 1' />
            <Input type='text' title='Address 2' />

            <div className='wrap-grid'>
                <Input type='text' title='Local Government' size='lg'/>

                <Select title='State' size='sm'>
                <option value=''>
                    Lagos
                </option>
                <option value=''>
                    Anambra
                </option>
                <option value=''>
                    Kano
                </option>
                </Select>
            </div>

            <div className='btn-flex'>
                <Button page='/billinginfo' content='Next' />
                <p>Cancel Payment</p>
            </div>
        </div>
    </div>
  );
};

export default PersonalInfo;