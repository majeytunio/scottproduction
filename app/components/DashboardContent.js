'use client'

import { useState, useEffect, useCallback } from 'react'
import { supabase } from '../../lib/supabase'

const GOALS = {
  commission: 450000,
  production: 1500000
}

export default function DashboardContent() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lastUpdated, setLastUpdated] = useState(new Date())

//   const fetchData = useCallback(async () => {
//     try {
//       setLoading(true)
      
//       const response = await fetch('/api/sheet')
//       const result = await response.json()
      
//       if (!response.ok) {
//         throw new Error(result.error || 'Failed to fetch data')
//       }
      
//       setData(result.data || [])
//       setError(null)
//       setLastUpdated(new Date())
//     } catch (err) {
//       console.error('Error fetching data:', err)
//       setError(err.message || 'Failed to load dashboard data')
//     } finally {
//       setLoading(false)
//     }
//   }, [])


    const fetchData = useCallback(async () => {
    try {
        setLoading(true)
        
        const response = await fetch('/api/sheet')
        const result = await response.json()
        
        if (!response.ok) {
        throw new Error(result.error || 'Failed to fetch data')
        }
        
        console.log('API Response:', result)
        console.log('Data received:', result.data)
        console.log('First row:', result.data?.[0])
        console.log('All row keys:', result.data?.[0] ? Object.keys(result.data[0]) : 'No data')
        
        setData(result.data || [])
        setError(null)
        setLastUpdated(new Date())
    } catch (err) {
        console.error('Error fetching data:', err)
        setError(err.message || 'Failed to load dashboard data')
    } finally {
        setLoading(false)
    }
    }, [])


  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 60000)
    return () => clearInterval(interval)
  }, [fetchData])

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0
    }).format(amount || 0)
  }

//   const calculateMetrics = () => {
//     const today = new Date()
//     today.setHours(0, 0, 0, 0)

//     let metrics = {
//       today: { commission: 0, production: 0 },
//       wtd: { commission: 0, production: 0 },
//       mtd: { commission: 0, production: 0 },
//       ytd: { commission: 0, production: 0 },
//       byAgent: {},
//       leadSources: {}
//     }

//     if (!data || data.length === 0) {
//       return metrics
//     }

//     // Get start of week (Sunday)
//     const weekStart = new Date(today)
//     weekStart.setDate(today.getDate() - today.getDay())

//     // Get start of month
//     const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)

//     // Get start of year
//     const yearStart = new Date(today.getFullYear(), 0, 1)

//     data.forEach((row) => {
//       if (!row || !row.Status || row.Status.toLowerCase() !== "approved") return

//       const dealDate = new Date(row["Date Sold"] || row["Date Sold"])
//       if (isNaN(dealDate.getTime())) return

//       const agent = row.Agent || "Unknown"
//       const lead = row["Lead Vendor"] || "Unknown"
//       const monthlyPremium = Number(row["Monthly Premium"]) || 0
//       const production = monthlyPremium * 12
//       const commission = Number(row["Net Advance (60%)"]) || 0

//       // Initialize agent if not exists
//       if (!metrics.byAgent[agent]) {
//         metrics.byAgent[agent] = {
//           today: { commission: 0, production: 0 },
//           wtd: { commission: 0, production: 0 },
//           mtd: { commission: 0, production: 0 },
//           ytd: { commission: 0, production: 0 }
//         }
//       }

//       // Initialize lead source if not exists
//       if (!metrics.leadSources[lead]) {
//         metrics.leadSources[lead] = 0
//       }

//       // Update totals
//       metrics.leadSources[lead] += production

//       // Today
//       if (dealDate.toDateString() === today.toDateString()) {
//         metrics.today.commission += commission
//         metrics.today.production += production
//         metrics.byAgent[agent].today.commission += commission
//         metrics.byAgent[agent].today.production += production
//       }

//       // Week to Date
//       if (dealDate >= weekStart) {
//         metrics.wtd.commission += commission
//         metrics.wtd.production += production
//         metrics.byAgent[agent].wtd.commission += commission
//         metrics.byAgent[agent].wtd.production += production
//       }

//       // Month to Date
//       if (dealDate >= monthStart) {
//         metrics.mtd.commission += commission
//         metrics.mtd.production += production
//         metrics.byAgent[agent].mtd.commission += commission
//         metrics.byAgent[agent].mtd.production += production
//       }

//       // Year to Date
//       if (dealDate >= yearStart) {
//         metrics.ytd.commission += commission
//         metrics.ytd.production += production
//         metrics.byAgent[agent].ytd.commission += commission
//         metrics.byAgent[agent].ytd.production += production
//       }
//     })

//     return metrics
//   }



    const calculateMetrics = () => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  let metrics = {
    today: { commission: 0, production: 0 },
    wtd: { commission: 0, production: 0 },
    mtd: { commission: 0, production: 0 },
    ytd: { commission: 0, production: 0 },
    byAgent: {},
    leadSources: {}
  }

  if (!data || data.length === 0) {
    return metrics
  }

  console.log('Processing data with columns:', Object.keys(data[0]))

  // Date ranges
  const weekStart = new Date(today)
  weekStart.setDate(today.getDate() - today.getDay())
  weekStart.setHours(0, 0, 0, 0)

  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)
  monthStart.setHours(0, 0, 0, 0)

  const yearStart = new Date(today.getFullYear(), 0, 1)
  yearStart.setHours(0, 0, 0, 0)

  let approvedCount = 0
  let totalRows = 0

  data.forEach((row, index) => {
    totalRows++
    
    // Check if row has Status field - based on your columns
    const status = row.Status
    if (!status || status.toLowerCase() !== "approved") {
      console.log(`Row ${index} skipped - Status: ${status}`)
      return
    }
    
    approvedCount++

    // Parse date - handle MM/DD/YYYY format
    const dateStr = row["Date Sold"]
    let dealDate
    if (dateStr.includes('/')) {
      // Parse MM/DD/YYYY format
      const [month, day, year] = dateStr.split('/').map(Number)
      dealDate = new Date(year, month - 1, day) // month is 0-indexed in JS
    } else {
      dealDate = new Date(dateStr)
    }
    
    if (isNaN(dealDate.getTime())) {
      console.log(`Row ${index} invalid date: ${dateStr}`)
      return
    }
    dealDate.setHours(0, 0, 0, 0)

    const agent = row.Agent || "Unknown"
    const lead = row["Lead Vendor"] || "Unknown"
    
    // Get Monthly Premium - clean it first
    let monthlyPremium = row["Monthly Premium"]
    if (typeof monthlyPremium === 'string') {
      // Remove $, commas, and any non-numeric characters
      monthlyPremium = monthlyPremium.replace(/[^\d.-]/g, '')
    }
    monthlyPremium = Number(monthlyPremium) || 0
    
    const production = monthlyPremium * 12

    // Try different commission columns - based on your sheet
    // First try "Advance (75%)" then "Annual Commission $"
    let commission = row["Advance (75%)"] || row["Annual Commission $"] || 0
    if (typeof commission === 'string') {
      // Remove $, commas, and any non-numeric characters
      commission = commission.replace(/[^\d.-]/g, '')
    }
    commission = Number(commission) || 0

    console.log(`Row ${index} - Approved deal:`, {
      agent,
      lead,
      monthlyPremium,
      production,
      commission,
      dateSold: dateStr,
      parsedDate: dealDate.toDateString(),
      today: today.toDateString()
    })

    // Initialize agent if not exists
    if (!metrics.byAgent[agent]) {
      metrics.byAgent[agent] = {
        today: { commission: 0, production: 0 },
        wtd: { commission: 0, production: 0 },
        mtd: { commission: 0, production: 0 },
        ytd: { commission: 0, production: 0 }
      }
    }

    // Initialize lead source if not exists
    if (!metrics.leadSources[lead]) {
      metrics.leadSources[lead] = 0
    }

    // Update totals
    metrics.leadSources[lead] += production

    // Today
    if (dealDate.toDateString() === today.toDateString()) {
      metrics.today.commission += commission
      metrics.today.production += production
      metrics.byAgent[agent].today.commission += commission
      metrics.byAgent[agent].today.production += production
      console.log(`Added to today: ${commission} commission, ${production} production`)
    }

    // Week to Date
    if (dealDate >= weekStart) {
      metrics.wtd.commission += commission
      metrics.wtd.production += production
      metrics.byAgent[agent].wtd.commission += commission
      metrics.byAgent[agent].wtd.production += production
    }

    // Month to Date
    if (dealDate >= monthStart) {
      metrics.mtd.commission += commission
      metrics.mtd.production += production
      metrics.byAgent[agent].mtd.commission += commission
      metrics.byAgent[agent].mtd.production += production
    }

    // Year to Date
    if (dealDate >= yearStart) {
      metrics.ytd.commission += commission
      metrics.ytd.production += production
      metrics.byAgent[agent].ytd.commission += commission
      metrics.byAgent[agent].ytd.production += production
    }
  })

  console.log(`Summary: Processed ${totalRows} rows, ${approvedCount} approved deals`)
  console.log('Final metrics:', {
    today: metrics.today,
    ytd: metrics.ytd,
    agents: Object.keys(metrics.byAgent),
    leadSources: metrics.leadSources
  })

  return metrics
}


  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/auth/login'
  }

  if (loading && data.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
        <div className="text-white text-xl animate-pulse">Loading dashboard...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
          <div className="text-white text-xl mb-4">Error: {error}</div>
          <button
            onClick={fetchData}
            className="px-6 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors mr-2"
          >
            Retry
          </button>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    )
  }

  const metrics = calculateMetrics()
  const commissionPercent = Math.min(100, (metrics.ytd.commission / GOALS.commission) * 100)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white p-4">
      {/* Top Bar with Logout */}
      {/* <div className="flex justify-between items-center mb-4">
        <div className="text-sm opacity-75">
          Welcome to Production Dashboard
        </div>
        <button
            onClick={handleLogout}
            className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-sm float-right top-0"
            >
            Logout
        </button>
        
      </div> */}

      <div className="max-w-7xl mx-auto space-y-4">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20">
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-sm float-right top-0"
            >
            Logout
          </button>
          
          <h1 className="text-4xl font-bold mb-2">🎯 Production Scoreboard</h1>
          <p className="text-white/80">Being consistently consistent will make me a millionaire</p>

        </div>

        {/* Daily Quote */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20">
          <div className="text-2xl mb-2">💭</div>
          <div className="text-xl italic font-medium">Money follows small actions repeated daily.</div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Today Commission */}
          <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Today Commission</div>
              <div className="text-2xl">💰</div>
            </div>
            <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {formatCurrency(metrics.today.commission)}
            </div>
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(metrics.byAgent).map(([agent, stats]) => (
                <div key={agent} className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
                  <span className="block text-xs font-semibold text-gray-600 mb-1 truncate" title={agent}>
                    {agent}
                  </span>
                  <span className="text-lg font-black text-gray-800">{formatCurrency(stats.today.commission)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* WTD Commission */}
          <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Week to Date</div>
              <div className="text-2xl">📅</div>
            </div>
            <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {formatCurrency(metrics.wtd.commission)}
            </div>
            <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
              {Object.entries(metrics.byAgent).map(([agent, stats]) => (
                <div key={`${agent}-wtd`} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                  <span className="text-sm font-semibold text-gray-600 truncate max-w-[60%]" title={agent}>
                    {agent}
                  </span>
                  <span className="text-sm font-bold text-gray-800 whitespace-nowrap">
                    {formatCurrency(stats.wtd.commission)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* MTD Commission */}
          <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Month to Date</div>
              <div className="text-2xl">📊</div>
            </div>
            <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {formatCurrency(metrics.mtd.commission)}
            </div>
            <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
              {Object.entries(metrics.byAgent).map(([agent, stats]) => (
                <div key={`${agent}-mtd`} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                  <span className="text-sm font-semibold text-gray-600 truncate max-w-[60%]" title={agent}>
                    {agent}
                  </span>
                  <span className="text-sm font-bold text-gray-800 whitespace-nowrap">
                    {formatCurrency(stats.mtd.commission)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* YTD Commission */}
          <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Year to Date</div>
              <div className="text-2xl">🎯</div>
            </div>
            <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {formatCurrency(metrics.ytd.commission)}
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between py-2">
                <span className="text-sm font-semibold text-gray-600">Annual Goal</span>
                <span className="text-sm font-bold text-gray-800">$450,000</span>
              </div>
            </div>
            <div className="mb-4">
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow transition-all duration-500"
                  style={{ width: `${commissionPercent}%` }}
                ></div>
              </div>
              <div className="text-xs text-center text-gray-600 font-semibold mt-1">
                {commissionPercent.toFixed(1)}%
              </div>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-sm font-semibold text-gray-600">Progress</span>
              <span className="text-sm font-bold text-gray-800">{commissionPercent.toFixed(1)}%</span>
            </div>
          </div>

          {/* Today Production */}
          <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Today Production</div>
              <div className="text-2xl">📈</div>
            </div>
            <div className="text-3xl font-black mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              {formatCurrency(metrics.today.production)}
            </div>
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(metrics.byAgent).map(([agent, stats]) => (
                <div key={`${agent}-prod`} className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
                  <span className="block text-xs font-semibold text-gray-600 mb-1 truncate" title={agent}>
                    {agent}
                  </span>
                  <span className="text-lg font-black text-gray-800">{formatCurrency(stats.today.production)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* WTD Production */}
          <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">WTD Production</div>
              <div className="text-2xl">📈</div>
            </div>
            <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {formatCurrency(metrics.wtd.production)}
            </div>
            <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
              {Object.entries(metrics.byAgent).map(([agent, stats]) => (
                <div key={`${agent}-wtd-prod`} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                  <span className="text-sm font-semibold text-gray-600 truncate max-w-[60%]" title={agent}>
                    {agent}
                  </span>
                  <span className="text-sm font-bold text-gray-800 whitespace-nowrap">
                    {formatCurrency(stats.wtd.production)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* MTD Production */}
          <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">MTD Production</div>
              <div className="text-2xl">📈</div>
            </div>
            <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {formatCurrency(metrics.mtd.production)}
            </div>
            <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
              {Object.entries(metrics.byAgent).map(([agent, stats]) => (
                <div key={`${agent}-mtd-prod`} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                  <span className="text-sm font-semibold text-gray-600 truncate max-w-[60%]" title={agent}>
                    {agent}
                  </span>
                  <span className="text-sm font-bold text-gray-800 whitespace-nowrap">
                    {formatCurrency(stats.mtd.production)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Leads */}
          <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Top Lead Sources</div>
              <div className="text-2xl">🏆</div>
            </div>
            <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
              {Object.entries(metrics.leadSources)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 6)
                .map(([lead, total]) => (
                  <div key={lead} className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500 flex justify-between items-center">
                    <span className="text-sm font-bold text-gray-800 truncate max-w-[70%]" title={lead}>
                      {lead}
                    </span>
                    <span className="text-sm font-black bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent whitespace-nowrap">
                      {formatCurrency(total)}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-right text-sm text-white/70">
          Last Updated: {lastUpdated.toLocaleString()} | 
          Auto-refresh: 60s | 
          Status: 
          <span className="ml-2 inline-block px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs font-semibold">
            {data.length > 0 ? `Connected (${data.length} records)` : 'No Data'}
          </span>
          <button
            onClick={fetchData}
            className="ml-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-xs"
            disabled={loading}
          >
            {loading ? 'Refreshing...' : 'Refresh Now'}
          </button>
        </div>
      </div>
    </div>
  )
}