import { Link } from "react-router-dom";
import MolePicture from "../../assets/Mole.jpeg";
import UploadPicture from "../../assets/Upload.jpeg";
import ResultPicture from "../../assets/Result.jpeg";

const steps = [
    {
        title: "Capture a clear image",
        description:
            "Take a close, well-lit photo of the mole or skin area you want reviewed.",
        image: MolePicture,
        alt: "Taking a clear lesion photo",
    },
    {
        title: "Upload securely",
        description:
            "Drop your image into the uploader and submit it for model analysis.",
        image: UploadPicture,
        alt: "Uploading an image for analysis",
    },
    {
        title: "Review model output",
        description:
            "Get a benign or malignant prediction, confidence score, and recommended next action.",
        image: ResultPicture,
        alt: "Reviewing screening result",
    },
];

const HowItWorksSection = () => {
    return (
        <section className="section-spacing">
            <div className="content-shell">
                <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <span className="eyebrow">Workflow</span>
                        <h2 className="section-title mt-4 text-balance">Three steps to an AI pre-screen.</h2>
                        <p className="copy-muted mt-3 max-w-2xl">
                            The experience is intentionally simple so users can move from concern
                            to informed next steps with minimal friction.
                        </p>
                    </div>
                    <Link to="/detection" className="primary-btn w-fit">
                        Try Detection
                    </Link>
                </div>

                <div className="grid gap-5 lg:grid-cols-3">
                    {steps.map((step, index) => (
                        <article
                            key={step.title}
                            className="soft-card fade-up rounded-3xl p-4 sm:p-5"
                            style={{ animationDelay: `${index * 120}ms` }}
                        >
                            <img
                                src={step.image}
                                alt={step.alt}
                                className="h-52 w-full rounded-2xl object-cover"
                            />
                            <div className="mt-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink-600)]">
                                    Step {index + 1}
                                </p>
                                <h3 className="mt-2 text-xl font-semibold text-[var(--ink-900)]">
                                    {step.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-600)]">
                                    {step.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
