import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function HeaderNav() {
    return ( 
        <Nav className='justify-content-center' variant='tabs' defaultActiveKey='/'>

                <Nav.Item>
                    <LinkContainer to="/host">
                        <Nav.Link>Info</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                
                <Nav.Item>
                    <LinkContainer to="/host/projects">
                        <Nav.Link>Projects</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
        
            </Nav>
     );
}

export default HeaderNav;