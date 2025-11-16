from app.tools.openfda import check_drug_interaction

def drug_interaction_agent(drug1: str, drug2: str):
    result = check_drug_interaction(drug1, drug2)
    return result