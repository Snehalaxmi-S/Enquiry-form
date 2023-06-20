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
            <input type="number" className="contactInput" placeholder="Enter your phone number..."required />
            <label>Subject<span className="star">*</span></label>
            <input type="text" className="contactInput" placeholder="Enter the subject of the enquiry..."required />
            <label>Message<span className="star">*</span></label>
            <input type="textarea" className="contactInput textarea" placeholder="Enter your message..."required />
            <label>Add your file</label>
            <input type="file" className="contactInput"/>

            <button className="contactButton">Submit</button>
        </form>
    </div>
  )
}

