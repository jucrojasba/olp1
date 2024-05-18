import styles from './navigation-bar.css';
import lightlogo from '../../assets/logos/light_logo.png'

export function NavigationBar(
  { user, userImage } =
    { user: 'User', userImage: 'https://via.placeholder.com/150' }
) {

  return `
  <div class="${styles.container}">
  <h2>Code<span>Quest</span></h2>
  <div id="${styles['navbar']}">
  <nav>
  <ul>
    <li><a href="/dashboard">Home</a></li>
    <li><a href="/dashboard/forum">Forum</a></li>
    <li><a href="/dashboard/learning-path">Learning Path</a></li>
  </ul>
  </nav>
  <img src="${lightlogo}">
  </div>
  </div>  
  `;
}