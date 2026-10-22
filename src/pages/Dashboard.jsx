import {
    Target,
    Gauge,
    Files,
    Cpu,
    Users,
    Car,
    Bike,
    CheckCircle2,
    Clock3,
    ArrowUpRight,
    Activity
} from "lucide-react";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

import "../styles/dashboard.css";


/*
 * TEMPORARY DEMO DATA
 *
 * These values will later come from the backend.
 */

const detectionData = [
    {
        name: "Mon",
        detections: 18
    },
    {
        name: "Tue",
        detections: 27
    },
    {
        name: "Wed",
        detections: 22
    },
    {
        name: "Thu",
        detections: 35
    },
    {
        name: "Fri",
        detections: 29
    },
    {
        name: "Sat",
        detections: 41
    },
    {
        name: "Sun",
        detections: 31
    }
];


const classData = [
    {
        name: "Person",
        count: 62,
        percentage: 78,
        icon: <Users size={17} />,
        type: "person"
    },
    {
        name: "Vehicle",
        count: 41,
        percentage: 53,
        icon: <Car size={17} />,
        type: "vehicle"
    },
    {
        name: "Bicycle",
        count: 23,
        percentage: 31,
        icon: <Bike size={17} />,
        type: "bicycle"
    }
];


const recentAnalyses = [
    {
        id: 1,
        name: "drone_scene_01.jpg",
        type: "Image",
        objects: 12,
        confidence: "94%",
        time: "2 min ago"
    },
    {
        id: 2,
        name: "aerial_survey.mp4",
        type: "Video",
        objects: 48,
        confidence: "91%",
        time: "18 min ago"
    },
    {
        id: 3,
        name: "road_monitoring.jpg",
        type: "Image",
        objects: 9,
        confidence: "93%",
        time: "1 hour ago"
    },
    {
        id: 4,
        name: "campus_aerial.mp4",
        type: "Video",
        objects: 27,
        confidence: "89%",
        time: "2 hours ago"
    }
];


function Dashboard() {

    return (
        <main className="dashboard-page">

            {/* =========================================
                HEADER
            ========================================= */}

            <section className="dashboard-header">

                <div>

                    <span className="page-eyebrow">
                        SYSTEM OVERVIEW
                    </span>

                    <h1>
                        Detection Dashboard
                    </h1>

                    <p>
                        Monitor aerial object detection activity,
                        model performance and recent analyses.
                    </p>

                </div>


                <div className="system-status">

                    <span className="system-status-dot"></span>

                    <div>

                        <strong>
                            System Ready
                        </strong>

                        <span>
                            YOLO11s detection engine
                        </span>

                    </div>

                </div>

            </section>


            <section className="dashboard-container">

                {/* =========================================
                    STAT CARDS
                ========================================= */}

                <div className="dashboard-stats">

                    <StatCard
                        icon={<Target size={20} />}
                        label="Total Detections"
                        value="126"
                        change="+12.5%"
                        type="primary"
                    />

                    <StatCard
                        icon={<Gauge size={20} />}
                        label="Avg. Confidence"
                        value="91.4%"
                        change="+2.1%"
                        type="success"
                    />

                    <StatCard
                        icon={<Files size={20} />}
                        label="Files Analyzed"
                        value="24"
                        change="+4 this week"
                        type="warning"
                    />

                    <StatCard
                        icon={<Cpu size={20} />}
                        label="Detection Model"
                        value="YOLO11s"
                        change="Ready"
                        type="model"
                    />

                </div>


                {/* =========================================
                    ANALYTICS
                ========================================= */}

                <div className="dashboard-grid">

                    {/* Detection chart */}

                    <section className="dashboard-card chart-card">

                        <div className="card-heading">

                            <div>

                                <span>
                                    ACTIVITY
                                </span>

                                <h2>
                                    Detection Activity
                                </h2>

                            </div>

                            <div className="heading-icon">
                                <Activity size={18} />
                            </div>

                        </div>


                        <div className="chart-container">

                            <ResponsiveContainer
                                width="100%"
                                height="100%"
                            >

                                <BarChart
                                    data={detectionData}
                                    margin={{
                                        top: 10,
                                        right: 10,
                                        left: -20,
                                        bottom: 0
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
                                            fill: "#64748b",
                                            fontSize: 11
                                        }}
                                        axisLine={false}
                                        tickLine={false}
                                    />

                                    <YAxis
                                        tick={{
                                            fill: "#64748b",
                                            fontSize: 11
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
                                        cursor={{
                                            fill: "rgba(56, 189, 248, 0.04)"
                                        }}
                                    />

                                    <Bar
                                        dataKey="detections"
                                        fill="#38bdf8"
                                        radius={[
                                            4,
                                            4,
                                            0,
                                            0
                                        ]}
                                    />

                                </BarChart>

                            </ResponsiveContainer>

                        </div>

                    </section>


                    {/* Class distribution */}

                    <section className="dashboard-card class-card">

                        <div className="card-heading">

                            <div>

                                <span>
                                    OBJECT CLASSES
                                </span>

                                <h2>
                                    Detected Objects
                                </h2>

                            </div>

                        </div>


                        <div className="class-distribution">

                            {classData.map((item) => (

                                <div
                                    className="class-stat"
                                    key={item.name}
                                >

                                    <div className="class-stat-header">

                                        <div className="class-stat-name">

                                            <span
                                                className={`dashboard-class-icon ${item.type}`}
                                            >
                                                {item.icon}
                                            </span>

                                            <strong>
                                                {item.name}
                                            </strong>

                                        </div>

                                        <span>
                                            {item.count}
                                        </span>

                                    </div>


                                    <div className="class-progress">

                                        <div
                                            className={`class-progress-fill ${item.type}`}
                                            style={{
                                                width:
                                                    `${item.percentage}%`
                                            }}
                                        ></div>

                                    </div>

                                </div>

                            ))}

                        </div>


                        <div className="class-total">

                            <span>
                                Total detected objects
                            </span>

                            <strong>
                                126
                            </strong>

                        </div>

                    </section>

                </div>


                {/* =========================================
                    MODEL INFORMATION
                ========================================= */}

                <section className="model-overview">

                    <div className="model-info-main">

                        <div className="model-icon">
                            <Cpu size={23} />
                        </div>

                        <div>

                            <span>
                                ACTIVE DETECTION MODEL
                            </span>

                            <h2>
                                YOLO11s
                            </h2>

                            <p>
                                YOLO-based object detection model
                                configured for aerial imagery analysis.
                            </p>

                        </div>

                    </div>


                    <div className="model-info-items">

                        <div>

                            <span>
                                STATUS
                            </span>

                            <strong className="model-ready">
                                ● Ready
                            </strong>

                        </div>

                        <div>

                            <span>
                                INPUT
                            </span>

                            <strong>
                                Image / Video
                            </strong>

                        </div>

                        <div>

                            <span>
                                ENGINE
                            </span>

                            <strong>
                                YOLO
                            </strong>

                        </div>

                    </div>

                </section>


                {/* =========================================
                    RECENT ANALYSES
                ========================================= */}

                <section className="dashboard-card recent-card">

                    <div className="card-heading">

                        <div>

                            <span>
                                ACTIVITY LOG
                            </span>

                            <h2>
                                Recent Analyses
                            </h2>

                        </div>

                        <button className="view-all-button">
                            View All
                            <ArrowUpRight size={14} />
                        </button>

                    </div>


                    <div className="recent-table">

                        <div className="recent-table-header">

                            <span>
                                FILE
                            </span>

                            <span>
                                TYPE
                            </span>

                            <span>
                                OBJECTS
                            </span>

                            <span>
                                CONFIDENCE
                            </span>

                            <span>
                                STATUS
                            </span>

                            <span>
                                TIME
                            </span>

                        </div>


                        {recentAnalyses.map((analysis) => (

                            <div
                                className="recent-row"
                                key={analysis.id}
                            >

                                <strong>
                                    {analysis.name}
                                </strong>

                                <span className="analysis-type">
                                    {analysis.type}
                                </span>

                                <span>
                                    {analysis.objects}
                                </span>

                                <span>
                                    {analysis.confidence}
                                </span>

                                <span className="complete-status">

                                    <CheckCircle2 size={14} />

                                    Complete

                                </span>

                                <span className="analysis-time">

                                    <Clock3 size={13} />

                                    {analysis.time}

                                </span>

                            </div>

                        ))}

                    </div>

                </section>

            </section>

        </main>
    );
}


/* =========================================
   STAT CARD COMPONENT
========================================= */

function StatCard({
    icon,
    label,
    value,
    change,
    type
}) {

    return (
        <div className="stat-card">

            <div className={`stat-icon ${type}`}>
                {icon}
            </div>

            <div className="stat-content">

                <span>
                    {label}
                </span>

                <strong>
                    {value}
                </strong>

                <small className={type}>
                    {change}
                </small>

            </div>

        </div>
    );
}


export default Dashboard;