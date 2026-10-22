import {
    Target,
    Crosshair,
    Activity,
    TrendingUp,
    Cpu,
    Image,
    Layers,
    Gauge
} from "lucide-react";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    BarChart,
    Bar
} from "recharts";

import "../styles/performance.css";


/*
 * =========================================
 * TEMPORARY DEMO DATA
 * =========================================
 *
 * These values will later be replaced by
 * the actual YOLO11s evaluation results.
 */


const trainingData = [
    {
        epoch: 1,
        precision: 48,
        recall: 39,
        map50: 42
    },
    {
        epoch: 10,
        precision: 63,
        recall: 55,
        map50: 59
    },
    {
        epoch: 20,
        precision: 72,
        recall: 67,
        map50: 69
    },
    {
        epoch: 30,
        precision: 79,
        recall: 74,
        map50: 76
    },
    {
        epoch: 40,
        precision: 84,
        recall: 79,
        map50: 81
    },
    {
        epoch: 50,
        precision: 87,
        recall: 82,
        map50: 84
    },
    {
        epoch: 60,
        precision: 89,
        recall: 85,
        map50: 87
    },
    {
        epoch: 70,
        precision: 91,
        recall: 87,
        map50: 89
    },
    {
        epoch: 80,
        precision: 92,
        recall: 89,
        map50: 91
    },
    {
        epoch: 90,
        precision: 92.4,
        recall: 89.7,
        map50: 91.2
    }
];


const classPerformance = [
    {
        name: "Person",
        precision: 94,
        recall: 91,
        map: 93
    },
    {
        name: "Vehicle",
        precision: 91,
        recall: 88,
        map: 90
    },
    {
        name: "Bicycle",
        precision: 87,
        recall: 84,
        map: 86
    }
];


function Performance() {

    return (
        <main className="performance-page">

            {/* =========================================
                HEADER
            ========================================= */}

            <section className="performance-header">

                <div>

                    <span className="page-eyebrow">
                        MODEL ANALYTICS
                    </span>

                    <h1>
                        Model Performance
                    </h1>

                    <p>
                        Evaluate the YOLO11s detection model using
                        standard object detection metrics.
                    </p>

                </div>


                <div className="model-badge">

                    <Cpu size={18} />

                    <div>

                        <strong>
                            YOLO11s
                        </strong>

                        <span>
                            Evaluation Model
                        </span>

                    </div>

                </div>

            </section>


            <section className="performance-container">

                {/* =========================================
                    MAIN METRICS
                ========================================= */}

                <div className="performance-metrics">

                    <MetricCard
                        icon={<Target size={20} />}
                        label="Precision"
                        value="92.4%"
                        description="Detection accuracy"
                        type="primary"
                    />

                    <MetricCard
                        icon={<Crosshair size={20} />}
                        label="Recall"
                        value="89.7%"
                        description="Object coverage"
                        type="success"
                    />

                    <MetricCard
                        icon={<TrendingUp size={20} />}
                        label="mAP@0.5"
                        value="91.2%"
                        description="Mean Average Precision"
                        type="warning"
                    />

                    <MetricCard
                        icon={<Gauge size={20} />}
                        label="mAP@0.5:0.95"
                        value="68.5%"
                        description="Strict IoU evaluation"
                        type="purple"
                    />

                </div>


                {/* =========================================
                    F1 SCORE + MODEL STATUS
                ========================================= */}

                <div className="secondary-metrics">

                    <div className="f1-card">

                        <div className="secondary-card-header">

                            <div>

                                <span>
                                    OVERALL SCORE
                                </span>

                                <h2>
                                    F1 Score
                                </h2>

                            </div>

                            <Activity size={19} />

                        </div>


                        <div className="f1-content">

                            <div className="f1-circle">

                                <div>

                                    <strong>
                                        91.0%
                                    </strong>

                                    <span>
                                        F1 Score
                                    </span>

                                </div>

                            </div>


                            <div className="f1-description">

                                <p>
                                    F1-score represents the balance
                                    between precision and recall.
                                </p>

                                <div className="f1-equation">

                                    <span>
                                        F1 = 2 ×
                                    </span>

                                    <strong>
                                        (Precision × Recall)
                                    </strong>

                                    <span>
                                        ÷ (Precision + Recall)
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>


                    <div className="evaluation-card">

                        <div className="secondary-card-header">

                            <div>

                                <span>
                                    EVALUATION STATUS
                                </span>

                                <h2>
                                    Model Ready
                                </h2>

                            </div>

                            <span className="ready-dot"></span>

                        </div>


                        <div className="evaluation-list">

                            <EvaluationItem
                                label="Training completed"
                                value="Yes"
                            />

                            <EvaluationItem
                                label="Validation completed"
                                value="Yes"
                            />

                            <EvaluationItem
                                label="Test evaluation"
                                value="Available"
                            />

                            <EvaluationItem
                                label="Model weights"
                                value="best.pt"
                            />

                        </div>

                    </div>

                </div>


                {/* =========================================
                    TRAINING GRAPH
                ========================================= */}

                <section className="performance-card">

                    <div className="performance-card-header">

                        <div>

                            <span>
                                TRAINING ANALYSIS
                            </span>

                            <h2>
                                Model Performance Across Epochs
                            </h2>

                        </div>

                        <div className="chart-legend-info">

                            <span>
                                <i className="legend precision"></i>
                                Precision
                            </span>

                            <span>
                                <i className="legend recall"></i>
                                Recall
                            </span>

                            <span>
                                <i className="legend map"></i>
                                mAP@0.5
                            </span>

                        </div>

                    </div>


                    <div className="performance-chart">

                        <ResponsiveContainer
                            width="100%"
                            height="100%"
                        >

                            <LineChart
                                data={trainingData}
                                margin={{
                                    top: 15,
                                    right: 15,
                                    left: -15,
                                    bottom: 5
                                }}
                            >

                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    vertical={false}
                                    stroke="#1e2a38"
                                />

                                <XAxis
                                    dataKey="epoch"
                                    tick={{
                                        fill: "#64748b",
                                        fontSize: 10
                                    }}
                                    axisLine={false}
                                    tickLine={false}
                                />

                                <YAxis
                                    domain={[0, 100]}
                                    tick={{
                                        fill: "#64748b",
                                        fontSize: 10
                                    }}
                                    axisLine={false}
                                    tickLine={false}
                                />

                                <Tooltip
                                    contentStyle={{
                                        background: "#121a24",
                                        border: "1px solid #1e2a38",
                                        borderRadius: "8px",
                                        color: "#f8fafc"
                                    }}
                                />

                                <Legend
                                    wrapperStyle={{
                                        display: "none"
                                    }}
                                />

                                <Line
                                    type="monotone"
                                    dataKey="precision"
                                    stroke="#38bdf8"
                                    strokeWidth={2}
                                    dot={false}
                                />

                                <Line
                                    type="monotone"
                                    dataKey="recall"
                                    stroke="#22c55e"
                                    strokeWidth={2}
                                    dot={false}
                                />

                                <Line
                                    type="monotone"
                                    dataKey="map50"
                                    stroke="#f59e0b"
                                    strokeWidth={2}
                                    dot={false}
                                />

                            </LineChart>

                        </ResponsiveContainer>

                    </div>

                </section>


                {/* =========================================
                    CLASS PERFORMANCE
                ========================================= */}

                <section className="performance-card">

                    <div className="performance-card-header">

                        <div>

                            <span>
                                CLASS ANALYSIS
                            </span>

                            <h2>
                                Class-wise Performance
                            </h2>

                        </div>

                    </div>


                    <div className="class-performance-chart">

                        <ResponsiveContainer
                            width="100%"
                            height="100%"
                        >

                            <BarChart
                                data={classPerformance}
                                margin={{
                                    top: 10,
                                    right: 15,
                                    left: -15,
                                    bottom: 5
                                }}
                            >

                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    vertical={false}
                                    stroke="#1e2a38"
                                />

                                <XAxis
                                    dataKey="name"
                                    tick={{
                                        fill: "#94a3b8",
                                        fontSize: 11
                                    }}
                                    axisLine={false}
                                    tickLine={false}
                                />

                                <YAxis
                                    domain={[0, 100]}
                                    tick={{
                                        fill: "#64748b",
                                        fontSize: 10
                                    }}
                                    axisLine={false}
                                    tickLine={false}
                                />

                                <Tooltip
                                    contentStyle={{
                                        background: "#121a24",
                                        border: "1px solid #1e2a38",
                                        borderRadius: "8px",
                                        color: "#f8fafc"
                                    }}
                                />

                                <Bar
                                    dataKey="precision"
                                    fill="#38bdf8"
                                    radius={[4, 4, 0, 0]}
                                />

                                <Bar
                                    dataKey="recall"
                                    fill="#22c55e"
                                    radius={[4, 4, 0, 0]}
                                />

                                <Bar
                                    dataKey="map"
                                    fill="#f59e0b"
                                    radius={[4, 4, 0, 0]}
                                />

                            </BarChart>

                        </ResponsiveContainer>

                    </div>

                </section>


                {/* =========================================
                    MODEL INFORMATION
                ========================================= */}

                <section className="model-information">

                    <div className="model-info-title">

                        <Layers size={20} />

                        <div>

                            <span>
                                MODEL CONFIGURATION
                            </span>

                            <h2>
                                YOLO11s
                            </h2>

                        </div>

                    </div>


                    <div className="model-info-grid">

                        <InfoItem
                            icon={<Cpu size={16} />}
                            label="Architecture"
                            value="YOLO11s"
                        />

                        <InfoItem
                            icon={<Image size={16} />}
                            label="Input Size"
                            value="640 × 640"
                        />

                        <InfoItem
                            icon={<Layers size={16} />}
                            label="Task"
                            value="Object Detection"
                        />

                        <InfoItem
                            icon={<Gauge size={16} />}
                            label="Evaluation"
                            value="mAP / Precision / Recall"
                        />

                    </div>

                </section>

            </section>

        </main>
    );
}


/* =========================================
   METRIC CARD
========================================= */

function MetricCard({
    icon,
    label,
    value,
    description,
    type
}) {

    return (
        <div className="metric-card">

            <div className={`metric-icon ${type}`}>
                {icon}
            </div>

            <span className="metric-label">
                {label}
            </span>

            <strong className="metric-value">
                {value}
            </strong>

            <span className="metric-description">
                {description}
            </span>

        </div>
    );
}


/* =========================================
   EVALUATION ITEM
========================================= */

function EvaluationItem({
    label,
    value
}) {

    return (
        <div className="evaluation-item">

            <span>
                {label}
            </span>

            <strong>
                {value}
            </strong>

        </div>
    );
}


/* =========================================
   INFORMATION ITEM
========================================= */

function InfoItem({
    icon,
    label,
    value
}) {

    return (
        <div className="info-item">

            <div className="info-item-icon">
                {icon}
            </div>

            <div>

                <span>
                    {label}
                </span>

                <strong>
                    {value}
                </strong>

            </div>

        </div>
    );
}


export default Performance;