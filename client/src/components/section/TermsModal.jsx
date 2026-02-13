import { useState } from "react";
import PropTypes from "prop-types";

const TermsModal = ({ onAgree }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleAgree = () => {
        setIsVisible(false);
        onAgree();
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-900/75 px-4 backdrop-blur-md">
            <div className="w-full max-w-2xl rounded-[2rem] border border-white/20 bg-white/92 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:p-8">
                <span className="eyebrow">Before You Continue</span>
                <h2 className="mt-4 text-3xl font-semibold text-[var(--ink-900)]">Important clinical notice</h2>
                <p className="mt-4 text-sm leading-relaxed text-[var(--ink-700)] sm:text-base">
                    CancerSkinAI offers an educational AI screening output only. It is not a medical
                    diagnosis and should never be used as the only basis for treatment decisions.
                </p>

                <div className="mt-5 space-y-3 text-sm text-[var(--ink-700)]">
                    <div className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent-500)]" />
                        <p>Always consult a dermatologist if a lesion changes shape, size, color, or bleeds.</p>
                    </div>
                    <div className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent-500)]" />
                        <p>False positives and false negatives are possible with any AI model.</p>
                    </div>
                    <div className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[var(--warn-500)]" />
                        <p>Urgent symptoms should be evaluated by a medical professional immediately.</p>
                    </div>
                </div>

                <p className="mt-5 text-sm text-[var(--ink-700)]">
                    By continuing, you agree to our{" "}
                    <a
                        href="/terms-and-conditions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[var(--accent-600)] underline"
                    >
                        Terms and Conditions
                    </a>
                    .
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                    <button type="button" onClick={handleAgree} className="primary-btn">
                        I Understand and Agree
                    </button>
                    <a href="/" className="secondary-btn">
                        Return Home
                    </a>
                </div>
            </div>
        </div>
    );
};

TermsModal.propTypes = {
    onAgree: PropTypes.func.isRequired,
};

export default TermsModal;
