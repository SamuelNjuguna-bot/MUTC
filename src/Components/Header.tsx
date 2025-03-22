import './Header.css'
import img from '../assets/logo/MUT-LOGO.jpeg'
import { NavLink} from 'react-router-dom';
function Header() {
    return (  <>
     <section className='Header'>
     <div className="logo">
        <div className="image-wrapper">
            <img src={img} alt="" />
            <p className="inner-image-tagline">MUTC</p>
        </div>
        <div className="club-tagline">
            <h1 className="tagline">
            Murang'a University Tech Club (MUTC)
            </h1>
        </div>
     </div>
     <div className="navlinks">
         <nav className="links">
            <Navigation to={"/"} label={"Home"} />
            <Navigation to={"/leadership"} label={"leadership"} />
            <Navigation to={"/tracks"} label={"Tracks"} />
            <Navigation to={"/events"} label={"Events"} />
         </nav>
     </div>
     </section>
  
    
    </>);

}
interface NavLinks{
    to:string;
    label:string;
}
function Navigation({to, label}:NavLinks){

    return(
        <>

        <NavLink to={to} className={({ isActive }) => (isActive ? "active-link" : "")}>{label}</NavLink>
        
        </>
    )

}

export default Header;