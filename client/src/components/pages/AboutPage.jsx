import StepImage from "../../assets/StepImage.jpeg";
import ConcernImage from "../../assets/ConcernImage.jpeg";
import CNNImage from "../../assets/CNNImage.jpeg";

const storyBlocks = [
    {
        title: "Our Mission",
        text: "Skin cancer is common, and delays in follow-up are still frequent. CancerSkinAI was created to offer a practical first screen that encourages earlier conversations with clinicians.",
        image: StepImage,
        alt: "Mission visual",
    },
    {
        title: "The Challenge",
        text: "Many people postpone appointments due to uncertainty, access limits, or anxiety. A fast AI pre-screen can reduce indecision and help users seek care sooner when needed.",
        image: ConcernImage,
        alt: "Challenge visual",
        reverse: true,
    },
    {
        title: "The Technology",
        text: "Our pipeline uses convolutional neural networks based on ResNet-style architecture and lesion datasets such as ISIC. Predictions are paired with confidence scores and caution messaging.",
        image: CNNImage,
        alt: "Technology visual",
    },
];

const AboutPage = () => {
    return (
        <div className="pb-16">
            <section className="section-spacing pt-10 sm:pt-14">
                <div className="content-shell">
                    <div className="glass-panel rounded-[2rem] p-8 sm:p-12">
                        <span className="eyebrow">About</span>
                        <h1 className="display-title mt-4 text-balance">Why CancerSkinAI exists</h1>
                        <p className="copy-muted mt-5 max-w-3xl">
                            We are building a responsible AI screening layer that helps users recognize
                            risk signals and take the next right step. The product is focused on awareness,
                            safety messaging, and clinical follow-up, not replacement of professional care.
                        </p>
                    </div>
                </div>
            </section>

            <section className="pt-3">
                <div className="content-shell space-y-6">
                    {storyBlocks.map((block, index) => (
                        <article
                            key={block.title}
                            className="soft-card fade-up grid gap-5 rounded-[2rem] p-5 sm:p-6 lg:grid-cols-2 lg:items-center"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className={`space-y-4 ${block.reverse ? "lg:order-2" : ""}`}>
                                <h2 className="section-title">{block.title}</h2>
                                <p className="copy-muted text-base sm:text-lg">{block.text}</p>
                            </div>
                            <div className={block.reverse ? "lg:order-1" : ""}>
                                <img
                                    src={block.image}
                                    alt={block.alt}
                                    className="h-[280px] w-full rounded-2xl object-cover sm:h-[320px]"
                                />
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="pt-8">
                <div className="content-shell">
                    <div className="rounded-3xl border border-[rgba(196,84,45,0.2)] bg-[rgba(255,239,233,0.85)] px-6 py-5 text-sm leading-relaxed text-[var(--ink-700)] sm:text-base">
                        <span className="font-semibold text-[var(--warn-500)]">Clinical disclaimer:</span>{" "}
                        CancerSkinAI does not provide medical diagnoses. If a lesion looks suspicious,
                        painful, changing, or bleeding, seek immediate evaluation by a licensed
                        healthcare professional.
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
