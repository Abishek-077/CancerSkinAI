import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ResultPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const result = location.state;

    useEffect(() => {
        if (!result) {
            navigate("/detection", { replace: true });
        }
    }, [navigate, result]);

    if (!result) {
        return null;
    }

    const diagnosisText = `${result.diagnosis ?? ""}`.trim() || "Unknown";
    const diagnosis = diagnosisText.toLowerCase();
    const confidenceValue = Number(result.confidence);
    const confidence = Number.isFinite(confidenceValue) ? confidenceValue : 0;
    const confidencePercent = Math.min(Math.max(confidence, 0), 100);

    const isMalignant = diagnosis.includes("malignant");
    const lowConfidenceBenign = diagnosis.includes("benign") && confidencePercent < 90;

    const statusLabel = isMalignant ? "Potentially malignant finding" : "Likely benign finding";
    const statusClasses = isMalignant
        ? "border-rose-200 bg-rose-50/85 text-rose-900"
        : "border-emerald-200 bg-emerald-50/85 text-emerald-900";
    const meterClasses = isMalignant ? "bg-rose-500" : "bg-emerald-500";

    return (
        <section className="section-spacing pb-24 pt-8 sm:pt-12">
            <div className="content-shell">
                <div className="mx-auto max-w-3xl space-y-5">
                    <div className={`rounded-[2rem] border p-6 sm:p-8 ${statusClasses}`}>
                        <p className="text-xs font-semibold uppercase tracking-[0.12em]">Analysis result</p>
                        <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">{diagnosisText}</h1>
                        <p className="mt-2 text-sm sm:text-base">{statusLabel}</p>

                        <div className="mt-6 rounded-2xl border border-white/65 bg-white/70 p-4">
                            <div className="flex items-center justify-between text-sm font-semibold">
                                <span>Model confidence</span>
                                <span>{confidencePercent.toFixed(2)}%</span>
                            </div>
                            <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/80">
                                <div className={`h-full rounded-full ${meterClasses}`} style={{ width: `${confidencePercent}%` }} />
                            </div>
                        </div>
                    </div>

                    <div className="soft-card rounded-[2rem] p-6 sm:p-8">
                        <h2 className="text-2xl font-semibold text-[var(--ink-900)]">How to interpret this</h2>
                        <div className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--ink-700)] sm:text-base">
                            <p>
                                <span className="font-semibold text-[var(--ink-900)]">Benign:</span> a non-cancerous
                                lesion classification from the model.
                            </p>
                            <p>
                                <span className="font-semibold text-[var(--ink-900)]">Malignant:</span> a potentially
                                cancerous classification that requires urgent professional follow-up.
                            </p>
                            {lowConfidenceBenign && (
                                <p className="rounded-2xl border border-[rgba(196,84,45,0.35)] bg-[rgba(255,239,233,0.85)] px-4 py-3 text-[var(--warn-500)]">
                                    Confidence for this benign result is below 90%. You should arrange a
                                    dermatologist evaluation for a definitive assessment.
                                </p>
                            )}
                            {isMalignant && (
                                <p className="rounded-2xl border border-[rgba(196,84,45,0.35)] bg-[rgba(255,239,233,0.85)] px-4 py-3 text-[var(--warn-500)]">
                                    This result may indicate a serious lesion type. Please seek prompt
                                    medical evaluation by a licensed dermatologist.
                                </p>
                            )}
                            {!isMalignant && !lowConfidenceBenign && (
                                <p>
                                    Even with a reassuring result, monitor the lesion and consult a clinician
                                    if anything changes.
                                </p>
                            )}
                        </div>

                        <div className="mt-7 flex flex-wrap gap-3">
                            <button type="button" onClick={() => navigate("/detection")} className="primary-btn">
                                Analyze Another Image
                            </button>
                            <button type="button" onClick={() => navigate("/")} className="secondary-btn">
                                Back to Home
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResultPage;
