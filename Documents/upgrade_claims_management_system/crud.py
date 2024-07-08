from typing import List, Optional
from datetime import date
from entities import Policyholder, Policy, Claim

class ClaimsManagementSystem:
    def __init__(self):
        self.policyholders: List[Policyholder] = []
        self.policies: List[Policy] = []
        self.claims: List[Claim] = []

    def create_policyholder(self, policyholder: Policyholder) -> Policyholder:
        self.policyholders.append(policyholder)
        return policyholder

    def get_policyholder(self, policyholder_id: int) -> Optional[Policyholder]:
        return next((ph for ph in self.policyholders if ph.policyholder_id == policyholder_id), None)

    def update_policyholder(self, policyholder_id: int, name: str, date_of_birth: date) -> Optional[Policyholder]:
        policyholder = self.get_policyholder(policyholder_id)
        if policyholder:
            policyholder.name = name
            policyholder.date_of_birth = date_of_birth
        return policyholder

    def delete_policyholder(self, policyholder_id: int) -> bool:
        policyholder = self.get_policyholder(policyholder_id)
        if policyholder:
            self.policyholders.remove(policyholder)
            return True
        return False
    
    def create_policy(self, policy: Policy) -> Policy:
        self.policies.append(policy)
        return policy
    def get_policy(self, policy_id: int) -> Optional[Policy]:
        return next((p for p in self.policies if p.policy_id == policy_id), None)

    def update_policy(self, policy_id: int, coverage_amount: float, start_date: date, end_date: date) -> Optional[Policy]:
        policy = self.get_policy(policy_id)
        if policy:
            policy.coverage_amount = coverage_amount
            policy.start_date = start_date
            policy.end_date = end_date
        return policy

    def delete_policy(self, policy_id: int) -> bool:
        policy = self.get_policy(policy_id)
        if policy:
            self.policies.remove(policy)
            return True
        return False
    
    def create_claim(self, claim: Claim) -> Claim:
        self.claims.append(claim)
        return claim

    def get_claim(self, claim_id: int) -> Optional[Claim]:
        return next((c for c in self.claims if c.claim_id == claim_id), None)

    def update_claim(self, claim_id: int, amount: float, date_of_claim: date) -> Optional[Claim]:
        claim = self.get_claim(claim_id)
        if claim:
            claim.amount = amount
            claim.date_of_claim = date_of_claim
        return claim

    def delete_claim(self, claim_id: int) -> bool:
        claim = self.get_claim(claim_id)
        if claim:
            self.claims.remove(claim)
            return True
        return False

    # Similar CRUD functions for Policy and Claim...
