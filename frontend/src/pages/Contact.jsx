import { Mail, Phone, MapPin, Send, Github, Twitter, Linkedin } from 'lucide-react';
import Footer from '../components/layout/Footer';

export default function Contact() {
    return (
        <>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-white">
                {/* Hero */}
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
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                            <div className="space-y-4">
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
                                <h3 className="font-semibold mb-3">Follow Us</h3>
                                <div className="flex gap-4">
                                    <a href="#" className="text-teal-600 hover:text-teal-800"><Github className="w-6 h-6" /></a>
                                    <a href="#" className="text-teal-600 hover:text-teal-800"><Twitter className="w-6 h-6" /></a>
                                    <a href="#" className="text-teal-600 hover:text-teal-800"><Linkedin className="w-6 h-6" /></a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                                    required
                                />
                                <textarea
                                    placeholder="Your Message"
                                    rows={5}
                                    className="w-full p-3 border rounded-lg resize-none dark:bg-gray-800 dark:border-gray-700"
                                    required
                                ></textarea>
                                <button
                                    type="submit"
                                    className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium hover:bg-teal-700 flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}