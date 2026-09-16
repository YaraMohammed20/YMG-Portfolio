import { FaEnvelope, FaPhone, FaLocationDot, FaGithub, FaLinkedin } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
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
    <section id="contact" className="relative overflow-hidden py-28 px-5 bg-gray-200">     
      <div className="relative z-10 max-w-7xl mx-auto pt-6">
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
            <div className="space-y-5">
              <a
                href="mailto:yara.mohammed.gamal.dev@gmail.com"
                className="group flex items-center gap-5 p-4 rounded-2xl hover:bg-white/70 hover:shadow-lg hover:-translate-y-1 transition-all duration-400"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-gray-700 group-hover:bg-gray-900 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <FaEnvelope size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-semibold text-gray-800 mt-1 break-all">
                    yara.mohammed.gamal.dev@gmail.com
                  </p>
                </div>
              </a>
              <a
                href="tel:+201008065885"
                className="group flex items-center gap-5 p-4 rounded-2xl hover:bg-white/70 hover:shadow-lg hover:-translate-y-1 transition-all duration-400"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-gray-700 group-hover:bg-gray-900 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <FaPhone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-semibold text-gray-800 mt-1">
                    +20 1008065885
                  </p>
                </div>
              </a>
              <div className="group flex items-center gap-5 p-4 rounded-2xl hover:bg-white/70 hover:shadow-lg hover:-translate-y-1 transition-all duration-400">
                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-gray-700 group-hover:bg-gray-900 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <FaLocationDot size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-semibold text-gray-800 mt-1">
                    Egypt, Giza.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <p className="text-sm text-gray-400 mb-3">
                Find me online
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/YaraMohammed20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <FaGithub
                    size={20}
                    className="group-hover:rotate-12 group-hover:scale-110 transition-all duration-300"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/yara-mohammed-gamal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <FaLinkedin
                    size={20}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
            <div className="mt-10 hidden lg:block">
              <p className="text-6xl font-black text-gray-300/70">
                SAY HELLO.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-2 bg-white/40 rounded-4xl blur-xl" />
            <form
              onSubmit={handleSubmit}
              className="relative bg-white/80 backdrop-blur-sm border border-white rounded-4xl p-7 lg:p-9 shadow-xl shadow-gray-300/30 space-y-6"
            >
              <div className="mb-2">
                <p className="text-sm text-gray-400 uppercase tracking-widest">
                  Start a conversation
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">
                  Tell me about your project.
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 outline-none text-gray-900 placeholder:text-gray-400 hover:bg-white hover:border-gray-300 focus:bg-white focus:border-black focus:ring-4 focus:ring-gray-100 transition-all duration-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 outline-none text-gray-900 placeholder:text-gray-400 hover:bg-white hover:border-gray-300 focus:bg-white focus:border-black focus:ring-4 focus:ring-gray-100 transition-all duration-300"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 outline-none text-gray-900 placeholder:text-gray-400 hover:bg-white hover:border-gray-300 focus:bg-white focus:border-black focus:ring-4 focus:ring-gray-100 transition-all duration-300"
              />
              <textarea
                rows="7"
                name="message"
                placeholder="Tell me about your project..."
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 resize-none outline-none text-gray-900 placeholder:text-gray-400 hover:bg-white hover:border-gray-300 focus:bg-white focus:border-black focus:ring-4 focus:ring-gray-100 transition-all duration-300"
              />
              <button
                type="submit"
                className="group w-full sm:w-auto relative overflow-hidden bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Send Message
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}