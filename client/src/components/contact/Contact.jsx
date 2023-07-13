import Footer from "../footer/Footer"
import MailList from "../mailList/MailList"
import Navbar from "../navbar/Navbar"
import "./contact.css"

// Assets
import logo from "../../Assets/logo.png"

const Contact = () => {
  return (
    <div>
      <Navbar />


      <hr />
      <div class="terms1">
        <table cellpadding="80" >
          <tr>
            <td>
                <img src={logo} className="pl" />
            </td>
            <td>
              <ul>
                <li class="lb">URBAN OASIS</li>
                <li class="lb">9130473110</li>
                <li class="lb">urbanoasis@gmail.com</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
      <MailList />
      <br />
      <br />

      <div className="ft">
        <Footer />
      </div>
    </div>
  )


}

export default Contact