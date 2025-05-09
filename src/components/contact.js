'use client';

export default function ContactForm() {
  return (
    <section id="contact" className="py-16 px-6 bg-gradient-to-br from-slate-900 to-black text-white">
      <h2 className="text-3xl font-bold text-center text-white mb-10">Contact Me</h2>
      <form className="max-w-xl mx-auto space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          disabled
        >
          Send Message (Coming Soon)
        </button>
      </form>
    </section>
  );
}
