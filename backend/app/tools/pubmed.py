import requests
from bs4 import BeautifulSoup

def search_pubmed(query, max_results=3):
    url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi"
    params = {
        "db": "pubmed",
        "term": query,
        "retmax": max_results,
        "retmode": "json",
        "email": "your-email@example.com"
    }
    res = requests.get(url, params=params).json()
    pmids = res["esearchresult"]["idlist"]

    papers = []
    for pmid in pmids:
        summary_url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id={pmid}&retmode=json"
        data = requests.get(summary_url).json()
        result = data["result"][pmid]
        papers.append({
            "title": result["title"],
            "authors": ", ".join([a["name"] for a in result["authors"][:3]]),
            "pubdate": result["pubdate"],
            "pmid": pmid
        })
    return papers