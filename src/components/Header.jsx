
import investmentLogo from '../assets/investment-calculator-logo.png'

function Header(){
    return (
        <header id='header'>
        <img src={investmentLogo} alt='Logo of money bag'/>
            <h1>Adura's Investment Calculator</h1>
            <p>Kindly fill in the details below to calculate your investment plan with us</p>
        </header>
    )

}
export default Header;