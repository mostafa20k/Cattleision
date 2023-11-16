import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css'; // You can style your navigation bar in a separate CSS file
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import { FaLanguage } from 'react-icons/fa';


// const MyNavbar = () => {
//     const [ID, setID] = useState("Ali");
//   return (
//     <Navbar bg="black" variant="dark" expand="lg" style={{backgroundColor:'black'}}>
//       <Container>
//         {/* Project Name and Logo on the Left */}
//         <Navbar.Brand href="#home" className="mr-auto">
//           <Image
//             src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
//             alt="Project Logo"
//             width="30"
//             height="30"
//             className="d-inline-block align-top"
//           />
//           {' Cattleision'}
//         </Navbar.Brand>

//         {/* Toggle button for responsive design */}
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />

//         {/* Items on the Right */}
//         <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
//           <Nav className="ml-auto">
            

//             {/* Account Logo */}
//             <Nav.Link href="#account" style={{gap: 10}}>
//               <Image
//                 src="https://img.favpng.com/24/7/21/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg"
//                 alt="Logo"
//                 width="30"
//                 height="30"
//                 className="d-inline-block align-top"
//                 style={{borderRadius:30}}
//               />
//             </Nav.Link>
//             {/* ID */}
//             <Nav.Link href="#id" >{ID}</Nav.Link>
//             {/* Toggle Language Icon */}
//             <Nav.Link href="#language" style={{gap: 10}}>
//               <FaLanguage size={30} className="mr-2" style={{cursor: 'pointer'}}/>
              
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };





// export default MyNavbar;




const NavigationBar = () => {
     const [ID, setID] = useState("Ali");

  return (
    <div className="navbar">
      <div className="left-section">
        <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt="Project Logo" className="logo" />
        <span className="project-name">Cattleision</span>
      </div>
      <div className="right-section">
        <img src="https://img.favpng.com/24/7/21/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg" alt="User Logo" className="user-logo" />
        <span className="user-id">{ID}</span>
        <FaLanguage size={30} className="mr-2" style={{cursor: 'pointer'}}/>

      </div>
    </div>
  );
};

export default NavigationBar;
