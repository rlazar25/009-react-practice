import { NavLink } from "react-router-dom";

function NavbarComponent(){

    const navbarItems = [
        {
            name: 'Home',
            url: '/',
        },
        {
            name: 'Products',
            url: '/products',
        },
        {
            name: 'Users',
            url: '/users',
        },
        {
            name: 'Favorite',
            url: '/favorite'
        }
    ]

    return(
        <div className="flex gap-2 items-center justify-end text-white text-[1.2rem] bg-slate-600 p-[1rem]">
            {navbarItems.map((item, index) => {
               return (<NavLink to={item.url} key={index}>{item.name}</NavLink>)
            })}
        </div>
    )
}

export default NavbarComponent;