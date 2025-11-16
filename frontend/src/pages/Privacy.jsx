import { Shield, CheckCircle, AlertCircle } from 'lucide-react';
import Footer from '../components/layout/Footer';

export default function Privacy() {
    return (
        <>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-white">
                {/* Hero */}
                <section className="bg-gradient-to-br from-red-600 to-rose-700 py-20 text-white">
                    <div className="max-w-5xl mx-auto px-4 text-center">
                        <Shield className="w-16 h-16 mx-auto mb-4" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                        <p className="text-lg opacity-90">
                            Your health data is protected and never shared.
                        </p>
                    </div>
                </section>

                <article className="max-w-5xl mx-auto px-4 py-12 prose prose-lg dark:prose-invert">
                    <p className="lead">Last updated: November 15, 2025</p>

                    <section className="mb-8">
                        <h2 className="flex items-center gap-2 text-2xl font-bold mb-3">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                            Data We Collect
                        </h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Clinical text entered for summarization or PHI checks</li>
                            <li>Symptom descriptions in the chat interface</li>
                            <li>Drug names for interaction lookup</li>
                            <li>No persistent personal identifiers are stored</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="flex items-center gap-2 text-2xl font-bold mb-3">
                            <AlertCircle className="w-6 h-6 text-yellow-600" />
                            How We Use Your Data
                        </h2>
                        <p>
                            All data is processed <strong>locally</strong> via LLaMA3 (Ollama) and
                            LangChain pipelines. No information leaves your device unless you
                            explicitly call external APIs (PubMed, OpenFDA).
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="flex items-center gap-2 text-2xl font-bold mb-3">
                            <Shield className="w-6 h-6 text-red-600" />
                            HIPAA Compliance
                        </h2>
                        <p>
                            The <strong>Privacy Checker</strong> module uses spaCy + LLM to detect
                            PHI and suggest redaction before any data is displayed.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-3">Third-Party Services</h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>PubMed API – public literature search</li>
                            <li>OpenFDA – drug interaction data</li>
                            <li>No user data is sent to these services</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-3">Your Rights</h2>
                        <p>
                            You may request deletion of any session data at any time. Since we
                            do not store data beyond the current session, simply refresh the
                            page.
                        </p>
                    </section>

                    <section className="text-center py-8">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Questions? <a href="/contact" className="text-red-600 hover:underline">Contact us</a>.
                        </p>
                    </section>
                </article>
            </div>

        </>
    );
}