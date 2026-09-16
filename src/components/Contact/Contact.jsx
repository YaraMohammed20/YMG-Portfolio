import {FaEnvelope,FaPhone,FaLocationDot,FaGithub,FaLinkedin,} from "react-icons/fa6";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto pt-6">
        <div className="mb-16">
          <p className="text-gray-500 font-semibold uppercase tracking-widest text-sm">
            Get In Touch
          </p>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mt-3">
            Let's work
            <span className="text-gray-500"> together.</span>
          </h2>
          <p className="text-gray-500 mt-5 max-w-xl leading-7">
            Have a project in mind, an opportunity, or just want to say hello?
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          <div className="flex flex-col">
            <div className="space-y-8">
              <a href="mailto:yara.mohammed.gamal.dev@gmail.com" className="group flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-gray-700 group-hover:bg-gray-900 group-hover:text-white transition duration-300">
                  <FaEnvelope size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">
                    Email
                  </p>
                  <p className="font-semibold text-gray-800 mt-1">
                    yara.mohammed.gamal.dev@gmail.com
                  </p>
                </div>
              </a>
              <a href="tel:+201008065885" className="group flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-gray-700 group-hover:bg-gray-900 group-hover:text-white transition duration-300">
                  <FaPhone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">
                    Phone
                  </p>
                  <p className="font-semibold text-gray-800 mt-1">
                    +20 1008065885
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-5">
               <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-gray-700 group-hover:bg-gray-900 group-hover:text-white transition duration-300">
                 <FaLocationDot size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">
                    Location
                  </p>
                  <p className="font-semibold text-gray-800 mt-1">
                    Egypt, Giza.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm text-gray-400 mb-2">
                Find me online
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/YaraMohammed20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white transition duration-300"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/yara-mohammed-gamal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white transition duration-300"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-gray-500 transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-gray-500 transition"
              />

            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-gray-500 transition"
            />
            <textarea
              rows="7"
              name="message"
              placeholder="Tell me about your project..."
              required
              className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 resize-none outline-none focus:border-gray-500 transition"
            />
            <button
              type="submit"
              className="bg-black  text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}