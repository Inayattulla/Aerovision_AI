import { useRef, useState } from "react";
import {
    Upload,
    Image as ImageIcon,
    Video,
    X,
    Play,
    ScanSearch,
    CheckCircle2,
    AlertCircle
} from "lucide-react";

import "../styles/analyze.css";

function Analyze() {

    const fileInputRef = useRef(null);

    const [fileType, setFileType] = useState("image");
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysisComplete, setAnalysisComplete] = useState(false);
    const [error, setError] = useState("");

    const handleFile = (file) => {

        setError("");
        setAnalysisComplete(false);

        if (!file) {
            return;
        }

        const isImage = file.type.startsWith("image/");
        const isVideo = file.type.startsWith("video/");

        if (fileType === "image" && !isImage) {
            setError("Please select a valid image file.");
            return;
        }

        if (fileType === "video" && !isVideo) {
            setError("Please select a valid video file.");
            return;
        }

        const maxSize = fileType === "image"
            ? 20 * 1024 * 1024
            : 100 * 1024 * 1024;

        if (file.size > maxSize) {
            setError(
                `File size must be less than ${
                    fileType === "image" ? "20 MB" : "100 MB"
                }.`
            );
            return;
        }

        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }

        const url = URL.createObjectURL(file);

        setSelectedFile(file);
        setPreviewUrl(url);
    };


    const handleFileInput = (event) => {

        const file = event.target.files[0];

        handleFile(file);
    };


    const handleDrop = (event) => {

        event.preventDefault();

        setIsDragging(false);

        const file = event.dataTransfer.files[0];

        handleFile(file);
    };


    const handleDragOver = (event) => {

        event.preventDefault();

        setIsDragging(true);
    };


    const handleDragLeave = () => {

        setIsDragging(false);
    };


    const removeFile = () => {

        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }

        setSelectedFile(null);
        setPreviewUrl(null);
        setAnalysisComplete(false);
        setError("");

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };


    const handleAnalyze = () => {

        if (!selectedFile) {
            setError("Please select a file before starting analysis.");
            return;
        }

        setError("");
        setIsAnalyzing(true);
        setAnalysisComplete(false);

        /*
         * TEMPORARY MOCK PROCESSING
         *
         * Later this section will be replaced
         * with the actual YOLO backend API call.
         */

        setTimeout(() => {

            setIsAnalyzing(false);
            setAnalysisComplete(true);

        }, 2000);
    };


    const changeFileType = (type) => {

        if (type === fileType) {
            return;
        }

        removeFile();

        setFileType(type);
    };


    return (
        <main className="analyze-page">

            {/* =========================================
                PAGE HEADER
            ========================================= */}

            <section className="analyze-header">

                <div>

                    <span className="page-eyebrow">
                        AI ANALYSIS
                    </span>

                    <h1>
                        Analyze Aerial Data
                    </h1>

                    <p>
                        Upload an aerial image or video and prepare it
                        for intelligent object detection.
                    </p>

                </div>

            </section>


            {/* =========================================
                TYPE SELECTOR
            ========================================= */}

            <section className="analyze-container">

                <div className="type-selector">

                    <button
                        className={
                            `type-button ${
                                fileType === "image"
                                    ? "active"
                                    : ""
                            }`
                        }
                        onClick={() => changeFileType("image")}
                    >

                        <ImageIcon size={20} />

                        <div>
                            <strong>Image Analysis</strong>

                            <span>
                                JPG, PNG, WEBP
                            </span>
                        </div>

                    </button>


                    <button
                        className={
                            `type-button ${
                                fileType === "video"
                                    ? "active"
                                    : ""
                            }`
                        }
                        onClick={() => changeFileType("video")}
                    >

                        <Video size={20} />

                        <div>
                            <strong>Video Analysis</strong>

                            <span>
                                MP4, MOV, AVI
                            </span>
                        </div>

                    </button>

                </div>


                {/* =========================================
                    MAIN ANALYSIS AREA
                ========================================= */}

                <div className="analysis-grid">

                    {/* UPLOAD AREA */}

                    <div className="upload-section">

                        <div
                            className={
                                `upload-box ${
                                    isDragging
                                        ? "dragging"
                                        : ""
                                } ${
                                    selectedFile
                                        ? "has-file"
                                        : ""
                                }`
                            }

                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onClick={() =>
                                !selectedFile &&
                                fileInputRef.current.click()
                            }
                        >

                            <input
                                ref={fileInputRef}
                                type="file"
                                hidden
                                accept={
                                    fileType === "image"
                                        ? "image/*"
                                        : "video/*"
                                }
                                onChange={handleFileInput}
                            />


                            {!selectedFile ? (

                                <div className="upload-content">

                                    <div className="upload-icon">
                                        <Upload size={28} />
                                    </div>

                                    <h3>
                                        Drop your {
                                            fileType
                                        } here
                                    </h3>

                                    <p>
                                        or click to browse files
                                    </p>

                                    <span className="upload-limit">
                                        Maximum file size: {
                                            fileType === "image"
                                                ? "20 MB"
                                                : "100 MB"
                                        }
                                    </span>

                                </div>

                            ) : (

                                <div className="file-selected">

                                    <CheckCircle2
                                        size={35}
                                    />

                                    <h3>
                                        File Ready
                                    </h3>

                                    <p>
                                        {selectedFile.name}
                                    </p>

                                    <span>
                                        Click the × button to
                                        remove this file
                                    </span>

                                </div>

                            )}

                        </div>


                        {/* ERROR */}

                        {error && (

                            <div className="error-message">

                                <AlertCircle size={17} />

                                <span>
                                    {error}
                                </span>

                            </div>

                        )}


                        {/* ANALYZE BUTTON */}

                        <button
                            className="analyze-button"
                            disabled={
                                !selectedFile ||
                                isAnalyzing
                            }
                            onClick={handleAnalyze}
                        >

                            {isAnalyzing ? (

                                <>
                                    <span className="spinner"></span>

                                    Processing...
                                </>

                            ) : (

                                <>
                                    <ScanSearch size={19} />

                                    Analyze {
                                        fileType === "image"
                                            ? "Image"
                                            : "Video"
                                    }
                                </>

                            )}

                        </button>


                        {analysisComplete && (

                            <div className="success-message">

                                <CheckCircle2 size={18} />

                                <span>
                                    Analysis completed successfully.
                                    Results are ready for visualization.
                                </span>

                            </div>

                        )}

                    </div>


                    {/* PREVIEW AREA */}

                    <div className="preview-section">

                        <div className="preview-header">

                            <div>
                                <span>INPUT PREVIEW</span>

                                <h2>
                                    {selectedFile
                                        ? "Selected File"
                                        : "No File Selected"
                                    }
                                </h2>
                            </div>

                            {selectedFile && (

                                <button
                                    className="remove-button"
                                    onClick={removeFile}
                                    title="Remove file"
                                >
                                    <X size={18} />
                                </button>

                            )}

                        </div>


                        <div className="preview-container">

                            {!selectedFile ? (

                                <div className="empty-preview">

                                    {fileType === "image" ? (
                                        <ImageIcon size={40} />
                                    ) : (
                                        <Video size={40} />
                                    )}

                                    <p>
                                        Your file preview
                                        will appear here
                                    </p>

                                </div>

                            ) : (

                                <>

                                    {fileType === "image" ? (

                                        <img
                                            src={previewUrl}
                                            alt="Selected aerial file"
                                            className="preview-image"
                                        />

                                    ) : (

                                        <video
                                            src={previewUrl}
                                            className="preview-video"
                                            controls
                                        />

                                    )}

                                    {fileType === "video" && (

                                        <div className="video-indicator">
                                            <Play size={13} />
                                            VIDEO PREVIEW
                                        </div>

                                    )}

                                </>

                            )}

                        </div>


                        {/* FILE INFORMATION */}

                        {selectedFile && (

                            <div className="file-information">

                                <div>

                                    <span>FILE NAME</span>

                                    <strong>
                                        {selectedFile.name}
                                    </strong>

                                </div>


                                <div>

                                    <span>FILE TYPE</span>

                                    <strong>
                                        {selectedFile.type}
                                    </strong>

                                </div>


                                <div>

                                    <span>FILE SIZE</span>

                                    <strong>
                                        {(
                                            selectedFile.size /
                                            (1024 * 1024)
                                        ).toFixed(2)}
                                        {" "}MB
                                    </strong>

                                </div>

                            </div>

                        )}

                    </div>

                </div>

            </section>


            {/* =========================================
                INFORMATION
            ========================================= */}

            <section className="analysis-info">

                <div className="info-card">

                    <div className="info-number">
                        01
                    </div>

                    <div>
                        <h3>
                            Upload
                        </h3>

                        <p>
                            Select an aerial image or video
                            from your system.
                        </p>
                    </div>

                </div>


                <div className="info-card">

                    <div className="info-number">
                        02
                    </div>

                    <div>
                        <h3>
                            AI Detection
                        </h3>

                        <p>
                            The trained YOLO model analyzes
                            the uploaded content.
                        </p>
                    </div>

                </div>


                <div className="info-card">

                    <div className="info-number">
                        03
                    </div>

                    <div>
                        <h3>
                            Visualize
                        </h3>

                        <p>
                            View detected objects, bounding
                            boxes and confidence scores.
                        </p>
                    </div>

                </div>

            </section>

        </main>
    );
}

export default Analyze;