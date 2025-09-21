import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='flex justify-between py-9 px-[1.625rem]'>
            <Link 
                to='/'
                className='text-[1.625rem] font-bold'    
            >#VANLIFE</Link>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </nav>
        </header>
    )
}

export default Header