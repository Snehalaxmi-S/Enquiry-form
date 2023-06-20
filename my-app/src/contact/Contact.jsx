import "./contact.css";


export default function Contact() {
  return (
    <div className="contact">
        <span className="contactTitle">Enquiry Form</span>
        <form className="contactForm">
            <label>Name<span className="star">*</span></label>
            <input type="text" className="contactInput" placeholder="Enter your name..." required />
            <label>Email<span className="star">*</span></label>
            <input type="text" className="contactInput" placeholder="Enter your email..." required />
            <label>Phone Number<span className="star">*</span></label>
            <input type="integer" className="contactInput" placeholder="Enter your phone number..."required />
            <label>Bill Number<span className="star">*</span></label>
            <input type="integer" className="contactInput" placeholder="Enter your bill number..."required />
            <label>Subject<span className="star">*</span></label>
            <input type="text" className="contactInput" placeholder="Enter the subject of the enquiry..."required />
            <label>Customer Enquiry<span className="star">*</span></label>
            <input type="textarea" className="contactInput textarea" placeholder="Enter the content of enquiry..."required />
            <label>Add your file</label>
            <input type="file" className="contactInput"/>

            <center><button className="contactButton">Submit</button></center>
        </form>
    </div>
  )
}

