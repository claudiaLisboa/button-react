import { FC, PropsWithChildren, usesState } from 'react'
import './assets/css/styles.css'


const Icon: FC<PropsWithChildren> = ({ children }) => (
    <i className='materaial-symbols-ouylined'>
        { children }

    </i>
);