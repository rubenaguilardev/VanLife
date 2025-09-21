import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='flex justify-between items-center py-9 px-[1.625rem] bg-[#FFF7ED]'>
            <Link 
                to='/'
                className='text-[1.625rem] font-extrabold'    
            >#VANLIFE</Link>
            <nav className='flex gap-[1.625rem] font-semibold text-[#4D4D4D]'>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </nav>
        </header>
    )
}

export default Header