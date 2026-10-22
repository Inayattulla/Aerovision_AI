import { Link } from "react-router-dom";
import {
    ArrowLeft,
    Download,
    RotateCcw,
    CheckCircle2,
    Users,
    Car,
    Bike,
    Target,
    Cpu,
    Clock3
} from "lucide-react";

import "../styles/results.css";


/*
 * TEMPORARY MOCK YOLO DATA
 *
 * Later this data will come from the backend.
 */

const detections = [
    {
        id: 1,
        className: "Person",
        confidence: 96,
        type: "person",
        box: {
            top: "24%",
            left: "18%",
            width: "13%",
            height: "29%"
        }
    },
    {
        id: 2,
        className: "Person",
        confidence: 94,
        type: "person",
        box: {
            top: "45%",
            left: "38%",
            width: "11%",
            height: "24%"
        }
    },
    {
        id: 3,
        className: "Person",
        confidence: 89,
        type: "person",
        box: {
            top: "17%",
            left: "67%",
            width: "10%",
            height: "23%"
        }
    },
    {
        id: 4,
        className: "Vehicle",
        confidence: 92,
        type: "vehicle",
        box: {
            top: "58%",
            left: "57%",
            width: "20%",
            height: "14%"
        }
    },
    {
        id: 5,
        className: "Vehicle",
        confidence: 88,
        type: "vehicle",
        box: {
            top: "32%",
            left: "78%",
            width: "15%",
            height: "12%"
        }
    },
    {
        id: 6,
        className: "Bicycle",
        confidence: 84,
        type: "bicycle",
        box: {
            top: "67%",
            left: "22%",
            width: "12%",
            height: "10%"
        }
    }
];


function Results() {

    const objectCounts = {
        Person: detections.filter(
            item => item.className === "Person"
        ).length,

        Vehicle: detections.filter(
            item => item.className === "Vehicle"
        ).length,

        Bicycle: detections.filter(
            item => item.className === "Bicycle"
        ).length
    };


    const averageConfidence = Math.round(
        detections.reduce(
            (sum, item) => sum + item.confidence,
            0
        ) / detections.length
    );


    const getIcon = (type) => {

        if (type === "person") {
            return <Users size={16} />;
        }

        if (type === "vehicle") {
            return <Car size={16} />;
        }

        return <Bike size={16} />;
    };


    const handleDownload = () => {

        /*
         * TEMPORARY DOWNLOAD DEMO
         *
         * Later this can download the actual
         * processed image returned by the backend.
         */

        alert(
            "Result download will be connected to the backend later."
        );
    };


    return (
        <main className="results-page">

            {/* =========================================
                HEADER
            ========================================= */}

            <section className="results-header">

                <div>

                    <Link
                        to="/analyze"
                        className="back-link"
                    >
                        <ArrowLeft size={16} />
                        Back to Analysis
                    </Link>

                    <div className="results-title-row">

                        <div>

                            <span className="page-eyebrow">
                                DETECTION RESULTS
                            </span>

                            <h1>
                                Analysis Complete
                            </h1>

                            <p>
                                Review the objects detected in
                                your aerial imagery.
                            </p>

                        </div>

                        <div className="model-status">

                            <CheckCircle2 size={17} />

                            <div>

                                <strong>
                                    YOLO11s
                                </strong>

                                <span>
                                    Detection complete
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================
                MAIN RESULT AREA
            ========================================= */}

            <section className="results-container">

                <div className="result-main-grid">


                    {/* =====================================
                        DETECTION VIEWER
                    ===================================== */}

                    <div className="detection-panel">

                        <div className="panel-header">

                            <div>

                                <span>
                                    DETECTION VIEWER
                                </span>

                                <h2>
                                    Aerial Image
                                </h2>

                            </div>

                            <div className="viewer-status">
                                <span></span>
                                DETECTED
                            </div>

                        </div>


                        <div className="detection-viewer">

                            {/* Mock aerial background */}

                            <div className="aerial-background">

                                <div className="road road-one"></div>

                                <div className="road road-two"></div>

                                <div className="building building-one"></div>

                                <div className="building building-two"></div>

                                <div className="building building-three"></div>

                                <div className="field field-one"></div>

                                <div className="field field-two"></div>

                            </div>


                            {/* Bounding Boxes */}

                            {detections.map((detection) => (

                                <div
                                    key={detection.id}
                                    className={`bounding-box ${detection.type}`}
                                    style={{
                                        top: detection.box.top,
                                        left: detection.box.left,
                                        width: detection.box.width,
                                        height: detection.box.height
                                    }}
                                >

                                    <span className="bounding-label">

                                        {detection.className}

                                        {" "}

                                        {detection.confidence}%

                                    </span>

                                </div>

                            ))}


                            <div className="viewer-corner top-left"></div>
                            <div className="viewer-corner top-right"></div>
                            <div className="viewer-corner bottom-left"></div>
                            <div className="viewer-corner bottom-right"></div>


                            <div className="viewer-overlay-info">

                                <span>
                                    FRAME 001
                                </span>

                                <span>
                                    1920 × 1080
                                </span>

                            </div>

                        </div>

                    </div>


                    {/* =====================================
                        SUMMARY
                    ===================================== */}

                    <div className="summary-panel">

                        <div className="panel-header">

                            <div>

                                <span>
                                    ANALYSIS SUMMARY
                                </span>

                                <h2>
                                    Detection Overview
                                </h2>

                            </div>

                        </div>


                        {/* Total Objects */}

                        <div className="total-detection">

                            <div className="summary-icon">
                                <Target size={21} />
                            </div>

                            <div>

                                <span>
                                    OBJECTS DETECTED
                                </span>

                                <strong>
                                    {detections.length}
                                </strong>

                            </div>

                        </div>


                        {/* Object Classes */}

                        <div className="class-list">

                            <div className="class-row">

                                <div className="class-name">

                                    <span className="class-icon person">
                                        <Users size={15} />
                                    </span>

                                    Person

                                </div>

                                <strong>
                                    {objectCounts.Person}
                                </strong>

                            </div>


                            <div className="class-row">

                                <div className="class-name">

                                    <span className="class-icon vehicle">
                                        <Car size={15} />
                                    </span>

                                    Vehicle

                                </div>

                                <strong>
                                    {objectCounts.Vehicle}
                                </strong>

                            </div>


                            <div className="class-row">

                                <div className="class-name">

                                    <span className="class-icon bicycle">
                                        <Bike size={15} />
                                    </span>

                                    Bicycle

                                </div>

                                <strong>
                                    {objectCounts.Bicycle}
                                </strong>

                            </div>

                        </div>


                        {/* Metrics */}

                        <div className="summary-metrics">

                            <div className="summary-metric">

                                <span>
                                    <Target size={14} />
                                    Avg. Confidence
                                </span>

                                <strong>
                                    {averageConfidence}%
                                </strong>

                            </div>


                            <div className="summary-metric">

                                <span>
                                    <Cpu size={14} />
                                    Model
                                </span>

                                <strong>
                                    YOLO11s
                                </strong>

                            </div>


                            <div className="summary-metric">

                                <span>
                                    <Clock3 size={14} />
                                    Status
                                </span>

                                <strong className="status-success">
                                    Complete
                                </strong>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =========================================
                    DETECTION LIST
                ========================================= */}

                <section className="detection-list-panel">

                    <div className="list-header">

                        <div>

                            <span>
                                DETECTED OBJECTS
                            </span>

                            <h2>
                                Detection Details
                            </h2>

                        </div>

                        <span className="object-count">
                            {detections.length} objects
                        </span>

                    </div>


                    <div className="detection-table">

                        <div className="table-header">

                            <span>
                                OBJECT
                            </span>

                            <span>
                                CONFIDENCE
                            </span>

                            <span>
                                DETECTION
                            </span>

                        </div>


                        {detections.map((detection) => (

                            <div
                                className="detection-row"
                                key={detection.id}
                            >

                                <div className="object-cell">

                                    <span
                                        className={`object-icon ${detection.type}`}
                                    >
                                        {getIcon(detection.type)}
                                    </span>

                                    <div>

                                        <strong>
                                            {detection.className}
                                        </strong>

                                        <span>
                                            Detection #{detection.id}
                                        </span>

                                    </div>

                                </div>


                                <div className="confidence-cell">

                                    <strong>
                                        {detection.confidence}%
                                    </strong>

                                    <div className="confidence-track">

                                        <div
                                            className="confidence-fill"
                                            style={{
                                                width:
                                                    `${detection.confidence}%`
                                            }}
                                        ></div>

                                    </div>

                                </div>


                                <span className="detected-badge">
                                    Detected
                                </span>

                            </div>

                        ))}

                    </div>

                </section>


                {/* =========================================
                    ACTIONS
                ========================================= */}

                <div className="result-actions">

                    <button
                        className="download-button"
                        onClick={handleDownload}
                    >
                        <Download size={18} />
                        Download Result
                    </button>


                    <Link
                        to="/analyze"
                        className="new-analysis-button"
                    >
                        <RotateCcw size={18} />
                        Analyze Another
                    </Link>

                </div>

            </section>

        </main>
    );
}


export default Results;