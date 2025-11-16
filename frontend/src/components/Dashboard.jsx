import SummarizerCard from './cards/SummarizerCard';
import SymptomAdvisorCard from './cards/SymptomAdvisorCard';
import ResearchAssistantCard from './cards/ResearchAssistantCard';
import PrivacyCheckerCard from './cards/PrivacyCheckerCard';
import DrugInteractionCard from './cards/DrugInteractionCard';

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <div className="xl:col-span-2">
        <SymptomAdvisorCard />
      </div>
      <SummarizerCard />
      <ResearchAssistantCard />
      <PrivacyCheckerCard />
      <DrugInteractionCard />
    </div>
  );
}