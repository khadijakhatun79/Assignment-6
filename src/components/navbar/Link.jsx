import React from 'react';

const Link = ({route}) => {
    return (
        <li className='px-4 py-3 lg:mr-1 hover:text-amber-400'><a href={route.path}>{route.name}</a></li> 
    );
}; 

export default Link; 