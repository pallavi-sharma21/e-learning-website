import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact-page">

      {/* Hero Section */}

      <div className="contact-hero">

        <span className="contact-tag">
          CONTACT US
        </span>

        <h1>
          Let's Start Your Learning Journey
        </h1>

        <p>
          Have questions about our courses or need career guidance?
          Our team is always here to help you.
        </p>

      </div>



      <div className="contact-container">

        {/* Left Section */}

        <div className="contact-left">

          <h2>Get In Touch</h2>

          <p>
            We'd love to hear from you.
            Feel free to reach out using the information below or send us a message.
          </p>

          <div className="contact-card">

            <div className="icon">
              📍
            </div>

            <div>

              <h3>Address</h3>

              <p>New Delhi, India</p>

            </div>

          </div>


          <div className="contact-card">

            <div className="icon">
              📞
            </div>

            <div>

              <h3>Phone</h3>

              <p>+91 9876543210</p>

            </div>

          </div>



          <div className="contact-card">

            <div className="icon">
              📧
            </div>

            <div>

              <h3>Email</h3>

              <p>support@learnhub.com</p>

            </div>

          </div>



          <div className="contact-card">

            <div className="icon">
              ⏰
            </div>

            <div>

              <h3>Working Hours</h3>

              <p>Monday - Saturday</p>

              <p>9:00 AM - 6:00 PM</p>

            </div>

          </div>

        </div>





        {/* Right Section */}

        <div className="contact-right">

          <h2>Send us a Message</h2>

          <form>

            <div className="input-row">

              <input
                type="text"
                placeholder="Full Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

            </div>



            <div className="input-row">

              <input
                type="text"
                placeholder="Phone Number"
              />

              <input
                type="text"
                placeholder="Subject"
              />

            </div>



            <textarea
              rows="7"
              placeholder="Write your message..."
            ></textarea>


            <button>

              Send Message →

            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;