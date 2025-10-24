import { useState } from "react";
import signupImage from '../../assets/image.png';
import '../stylingCSS/NewPassWord.css';
import { Modal, Button } from "react-bootstrap"; // React-Bootstrap
import succesImage from '../../assets/mark-image.png'
import { Link } from 'react-router-dom';

export default function NewPassWord() {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false); //  Controls modal

  const handleSubmit = () => {
    if (!password || !rePassword) {
      setError("Both fields are required");
      return;
    }
    if (password !== rePassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    setShowModal(true); // Open modal
  };

  return (
    <section className="container py-5 signup-section">
      <div className="row g-5 p-5 rounded overflow-hidden ">
        <div className="col-md-6 d-none d-md-block">
          <img
            src={signupImage}
            alt="Sign up illustration"
            className="img-fluid h-100 w-100 object-fit-cover border rounded-3"
          />
        </div>

        <div className=" Right-Form col-md-6 bg-white py-4 px-5 d-flex flex-column justify-content-center border rounded-3">
          <p className="mb-3 text-center display-6 fw-bold text-dark">Set New Password</p>
          <p className="mb-4 text-center mt-1 h6 text-muted">Please enter a new password</p>

          {error && <p className="text-danger text-center">{error}</p>}

          <form onSubmit={(e) => e.preventDefault()}>
            <div className='d-flex flex-column gap-3'>
              <input
                type="password"
                placeholder='New Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`form-control ${error ? "border border-danger" : ""}`}
              />

              <input
                type="password"
                placeholder='Re-enter Password'
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                className={`form-control ${error ? "border border-danger" : ""}`}
              />
            </div>

            <button type='button' className='btn btn-danger w-100 mt-5' onClick={handleSubmit}>
              Confirm
            </button>
          </form>
        </div>
      </div>

      {/* React-Bootstrap Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className="boder-none">
        </Modal.Header>
          <img className=" succesImage justify-content-center " 
            src={succesImage} alt=""
            style={{
            width: "100px",      // Adjust size
            height: "100px",
            objectFit: "contain"
       }}
          />
        <Modal.Body className=" text-center fw-bold text-dark">
           Password successfully set!</Modal.Body>
        <Modal.Footer>
          <Button variant="danger btn w-100" onClick={() => setShowModal(false)}>
            Continue to login
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
