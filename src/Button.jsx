import { useState } from 'react';

const Icon = ({ children }) => (
    <i className='materaial-symbols-ouylined'>
        { children }
    </i>
);

const Button = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <div className={`fa ${isOpen ? 'open' : ""}`}>
            <button onClick={() => setIsOpen(! isOpen)}>
                <Icon> add </Icon>
            </button>
            <div className='menu'>
                <button>
                    <Icon> person_add </Icon>
                    <span> Add Users </span>
                </button>
               {/* others buttons  */}
            </div>
        </div>
    );
};

export default Button;
