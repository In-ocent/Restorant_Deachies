import signupImage from '../../assets/image.png';
import '../stylingCSS/ResetPassword.css'


export default function SignUpPage() {
 
  return (
    <section className="container py-5 signup-section">
      <div className="row g-5 p-5 rounded overflow-hidden ">
      

        {/* Left Image */}
        <div className="col-md-6 d-none d-md-block">
          <img
            src={signupImage}
            alt="Sign up illustration"
            className="img-fluid h-100 w-100 object-fit-cover border rounded-3"
          />
        </div>

        {/* Right Form */}
        
        <div className=" Right-Form col-md-6 bg-white p-5 d-flex flex-column justify-content-center border rounded-3">
          

          
          <p className="mb-3 display-6 text-center fw-bold text-dark">Verify Your Email</p>
          <p className="mb-4 text-center mt-4 h6 text-muted">
              Enter 6 digit Verification code sent to
              <span className="text-success no-break" title="je******@gmail.com" style={{marginLeft: 6}}>
                je******@gmail.com
              </span>
          </p>


          <form >

            <div className='d-flex text-center  gap-3'>
              <input type="tel"    className="form-control"/>
              <input type="tel"   className="form-control" />
              <input type="tel"     className="form-control"  />
              <input type="tel"    className="form-control"/>
              <input type="tel"   className="form-control" /> 
              <input type="tel"     className="form-control"  />
            </div>
           
            <button type='button' className='btn btn-danger w-100 mt-5 '   > Verify Email </button>
          </form>
          <p className='mt-3 text-center text-muted'> Haven't got the code? <a href="#" className='text-decoration-none text-success' > Resend </a> </p>
        </div>
      </div>
    </section>
  );
}
