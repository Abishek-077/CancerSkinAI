import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TermsModal from "../section/TermsModal";

const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];

const DetectionPage = () => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showTerms, setShowTerms] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [dragging, setDragging] = useState(false);
    const navigate = useNavigate();

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const validateFile = (candidate) => {
        if (candidate && validImageTypes.includes(candidate.type)) {
            setFile(candidate);
            setErrorMessage("");
            return;
        }

        setFile(null);
        setErrorMessage("Please upload a valid image file (JPEG, JPG, PNG).");
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files?.[0];
        validateFile(selectedFile);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setDragging(false);

        const selectedFile = event.dataTransfer.files?.[0];
        validateFile(selectedFile);
    };

    const handleUpload = async () => {
        if (!file) {
            setErrorMessage("Please select a valid image before starting analysis.");
            return;
        }

        if (!API_BASE_URL) {
            setErrorMessage("API endpoint is missing. Configure VITE_API_BASE_URL in the client environment.");
            return;
        }

        setErrorMessage("");
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append("file", file);

            const response = await fetch(`${API_BASE_URL}/detect_skin_lesion`, {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                setErrorMessage("Image analysis failed. Please try again with a different photo.");
                return;
            }

            const result = await response.json();
            navigate("/result", { state: result });
        } catch (error) {
            console.error("Error uploading image:", error);
            setErrorMessage("A network error occurred while uploading. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (showTerms) {
        return <TermsModal onAgree={() => setShowTerms(false)} />;
    }

    return (
        <section className="section-spacing pb-24 pt-8 sm:pt-12">
            <div className="content-shell">
                <div className="mx-auto max-w-3xl">
                    <div className="soft-card rounded-[2rem] p-6 sm:p-10">
                        <span className="eyebrow">Detection</span>
                        <h1 className="section-title mt-4">Upload a skin image for AI screening</h1>
                        <p className="copy-muted mt-3 text-base">
                            For best results, use a sharp, evenly lit image with the lesion clearly visible.
                        </p>

                        {loading ? (
                            <div className="mt-8 rounded-3xl border border-white/70 bg-white/80 p-8 text-center">
                                <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[var(--accent-500)] border-t-transparent" />
                                <p className="mt-4 text-lg font-semibold text-[var(--ink-900)]">Analyzing image...</p>
                                <p className="mt-2 text-sm text-[var(--ink-600)]">
                                    Processing usually takes just a few seconds.
                                </p>
                            </div>
                        ) : (
                            <>
                                <div
                                    className={`mt-7 rounded-3xl border-2 border-dashed p-8 text-center transition-all ${dragging ? "border-[var(--accent-500)] bg-[var(--accent-050)]/70" : "border-slate-300 bg-white/60"}`}
                                    onDragOver={(event) => {
                                        event.preventDefault();
                                        setDragging(true);
                                    }}
                                    onDragLeave={() => setDragging(false)}
                                    onDrop={handleDrop}
                                >
                                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--ink-600)]">
                                        Drag and drop your image
                                    </p>
                                    <p className="mt-2 text-sm text-[var(--ink-600)]">or choose it manually</p>

                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className="hidden"
                                        id="file-upload"
                                    />
                                    <label htmlFor="file-upload" className="secondary-btn mt-5 cursor-pointer">
                                        Choose File
                                    </label>

                                    {file && (
                                        <div className="mt-5 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-left">
                                            <p className="text-xs uppercase tracking-[0.12em] text-[var(--ink-600)]">
                                                Selected file
                                            </p>
                                            <p className="mt-1 truncate text-sm font-semibold text-[var(--ink-900)]">
                                                {file.name}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {errorMessage && (
                                    <p className="mt-4 rounded-2xl border border-[rgba(196,84,45,0.35)] bg-[rgba(255,239,233,0.85)] px-4 py-3 text-sm text-[var(--warn-500)]">
                                        {errorMessage}
                                    </p>
                                )}

                                <button
                                    type="button"
                                    onClick={handleUpload}
                                    className={`primary-btn mt-6 w-full sm:w-auto ${!file ? "cursor-not-allowed opacity-60" : ""}`}
                                    disabled={!file}
                                >
                                    Upload and Analyze
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetectionPage;
