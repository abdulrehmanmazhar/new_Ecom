import styles from "./styles/Slide.module.css";
import { Link} from "react-router-dom";
function Slide ({LINKS}){
    return <div className={styles.slide}>
         {LINKS.map(
          (
            link,
            index // Add index parameter to map function
          ) => (
            <Link key={index} to={link.link}>
              {link.text}
            </Link> // Use key prop for each anchor tag
          )
        )}
    </div>
}
export default Slide;