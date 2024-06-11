import ContactCard from "./ContactCard";

function Contact() {
  return (
    <div id="contact">
      <h1 className="text-5xl text-center font-bold" id="contact">
        CONTACT US
      </h1>

      <div className="mt-10">
        <ContactCard />
      </div>
    </div>
  );
}

export default Contact;
