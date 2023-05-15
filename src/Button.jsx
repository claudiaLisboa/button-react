import { useState } from 'react';
import PropTypes from 'prop-types';

const Icon = ({ children }) => (
  <i className='materaial-symbols-ouylined'>
    { children }
  </i>
);

Icon.propTypes = {
  children: PropTypes.node.isRequired
};


function Button() {
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <div className={`fab ${isOpen ? 'open' : ""}`}>
            <button onClick={() => setIsOpen(!isOpen)}>
                <Icon> add </Icon>
            </button>
            <div className='menu'>
                <button>
                    <Icon> person_add </Icon>
                    <span> Add Users </span>
                </button>
                <button>
                    <Icon>description</Icon>
                <span>Documents</span>
                </button>
                <button>
                     <Icon>settings</Icon>
                <span>Settings</span>
                </button>
               {/* others buttons  */}
            </div>
        </div>
    );
}

export default Button;
