import './header.css'
function Header(){

return(

    <header>
    <div className='headerContainer'>
        <div className="headerWrapper">
    <div className='logo'>LOGO</div>
    <input type='text' className='searchBar' placeholder='Search Groceries'/>
    <nav>
        <a href='#' className='login'>Login</a>
        <a href='#' className='signup'>SignUp</a>
    </nav>
    </div>
    </div>
</header>

)

}
export default Header;