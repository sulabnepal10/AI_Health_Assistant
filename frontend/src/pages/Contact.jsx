
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, MapPin, Send, Github, Twitter, Linkedin } from 'lucide-react';

export default function Contact() {

    const [state, handleSubmit] = useForm("mvgdbedb");

    return (
        <>
            <section className="bg-gradient-to-br from-teal-600 to-cyan-700 py-20 text-white">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <Mail className="w-16 h-16 mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg opacity-90">
                        Have a question? We'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-2xl font-bold mb-6 dark:text-white">Get in Touch</h2>
                        <div className="space-y-4 dark:text-gray-300">
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-teal-600" />
                                <span>sulabnepal10@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-teal-600" />
                                <span>+977 9824079016</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-teal-600" />
                                <span>Kathmandu, Nepal</span>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="font-semibold mb-3 dark:text-white">Follow Us</h3>
                            <div className="flex gap-4">
                                <a href="#" className="text-teal-600 hover:text-teal-800"><Github className="w-6 h-6" /></a>
                                <a href="#" className="text-teal-600 hover:text-teal-800"><Twitter className="w-6 h-6" /></a>
                                <a href="#" className="text-teal-600 hover:text-teal-800"><Linkedin className="w-6 h-6" /></a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-6 dark:text-white">Send a Message</h2>

                        {state.succeeded ? (
                            <div className="p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg text-center">
                                <p className="font-medium text-green-800 dark:text-green-200">
                                    Thanks for your message! I'll get back to you soon.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="sr-only">Your Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 text-white"
                                        required
                                    />
                                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
                                </div>

                                <div>
                                    <label htmlFor="email" className="sr-only">Your Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 text-white"
                                        required
                                    />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
                                </div>

                                <div>
                                    <label htmlFor="message" className="sr-only">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Your Message"
                                        rows={5}
                                        className="w-full p-3 border rounded-lg resize-none dark:bg-gray-800 dark:border-gray-700 text-white"
                                        required
                                    ></textarea>
                                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
                                </div>

                                <button
                                    type="submit"
                                    disabled={state.submitting}
                                    className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium hover:bg-teal-700 flex items-center justify-center gap-2 disabled:bg-gray-500" // 👈 Added disabled style
                                >
                                    {state.submitting ? 'Sending...' : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}