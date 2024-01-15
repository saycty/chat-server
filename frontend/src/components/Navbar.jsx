import { useContext } from "react";
import { Container, Nav, Navbar, Stack, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Authcontext } from "../context/Authcontext";

const NavBar = () => {
  const { user, logoutUser } = useContext(Authcontext);

  return (
    <Navbar bg="dark" className="mb-4" style={{ height: "3.75rem" }}>
      <Container>
        <h2>
          <Link to="/" className="link-light text-decoration-none">
            chat application
          </Link>
        </h2>
        {user && (
          <span className="text-warning">Logged in as {user?.name}</span>
        )}
        <Nav>
          <Stack direction="horizontal" gap={3}>
            {user ? (
              <Dropdown>
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-basic"
                  className="link-light text-decoration-none"
                >
                  {user?.name}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/profile">
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={() => logoutUser()}>
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <Link
                  to="/login"
                  className="link-light text-decoration-none"
                >
                  login
                </Link>
                <Link
                  to="/register"
                  className="link-light text-decoration-none"
                >
                  register
                </Link>
              </>
            )}
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
