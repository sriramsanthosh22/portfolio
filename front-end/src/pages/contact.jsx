import Button from '@mui/material/Button';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import Axios from "axios";
const Contact = () => {

    const [submit, setsubmit] = useState(false);

    const handleContactForm = async(e)=>{
        e.preventDefault();
        setsubmit(true);
        let data = {
            name:e.target.name.value,
            email: e.target.email.value,
            mobile:e.target.mobile.value,
            message: e.target.message.value
        }
        await Axios.post("https://portfolio-backend-sriramsanthoshs-projects.vercel.app/send-mail", data).then((res)=>{
            console.log(res.data);
            let contactForm = document.getElementById("contact-form");
            alert(res.data.message);
            if(res.status === 200){
                contactForm.reset();
            }
        }).catch((err)=>{
            console.error(err);
            alert("Connection Error! Try Again");
        });
        setsubmit(false);
    }

    return(
        <div className='contact-container' style={{display:"flex", width:"100%"}}>
            {/* <div style={{textAlign:"center", width:"100%"}}>
                <img style={{width:"400px"}} src={require("../images/contact2.png")} alt="contact-img" />
            </div> */}
            <div className="contact-img">

            </div>
            <form id='contact-form' onSubmit={handleContactForm} style={{width:"100%", marginTop:"30px"}}>
                <h2 style={{margin:"10px 0"}} className='protest-riot-regular'>Get in <span style={{color:"crimson"}}>Touch</span></h2>
                <p className='ubuntu-regular' style={{margin:"10px 0", fontSize:"18px"}}>Hey there! You want me to work with you? Thats really the spirit I am looking for. Drop a message here.</p>
                <input className='ubuntu-regular input-box' type="text" name="name" id="name" placeholder="Name*" /><br />
                <input className='ubuntu-regular input-box' type="email" name="email" id="email" placeholder="Email*" /><br />
                <input className='ubuntu-regular input-box' type="text" name="mobile" id="mobile" placeholder="Mobile No."/><br />
                <textarea className='input-box' name="message" id="message" rows="4" placeholder="Message*" required></textarea><br />
                {!submit && <Button type='submit' variant="contained" color="success">Send Msg </Button>}
                {submit && <LoadingButton style={{background:"#2E7D32"} } loading variant="outlined"> Send Msg </LoadingButton>}
            </form>
        </div>
    )
}

export default Contact
