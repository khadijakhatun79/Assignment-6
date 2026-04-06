import { Check } from 'lucide-react';
import React from 'react';

const Features = ({feature}) => {
    return (
        <li className='flex gap-4  text-zinc-500'>
            <span class="text-green-600"><Check  className='mr-2'></Check></span> {feature}
            </li> 
       
    );
};

export default Features;

