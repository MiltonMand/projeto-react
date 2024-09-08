import { Link } from 'react-router-dom'
import Conteiner from './Conteiner'
import styles from './NavBar.module.css'
//import logo from '../../img/'

function NavBar() {
    return (
        <div>
            <nav>
                <Conteiner class={styles.navbar}>
                    <ul class={styles.list}>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/company'>Company</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                        <li>
                            <Link to='/myproject'>MyProjects</Link>
                        </li>
                    </ul>
                </Conteiner>
            </nav>
        </div>
    )
}

export default NavBar