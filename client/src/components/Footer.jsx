import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="relative z-10 pb-8 pt-12">
            <div className="content-shell">
                <div className="glass-panel rounded-3xl px-6 py-8 sm:px-8">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                        <div className="space-y-2">
                            <p className="text-lg font-semibold text-[var(--ink-900)]">CancerSkinAI</p>
                            <p className="max-w-xl text-sm text-[var(--ink-600)]">
                                AI can support early awareness, but it does not replace a clinical diagnosis.
                                Consult a licensed dermatologist for any concerning skin changes.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <Link to="/privacy-policy" className="secondary-btn px-4 py-2 text-xs">
                                Privacy Policy
                            </Link>
                            <Link to="/terms-and-conditions" className="secondary-btn px-4 py-2 text-xs">
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>

                    <div className="mt-6 border-t border-white/70 pt-4 text-xs text-[var(--ink-600)] sm:flex sm:items-center sm:justify-between">
                        <p>Educational use only. Not medical advice.</p>
                        <p>&copy; {new Date().getFullYear()} CancerSkinAI. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
