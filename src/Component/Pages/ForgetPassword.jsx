import forGPW_image from '../../assets/fogetPassW.png';
import '../stylingCSS/ResetPassword.css'


export default function FogetingPassW() {
 
  return (
    <section className="container py-5 signup-section">
      <div className="row g-5 p-5 rounded overflow-hidden ">
      
        {/* Left Image */}
        <div className="col-md-6 d-none d-md-block">
          <img
            src={forGPW_image}
            alt="Sign up illustration"
            className="img-fluid h-100 w-100 object-fit-cover border rounded-3"
          />
        </div>

        {/* Right Form */}
        
        <div className=" Right-Form col-md-6 bg-white p-5 d-flex flex-column justify-content-center border rounded-3">
          <p className="mb-3 display-6 text-center fw-bold text-dark">Forget Password</p>
          <p className="mb-4 text-center mt-2 h6 text-muted">
             Please enter your email address to reset password 
          </p>
          <form >
            <div className='d-fle  gap-3'>
              <input
                required
               type="email"  
               className="form-control"
               placeholder='Email'
               />
            </div>
            <button type='button' className='btn btn-danger w-100 mt-5 '>Log In </button>
          </form>
         
        </div>
      </div>
    </section>
  );
}
