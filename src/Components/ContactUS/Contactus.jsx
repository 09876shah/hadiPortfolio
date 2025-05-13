import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Hero from "../Hero";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contactus = () => {
  const formRef = useRef();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [textarea, setTextarea] = useState("");
  const [mailError, setMailError] = useState(false);
  const [enableBtn, setEnableBtn] = useState(false);

  const emailValidation = (email) => {
    const pattern = "/^[w-.]+@([w-]+.)+[w-]{2,4}$/";
    setMailError(!pattern.test(email));
  };

  const notify = () => toast.success(" Message sent successfully!");
  var templateParams = {
    name: name, // must match {{name}}
    email: email, // must match {{email}}
    message: textarea, // must match {{message}}
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (mailError) {
      alert("Please enter a valid email");
      return;
    }

    setEnableBtn(true);
    emailjs
      .sendForm(
        "service_hv0n4ce", // ✅ Your service ID
        "template_0stckfo", // ✅ Your template ID
        formRef.current,
        "frtO1tCrQSQB6pJli", // ✅ Your public key
        templateParams
      )
      .then(
        (result) => {
          console.log(result.text);
          notify();
          setEmail("");
          setName("");
          setTextarea("");
          setEnableBtn(false);
          formRef.current.reset(); // Reset form fields
        },
        (error) => {
          console.log(error.text);
          toast.error("❌ Failed to send message!");
          setEnableBtn(false);
        }
      );
  };

  return (
    <div id="contactus" className="bg-[#000000] w-full">
      <Header />
      <Hero>
        <div className="contact-cont w-full flex py-10">
          <div className="max-w-full m-auto">
            <div className="text-white">
              <h2 className="uppercase text-white">Open for hire</h2>
              <p className="text-[#B2B7BA] text-sm">
                I would love to hear about your projects!
              </p>
            </div>

            <ToastContainer />
            <div className="contact-form flex w-96">
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="flex flex-col gap-4 py-5 w-full"
              >
                <div className="form-cont px-5 py-4 w-full flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-lg uppercase text-[#E84A4A]">
                      How should I call you?
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      className="bg-[#010103] px-3 uppercase rounded-sm border-[#333333] border text-white outline-none py-2"
                      placeholder="Your Name"
                      required
                      onChange={(e) => setName(e.target.value)}
                      minLength={3}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg uppercase text-[#E84A4A]">
                      Sending from
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="bg-[#010103] px-3 uppercase rounded-sm text-white outline-none border-[#333333] border py-2"
                      placeholder="your.name@gmail.com"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        emailValidation(e.target.value);
                      }}
                    />
                    {mailError && (
                      <label htmlFor="" className="text-red-600 text-sm">
                        Please Enter Valid Email
                      </label>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg uppercase text-[#E84A4A]">
                      Transmitted data
                    </label>
                    <textarea
                      name="message"
                      className="bg-[#010103] px-3 uppercase rounded-sm text-white border-[#333333] border outline-none py-2 h-36"
                      placeholder="Hi, I write to you about ..."
                      required
                      value={textarea}
                      onChange={(e) => setTextarea(e.target.value)}
                      minLength={10}
                    ></textarea>
                  </div>
                </div>

                <div className="contact-btns flex w-full gap-1">
                  <button
                    type="submit"
                    disabled={enableBtn}
                    className={`uppercase ${
                      enableBtn ? "cursor-wait" : ""
                    } text-black w-full bg-[#E84A4A] hover:bg-transparent hover:text-[#E84A4A] font-mono duration-100 ease-in-out hover:border hover:border-[#262626] py-1 text-sm px-2`}
                  >
                    Send Message
                  </button>
                  <button
                    type="reset"
                    className="uppercase border text-[#E84A4A] w-full py-1 text-sm duration-100 ease-in-out hover:border hover:border-transparent hover:bg-[#E84A4A] hover:text-[black] px-2 border font-mono border-[#262626]"
                    onClick={() => {
                      setName("");
                      setEmail("");
                      setTextarea("");
                      setMailError(false);
                      formRef.current.reset();
                    }}
                  >
                    Discard
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Hero>
      <Footer />
    </div>
  );
};

export default Contactus;
