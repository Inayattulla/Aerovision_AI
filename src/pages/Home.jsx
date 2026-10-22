import { Link } from "react-router-dom";
import {
    ArrowRight,
    Upload,
    ScanSearch,
    Video,
    Crosshair,
    BrainCircuit,
    BarChart3
} from "lucide-react";

import "../styles/home.css";

function Home() {
    return (
        <main className="home">

            {/* ================= HERO ================= */}
            <section className="hero">
                <div className="hero-container">

                    <div className="hero-content">

                        <div className="hero-badge">
                            <span className="status-dot"></span>
                            AI-Powered Aerial Surveillance
                        </div>

                        <h1 className="hero-title">
                            Intelligent Aerial
                            <span> Object Detection</span>
                        </h1>

                        <p className="hero-description">
                            Analyze aerial images and videos using intelligent
                            object detection to identify and localize objects
                            captured through drone surveillance.
                        </p>

                        <div className="hero-buttons">

                            <Link
                                to="/analyze"
                                className="primary-button"
                            >
                                Start Detection
                                <ArrowRight size={18} />
                            </Link>

                            <a
                                href="#how-it-works"
                                className="secondary-button"
                            >
                                How It Works
                            </a>

                        </div>

                        <div className="hero-features">
                            <span>
                                <ScanSearch size={17} />
                                Object Detection
                            </span>

                            <span>
                                <Video size={17} />
                                Image & Video Analysis
                            </span>

                            <span>
                                <Crosshair size={17} />
                                Object Localization
                            </span>
                        </div>

                    </div>


                    {/* HERO VISUAL */}
                    <div className="hero-visual">

                        <div className="visual-header">

                            <div className="visual-status">
                                <span className="live-dot"></span>
                                DETECTION PREVIEW
                            </div>

                            <span className="visual-model">
                                AI Vision
                            </span>

                        </div>

                        <div className="visual-screen">

                            <div className="grid-overlay"></div>

                            <Crosshair
                                className="center-crosshair"
                                size={80}
                            />

                            <div className="detection-box detection-one">
                                <span>OBJECT</span>
                            </div>

                            <div className="detection-box detection-two">
                                <span>OBJECT</span>
                            </div>

                            <div className="scan-line"></div>

                            <div className="screen-label">
                                AERIAL ANALYSIS
                            </div>

                        </div>

                        <div className="visual-footer">

                            <span>
                                STATUS
                                <strong> READY</strong>
                            </span>

                            <span>
                                INPUT
                                <strong> IMAGE / VIDEO</strong>
                            </span>

                        </div>

                    </div>

                </div>
            </section>


            {/* ================= CAPABILITIES ================= */}
            <section className="capabilities">

                <div className="section-container">

                    <div className="section-heading">

                        <span>CORE CAPABILITIES</span>

                        <h2>
                            Built for aerial object analysis
                        </h2>

                        <p>
                            A simple interface for processing drone imagery
                            and visualizing object detection results.
                        </p>

                    </div>


                    <div className="capability-grid">

                        <div className="capability-card">

                            <div className="capability-icon">
                                <Upload size={25} />
                            </div>

                            <h3>Image Detection</h3>

                            <p>
                                Upload aerial images and process them through
                                the trained object detection model.
                            </p>

                        </div>


                        <div className="capability-card">

                            <div className="capability-icon">
                                <Video size={25} />
                            </div>

                            <h3>Video Analysis</h3>

                            <p>
                                Process aerial video footage and visualize
                                detected objects across video frames.
                            </p>

                        </div>


                        <div className="capability-card">

                            <div className="capability-icon">
                                <Crosshair size={25} />
                            </div>

                            <h3>Object Localization</h3>

                            <p>
                                Display detected objects using bounding boxes,
                                labels and confidence information.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= WORKFLOW ================= */}
            <section
                className="workflow"
                id="how-it-works"
            >

                <div className="section-container">

                    <div className="section-heading">

                        <span>SYSTEM WORKFLOW</span>

                        <h2>
                            From aerial footage to detection
                        </h2>

                        <p>
                            The application provides a straightforward workflow
                            from uploading surveillance data to viewing the
                            detection results.
                        </p>

                    </div>


                    <div className="workflow-grid">

                        <WorkflowStep
                            number="01"
                            icon={<Upload size={23} />}
                            title="Upload"
                            description="Select an aerial image or video for analysis."
                        />

                        <WorkflowStep
                            number="02"
                            icon={<BrainCircuit size={23} />}
                            title="AI Processing"
                            description="The input is sent to the trained detection model."
                        />

                        <WorkflowStep
                            number="03"
                            icon={<ScanSearch size={23} />}
                            title="Detection"
                            description="Objects are identified and localized in the scene."
                        />

                        <WorkflowStep
                            number="04"
                            icon={<BarChart3 size={23} />}
                            title="Results"
                            description="Review detections and confidence information."
                        />

                    </div>

                </div>

            </section>


            {/* ================= CTA ================= */}
            <section className="home-cta">

                <div className="cta-content">

                    <span>START ANALYSIS</span>

                    <h2>
                        Analyze aerial footage with AeroVision AI
                    </h2>

                    <p>
                        Upload an image or video and begin the object
                        detection workflow.
                    </p>

                    <Link
                        to="/analyze"
                        className="primary-button"
                    >
                        Start Detection
                        <ArrowRight size={18} />
                    </Link>

                </div>

            </section>


            {/* ================= FOOTER ================= */}
            <footer className="footer">

                <div className="footer-container">

                    <div>
                        <strong>AeroVision AI</strong>
                        <p>
                            Intelligent Aerial Object Detection
                        </p>
                    </div>

                    <p className="footer-project">
                        Final Year Project
                    </p>

                </div>

            </footer>

        </main>
    );
}


function WorkflowStep({
    number,
    icon,
    title,
    description
}) {
    return (
        <div className="workflow-card">

            <span className="workflow-number">
                {number}
            </span>

            <div className="workflow-icon">
                {icon}
            </div>

            <h3>{title}</h3>

            <p>{description}</p>

        </div>
    );
}


export default Home;