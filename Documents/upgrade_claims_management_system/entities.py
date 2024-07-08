from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import date

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@localhost/claims_db'
db = SQLAlchemy(app)

class Policyholder(db.Model):
    __tablename__ = 'policyholders'
    policyholder_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    date_of_birth = db.Column(db.Date, nullable=False)

class Policy(db.Model):
    __tablename__ = 'policies'
    policy_id = db.Column(db.Integer, primary_key=True)
    policyholder_id = db.Column(db.Integer, db.ForeignKey('policyholders.policyholder_id'), nullable=False)
    coverage_amount = db.Column(db.Numeric, nullable=False)
    start_date = db.Column(db.Date, nullable=False)
    end_date = db.Column(db.Date, nullable=False)

class Claim(db.Model):
    __tablename__ = 'claims'
    claim_id = db.Column(db.Integer, primary_key=True)
    policy_id = db.Column(db.Integer, db.ForeignKey('policies.policy_id'), nullable=False)
    amount = db.Column(db.Numeric, nullable=False)
    date_of_claim = db.Column(db.Date, nullable=False)

db.create_all()