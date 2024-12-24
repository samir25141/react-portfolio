import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:samir25141@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:samir25141@gmail.com">samir95141@gmail.com</a>
        </div>
        <div>
        <a href="tel:+6299894223"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+6299894223">(+91) 6299894223</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}