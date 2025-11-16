import { createContext, useContext, useState } from 'react';

const StatsContext = createContext();

export function StatsProvider({ children }) {
    const [summaryCount, setSummaryCount] = useState(0);
    const [phiCheckCount, setPhiCheckCount] = useState(0);

    const incrementSummaryCount = () => setSummaryCount((c) => c + 1);
    const incrementPhiCheckCount = () => setPhiCheckCount((c) => c + 1);

    const value = {
        summaryCount,
        phiCheckCount,
        incrementSummaryCount,
        incrementPhiCheckCount,
    };

    return <StatsContext.Provider value={value}>{children}</StatsContext.Provider>;
}

export function useStats() {
    return useContext(StatsContext);
}