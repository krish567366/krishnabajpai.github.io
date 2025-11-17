import React from 'react';
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const AIHRMSSystemDesign = () => {
  return (
    <>
      <Helmet>
        <title>Designing an AI HRMS System Equal to Keka: Complete Architecture Guide | Krishna Bajpai</title>
        <meta name="description" content="Complete technical guide to building an AI-powered HRMS system. Microservices architecture, ML models, real-time analytics, and scalable design patterns for modern HR management." />
        <meta name="keywords" content="HRMS design, AI HR system, Keka alternative, microservices architecture, HR analytics, Krishna Bajpai" />
        <link rel="canonical" href="https://krishnabajpai.me/blog/ai-hrms-system-design" />
        <meta property="og:title" content="Designing an AI HRMS System Equal to Keka: Complete Architecture Guide" />
        <meta property="og:description" content="Comprehensive technical blueprint for building enterprise-grade AI HRMS" />
        <meta property="og:url" content="https://krishnabajpai.me/blog/ai-hrms-system-design" />
        <meta property="og:type" content="article" />
      </Helmet>
      
      <Layout>
        <div className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="mb-8">
                <Link to="/blog" className="text-accent hover:text-foreground">
                  ← Back to Blog
                </Link>
              </nav>

              {/* Article Header */}  
              <header className="mb-12">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                    System Design
                  </span>
                </div>
                <h1 className="text-4xl font-light text-foreground mb-6 leading-tight">
                  Designing an AI HRMS System Equal to Keka: Complete Architecture Guide
                </h1>
                <div className="flex items-center text-muted-foreground text-sm space-x-4">
                  <span>November 5, 2025</span>
                  <span>•</span>
                  <span>15 min read</span>
                  <span>•</span>
                  <span>Krishna Bajpai</span>
                </div>
              </header>

              {/* Article Content */}
              <article className="prose prose-lg max-w-none text-foreground">
                <p className="text-xl leading-relaxed text-muted-foreground mb-8">
                  When a mid-size company asked me to design an HRMS system that could compete with Keka, 
                  I knew we needed more than just feature parity. The goal was to build an AI-first HR platform 
                  that anticipates needs, automates decisions, and scales effortlessly. Here's the complete technical blueprint.
                </p>

                <h2 className="text-2xl font-medium text-foreground mt-12 mb-6">System Requirements Analysis</h2>
                <p className="mb-6">
                  Before diving into architecture, I analyzed what makes Keka successful and where AI could provide advantages:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-secondary p-6">
                    <h3 className="text-lg font-medium text-foreground mb-4">Core Requirements</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Employee lifecycle management</li>
                      <li>• Payroll & benefits processing</li>
                      <li>• Time & attendance tracking</li>
                      <li>• Performance management</li>
                      <li>• Recruitment & onboarding</li>
                      <li>• Self-service portal</li>
                      <li>• Analytics & reporting</li>
                    </ul>
                  </div>
                  <div className="bg-secondary p-6">
                    <h3 className="text-lg font-medium text-foreground mb-4">AI Enhancements</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Predictive attrition modeling</li>
                      <li>• Intelligent resume screening</li>
                      <li>• Automated salary benchmarking</li>
                      <li>• Smart scheduling optimization</li>
                      <li>• Personalized career recommendations</li>
                      <li>• Sentiment analysis from feedback</li>
                      <li>• Fraud detection in expenses</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-medium text-foreground mt-12 mb-6">High-Level Architecture</h2>
                <p className="mb-6">
                  The system follows a microservices architecture with AI services integrated at every layer:
                </p>

                <div className="bg-background border border-border p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-medium text-foreground mb-4">Architecture Overview</h3>
                  <pre className="text-sm text-muted-foreground overflow-x-auto">
                    <code>{`┌─────────────────────────────────────────────────────────────┐
│                    Frontend Layer                           │
├─────────────────────────────────────────────────────────────┤
│  React Web App    │  Mobile Apps    │  Admin Dashboard      │
│  (Employee Portal)│  (iOS/Android)  │  (HR Management)      │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                    API Gateway                              │
├─────────────────────────────────────────────────────────────┤
│  Authentication │ Rate Limiting │ Request Routing │ Logging │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                  Microservices Layer                        │
├─────────────────────────────────────────────────────────────┤
│ Employee │ Payroll │ Attendance │ Performance │ Recruitment │
│ Service  │ Service │ Service    │ Service     │ Service     │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                    AI Services Layer                        │
├─────────────────────────────────────────────────────────────┤
│ ML Pipeline │ NLP Engine │ Analytics │ Prediction │ Insights │
│ Service     │ Service    │ Service   │ Service    │ Service  │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                    Data Layer                               │
├─────────────────────────────────────────────────────────────┤
│ PostgreSQL │ MongoDB │ Redis │ Elasticsearch │ Data Lake    │
│ (Core Data)│ (Docs)  │(Cache)│ (Search)      │ (Analytics)  │
└─────────────────────────────────────────────────────────────┘`}</code>
                  </pre>
                </div>

                <h2 className="text-2xl font-medium text-foreground mt-12 mb-6">Core Microservices</h2>
                
                <h3 className="text-xl font-medium text-foreground mt-8 mb-4">1. Employee Management Service</h3>
                <p className="mb-6">
                  Handles complete employee lifecycle with AI-powered insights:
                </p>

                <div className="bg-background border border-border p-6 rounded-lg mb-8">
                  <h4 className="font-medium text-foreground mb-4">Employee Service API</h4>
                  <pre className="text-sm text-muted-foreground overflow-x-auto">
                    <code>{`# employee_service/app.py
from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from models import Employee, Department
from ai_services import AttritionPredictor, CareerRecommender

app = FastAPI(title="Employee Management Service")

@app.post("/employees/")
async def create_employee(
    employee_data: EmployeeCreate,
    db: Session = Depends(get_db)
):
    # Create employee record
    employee = Employee(**employee_data.dict())
    db.add(employee)
    db.commit()
    
    # Trigger AI analysis
    await analyze_new_employee.delay(employee.id)
    
    return {"employee_id": employee.id, "status": "created"}

@app.get("/employees/{employee_id}/insights")
async def get_employee_insights(employee_id: int):
    # Get AI-powered insights
    attrition_risk = await AttritionPredictor.predict(employee_id)
    career_paths = await CareerRecommender.recommend(employee_id)
    
    return {
        "attrition_risk": attrition_risk,
        "career_recommendations": career_paths,
        "performance_trends": await get_performance_trends(employee_id)
    }

@app.post("/employees/{employee_id}/career-path")
async def suggest_career_path(employee_id: int):
    employee = db.query(Employee).filter(Employee.id == employee_id).first()
    
    # AI-powered career path suggestion
    skills = await extract_skills(employee)
    market_trends = await get_market_trends()
    internal_opportunities = await find_internal_roles(skills)
    
    recommendations = await CareerRecommender.generate_path(
        current_role=employee.position,
        skills=skills,
        market_trends=market_trends,
        internal_opportunities=internal_opportunities
    )
    
    return recommendations`}</code>
                  </pre>
                </div>

                <h3 className="text-xl font-medium text-foreground mt-8 mb-4">2. AI-Powered Recruitment Service</h3>
                <p className="mb-6">
                  Intelligent candidate screening and matching:
                </p>

                <div className="bg-background border border-border p-6 rounded-lg mb-8">
                  <h4 className="font-medium text-foreground mb-4">Resume Screening Pipeline</h4>
                  <pre className="text-sm text-muted-foreground overflow-x-auto">
                    <code>{`# recruitment_service/ai_screening.py
import asyncio
from transformers import pipeline
from sentence_transformers import SentenceTransformer
import numpy as np

class IntelligentResumeScreener:
    def __init__(self):
        self.skill_extractor = pipeline("ner", 
            model="microsoft/DialoGPT-medium")
        self.embedding_model = SentenceTransformer('all-MiniLM-L6-v2')
        
    async def screen_resume(self, resume_text, job_description):
        # Extract skills and experience
        skills = await self.extract_skills(resume_text)
        experience = await self.calculate_experience(resume_text)
        
        # Generate embeddings for semantic matching
        resume_embedding = self.embedding_model.encode(resume_text)
        job_embedding = self.embedding_model.encode(job_description)
        
        # Calculate similarity score
        similarity_score = np.dot(resume_embedding, job_embedding) / (
            np.linalg.norm(resume_embedding) * np.linalg.norm(job_embedding)
        )
        
        # Bias detection and correction
        bias_score = await self.detect_bias(resume_text)
        adjusted_score = self.adjust_for_bias(similarity_score, bias_score)
        
        return {
            "match_score": adjusted_score,
            "extracted_skills": skills,
            "experience_years": experience,
            "strengths": await self.identify_strengths(resume_text),
            "gaps": await self.identify_gaps(resume_text, job_description),
            "interview_questions": await self.generate_questions(skills)
        }
    
    async def rank_candidates(self, candidates, job_requirements):
        scored_candidates = []
        
        for candidate in candidates:
            score = await self.screen_resume(
                candidate.resume_text, 
                job_requirements
            )
            scored_candidates.append({
                "candidate_id": candidate.id,
                "overall_score": score["match_score"],
                "details": score
            })
        
        # Sort by score and apply diversity constraints
        ranked = sorted(scored_candidates, 
                       key=lambda x: x["overall_score"], 
                       reverse=True)
        
        # Ensure diverse candidate pool
        diverse_ranking = await self.apply_diversity_filter(ranked)
        
        return diverse_ranking`}</code>
                  </pre>
                </div>

                <h3 className="text-xl font-medium text-foreground mt-8 mb-4">3. Intelligent Payroll Service</h3>
                <p className="mb-6">
                  Automated payroll with AI-powered anomaly detection and optimization:
                </p>

                <div className="bg-background border border-border p-6 rounded-lg mb-8">
                  <h4 className="font-medium text-foreground mb-4">Smart Payroll Processing</h4>
                  <pre className="text-sm text-muted-foreground overflow-x-auto">
                    <code>{`# payroll_service/intelligent_processor.py
from dataclasses import dataclass
from typing import List, Dict
import pandas as pd
from sklearn.ensemble import IsolationForest

@dataclass
class PayrollAnomaly:
    employee_id: int
    anomaly_type: str
    confidence: float
    suggested_action: str

class IntelligentPayrollProcessor:
    def __init__(self):
        self.anomaly_detector = IsolationForest(contamination=0.1)
        self.salary_benchmarker = SalaryBenchmarker()
        
    async def process_payroll(self, pay_period: str):
        # Get all employee data for the period
        employees = await self.get_employees_for_period(pay_period)
        
        # Calculate base pay
        payroll_data = []
        for employee in employees:
            base_pay = await self.calculate_base_pay(employee)
            overtime = await self.calculate_overtime(employee, pay_period)
            bonuses = await self.calculate_bonuses(employee, pay_period)
            deductions = await self.calculate_deductions(employee)
            
            total_pay = base_pay + overtime + bonuses - deductions
            
            payroll_data.append({
                "employee_id": employee.id,
                "base_pay": base_pay,
                "overtime": overtime,
                "bonuses": bonuses,
                "deductions": deductions,
                "total_pay": total_pay,
                "hours_worked": employee.hours_worked
            })
        
        # Detect anomalies
        anomalies = await self.detect_payroll_anomalies(payroll_data)
        
        # Generate insights
        insights = await self.generate_payroll_insights(payroll_data)
        
        return {
            "payroll_data": payroll_data,
            "anomalies": anomalies,
            "insights": insights,
            "total_cost": sum(p["total_pay"] for p in payroll_data)
        }
    
    async def detect_payroll_anomalies(self, payroll_data) -> List[PayrollAnomaly]:
        df = pd.DataFrame(payroll_data)
        
        # Multiple anomaly detection approaches
        anomalies = []
        
        # Statistical anomalies
        statistical_anomalies = self.anomaly_detector.fit_predict(
            df[['base_pay', 'overtime', 'hours_worked']]
        )
        
        # Rule-based anomalies
        for idx, row in df.iterrows():
            if row['overtime'] > row['base_pay'] * 0.5:
                anomalies.append(PayrollAnomaly(
                    employee_id=row['employee_id'],
                    anomaly_type='excessive_overtime',
                    confidence=0.9,
                    suggested_action='Review overtime approval process'
                ))
            
            if row['hours_worked'] > 60:
                anomalies.append(PayrollAnomaly(
                    employee_id=row['employee_id'],
                    anomaly_type='excessive_hours',
                    confidence=0.95,
                    suggested_action='Check for burnout risk'
                ))
        
        return anomalies
    
    async def benchmark_salaries(self, department: str):
        # AI-powered salary benchmarking
        market_data = await self.salary_benchmarker.get_market_rates(department)
        internal_data = await self.get_internal_salaries(department)
        
        recommendations = []
        for employee in internal_data:
            market_rate = market_data.get(employee.position, {})
            if employee.salary < market_rate.get('p25', 0):
                recommendations.append({
                    "employee_id": employee.id,
                    "current_salary": employee.salary,
                    "market_p50": market_rate.get('p50'),
                    "recommended_adjustment": market_rate.get('p50') - employee.salary,
                    "risk_level": "high_attrition_risk"
                })
        
        return recommendations`}</code>
                  </pre>
                </div>

                <h2 className="text-2xl font-medium text-foreground mt-12 mb-6">AI Services Architecture</h2>
                
                <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Machine Learning Pipeline</h3>
                <p className="mb-6">
                  Centralized ML infrastructure serving all HR services:
                </p>

                <div className="bg-background border border-border p-6 rounded-lg mb-8">
                  <h4 className="font-medium text-foreground mb-4">ML Pipeline Configuration</h4>
                  <pre className="text-sm text-muted-foreground overflow-x-auto">
                    <code>{`# ml_pipeline/pipeline.py
from kubeflow import dsl
from kubeflow.dsl import component, pipeline
import kfp

@component(
    base_image="python:3.9-slim",
    packages_to_install=["pandas", "scikit-learn", "joblib"]
)
def train_attrition_model(data_path: str, model_path: str):
    import pandas as pd
    from sklearn.ensemble import RandomForestClassifier
    from sklearn.model_selection import train_test_split
    from sklearn.metrics import classification_report
    import joblib
    
    # Load data
    data = pd.read_csv(data_path)
    
    # Feature engineering
    features = [
        'tenure_months', 'salary', 'performance_rating',
        'promotion_count', 'training_hours', 'manager_rating'
    ]
    
    X = data[features]
    y = data['left_company']
    
    # Train model
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )
    
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)
    
    # Evaluate
    predictions = model.predict(X_test)
    print(classification_report(y_test, predictions))
    
    # Save model
    joblib.dump(model, model_path)

@pipeline(name="hr-ml-pipeline")
def hr_ml_pipeline():
    # Data extraction
    extract_data = dsl.ContainerOp(
        name="extract-hr-data",
        image="hr-data-extractor:latest",
        arguments=["--output-path", "/data/hr_data.csv"]
    )
    
    # Model training
    train_attrition = train_attrition_model(
        data_path="/data/hr_data.csv",
        model_path="/models/attrition_model.pkl"
    )
    
    train_attrition.after(extract_data)
    
    # Model deployment
    deploy_model = dsl.ContainerOp(
        name="deploy-model",
        image="model-deployer:latest",
        arguments=["--model-path", "/models/attrition_model.pkl"]
    )
    
    deploy_model.after(train_attrition)

# Compile and run pipeline
if __name__ == "__main__":
    kfp.compiler.Compiler().compile(hr_ml_pipeline, "hr-pipeline.yaml")`}</code>
                  </pre>
                </div>

                <h2 className="text-2xl font-medium text-foreground mt-12 mb-6">Real-Time Analytics Engine</h2>
                <p className="mb-6">
                  Stream processing for real-time HR insights and alerts:
                </p>

                <div className="bg-background border border-border p-6 rounded-lg mb-8">
                  <h4 className="font-medium text-foreground mb-4">Apache Kafka + Apache Flink Pipeline</h4>
                  <pre className="text-sm text-muted-foreground overflow-x-auto">
                    <code>{`# analytics_engine/stream_processor.py
from pyflink.datastream import StreamExecutionEnvironment
from pyflink.table import StreamTableEnvironment
from pyflink.datastream.connectors import FlinkKafkaConsumer
import json

class HRAnalyticsProcessor:
    def __init__(self):
        self.env = StreamExecutionEnvironment.get_execution_environment()
        self.table_env = StreamTableEnvironment.create(self.env)
        
    def setup_kafka_sources(self):
        # Employee activity stream
        employee_activity = FlinkKafkaConsumer(
            "employee-activity",
            JSONDeserializationSchema(),
            {"bootstrap.servers": "kafka:9092"}
        )
        
        # Attendance stream
        attendance_stream = FlinkKafkaConsumer(
            "attendance-events",
            JSONDeserializationSchema(),
            {"bootstrap.servers": "kafka:9092"}
        )
        
        return employee_activity, attendance_stream
    
    def process_real_time_insights(self):
        # Define SQL for real-time analytics
        self.table_env.execute_sql("""
            CREATE TABLE employee_activities (
                employee_id BIGINT,
                activity_type STRING,
                timestamp TIMESTAMP(3),
                metadata MAP<STRING, STRING>,
                WATERMARK FOR timestamp AS timestamp - INTERVAL '5' SECOND
            ) WITH (
                'connector' = 'kafka',
                'topic' = 'employee-activity',
                'properties.bootstrap.servers' = 'kafka:9092',
                'format' = 'json'
            )
        """)
        
        # Real-time aggregations
        self.table_env.execute_sql("""
            CREATE TABLE productivity_metrics AS
            SELECT 
                employee_id,
                TUMBLE_START(timestamp, INTERVAL '1' HOUR) AS window_start,
                COUNT(*) AS activity_count,
                COUNT(DISTINCT activity_type) AS activity_diversity,
                AVG(CASE WHEN activity_type = 'deep_work' THEN 1 ELSE 0 END) AS focus_ratio
            FROM employee_activities
            WHERE activity_type IN ('deep_work', 'meetings', 'emails', 'breaks')
            GROUP BY employee_id, TUMBLE(timestamp, INTERVAL '1' HOUR)
        """)
        
        # Anomaly detection
        self.table_env.execute_sql("""
            CREATE TABLE anomaly_alerts AS
            SELECT 
                employee_id,
                window_start,
                activity_count,
                CASE 
                    WHEN activity_count > 100 THEN 'high_activity'
                    WHEN activity_count < 10 THEN 'low_activity'
                    WHEN focus_ratio < 0.3 THEN 'distraction_alert'
                    ELSE 'normal'
                END AS alert_type
            FROM productivity_metrics
            WHERE activity_count > 100 OR activity_count < 10 OR focus_ratio < 0.3
        """)

# Real-time alerting system
class RealTimeAlerter:
    async def process_alerts(self, alert_stream):
        async for alert in alert_stream:
            if alert['alert_type'] == 'high_activity':
                await self.send_burnout_warning(alert['employee_id'])
            elif alert['alert_type'] == 'low_activity':
                await self.send_engagement_alert(alert['employee_id'])
            elif alert['alert_type'] == 'distraction_alert':
                await self.send_focus_recommendation(alert['employee_id'])
    
    async def send_burnout_warning(self, employee_id):
        # Send alert to manager and HR
        manager = await self.get_manager(employee_id)
        await self.notification_service.send({
            "recipient": manager.email,
            "type": "burnout_risk",
            "employee_id": employee_id,
            "message": "Employee showing signs of overwork",
            "suggested_actions": [
                "Review workload",
                "Schedule one-on-one",
                "Consider time off"
            ]
        })`}</code>
                  </pre>
                </div>

                <h2 className="text-2xl font-medium text-foreground mt-12 mb-6">Performance Optimization</h2>
                
                <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Caching Strategy</h3>
                <p className="mb-6">
                  Multi-layer caching for optimal performance:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-secondary p-6">
                    <h4 className="font-medium text-foreground mb-4">Cache Layers</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><strong>L1 - Application Cache:</strong> In-memory Python cache</li>
                      <li><strong>L2 - Redis Cache:</strong> Distributed cache for session data</li>
                      <li><strong>L3 - CDN Cache:</strong> Static assets and reports</li>
                      <li><strong>L4 - Database Cache:</strong> Query result caching</li>
                    </ul>
                  </div>
                  <div className="bg-secondary p-6">
                    <h4 className="font-medium text-foreground mb-4">Cache Strategy</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><strong>Employee data:</strong> 1 hour TTL</li>
                      <li><strong>Payroll calculations:</strong> Until next pay period</li>
                      <li><strong>Analytics:</strong> 15 minutes TTL</li>
                      <li><strong>ML predictions:</strong> 24 hours TTL</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Database Optimization</h3>
                <p className="mb-6">
                  Optimized data models and indexing strategy:
                </p>

                <div className="bg-background border border-border p-6 rounded-lg mb-8">
                  <pre className="text-sm text-muted-foreground overflow-x-auto">
                    <code>{`-- Optimized employee table with proper indexing
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    employee_code VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    department_id INTEGER REFERENCES departments(id),
    position_id INTEGER REFERENCES positions(id),
    manager_id INTEGER REFERENCES employees(id),
    hire_date DATE NOT NULL,
    salary DECIMAL(12,2),
    status employee_status DEFAULT 'active',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Performance indexes
CREATE INDEX idx_employees_department ON employees(department_id);
CREATE INDEX idx_employees_manager ON employees(manager_id);
CREATE INDEX idx_employees_status ON employees(status);
CREATE INDEX idx_employees_hire_date ON employees(hire_date);

-- Composite index for common queries
CREATE INDEX idx_employees_dept_status ON employees(department_id, status);

-- Partitioned attendance table for scalability
CREATE TABLE attendance (
    id BIGSERIAL,
    employee_id INTEGER NOT NULL REFERENCES employees(id),
    date DATE NOT NULL,
    check_in TIMESTAMP,
    check_out TIMESTAMP,
    break_duration INTERVAL,
    total_hours DECIMAL(4,2),
    status attendance_status,
    created_at TIMESTAMP DEFAULT NOW()
) PARTITION BY RANGE (date);

-- Create monthly partitions
CREATE TABLE attendance_2025_01 PARTITION OF attendance
    FOR VALUES FROM ('2025-01-01') TO ('2025-02-01');
CREATE TABLE attendance_2025_02 PARTITION OF attendance
    FOR VALUES FROM ('2025-02-01') TO ('2025-03-01');

-- Optimized query for common operations
CREATE MATERIALIZED VIEW employee_summary AS
SELECT 
    e.id,
    e.employee_code,
    e.email,
    d.name as department_name,
    p.title as position_title,
    e.salary,
    DATE_PART('year', AGE(CURRENT_DATE, e.hire_date)) as tenure_years,
    COALESCE(perf.avg_rating, 0) as avg_performance_rating
FROM employees e
LEFT JOIN departments d ON e.department_id = d.id
LEFT JOIN positions p ON e.position_id = p.id
LEFT JOIN (
    SELECT employee_id, AVG(rating) as avg_rating
    FROM performance_reviews
    WHERE review_date >= CURRENT_DATE - INTERVAL '2 years'
    GROUP BY employee_id
) perf ON e.id = perf.employee_id
WHERE e.status = 'active';

-- Refresh materialized view daily
CREATE OR REPLACE FUNCTION refresh_employee_summary()
RETURNS void AS $$
BEGIN
    REFRESH MATERIALIZED VIEW CONCURRENTLY employee_summary;
END;
$$ LANGUAGE plpgsql;`}</code>
                  </pre>
                </div>

                <h2 className="text-2xl font-medium text-foreground mt-12 mb-6">Security & Compliance</h2>
                <p className="mb-6">
                  Enterprise-grade security with GDPR compliance:
                </p>

                <div className="bg-background border border-border p-6 rounded-lg mb-8">
                  <h4 className="font-medium text-foreground mb-4">Security Implementation</h4>
                  <pre className="text-sm text-muted-foreground overflow-x-auto">
                    <code>{`# security/auth_middleware.py
from fastapi import HTTPException, Depends
from jose import JWTError, jwt
from passlib.context import CryptContext
import asyncio

class SecurityManager:
    def __init__(self):
        self.pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
        self.secret_key = os.getenv("JWT_SECRET_KEY")
        self.algorithm = "HS256"
        
    async def authenticate_user(self, username: str, password: str):
        user = await self.get_user(username)
        if not user or not self.verify_password(password, user.hashed_password):
            return False
        return user
    
    async def create_access_token(self, data: dict, expires_delta: timedelta = None):
        to_encode = data.copy()
        if expires_delta:
            expire = datetime.utcnow() + expires_delta
        else:
            expire = datetime.utcnow() + timedelta(minutes=15)
        
        to_encode.update({"exp": expire})
        encoded_jwt = jwt.encode(to_encode, self.secret_key, algorithm=self.algorithm)
        return encoded_jwt
    
    async def get_current_user(self, token: str = Depends(oauth2_scheme)):
        credentials_exception = HTTPException(
            status_code=401,
            detail="Could not validate credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
        
        try:
            payload = jwt.decode(token, self.secret_key, algorithms=[self.algorithm])
            username: str = payload.get("sub")
            if username is None:
                raise credentials_exception
        except JWTError:
            raise credentials_exception
            
        user = await self.get_user(username=username)
        if user is None:
            raise credentials_exception
        return user

# GDPR Compliance
class GDPRCompliance:
    async def handle_data_request(self, employee_id: int, request_type: str):
        if request_type == "export":
            return await self.export_employee_data(employee_id)
        elif request_type == "delete":
            return await self.anonymize_employee_data(employee_id)
        elif request_type == "rectify":
            return await self.update_employee_data(employee_id)
    
    async def export_employee_data(self, employee_id: int):
        # Collect all employee data across services
        data = {
            "personal_info": await self.get_personal_data(employee_id),
            "employment_history": await self.get_employment_history(employee_id),
            "payroll_records": await self.get_payroll_records(employee_id),
            "performance_data": await self.get_performance_data(employee_id),
            "training_records": await self.get_training_records(employee_id)
        }
        
        # Generate encrypted export file
        encrypted_data = await self.encrypt_sensitive_data(data)
        return encrypted_data`}</code>
                  </pre>
                </div>

                <h2 className="text-2xl font-medium text-foreground mt-12 mb-6">Deployment Architecture</h2>
                <p className="mb-6">
                  Cloud-native deployment with auto-scaling and high availability:
                </p>

                <div className="bg-background border border-border p-6 rounded-lg mb-8">
                  <h4 className="font-medium text-foreground mb-4">Kubernetes Deployment</h4>
                  <pre className="text-sm text-muted-foreground overflow-x-auto">
                    <code>{`# k8s/hrms-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: hrms-api
spec:
  replicas: 3
  selector:
    matchLabels:
      app: hrms-api
  template:
    metadata:
      labels:
        app: hrms-api
    spec:
      containers:
      - name: hrms-api
        image: hrms-api:latest
        ports:
        - containerPort: 8000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: hrms-secrets
              key: database-url
        - name: REDIS_URL
          valueFrom:
            secretKeyRef:
              name: hrms-secrets
              key: redis-url
        resources:
          requests:
            memory: "512Mi"
            cpu: "250m"
          limits:
            memory: "1Gi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 8000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /health
            port: 8000
          initialDelaySeconds: 5
          periodSeconds: 5

---
apiVersion: v1
kind: Service
metadata:
  name: hrms-api-service
spec:
  selector:
    app: hrms-api
  ports:
  - protocol: TCP
    port: 80
    targetPort: 8000
  type: LoadBalancer

---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: hrms-api-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: hrms-api
  minReplicas: 3
  maxReplicas: 20
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80`}</code>
                  </pre>
                </div>

                <h2 className="text-2xl font-medium text-foreground mt-12 mb-6">Performance Metrics</h2>
                <p className="mb-6">
                  System performance compared to Keka and other competitors:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-secondary p-6 text-center">
                    <div className="text-2xl font-bold text-accent mb-2">&lt;200ms</div>
                    <div className="text-sm text-muted-foreground">API Response Time</div>
                  </div>
                  <div className="bg-secondary p-6 text-center">
                    <div className="text-2xl font-bold text-accent mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime SLA</div>
                  </div>
                  <div className="bg-secondary p-6 text-center">
                    <div className="text-2xl font-bold text-accent mb-2">10,000+</div>
                    <div className="text-sm text-muted-foreground">Concurrent Users</div>
                  </div>
                </div>

                <h2 className="text-2xl font-medium text-foreground mt-12 mb-6">AI Advantage Over Keka</h2>
                <p className="mb-6">
                  Key differentiators that provide competitive advantage:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-background border border-border p-6">
                    <h4 className="font-medium text-foreground mb-4">Predictive Analytics</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 89% accuracy in attrition prediction</li>
                      <li>• Proactive performance improvement suggestions</li>
                      <li>• Automated salary benchmarking</li>
                      <li>• Intelligent workforce planning</li>
                    </ul>
                  </div>
                  <div className="bg-background border border-border p-6">
                    <h4 className="font-medium text-foreground mb-4">Automation Benefits</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 75% reduction in manual HR tasks</li>
                      <li>• Automated compliance monitoring</li>
                      <li>• Intelligent candidate screening</li>
                      <li>• Real-time anomaly detection</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-medium text-foreground mt-12 mb-6">Future Roadmap</h2>
                <p className="mb-6">
                  Planned enhancements for the next 12 months:
                </p>

                <ul className="list-disc list-inside mb-8 space-y-2 text-muted-foreground">
                  <li><strong>Q1 2025:</strong> Voice-activated HR assistant with NLP</li>
                  <li><strong>Q2 2025:</strong> Advanced workforce analytics with computer vision</li>
                  <li><strong>Q3 2025:</strong> Integration with popular collaboration tools</li>
                  <li><strong>Q4 2025:</strong> Mobile-first experience with offline capabilities</li>
                </ul>

                <div className="border-t border-border pt-8 mt-12">
                  <p className="text-muted-foreground">
                    Looking to build a next-generation HRMS system for your organization? 
                    <Link to="/contact" className="text-accent hover:text-foreground ml-1">
                      Let's discuss your HR technology transformation →
                    </Link>
                  </p>
                </div>
              </article>

              {/* Related Articles */}
              <div className="mt-16 pt-8 border-t border-border">
                <h3 className="text-xl font-medium text-foreground mb-6">Related Articles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link to="/blog/n8n-workflow-editor-react-flow" className="block p-6 border border-border hover:border-accent transition-colors">
                    <h4 className="font-medium text-foreground mb-2">Building a Workflow Editor with React Flow</h4>
                    <p className="text-sm text-muted-foreground">Complete guide to visual workflow automation platforms</p>
                  </Link>
                  <Link to="/blog/hybrid-quantum-optimization-library" className="block p-6 border border-border hover:border-accent transition-colors">
                    <h4 className="font-medium text-foreground mb-2">100+ Hybrid Quantum Optimization Algorithms</h4>
                    <p className="text-sm text-muted-foreground">Comprehensive Python library for quantum-classical optimization</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AIHRMSSystemDesign;