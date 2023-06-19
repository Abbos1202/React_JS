import React from 'react';
import Children from'./Children';
import Department from'./Department';
import Factory from'./Factory';
import Students from './Students';

const Context = ({children}) => {
  return (
    <Children>
        <Students>
            <Factory>
                <Department>
                    {children}
                </Department>
            </Factory>
        </Students>
    </Children>
  )
}

export default Context;
