const termsSections = [
    {
        title: "1. Scope of Service",
        body: "CancerSkinAI provides an educational AI screening tool and does not provide medical diagnosis, treatment planning, or emergency advice.",
    },
    {
        title: "2. User Responsibilities",
        body: "You must upload only images you are authorized to use and comply with applicable laws while using this platform.",
    },
    {
        title: "3. Clinical Limitations",
        body: "Model outputs can be incorrect. You are responsible for seeking licensed medical evaluation for any concerning lesion or symptoms.",
    },
    {
        title: "4. Prohibited Conduct",
        body: "Do not use the service for illegal, abusive, or harmful activity, including attempts to disrupt infrastructure or misuse analysis results.",
    },
    {
        title: "5. Liability Limits",
        body: "To the maximum extent permitted by law, we are not liable for medical decisions, outcomes, or losses arising from reliance on AI output alone.",
    },
    {
        title: "6. Updates to Terms",
        body: "Terms may be revised from time to time. Continued use after changes indicates acceptance of the updated terms.",
    },
];

const TermsAndConditionsPage = () => {
    return (
        <div className="pb-16">
            <section className="section-spacing pt-10 sm:pt-14">
                <div className="content-shell">
                    <div className="glass-panel rounded-[2rem] p-8 sm:p-10">
                        <span className="eyebrow">Legal</span>
                        <h1 className="display-title mt-4">Terms and Conditions</h1>
                        <p className="mt-4 text-sm text-[var(--ink-600)] sm:text-base">
                            Last updated: December 2024
                        </p>
                    </div>
                </div>
            </section>

            <section className="pt-3">
                <div className="content-shell space-y-4">
                    {termsSections.map((section) => (
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

export default TermsAndConditionsPage;
