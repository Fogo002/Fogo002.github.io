import './Footer.css'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'


const Footer = () => {
  
    return (
      <div className="Footer">
        
           
            <div className='follow-us'>
                <h5>Follow us</h5>
                <ul>
                    <li><img src={instagram} /></li>
                    <li><img src={facebook} /></li>
                </ul>
            
        </div>
      </div>
      
    )
}
export default Footer