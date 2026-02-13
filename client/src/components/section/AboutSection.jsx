import { Link } from "react-router-dom";
import AboutImage from "../../assets/BrainImage.png";

const AboutSection = () => {
    return (
        <section className="section-spacing pt-6">
            <div className="content-shell">
                <div className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
                    <div className="soft-card fade-up rounded-[2rem] p-5">
                        <img
                            src={AboutImage}
                            alt="CancerSkinAI technology overview"
                            className="h-[300px] w-full rounded-[1.4rem] object-cover sm:h-[380px]"
                        />
                    </div>

                    <div className="fade-up [animation-delay:140ms]">
                        <span className="eyebrow">About CancerSkinAI</span>
                        <h2 className="section-title mt-5 text-balance">
                            Designed for early awareness, never as a final diagnosis.
                        </h2>
                        <p className="copy-muted mt-5">
                            CancerSkinAI analyzes lesion images using convolutional neural networks
                            trained on structured dermatology datasets. The goal is simple: help users
                            identify when a professional skin exam should happen sooner.
                        </p>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            <article className="glass-panel rounded-2xl p-4">
                                <p className="text-sm font-semibold text-[var(--ink-900)]">Built for speed</p>
                                <p className="mt-1 text-sm text-[var(--ink-600)]">
                                    Upload an image and get a model output in seconds.
                                </p>
                            </article>
                            <article className="glass-panel rounded-2xl p-4">
                                <p className="text-sm font-semibold text-[var(--ink-900)]">Built for context</p>
                                <p className="mt-1 text-sm text-[var(--ink-600)]">
                                    Results always include cautionary notes and next-step guidance.
                                </p>
                            </article>
                        </div>

                        <div className="mt-7">
                            <Link to="/about" className="secondary-btn">
                                Read Full Story
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
