import styles from './footer.css';
import lightlogo from '../../assets/logos/dark_logo.png'

export function Footer(
  { user, userImage } =
    { user: 'User', userImage: 'https://via.placeholder.com/150' }
) {

  return `
  <div class="${styles.container}">
  <img src="${lightlogo}">
  <h5>© All rights reserved 2024</h5>
  <div class="${styles.contacto}">
  <h4>Contact</h4>
  <p>Email: grupo#1@gmail.com</p>
  <p>Phone: 123-456-7890</p>
  </div>
  </div>  
  `;
}