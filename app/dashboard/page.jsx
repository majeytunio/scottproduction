'use client'

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { supabase } from "../../lib/supabase";
import DashboardContent from "../components/DashboardContent";

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const initAuth = async () => {
      try {
        // Dynamically import supabase client to avoid server/client mismatch

        // Get current session
        const { data } = await supabase.auth.getSession();
        const session = data?.session;

        if (session?.user) {
          // Use setTimeout to defer navigation
          setTimeout(() => {
            setIsLoggedIn(true);
            setLoading(false);
          }, 100);
        } else {
          setTimeout(() => {
            router.push('/auth/login');
            setIsLoggedIn(false);
            setLoading(false);
          }, 100);
        }
      } catch (error) {
        console.error('Auth error:', error);
        setTimeout(() => {
          router.push('/auth/login');
        }, 100);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []); // Remove router from dependencies

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
        <div className="text-white text-xl animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    
    <DashboardContent />

    // <>
    // <div className="container">
    //     <div className="header">
    //         <h1>🎯 Production Scoreboard</h1>
    //         <div className="subtitle">Being consistently consistent will make me a millionaire</div>
    //     </div>

    //     <div className="quote-section">
    //         <div className="quote-icon">💭</div>
    //         <div className="quote-text" id="dailyQuote">Money follows small actions repeated daily.</div>
    //     </div>

    //     <div className="grid">
    //         <div className="card card-highlight">
    //             <div className="card-header">
    //                 <div className="card-title">Today Commission</div>
    //                 <div className="card-icon">💰</div>
    //             </div>
    //             <div className="big-number" id="todayCommission">$0</div>
    //             <div id="agentCommissionContainer" className="agent-grid"></div>
    //         </div>

    //         <div className="card">
    //             <div className="card-header">
    //                 <div className="card-title">Week to Date</div>
    //                 <div className="card-icon">📅</div>
    //             </div>
    //             <div className="big-number" id="wtdCommission">$0</div>
    //             <div className="metric-row">
    //                 <span className="metric-label">Scott</span>
    //                 <span className="metric-value" id="wtdCommissionScott">$0</span>
    //             </div>
    //             <div className="metric-row">
    //                 <span className="metric-label">George</span>
    //                 <span className="metric-value" id="wtdCommissionGeorge">$0</span>
    //             </div>
    //             <div className="metric-row">
    //                 <span className="metric-label">Other Agents</span>
    //                 <span className="metric-value" id="wtdCommissionOther">$0</span>
    //             </div>
    //         </div>

    //         <div className="card">
    //             <div className="card-header">
    //                 <div className="card-title">Month to Date</div>
    //                 <div className="card-icon">📊</div>
    //             </div>
    //             <div className="big-number" id="mtdCommission">$0</div>
    //             <div className="metric-row">
    //                 <span className="metric-label">Scott</span>
    //                 <span className="metric-value" id="mtdCommissionScott">$0</span>
    //             </div>
    //             <div className="metric-row">
    //                 <span className="metric-label">George</span>
    //                 <span className="metric-value" id="mtdCommissionGeorge">$0</span>
    //             </div>
    //             <div className="metric-row">
    //                 <span className="metric-label">Other Agents</span>
    //                 <span className="metric-value" id="mtdCommissionOther">$0</span>
    //             </div>
    //         </div>

    //         <div className="card">
    //             <div className="card-header">
    //                 <div className="card-title">Year to Date</div>
    //                 <div className="card-icon">🎯</div>
    //             </div>
    //             <div className="big-number" id="ytdCommission">$0</div>
    //             <div className="metric-row">
    //                 <span className="metric-label">Annual Goal</span>
    //                 <span className="metric-value">$450,000</span>
    //             </div>
    //             <div className="progress-container">
    //                 <div className="progress-bar">
    //                     <div className="progress-fill" id="commissionProgressBar" style="width: 0%;"></div>
    //                 </div>
    //                 <div className="progress-text" id="commissionProgressPercent">0%</div>
    //             </div>
    //             <div className="metric-row">
    //                 <span className="metric-label">Progress</span>
    //                 <span className="metric-value" id="commissionProgressText">0%</span>
    //             </div>
    //         </div>

    //         <div className="card card-highlight">
    //             <div className="card-header">
    //                 <div className="card-title">Today Production</div>
    //                 <div className="card-icon">📈</div>
    //             </div>
    //             <div className="big-number" id="todayProduction">$0</div>
    //             <div className="agent-grid">
    //                 <div className="agent-card">
    //                     <span className="agent-name">Scott</span>
    //                     <span className="agent-value" id="todayProductionScott">$0</span>
    //                 </div>
    //                 <div className="agent-card">
    //                     <span className="agent-name">George</span>
    //                     <span className="agent-value" id="todayProductionGeorge">$0</span>
    //                 </div>
    //                 <div className="agent-card">
    //                     <span className="agent-name">Other Agents</span>
    //                     <span className="agent-value" id="todayProductionOther">$0</span>
    //                 </div>
    //             </div>
    //         </div>

    //         <div className="card">
    //             <div className="card-header">
    //                 <div className="card-title">WTD Production</div>
    //                 <div className="card-icon">📈</div>
    //             </div>
    //             <div className="big-number" id="wtdProduction">$0</div>
    //             <div className="metric-row">
    //                 <span className="metric-label">Scott</span>
    //                 <span className="metric-value" id="wtdProductionScott">$0</span>
    //             </div>
    //             <div className="metric-row">
    //                 <span className="metric-label">George</span>
    //                 <span className="metric-value" id="wtdProductionGeorge">$0</span>
    //             </div>
    //             <div className="metric-row">
    //                 <span className="metric-label">Other Agents</span>
    //                 <span className="metric-value" id="wtdProductionOther">$0</span>
    //             </div>
    //         </div>

    //         <div className="card">
    //             <div className="card-header">
    //                 <div className="card-title">MTD Production</div>
    //                 <div className="card-icon">📈</div>
    //             </div>
    //             <div className="big-number" id="mtdProduction">$0</div>
    //             <div className="metric-row">
    //                 <span className="metric-label">Scott</span>
    //                 <span className="metric-value" id="mtdProductionScott">$0</span>
    //             </div>
    //             <div className="metric-row">
    //                 <span className="metric-label">George</span>
    //                 <span className="metric-value" id="mtdProductionGeorge">$0</span>
    //             </div>
    //             <div className="metric-row">
    //                 <span className="metric-label">Other Agents</span>
    //                 <span className="metric-value" id="mtdProductionOther">$0</span>
    //             </div>
    //         </div>

    //         <div className="card">
    //             <div className="card-header">
    //                 <div className="card-title">Top Lead Sources</div>
    //                 <div className="card-icon">🏆</div>
    //             </div>
    //             <div id="leadSourcesContainer">
    //                 <div className="lead-item">
    //                     <span className="lead-name">Loading lead data...</span>
    //                     <span className="lead-value">$0</span>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    // <div className="footer">
    //     Last Updated: <span id="timestamp">Loading...</span> | 
    //     Auto-refresh: 60s | 
    //     Status: <span id="dataStatus" className="status-badge status-loading">Loading</span>
    // </div>
    // </>
    

  );
}