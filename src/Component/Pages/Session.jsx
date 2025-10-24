import react from "react"
import '../stylingCSS/sesson.css';
import SessonImage from "../../assets/seson.png"

export default function SessonPage(){
    return(
        <>
        
        <div  className=" morther " 
            style={{ backgroundImage: `url(${SessonImage})`}}>
            <div className="sesson-timer-div">
                <span className="fw-bold fw-bold text-dark bi-alarming "><i class="bi bi-alarm"></i></span>
                <h2 className="fw-bold text-dark">Session Timeout Warning</h2>
                <p className="text-muted text-dark">For your security, your sesson will end 1 minute due to inactivity </p>

                <h2 className="fw-bold text-dark">"01:00"</h2>
                <button type='button' className="btn p-2 fw-bold btn-outline-success w-100 mt-3">Stay Siged in </button>
                <button type='button' className='btn fw-bold btn-danger w-100 mt-2'>Log Out Now </button>
            </div>
        </div>
        </> 
    ) 
}