from entities import Policy, Claim
from typing import List

def validate_policy(policy: Policy):
    if policy.coverage_amount <= 0:
        raise ValueError("Coverage amount must be positive")
    if policy.start_date >= policy.end_date:
        raise ValueError("Start date must be before end date")

def validate_claim(claim: Claim, policies: List[Policy]):
    policy = next((p for p in policies if p.policy_id == claim.policy_id), None)
    if not policy:
        raise ValueError("Policy not found")
    if claim.amount > policy.coverage_amount:
        raise ValueError("Claim amount exceeds policy coverage amount")
