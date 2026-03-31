import { Check } from 'lucide-react';
import React from 'react';

const Features = ({feature}) => {
    return (
        <li className='flex text-[16px]'>
             <Check  className='mr-2'></Check>{feature}
            </li>
       
    );
};

export default Features;

