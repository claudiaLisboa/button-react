import { FC, PropsWithChildren, usesState } from 'react'
import './assets/css/styles.css'


const Icon: FC<PropsWithChildren> = ({ children }) => (
    <i className='materaial-symbols-ouylined'>
        { children }

    </i>
);

export const Button = ()=>{
    const [ isOpen, setIsOpen ] =
      useState<boolean>(false);

      return(
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
      )
}