import { Card } from "react-bootstrap";

import styles from './ProjectElement.module.css'

function ProjectElement( proyectData ) {
    return ( 
        
        <>
        <hr/>
        <Card.Subtitle>
            <a href="https://github.com/Joable/porfolio" className={styles.proyectTitle}>
                {proyectData.proyectData.name}
            </a>
        </Card.Subtitle>

        <Card.Text >
            <div className={styles.descriptionText}>
                {proyectData.proyectData.description}
            </div>
        </Card.Text>
        </>
     );
}

export default ProjectElement;