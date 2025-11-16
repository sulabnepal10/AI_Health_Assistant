import requests

def check_drug_interaction(drug1, drug2):
    url = "https://api.fda.gov/drug/label.json"
    query = f"{drug1}+AND+{drug2}"
    params = {"search": f"openfda.brand_name:{query}", "limit": 1}
    res = requests.get(url, params=params).json()
    if "results" in res:
        label = res["results"][0]
        interactions = label.get("drug_interactions", ["No interaction data found."])
        return interactions[0][:500]
    return "No interaction data found."