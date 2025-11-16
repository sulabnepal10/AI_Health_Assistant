import { FileText, Github, ExternalLink, ChevronRight } from 'lucide-react';
import Footer from '../components/layout/Footer';

export default function Docs() {
    return (
        <>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-white">
                {/* Hero */}
                <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 text-white">
                    <div className="max-w-5xl mx-auto px-4 text-center">
                        <FileText className="w-16 h-16 mx-auto mb-4" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            AI Health Assistant – Full Development Guide
                        </h1>
                        <p className="text-lg opacity-90">
                            Step-by-step blueprint for a production-grade health-informatics platform
                        </p>
                    </div>
                </section>

                <article className="max-w-5xl mx-auto px-4 py-12 prose prose-lg dark:prose-invert">
                    {/* ---------- Project Overview ---------- */}
                    <section className="mb-12">
                        <h2 className="flex items-center gap-2 text-3xl font-bold mb-4">
                            <span className="text-indigo-600">■</span> Project Overview
                        </h2>
                        <p>
                            The <strong>AI Health Assistant Platform</strong> is a web-based system featuring multiple
                            healthcare-focused AI modules. It leverages open-source language models via{' '}
                            <strong>Ollama</strong> and <strong>LangChain</strong> pipelines to provide clinical data
                            insights, privacy checks, literature summarization, and more.
                        </p>
                    </section>

                    {/* ---------- Core Modules ---------- */}
                    <section className="mb-12">
                        <h2 className="flex items-center gap-2 text-3xl font-bold mb-4">
                            <span className="text-indigo-600">■</span> Core Modules
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: 'Health Record Summarizer',
                                    desc: 'Summarizes unstructured clinical notes and extracts diagnosis, medications, treatment plans.',
                                },
                                {
                                    title: 'Symptom Advisor',
                                    desc: 'Conversational agent suggesting possible conditions and specialist types.',
                                },
                                {
                                    title: 'Research Paper Assistant',
                                    desc: 'Retrieves & summarizes biomedical literature via PubMed / Semantic Scholar.',
                                },
                                {
                                    title: 'Privacy Checker',
                                    desc: 'Detects PHI using spaCy + LLM validation for HIPAA compliance.',
                                },
                                {
                                    title: 'Drug Interaction Finder',
                                    desc: 'Checks interactions using OpenFDA / NIH datasets.',
                                },
                            ].map((m, i) => (
                                <div key={i} className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
                                    <h3 className="font-semibold text-indigo-700 dark:text-indigo-400">{m.title}</h3>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{m.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ---------- System Architecture ---------- */}
                    <section className="mb-12">
                        <h2 className="flex items-center gap-2 text-3xl font-bold mb-4">
                            <span className="text-indigo-600">■■</span> System Architecture
                        </h2>
                        <p className="mb-4">
                            The system consists of a <strong>React frontend</strong>, <strong>FastAPI backend</strong>,
                            <strong>LangChain orchestration</strong>, and a <strong>local LLaMA3 model</strong>.
                        </p>

                        <ol className="list-decimal pl-6 space-y-2">
                            <li>
                                <strong>React Frontend</strong> – UI for all agents.
                            </li>
                            <li>
                                <strong>FastAPI Backend</strong> – REST endpoints → LangChain pipelines.
                            </li>
                            <li>
                                <strong>LangChain Pipelines</strong> – Modular AI logic per module.
                            </li>
                            <li>
                                <strong>LLaMA3 (Ollama)</strong> – Reasoning, summarisation, dialogue.
                            </li>
                            <li>
                                <strong>ChromaDB</strong> – Vector store for RAG.
                            </li>
                        </ol>

                        <div className="my-8 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                            <pre className="text-xs overflow-x-auto">
                                {`┌─────────────────┐     ┌──────────────────┐
│   React UI      │────►│   FastAPI        │
└─────────────────┘     └───────┬──────────┘
                                │
                        ┌───────▼──────────┐
                        │  LangChain       │
                        └───────┬──────────┘
                ┌───────────────┴───────────────┐
                │  LLaMA3 (Ollama)  │  ChromaDB │
                └────────────────────┴───────────┘`}
                            </pre>
                        </div>
                    </section>

                    {/* ---------- Tech Stack ---------- */}
                    <section className="mb-12">
                        <h2 className="flex items-center gap-2 text-3xl font-bold mb-4">
                            <span className="text-indigo-600">■</span> Tech Stack
                        </h2>
                        <ul className="grid md:grid-cols-2 gap-4">
                            {[
                                'React, TailwindCSS, Axios',
                                'FastAPI',
                                'LangChain',
                                'LLaMA3 via Ollama',
                                'ChromaDB / FAISS',
                                'PubMed, OpenFDA, WHO APIs',
                                'spaCy (NER)',
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <ChevronRight className="w-5 h-5 text-indigo-600" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* ---------- Development Roadmap ---------- */}
                    <section className="mb-12">
                        <h2 className="flex items-center gap-2 text-3xl font-bold mb-4">
                            <span className="text-indigo-600">■</span> Development Roadmap
                        </h2>

                        <div className="space-y-8">
                            {[
                                {
                                    phase: 'Phase 1 – Foundation',
                                    items: [
                                        'Set up React + FastAPI',
                                        'Integrate LLaMA3 via Ollama',
                                        'Build Health Record Summarizer (MVP)',
                                    ],
                                },
                                {
                                    phase: 'Phase 2 – Expansion',
                                    items: [
                                        'Symptom Advisor (LLM + WHO)',
                                        'Research Paper Assistant (PubMed)',
                                        'Privacy Checker (spaCy + LLM)',
                                        'Drug Interaction Finder (OpenFDA)',
                                    ],
                                },
                                {
                                    phase: 'Phase 3 – UI & Deployment',
                                    items: [
                                        'Polish UI (cards/tabs)',
                                        'Chat history persistence',
                                        'Deploy backend → Render/Railway',
                                        'Host frontend → Vercel/Netlify',
                                    ],
                                },
                            ].map((p, i) => (
                                <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                                    <h3 className="font-bold text-xl text-indigo-700 dark:text-indigo-400">{p.phase}</h3>
                                    <ul className="mt-3 space-y-1">
                                        {p.items.map((it, j) => (
                                            <li key={j} className="flex items-center gap-2 text-sm">
                                                <span className="text-indigo-600">▶</span> {it}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ---------- Research Alignment ---------- */}
                    <section className="mb-12">
                        <h2 className="flex items-center gap-2 text-3xl font-bold mb-4">
                            <span className="text-indigo-600">■</span> Research Alignment
                        </h2>
                        <p>
                            This project demonstrates applied AI in <strong>Health Informatics</strong>:
                        </p>
                        <ul className="list-disc pl-6 mt-3 space-y-1">
                            <li>Clinical data summarization & NLP</li>
                            <li>Intelligent decision support</li>
                            <li>Biomedical information retrieval</li>
                            <li>HIPAA-compliant privacy systems</li>
                        </ul>
                        <p className="mt-4">
                            Ideal for discussions with faculty (e.g., <em>Prof. Vanessa Di Amerio</em>).
                        </p>
                    </section>

                    {/* ---------- Deliverables ---------- */}
                    <section className="mb-12">
                        <h2 className="flex items-center gap-2 text-3xl font-bold mb-4">
                            <span className="text-indigo-600">■</span> Deliverables
                        </h2>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Full React + FastAPI source on GitHub</li>
                            <li>Working demo video / live deployment</li>
                            <li>Technical README + architecture diagram</li>
                            <li>Research note linking modules to informatics concepts</li>
                        </ol>
                    </section>

                    {/* ---------- CTA ---------- */}
                    <section className="text-center py-10">
                        <a
                            href="https://github.com/sulabnepal10/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition"
                        >
                            <Github className="w-5 h-5" />
                            View on GitHub
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </section>
                </article>
            </div>
        </>
    );
}