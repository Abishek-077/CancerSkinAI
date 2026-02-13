import { Link } from "react-router-dom";
import HomeImage from "../../assets/HomeImage.png";

const WelcomeSection = () => {
    return (
        <section className="section-spacing pt-10 sm:pt-14">
            <div className="content-shell">
                <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
                    <div className="fade-up">
                        <span className="eyebrow">AI-assisted skin lesion screening</span>
                        <h1 className="display-title mt-5 text-balance">
                            See suspicious skin changes sooner, then take action with confidence.
                        </h1>
                        <p className="copy-muted mt-6 max-w-xl">
                            Upload a single photo and receive a fast model prediction with confidence
                            scoring. Built to support early awareness and better decisions about when
                            to speak with a dermatologist.
                        </p>
                        <p className="mt-4 max-w-xl text-sm text-[var(--ink-600)]">
                            This platform is educational only and is not a diagnosis tool.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link to="/detection" className="primary-btn">
                                Start Free Scan
                            </Link>
                            <Link to="/about" className="secondary-btn">
                                Learn How It Works
                            </Link>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2">
                            <span className="pill">No account required</span>
                            <span className="pill">Privacy-first upload flow</span>
                            <span className="pill">Built on ISIC image data</span>
                        </div>
                    </div>

                    <div className="fade-up [animation-delay:120ms]">
                        <div className="soft-card overflow-hidden rounded-[2rem] p-4 sm:p-5">
                            <img
                                src={HomeImage}
                                alt="AI support for skin health review"
                                className="h-[340px] w-full rounded-[1.4rem] object-cover sm:h-[420px]"
                            />
                            <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                <div className="rounded-2xl bg-white/80 p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink-600)]">
                                        Model
                                    </p>
                                    <p className="mt-1 text-sm font-semibold text-[var(--ink-900)]">ResNet50 CNN</p>
                                </div>
                                <div className="rounded-2xl bg-white/80 p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink-600)]">
                                        Guidance
                                    </p>
                                    <p className="mt-1 text-sm font-semibold text-[var(--ink-900)]">
                                        Results include confidence bands
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;
