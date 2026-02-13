const privacySections = [
    {
        title: "1. Information We Collect",
        body: "We do not collect personal profile information. The only submitted data is the image file provided for lesion analysis.",
    },
    {
        title: "2. How Data Is Used",
        body: "Uploaded images are processed only to generate AI screening output. Data is not used for advertising or unrelated profiling.",
    },
    {
        title: "3. Retention and Deletion",
        body: "After processing completes, images are deleted from active storage according to our operational retention policy.",
    },
    {
        title: "4. Security Controls",
        body: "We apply reasonable technical safeguards during transfer and processing. No internet service can guarantee absolute security.",
    },
    {
        title: "5. Third-Party Services",
        body: "Infrastructure providers may process data on our behalf solely to operate the service. We do not sell your data.",
    },
    {
        title: "6. Policy Updates",
        body: "This policy may be updated periodically. The page date is revised when material changes are published.",
    },
];

const PrivacyPolicyPage = () => {
    return (
        <div className="pb-16">
            <section className="section-spacing pt-10 sm:pt-14">
                <div className="content-shell">
                    <div className="glass-panel rounded-[2rem] p-8 sm:p-10">
                        <span className="eyebrow">Legal</span>
                        <h1 className="display-title mt-4">Privacy Policy</h1>
                        <p className="mt-4 text-sm text-[var(--ink-600)] sm:text-base">
                            Effective date: December 2024
                        </p>
                    </div>
                </div>
            </section>

            <section className="pt-3">
                <div className="content-shell space-y-4">
                    {privacySections.map((section) => (
                        <article key={section.title} className="soft-card rounded-3xl p-6">
                            <h2 className="text-xl font-semibold text-[var(--ink-900)]">{section.title}</h2>
                            <p className="mt-2 text-sm leading-relaxed text-[var(--ink-700)] sm:text-base">
                                {section.body}
                            </p>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicyPage;
