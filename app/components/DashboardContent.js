// // // 'use client'

// // // import { useState, useEffect, useCallback } from 'react'
// // // import { supabase } from '../../lib/supabase'

// // // const GOALS = {
// // //   commission: 450000,
// // //   production: 1500000
// // // }

// // // export default function DashboardContent() {
// // //   const [data, setData] = useState([])
// // //   const [loading, setLoading] = useState(true)
// // //   const [error, setError] = useState(null)
// // //   const [lastUpdated, setLastUpdated] = useState(new Date())

// // // //   const fetchData = useCallback(async () => {
// // // //     try {
// // // //       setLoading(true)
      
// // // //       const response = await fetch('/api/sheet')
// // // //       const result = await response.json()
      
// // // //       if (!response.ok) {
// // // //         throw new Error(result.error || 'Failed to fetch data')
// // // //       }
      
// // // //       setData(result.data || [])
// // // //       setError(null)
// // // //       setLastUpdated(new Date())
// // // //     } catch (err) {
// // // //       console.error('Error fetching data:', err)
// // // //       setError(err.message || 'Failed to load dashboard data')
// // // //     } finally {
// // // //       setLoading(false)
// // // //     }
// // // //   }, [])


// // //     const fetchData = useCallback(async () => {
// // //     try {
// // //         setLoading(true)
        
// // //         const response = await fetch('/api/sheet')
// // //         const result = await response.json()
        
// // //         if (!response.ok) {
// // //         throw new Error(result.error || 'Failed to fetch data')
// // //         }
        
// // //         console.log('API Response:', result)
// // //         console.log('Data received:', result.data)
// // //         console.log('First row:', result.data?.[0])
// // //         console.log('All row keys:', result.data?.[0] ? Object.keys(result.data[0]) : 'No data')
        
// // //         setData(result.data || [])
// // //         setError(null)
// // //         setLastUpdated(new Date())
// // //     } catch (err) {
// // //         console.error('Error fetching data:', err)
// // //         setError(err.message || 'Failed to load dashboard data')
// // //     } finally {
// // //         setLoading(false)
// // //     }
// // //     }, [])


// // //   useEffect(() => {
// // //     fetchData()
// // //     const interval = setInterval(fetchData, 60000)
// // //     return () => clearInterval(interval)
// // //   }, [fetchData])

// // //   const formatCurrency = (amount) => {
// // //     return new Intl.NumberFormat("en-US", {
// // //       style: "currency",
// // //       currency: "USD",
// // //       minimumFractionDigits: 0
// // //     }).format(amount || 0)
// // //   }

// // // //   const calculateMetrics = () => {
// // // //     const today = new Date()
// // // //     today.setHours(0, 0, 0, 0)

// // // //     let metrics = {
// // // //       today: { commission: 0, production: 0 },
// // // //       wtd: { commission: 0, production: 0 },
// // // //       mtd: { commission: 0, production: 0 },
// // // //       ytd: { commission: 0, production: 0 },
// // // //       byAgent: {},
// // // //       leadSources: {}
// // // //     }

// // // //     if (!data || data.length === 0) {
// // // //       return metrics
// // // //     }

// // // //     // Get start of week (Sunday)
// // // //     const weekStart = new Date(today)
// // // //     weekStart.setDate(today.getDate() - today.getDay())

// // // //     // Get start of month
// // // //     const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)

// // // //     // Get start of year
// // // //     const yearStart = new Date(today.getFullYear(), 0, 1)

// // // //     data.forEach((row) => {
// // // //       if (!row || !row.Status || row.Status.toLowerCase() !== "approved") return

// // // //       const dealDate = new Date(row["Date Sold"] || row["Date Sold"])
// // // //       if (isNaN(dealDate.getTime())) return

// // // //       const agent = row.Agent || "Unknown"
// // // //       const lead = row["Lead Vendor"] || "Unknown"
// // // //       const monthlyPremium = Number(row["Monthly Premium"]) || 0
// // // //       const production = monthlyPremium * 12
// // // //       const commission = Number(row["Net Advance (60%)"]) || 0

// // // //       // Initialize agent if not exists
// // // //       if (!metrics.byAgent[agent]) {
// // // //         metrics.byAgent[agent] = {
// // // //           today: { commission: 0, production: 0 },
// // // //           wtd: { commission: 0, production: 0 },
// // // //           mtd: { commission: 0, production: 0 },
// // // //           ytd: { commission: 0, production: 0 }
// // // //         }
// // // //       }

// // // //       // Initialize lead source if not exists
// // // //       if (!metrics.leadSources[lead]) {
// // // //         metrics.leadSources[lead] = 0
// // // //       }

// // // //       // Update totals
// // // //       metrics.leadSources[lead] += production

// // // //       // Today
// // // //       if (dealDate.toDateString() === today.toDateString()) {
// // // //         metrics.today.commission += commission
// // // //         metrics.today.production += production
// // // //         metrics.byAgent[agent].today.commission += commission
// // // //         metrics.byAgent[agent].today.production += production
// // // //       }

// // // //       // Week to Date
// // // //       if (dealDate >= weekStart) {
// // // //         metrics.wtd.commission += commission
// // // //         metrics.wtd.production += production
// // // //         metrics.byAgent[agent].wtd.commission += commission
// // // //         metrics.byAgent[agent].wtd.production += production
// // // //       }

// // // //       // Month to Date
// // // //       if (dealDate >= monthStart) {
// // // //         metrics.mtd.commission += commission
// // // //         metrics.mtd.production += production
// // // //         metrics.byAgent[agent].mtd.commission += commission
// // // //         metrics.byAgent[agent].mtd.production += production
// // // //       }

// // // //       // Year to Date
// // // //       if (dealDate >= yearStart) {
// // // //         metrics.ytd.commission += commission
// // // //         metrics.ytd.production += production
// // // //         metrics.byAgent[agent].ytd.commission += commission
// // // //         metrics.byAgent[agent].ytd.production += production
// // // //       }
// // // //     })

// // // //     return metrics
// // // //   }



// // //     const calculateMetrics = () => {
// // //   const today = new Date()
// // //   today.setHours(0, 0, 0, 0)

// // //   let metrics = {
// // //     today: { commission: 0, production: 0 },
// // //     wtd: { commission: 0, production: 0 },
// // //     mtd: { commission: 0, production: 0 },
// // //     ytd: { commission: 0, production: 0 },
// // //     byAgent: {},
// // //     leadSources: {}
// // //   }

// // //   if (!data || data.length === 0) {
// // //     return metrics
// // //   }

// // //   console.log('Processing data with columns:', Object.keys(data[0]))

// // //   // Date ranges
// // //   const weekStart = new Date(today)
// // //   weekStart.setDate(today.getDate() - today.getDay())
// // //   weekStart.setHours(0, 0, 0, 0)

// // //   const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)
// // //   monthStart.setHours(0, 0, 0, 0)

// // //   const yearStart = new Date(today.getFullYear(), 0, 1)
// // //   yearStart.setHours(0, 0, 0, 0)

// // //   let approvedCount = 0
// // //   let totalRows = 0

// // //   data.forEach((row, index) => {
// // //     totalRows++
    
// // //     // Check if row has Status field - based on your columns
// // //     const status = row.Status
// // //     if (!status || status.toLowerCase() !== "approved") {
// // //       console.log(`Row ${index} skipped - Status: ${status}`)
// // //       return
// // //     }
    
// // //     approvedCount++

// // //     // Parse date - handle MM/DD/YYYY format
// // //     const dateStr = row["Date Sold"]
// // //     let dealDate
// // //     if (dateStr.includes('/')) {
// // //       // Parse MM/DD/YYYY format
// // //       const [month, day, year] = dateStr.split('/').map(Number)
// // //       dealDate = new Date(year, month - 1, day) // month is 0-indexed in JS
// // //     } else {
// // //       dealDate = new Date(dateStr)
// // //     }
    
// // //     if (isNaN(dealDate.getTime())) {
// // //       console.log(`Row ${index} invalid date: ${dateStr}`)
// // //       return
// // //     }
// // //     dealDate.setHours(0, 0, 0, 0)

// // //     const agent = row.Agent || "Unknown"
// // //     const lead = row["Lead Vendor"] || "Unknown"
    
// // //     // Get Monthly Premium - clean it first
// // //     let monthlyPremium = row["Monthly Premium"]
// // //     if (typeof monthlyPremium === 'string') {
// // //       // Remove $, commas, and any non-numeric characters
// // //       monthlyPremium = monthlyPremium.replace(/[^\d.-]/g, '')
// // //     }
// // //     monthlyPremium = Number(monthlyPremium) || 0
    
// // //     const production = monthlyPremium * 12

// // //     // Try different commission columns - based on your sheet
// // //     // First try "Advance (75%)" then "Annual Commission $"
// // //     let commission = row["Advance (75%)"] || row["Annual Commission $"] || 0
// // //     if (typeof commission === 'string') {
// // //       // Remove $, commas, and any non-numeric characters
// // //       commission = commission.replace(/[^\d.-]/g, '')
// // //     }
// // //     commission = Number(commission) || 0

// // //     console.log(`Row ${index} - Approved deal:`, {
// // //       agent,
// // //       lead,
// // //       monthlyPremium,
// // //       production,
// // //       commission,
// // //       dateSold: dateStr,
// // //       parsedDate: dealDate.toDateString(),
// // //       today: today.toDateString()
// // //     })

// // //     // Initialize agent if not exists
// // //     if (!metrics.byAgent[agent]) {
// // //       metrics.byAgent[agent] = {
// // //         today: { commission: 0, production: 0 },
// // //         wtd: { commission: 0, production: 0 },
// // //         mtd: { commission: 0, production: 0 },
// // //         ytd: { commission: 0, production: 0 }
// // //       }
// // //     }

// // //     // Initialize lead source if not exists
// // //     if (!metrics.leadSources[lead]) {
// // //       metrics.leadSources[lead] = 0
// // //     }

// // //     // Update totals
// // //     metrics.leadSources[lead] += production

// // //     // Today
// // //     if (dealDate.toDateString() === today.toDateString()) {
// // //       metrics.today.commission += commission
// // //       metrics.today.production += production
// // //       metrics.byAgent[agent].today.commission += commission
// // //       metrics.byAgent[agent].today.production += production
// // //       console.log(`Added to today: ${commission} commission, ${production} production`)
// // //     }

// // //     // Week to Date
// // //     if (dealDate >= weekStart) {
// // //       metrics.wtd.commission += commission
// // //       metrics.wtd.production += production
// // //       metrics.byAgent[agent].wtd.commission += commission
// // //       metrics.byAgent[agent].wtd.production += production
// // //     }

// // //     // Month to Date
// // //     if (dealDate >= monthStart) {
// // //       metrics.mtd.commission += commission
// // //       metrics.mtd.production += production
// // //       metrics.byAgent[agent].mtd.commission += commission
// // //       metrics.byAgent[agent].mtd.production += production
// // //     }

// // //     // Year to Date
// // //     if (dealDate >= yearStart) {
// // //       metrics.ytd.commission += commission
// // //       metrics.ytd.production += production
// // //       metrics.byAgent[agent].ytd.commission += commission
// // //       metrics.byAgent[agent].ytd.production += production
// // //     }
// // //   })

// // //   console.log(`Summary: Processed ${totalRows} rows, ${approvedCount} approved deals`)
// // //   console.log('Final metrics:', {
// // //     today: metrics.today,
// // //     ytd: metrics.ytd,
// // //     agents: Object.keys(metrics.byAgent),
// // //     leadSources: metrics.leadSources
// // //   })

// // //   return metrics
// // // }


// // //   const handleLogout = async () => {
// // //     await supabase.auth.signOut()
// // //     window.location.href = '/auth/login'
// // //   }

// // //   if (loading && data.length === 0) {
// // //     return (
// // //       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
// // //         <div className="text-white text-xl animate-pulse">Loading dashboard...</div>
// // //       </div>
// // //     )
// // //   }

// // //   if (error) {
// // //     return (
// // //       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
// // //         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
// // //           <div className="text-white text-xl mb-4">Error: {error}</div>
// // //           <button
// // //             onClick={fetchData}
// // //             className="px-6 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors mr-2"
// // //           >
// // //             Retry
// // //           </button>
// // //           <button
// // //             onClick={handleLogout}
// // //             className="px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
// // //           >
// // //             Logout
// // //           </button>
// // //         </div>
// // //       </div>
// // //     )
// // //   }

// // //   const metrics = calculateMetrics()
// // //   const commissionPercent = Math.min(100, (metrics.ytd.commission / GOALS.commission) * 100)

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white p-4">
// // //       {/* Top Bar with Logout */}
// // //       {/* <div className="flex justify-between items-center mb-4">
// // //         <div className="text-sm opacity-75">
// // //           Welcome to Production Dashboard
// // //         </div>
// // //         <button
// // //             onClick={handleLogout}
// // //             className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-sm float-right top-0"
// // //             >
// // //             Logout
// // //         </button>
        
// // //       </div> */}

// // //       <div className="max-w-7xl mx-auto space-y-4">
// // //         {/* Header */}
// // //         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20">
// // //           <button
// // //             onClick={handleLogout}
// // //             className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-sm float-right top-0"
// // //             >
// // //             Logout
// // //           </button>
          
// // //           <h1 className="text-4xl font-bold mb-2">🎯 Production Scoreboard</h1>
// // //           <p className="text-white/80">Being consistently consistent will make me a millionaire</p>

// // //         </div>

// // //         {/* Daily Quote */}
// // //         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20">
// // //           <div className="text-2xl mb-2">💭</div>
// // //           <div className="text-xl italic font-medium">Money follows small actions repeated daily.</div>
// // //         </div>

// // //         {/* Grid */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// // //           {/* Today Commission */}
// // //           <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Today Commission</div>
// // //               <div className="text-2xl">💰</div>
// // //             </div>
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.today.commission)}
// // //             </div>
// // //             <div className="grid grid-cols-3 gap-2">
// // //               {Object.entries(metrics.byAgent).map(([agent, stats]) => (
// // //                 <div key={agent} className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
// // //                   <span className="block text-xs font-semibold text-gray-600 mb-1 truncate" title={agent}>
// // //                     {agent}
// // //                   </span>
// // //                   <span className="text-lg font-black text-gray-800">{formatCurrency(stats.today.commission)}</span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* WTD Commission */}
// // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Week to Date</div>
// // //               <div className="text-2xl">📅</div>
// // //             </div>
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.wtd.commission)}
// // //             </div>
// // //             <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
// // //               {Object.entries(metrics.byAgent).map(([agent, stats]) => (
// // //                 <div key={`${agent}-wtd`} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
// // //                   <span className="text-sm font-semibold text-gray-600 truncate max-w-[60%]" title={agent}>
// // //                     {agent}
// // //                   </span>
// // //                   <span className="text-sm font-bold text-gray-800 whitespace-nowrap">
// // //                     {formatCurrency(stats.wtd.commission)}
// // //                   </span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* MTD Commission */}
// // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Month to Date</div>
// // //               <div className="text-2xl">📊</div>
// // //             </div>
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.mtd.commission)}
// // //             </div>
// // //             <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
// // //               {Object.entries(metrics.byAgent).map(([agent, stats]) => (
// // //                 <div key={`${agent}-mtd`} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
// // //                   <span className="text-sm font-semibold text-gray-600 truncate max-w-[60%]" title={agent}>
// // //                     {agent}
// // //                   </span>
// // //                   <span className="text-sm font-bold text-gray-800 whitespace-nowrap">
// // //                     {formatCurrency(stats.mtd.commission)}
// // //                   </span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* YTD Commission */}
// // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Year to Date</div>
// // //               <div className="text-2xl">🎯</div>
// // //             </div>
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.ytd.commission)}
// // //             </div>
// // //             <div className="space-y-2 mb-4">
// // //               <div className="flex justify-between py-2">
// // //                 <span className="text-sm font-semibold text-gray-600">Annual Goal</span>
// // //                 <span className="text-sm font-bold text-gray-800">$450,000</span>
// // //               </div>
// // //             </div>
// // //             <div className="mb-4">
// // //               <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
// // //                 <div 
// // //                   className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow transition-all duration-500"
// // //                   style={{ width: `${commissionPercent}%` }}
// // //                 ></div>
// // //               </div>
// // //               <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// // //                 {commissionPercent.toFixed(1)}%
// // //               </div>
// // //             </div>
// // //             <div className="flex justify-between py-2">
// // //               <span className="text-sm font-semibold text-gray-600">Progress</span>
// // //               <span className="text-sm font-bold text-gray-800">{commissionPercent.toFixed(1)}%</span>
// // //             </div>
// // //           </div>

// // //           {/* Today Production */}
// // //           <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Today Production</div>
// // //               <div className="text-2xl">📈</div>
// // //             </div>
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.today.production)}
// // //             </div>
// // //             <div className="grid grid-cols-3 gap-2">
// // //               {Object.entries(metrics.byAgent).map(([agent, stats]) => (
// // //                 <div key={`${agent}-prod`} className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
// // //                   <span className="block text-xs font-semibold text-gray-600 mb-1 truncate" title={agent}>
// // //                     {agent}
// // //                   </span>
// // //                   <span className="text-lg font-black text-gray-800">{formatCurrency(stats.today.production)}</span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* WTD Production */}
// // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">WTD Production</div>
// // //               <div className="text-2xl">📈</div>
// // //             </div>
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.wtd.production)}
// // //             </div>
// // //             <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
// // //               {Object.entries(metrics.byAgent).map(([agent, stats]) => (
// // //                 <div key={`${agent}-wtd-prod`} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
// // //                   <span className="text-sm font-semibold text-gray-600 truncate max-w-[60%]" title={agent}>
// // //                     {agent}
// // //                   </span>
// // //                   <span className="text-sm font-bold text-gray-800 whitespace-nowrap">
// // //                     {formatCurrency(stats.wtd.production)}
// // //                   </span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* MTD Production */}
// // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">MTD Production</div>
// // //               <div className="text-2xl">📈</div>
// // //             </div>
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.mtd.production)}
// // //             </div>
// // //             <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
// // //               {Object.entries(metrics.byAgent).map(([agent, stats]) => (
// // //                 <div key={`${agent}-mtd-prod`} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
// // //                   <span className="text-sm font-semibold text-gray-600 truncate max-w-[60%]" title={agent}>
// // //                     {agent}
// // //                   </span>
// // //                   <span className="text-sm font-bold text-gray-800 whitespace-nowrap">
// // //                     {formatCurrency(stats.mtd.production)}
// // //                   </span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* Top Leads */}
// // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Top Lead Sources</div>
// // //               <div className="text-2xl">🏆</div>
// // //             </div>
// // //             <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
// // //               {Object.entries(metrics.leadSources)
// // //                 .sort((a, b) => b[1] - a[1])
// // //                 .slice(0, 6)
// // //                 .map(([lead, total]) => (
// // //                   <div key={lead} className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500 flex justify-between items-center">
// // //                     <span className="text-sm font-bold text-gray-800 truncate max-w-[70%]" title={lead}>
// // //                       {lead}
// // //                     </span>
// // //                     <span className="text-sm font-black bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent whitespace-nowrap">
// // //                       {formatCurrency(total)}
// // //                     </span>
// // //                   </div>
// // //                 ))}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Footer */}
// // //         <div className="text-right text-sm text-white/70">
// // //           Last Updated: {lastUpdated.toLocaleString()} | 
// // //           Auto-refresh: 60s | 
// // //           Status: 
// // //           <span className="ml-2 inline-block px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs font-semibold">
// // //             {data.length > 0 ? `Connected (${data.length} records)` : 'No Data'}
// // //           </span>
// // //           <button
// // //             onClick={fetchData}
// // //             className="ml-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-xs"
// // //             disabled={loading}
// // //           >
// // //             {loading ? 'Refreshing...' : 'Refresh Now'}
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }






















// // // 'use client'

// // // import { useState, useEffect, useCallback } from 'react'
// // // import { supabase } from '../../lib/supabase'

// // // const GOALS = {
// // //   commission: 450000,
// // //   production: 1500000
// // // }

// // // export default function DashboardContent() {
// // //   const [data, setData] = useState([])
// // //   const [loading, setLoading] = useState(true)
// // //   const [error, setError] = useState(null)
// // //   const [lastUpdated, setLastUpdated] = useState(new Date())

// // // //   const fetchData = useCallback(async () => {
// // // //     try {
// // // //       setLoading(true)
      
// // // //       const response = await fetch('/api/sheet')
// // // //       const result = await response.json()
      
// // // //       if (!response.ok) {
// // // //         throw new Error(result.error || 'Failed to fetch data')
// // // //       }
      
// // // //       setData(result.data || [])
// // // //       setError(null)
// // // //       setLastUpdated(new Date())
// // // //     } catch (err) {
// // // //       console.error('Error fetching data:', err)
// // // //       setError(err.message || 'Failed to load dashboard data')
// // // //     } finally {
// // // //       setLoading(false)
// // // //     }
// // // //   }, [])


// // //     const fetchData = useCallback(async () => {
// // //     try {
// // //         setLoading(true)
        
// // //         const response = await fetch('/api/sheet')
// // //         const result = await response.json()
        
// // //         if (!response.ok) {
// // //         throw new Error(result.error || 'Failed to fetch data')
// // //         }
        
// // //         console.log('API Response:', result)
// // //         console.log('Data received:', result.data)
// // //         console.log('First row:', result.data?.[0])
// // //         console.log('All row keys:', result.data?.[0] ? Object.keys(result.data[0]) : 'No data')
        
// // //         setData(result.data || [])
// // //         setError(null)
// // //         setLastUpdated(new Date())
// // //     } catch (err) {
// // //         console.error('Error fetching data:', err)
// // //         setError(err.message || 'Failed to load dashboard data')
// // //     } finally {
// // //         setLoading(false)
// // //     }
// // //     }, [])


// // //   useEffect(() => {
// // //     fetchData()
// // //     const interval = setInterval(fetchData, 60000)
// // //     return () => clearInterval(interval)
// // //   }, [fetchData])

// // //   const formatCurrency = (amount) => {
// // //     return new Intl.NumberFormat("en-US", {
// // //       style: "currency",
// // //       currency: "USD",
// // //       minimumFractionDigits: 0
// // //     }).format(amount || 0)
// // //   }

// // // //   const calculateMetrics = () => {
// // // //     const today = new Date()
// // // //     today.setHours(0, 0, 0, 0)

// // // //     let metrics = {
// // // //       today: { commission: 0, production: 0 },
// // // //       wtd: { commission: 0, production: 0 },
// // // //       mtd: { commission: 0, production: 0 },
// // // //       ytd: { commission: 0, production: 0 },
// // // //       byAgent: {},
// // // //       leadSources: {}
// // // //     }

// // // //     if (!data || data.length === 0) {
// // // //       return metrics
// // // //     }

// // // //     // Get start of week (Sunday)
// // // //     const weekStart = new Date(today)
// // // //     weekStart.setDate(today.getDate() - today.getDay())

// // // //     // Get start of month
// // // //     const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)

// // // //     // Get start of year
// // // //     const yearStart = new Date(today.getFullYear(), 0, 1)

// // // //     data.forEach((row) => {
// // // //       if (!row || !row.Status || row.Status.toLowerCase() !== "approved") return

// // // //       const dealDate = new Date(row["Date Sold"] || row["Date Sold"])
// // // //       if (isNaN(dealDate.getTime())) return

// // // //       const agent = row.Agent || "Unknown"
// // // //       const lead = row["Lead Vendor"] || "Unknown"
// // // //       const monthlyPremium = Number(row["Monthly Premium"]) || 0
// // // //       const production = monthlyPremium * 12
// // // //       const commission = Number(row["Net Advance (60%)"]) || 0

// // // //       // Initialize agent if not exists
// // // //       if (!metrics.byAgent[agent]) {
// // // //         metrics.byAgent[agent] = {
// // // //           today: { commission: 0, production: 0 },
// // // //           wtd: { commission: 0, production: 0 },
// // // //           mtd: { commission: 0, production: 0 },
// // // //           ytd: { commission: 0, production: 0 }
// // // //         }
// // // //       }

// // // //       // Initialize lead source if not exists
// // // //       if (!metrics.leadSources[lead]) {
// // // //         metrics.leadSources[lead] = 0
// // // //       }

// // // //       // Update totals
// // // //       metrics.leadSources[lead] += production

// // // //       // Today
// // // //       if (dealDate.toDateString() === today.toDateString()) {
// // // //         metrics.today.commission += commission
// // // //         metrics.today.production += production
// // // //         metrics.byAgent[agent].today.commission += commission
// // // //         metrics.byAgent[agent].today.production += production
// // // //       }

// // // //       // Week to Date
// // // //       if (dealDate >= weekStart) {
// // // //         metrics.wtd.commission += commission
// // // //         metrics.wtd.production += production
// // // //         metrics.byAgent[agent].wtd.commission += commission
// // // //         metrics.byAgent[agent].wtd.production += production
// // // //       }

// // // //       // Month to Date
// // // //       if (dealDate >= monthStart) {
// // // //         metrics.mtd.commission += commission
// // // //         metrics.mtd.production += production
// // // //         metrics.byAgent[agent].mtd.commission += commission
// // // //         metrics.byAgent[agent].mtd.production += production
// // // //       }

// // // //       // Year to Date
// // // //       if (dealDate >= yearStart) {
// // // //         metrics.ytd.commission += commission
// // // //         metrics.ytd.production += production
// // // //         metrics.byAgent[agent].ytd.commission += commission
// // // //         metrics.byAgent[agent].ytd.production += production
// // // //       }
// // // //     })

// // // //     return metrics
// // // //   }



// // // //     const calculateMetrics = () => {
// // // //   const today = new Date()
// // // //   today.setHours(0, 0, 0, 0)

// // // //   let metrics = {
// // // //     today: { commission: 0, production: 0 },
// // // //     wtd: { commission: 0, production: 0 },
// // // //     mtd: { commission: 0, production: 0 },
// // // //     ytd: { commission: 0, production: 0 },
// // // //     byAgent: {},
// // // //     leadSources: {}
// // // //   }

// // // //   if (!data || data.length === 0) {
// // // //     return metrics
// // // //   }

// // // //   console.log('Processing data with columns:', Object.keys(data[0]))

// // // //   // Date ranges
// // // //   const weekStart = new Date(today)
// // // //   weekStart.setDate(today.getDate() - today.getDay())
// // // //   weekStart.setHours(0, 0, 0, 0)

// // // //   const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)
// // // //   monthStart.setHours(0, 0, 0, 0)

// // // //   const yearStart = new Date(today.getFullYear(), 0, 1)
// // // //   yearStart.setHours(0, 0, 0, 0)

// // // //   let approvedCount = 0
// // // //   let totalRows = 0

// // // //   data.forEach((row, index) => {
// // // //     totalRows++
    
// // // //     // Check if row has Status field - based on your columns
// // // //     const status = row.Status
// // // //     if (!status || status.toLowerCase() !== "approved") {
// // // //       console.log(`Row ${index} skipped - Status: ${status}`)
// // // //       return
// // // //     }
    
// // // //     approvedCount++

// // // //     // Parse date - handle MM/DD/YYYY format
// // // //     const dateStr = row["Date Sold"]
// // // //     let dealDate
// // // //     if (dateStr.includes('/')) {
// // // //       // Parse MM/DD/YYYY format
// // // //       const [month, day, year] = dateStr.split('/').map(Number)
// // // //       dealDate = new Date(year, month - 1, day) // month is 0-indexed in JS
// // // //     } else {
// // // //       dealDate = new Date(dateStr)
// // // //     }
    
// // // //     if (isNaN(dealDate.getTime())) {
// // // //       console.log(`Row ${index} invalid date: ${dateStr}`)
// // // //       return
// // // //     }
// // // //     dealDate.setHours(0, 0, 0, 0)

// // // //     const agent = row.Agent || "Unknown"
// // // //     const lead = row["Lead Vendor"] || "Unknown"
    
// // // //     // Get Monthly Premium - clean it first
// // // //     let monthlyPremium = row["Monthly Premium"]
// // // //     if (typeof monthlyPremium === 'string') {
// // // //       // Remove $, commas, and any non-numeric characters
// // // //       monthlyPremium = monthlyPremium.replace(/[^\d.-]/g, '')
// // // //     }
// // // //     monthlyPremium = Number(monthlyPremium) || 0
    
// // // //     const production = monthlyPremium * 12

// // // //     // Try different commission columns - based on your sheet
// // // //     // First try "Advance (75%)" then "Annual Commission $"
// // // //     let commission = row["Advance (75%)"] || row["Annual Commission $"] || 0
// // // //     if (typeof commission === 'string') {
// // // //       // Remove $, commas, and any non-numeric characters
// // // //       commission = commission.replace(/[^\d.-]/g, '')
// // // //     }
// // // //     commission = Number(commission) || 0

// // // //     console.log(`Row ${index} - Approved deal:`, {
// // // //       agent,
// // // //       lead,
// // // //       monthlyPremium,
// // // //       production,
// // // //       commission,
// // // //       dateSold: dateStr,
// // // //       parsedDate: dealDate.toDateString(),
// // // //       today: today.toDateString()
// // // //     })

// // // //     // Initialize agent if not exists
// // // //     if (!metrics.byAgent[agent]) {
// // // //       metrics.byAgent[agent] = {
// // // //         today: { commission: 0, production: 0 },
// // // //         wtd: { commission: 0, production: 0 },
// // // //         mtd: { commission: 0, production: 0 },
// // // //         ytd: { commission: 0, production: 0 }
// // // //       }
// // // //     }

// // // //     // Initialize lead source if not exists
// // // //     if (!metrics.leadSources[lead]) {
// // // //       metrics.leadSources[lead] = 0
// // // //     }

// // // //     // Update totals
// // // //     metrics.leadSources[lead] += production

// // // //     // Today
// // // //     if (dealDate.toDateString() === today.toDateString()) {
// // // //       metrics.today.commission += commission
// // // //       metrics.today.production += production
// // // //       metrics.byAgent[agent].today.commission += commission
// // // //       metrics.byAgent[agent].today.production += production
// // // //       console.log(`Added to today: ${commission} commission, ${production} production`)
// // // //     }

// // // //     // Week to Date
// // // //     if (dealDate >= weekStart) {
// // // //       metrics.wtd.commission += commission
// // // //       metrics.wtd.production += production
// // // //       metrics.byAgent[agent].wtd.commission += commission
// // // //       metrics.byAgent[agent].wtd.production += production
// // // //     }

// // // //     // Month to Date
// // // //     if (dealDate >= monthStart) {
// // // //       metrics.mtd.commission += commission
// // // //       metrics.mtd.production += production
// // // //       metrics.byAgent[agent].mtd.commission += commission
// // // //       metrics.byAgent[agent].mtd.production += production
// // // //     }

// // // //     // Year to Date
// // // //     if (dealDate >= yearStart) {
// // // //       metrics.ytd.commission += commission
// // // //       metrics.ytd.production += production
// // // //       metrics.byAgent[agent].ytd.commission += commission
// // // //       metrics.byAgent[agent].ytd.production += production
// // // //     }
// // // //   })

// // // //   console.log(`Summary: Processed ${totalRows} rows, ${approvedCount} approved deals`)
// // // //   console.log('Final metrics:', {
// // // //     today: metrics.today,
// // // //     ytd: metrics.ytd,
// // // //     agents: Object.keys(metrics.byAgent),
// // // //     leadSources: metrics.leadSources
// // // //   })

// // // //   return metrics
// // // // }



// // // const calculateMetrics = () => {
// // //   const today = new Date()
// // //   today.setHours(0, 0, 0, 0)

// // //   let metrics = {
// // //     today: { 
// // //       commission: 0, 
// // //       production: 0,
// // //       policies: 0,
// // //       premium: 0
// // //     },
// // //     wtd: { 
// // //       commission: 0, 
// // //       production: 0,
// // //       policies: 0,
// // //       premium: 0
// // //     },
// // //     mtd: { 
// // //       commission: 0, 
// // //       production: 0,
// // //       policies: 0,
// // //       premium: 0
// // //     },
// // //     ytd: { 
// // //       commission: 0, 
// // //       production: 0,
// // //       policies: 0,
// // //       premium: 0
// // //     },
// // //     byAgent: {},
// // //     leadSources: {},
// // //     byProduct: {},  // Track by product type
// // //     coverageAmounts: 0
// // //   }

// // //   if (!data || data.length === 0) {
// // //     return metrics
// // //   }

// // //   console.log('Processing mortgage/insurance data...')

// // //   // Date ranges
// // //   const weekStart = new Date(today)
// // //   weekStart.setDate(today.getDate() - today.getDay())
// // //   weekStart.setHours(0, 0, 0, 0)

// // //   const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)
// // //   monthStart.setHours(0, 0, 0, 0)

// // //   const yearStart = new Date(today.getFullYear(), 0, 1)
// // //   yearStart.setHours(0, 0, 0, 0)

// // //   data.forEach((row, index) => {
// // //     // Check status
// // //     if (!row.Status || row.Status.toLowerCase() !== 'approved') {
// // //       return
// // //     }

// // //     // Parse date
// // //     const dateStr = row["Date Sold"]
// // //     const [month, day, year] = dateStr.split('/').map(Number)
// // //     const dealDate = new Date(year, month - 1, day)
// // //     dealDate.setHours(0, 0, 0, 0)

// // //     const agent = row.Agent || "Unknown"
// // //     const lead = row["Lead Vendor"] || "Unknown"
// // //     const product = row["Product"] || "Unknown"
    
// // //     // Mortgage/Insurance specific metrics
// // //     // Coverage Amount (loan amount/insurance coverage)
// // //     let coverageAmount = row["Coverage Amount"] || 0
// // //     if (typeof coverageAmount === 'string') {
// // //       coverageAmount = coverageAmount.replace(/[^\d.-]/g, '')
// // //     }
// // //     coverageAmount = Number(coverageAmount) || 0
    
// // //     // Monthly Premium (mortgage insurance premium)
// // //     let monthlyPremium = row["Monthly Premium"] || 0
// // //     if (typeof monthlyPremium === 'string') {
// // //       monthlyPremium = monthlyPremium.replace(/[^\d.-]/g, '')
// // //     }
// // //     monthlyPremium = Number(monthlyPremium) || 0
    
// // //     // Annual Premium (monthly * 12)
// // //     const annualPremium = monthlyPremium * 12
    
// // //     // Commission calculations
// // //     // Try different commission columns
// // //     let commission = 0
// // //     const commissionSources = [
// // //       'Advance (75%)',
// // //       'Annual Commission $', 
// // //       'Override Commission $',
// // //       'Agent Commission %' // This might need calculation
// // //     ]
    
// // //     for (const source of commissionSources) {
// // //       if (row[source] && row[source] !== '') {
// // //         let value = row[source]
// // //         if (typeof value === 'string') {
// // //           value = value.replace(/[^\d.-]/g, '')
// // //         }
// // //         commission = Number(value) || 0
// // //         if (commission > 0) break
// // //       }
// // //     }
    
// // //     // If commission is percentage, calculate from premium
// // //     if (row["Agent Commission %"] && commission === 0) {
// // //       let commissionPercent = row["Agent Commission %"]
// // //       if (typeof commissionPercent === 'string') {
// // //         commissionPercent = commissionPercent.replace(/[^\d.-]/g, '')
// // //       }
// // //       commissionPercent = Number(commissionPercent) || 0
// // //       commission = (commissionPercent / 100) * annualPremium
// // //     }

// // //     // Initialize agent if not exists
// // //     if (!metrics.byAgent[agent]) {
// // //       metrics.byAgent[agent] = {
// // //         today: { commission: 0, production: 0, policies: 0, premium: 0 },
// // //         wtd: { commission: 0, production: 0, policies: 0, premium: 0 },
// // //         mtd: { commission: 0, production: 0, policies: 0, premium: 0 },
// // //         ytd: { commission: 0, production: 0, policies: 0, premium: 0 }
// // //       }
// // //     }

// // //     // Initialize product tracking
// // //     if (!metrics.byProduct[product]) {
// // //       metrics.byProduct[product] = 0
// // //     }

// // //     // Initialize lead source if not exists
// // //     if (!metrics.leadSources[lead]) {
// // //       metrics.leadSources[lead] = 0
// // //     }

// // //     // Update totals
// // //     metrics.coverageAmounts += coverageAmount
// // //     metrics.byProduct[product] += 1
// // //     metrics.leadSources[lead] += annualPremium

// // //     // Today
// // //     if (dealDate.toDateString() === today.toDateString()) {
// // //       metrics.today.commission += commission
// // //       metrics.today.production += annualPremium
// // //       metrics.today.policies += 1
// // //       metrics.today.premium += monthlyPremium
      
// // //       metrics.byAgent[agent].today.commission += commission
// // //       metrics.byAgent[agent].today.production += annualPremium
// // //       metrics.byAgent[agent].today.policies += 1
// // //       metrics.byAgent[agent].today.premium += monthlyPremium
// // //     }

// // //     // Week to Date
// // //     if (dealDate >= weekStart) {
// // //       metrics.wtd.commission += commission
// // //       metrics.wtd.production += annualPremium
// // //       metrics.wtd.policies += 1
// // //       metrics.wtd.premium += monthlyPremium
      
// // //       metrics.byAgent[agent].wtd.commission += commission
// // //       metrics.byAgent[agent].wtd.production += annualPremium
// // //       metrics.byAgent[agent].wtd.policies += 1
// // //       metrics.byAgent[agent].wtd.premium += monthlyPremium
// // //     }

// // //     // Month to Date
// // //     if (dealDate >= monthStart) {
// // //       metrics.mtd.commission += commission
// // //       metrics.mtd.production += annualPremium
// // //       metrics.mtd.policies += 1
// // //       metrics.mtd.premium += monthlyPremium
      
// // //       metrics.byAgent[agent].mtd.commission += commission
// // //       metrics.byAgent[agent].mtd.production += annualPremium
// // //       metrics.byAgent[agent].mtd.policies += 1
// // //       metrics.byAgent[agent].mtd.premium += monthlyPremium
// // //     }

// // //     // Year to Date
// // //     if (dealDate >= yearStart) {
// // //       metrics.ytd.commission += commission
// // //       metrics.ytd.production += annualPremium
// // //       metrics.ytd.policies += 1
// // //       metrics.ytd.premium += monthlyPremium
      
// // //       metrics.byAgent[agent].ytd.commission += commission
// // //       metrics.byAgent[agent].ytd.production += annualPremium
// // //       metrics.byAgent[agent].ytd.policies += 1
// // //       metrics.byAgent[agent].ytd.premium += monthlyPremium
// // //     }
// // //   })

// // //   console.log('Mortgage metrics calculated:', {
// // //     totalCoverage: metrics.coverageAmounts,
// // //     totalPolicies: metrics.ytd.policies,
// // //     byProduct: metrics.byProduct
// // //   })

// // //   return metrics
// // // }


// // //   const handleLogout = async () => {
// // //     await supabase.auth.signOut()
// // //     window.location.href = '/auth/login'
// // //   }

// // //   if (loading && data.length === 0) {
// // //     return (
// // //       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
// // //         <div className="text-white text-xl animate-pulse">Loading dashboard...</div>
// // //       </div>
// // //     )
// // //   }

// // //   if (error) {
// // //     return (
// // //       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
// // //         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
// // //           <div className="text-white text-xl mb-4">Error: {error}</div>
// // //           <button
// // //             onClick={fetchData}
// // //             className="px-6 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors mr-2"
// // //           >
// // //             Retry
// // //           </button>
// // //           <button
// // //             onClick={handleLogout}
// // //             className="px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
// // //           >
// // //             Logout
// // //           </button>
// // //         </div>
// // //       </div>
// // //     )
// // //   }

// // //   const metrics = calculateMetrics()
// // //   const commissionPercent = Math.min(100, (metrics.ytd.commission / GOALS.commission) * 100)

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white p-4">
// // //       {/* Top Bar with Logout */}
// // //       {/* <div className="flex justify-between items-center mb-4">
// // //         <div className="text-sm opacity-75">
// // //           Welcome to Production Dashboard
// // //         </div>
// // //         <button
// // //             onClick={handleLogout}
// // //             className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-sm float-right top-0"
// // //             >
// // //             Logout
// // //         </button>
        
// // //       </div> */}

// // //       <div className="max-w-7xl mx-auto space-y-4">
// // //         {/* Header */}
// // //         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20">
// // //           <button
// // //             onClick={handleLogout}
// // //             className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-sm float-right top-0"
// // //             >
// // //             Logout
// // //           </button>
          
// // //           <h1 className="text-4xl font-bold mb-2">🎯 Production Scoreboard</h1>
// // //           <p className="text-white/80">Being consistently consistent will make me a millionaire</p>

// // //         </div>

// // //         {/* Daily Quote */}
// // //         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20">
// // //           <div className="text-2xl mb-2">💭</div>
// // //           <div className="text-xl italic font-medium">Money follows small actions repeated daily.</div>
// // //         </div>

// // //         {/* Grid */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// // //           {/* Today Commission */}
// // //           <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Today Commission</div>
// // //               <div className="text-2xl">💰</div>
// // //             </div>
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.today.commission)}
// // //             </div>
// // //             <div className="grid grid-cols-3 gap-2">
// // //               {Object.entries(metrics.byAgent).map(([agent, stats]) => (
// // //                 <div key={agent} className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
// // //                   <span className="block text-xs font-semibold text-gray-600 mb-1 truncate" title={agent}>
// // //                     {agent}
// // //                   </span>
// // //                   <span className="text-lg font-black text-gray-800">{formatCurrency(stats.today.commission)}</span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* WTD Commission */}
// // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Week to Date</div>
// // //               <div className="text-2xl">📅</div>
// // //             </div>
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.wtd.commission)}
// // //             </div>
// // //             <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
// // //               {Object.entries(metrics.byAgent).map(([agent, stats]) => (
// // //                 <div key={`${agent}-wtd`} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
// // //                   <span className="text-sm font-semibold text-gray-600 truncate max-w-[60%]" title={agent}>
// // //                     {agent}
// // //                   </span>
// // //                   <span className="text-sm font-bold text-gray-800 whitespace-nowrap">
// // //                     {formatCurrency(stats.wtd.commission)}
// // //                   </span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* MTD Commission */}
// // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Month to Date</div>
// // //               <div className="text-2xl">📊</div>
// // //             </div>
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.mtd.commission)}
// // //             </div>
// // //             <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
// // //               {Object.entries(metrics.byAgent).map(([agent, stats]) => (
// // //                 <div key={`${agent}-mtd`} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
// // //                   <span className="text-sm font-semibold text-gray-600 truncate max-w-[60%]" title={agent}>
// // //                     {agent}
// // //                   </span>
// // //                   <span className="text-sm font-bold text-gray-800 whitespace-nowrap">
// // //                     {formatCurrency(stats.mtd.commission)}
// // //                   </span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* YTD Commission */}
// // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Year to Date</div>
// // //               <div className="text-2xl">🎯</div>
// // //             </div>
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.ytd.commission)}
// // //             </div>
// // //             <div className="space-y-2 mb-4">
// // //               <div className="flex justify-between py-2">
// // //                 <span className="text-sm font-semibold text-gray-600">Annual Goal</span>
// // //                 <span className="text-sm font-bold text-gray-800">$450,000</span>
// // //               </div>
// // //             </div>
// // //             <div className="mb-4">
// // //               <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
// // //                 <div 
// // //                   className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow transition-all duration-500"
// // //                   style={{ width: `${commissionPercent}%` }}
// // //                 ></div>
// // //               </div>
// // //               <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// // //                 {commissionPercent.toFixed(1)}% to Goal
// // //               </div>
// // //             </div>
// // //             <div className="flex justify-between py-2">
// // //               <span className="text-sm font-semibold text-gray-600">Progress</span>
// // //               <span className="text-sm font-bold text-gray-800">{commissionPercent.toFixed(1)}%</span>
// // //             </div>
// // //           </div>

// // //           {/* Today Production */}
// // //           <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Today Production</div>
// // //               <div className="text-2xl">📈</div>
// // //             </div>
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.today.production)}
// // //             </div>
// // //             <div className="grid grid-cols-3 gap-2">
// // //               {Object.entries(metrics.byAgent).map(([agent, stats]) => (
// // //                 <div key={`${agent}-prod`} className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
// // //                   <span className="block text-xs font-semibold text-gray-600 mb-1 truncate" title={agent}>
// // //                     {agent}
// // //                   </span>
// // //                   <span className="text-lg font-black text-gray-800">{formatCurrency(stats.today.production)}</span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* WTD Production */}
// // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">WTD Production</div>
// // //               <div className="text-2xl">📈</div>
// // //             </div>
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.wtd.production)}
// // //             </div>
// // //             <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
// // //               {Object.entries(metrics.byAgent).map(([agent, stats]) => (
// // //                 <div key={`${agent}-wtd-prod`} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
// // //                   <span className="text-sm font-semibold text-gray-600 truncate max-w-[60%]" title={agent}>
// // //                     {agent}
// // //                   </span>
// // //                   <span className="text-sm font-bold text-gray-800 whitespace-nowrap">
// // //                     {formatCurrency(stats.wtd.production)}
// // //                   </span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* MTD Production */}
// // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">MTD Production</div>
// // //               <div className="text-2xl">📈</div>
// // //             </div>
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.mtd.production)}
// // //             </div>
// // //             <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
// // //               {Object.entries(metrics.byAgent).map(([agent, stats]) => (
// // //                 <div key={`${agent}-mtd-prod`} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
// // //                   <span className="text-sm font-semibold text-gray-600 truncate max-w-[60%]" title={agent}>
// // //                     {agent}
// // //                   </span>
// // //                   <span className="text-sm font-bold text-gray-800 whitespace-nowrap">
// // //                     {formatCurrency(stats.mtd.production)}
// // //                   </span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* Top Leads */}
// // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Top Lead Sources</div>
// // //               <div className="text-2xl">🏆</div>
// // //             </div>
// // //             <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
// // //               {Object.entries(metrics.leadSources)
// // //                 .sort((a, b) => b[1] - a[1])
// // //                 .slice(0, 6)
// // //                 .map(([lead, total]) => (
// // //                   <div key={lead} className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500 flex justify-between items-center">
// // //                     <span className="text-sm font-bold text-gray-800 truncate max-w-[70%]" title={lead}>
// // //                       {lead}
// // //                     </span>
// // //                     <span className="text-sm font-black bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent whitespace-nowrap">
// // //                       {formatCurrency(total)}
// // //                     </span>
// // //                   </div>
// // //                 ))}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Footer */}
// // //         <div className="text-right text-sm text-white/70">
// // //           Last Updated: {lastUpdated.toLocaleString()} | 
// // //           Auto-refresh: 60s | 
// // //           Status: 
// // //           <span className="ml-2 inline-block px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs font-semibold">
// // //             {data.length > 0 ? `Connected (${data.length} records)` : 'No Data'}
// // //           </span>
// // //           <button
// // //             onClick={fetchData}
// // //             className="ml-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-xs"
// // //             disabled={loading}
// // //           >
// // //             {loading ? 'Refreshing...' : 'Refresh Now'}
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }




















// // 'use client'

// // import { useState, useEffect, useCallback } from 'react'

// // // Default goals (will be overridden by Google Sheets data)
// // const DEFAULT_GOALS = {
// //   commission: 450000,
// //   production: 1500000,
// //   deals: 600
// // }

// // export default function DashboardContent() {
// //   const [data, setData] = useState([])
// //   const [quotes, setQuotes] = useState([])
// //   const [dailyQuote, setDailyQuote] = useState('')
// //   const [goals, setGoals] = useState(DEFAULT_GOALS)
// //   const [loading, setLoading] = useState(true)
// //   const [error, setError] = useState(null)
// //   const [lastUpdated, setLastUpdated] = useState(new Date())

// //   const fetchData = useCallback(async () => {
// //     try {
// //       setLoading(true)
      
// //       const response = await fetch('/api/sheet')
// //       const result = await response.json()
      
// //       if (!response.ok) {
// //         throw new Error(result.error || 'Failed to fetch data')
// //       }
      
// //       console.log('Data received:', {
// //         rows: result.data?.length,
// //         quotes: result.quotes?.length,
// //         goals: result.goals
// //       })
      
// //       setData(result.data || [])
// //       setQuotes(result.quotes || [])
// //       setGoals(result.goals || DEFAULT_GOALS)
// //       setError(null)
// //       setLastUpdated(new Date())
      
// //       // Set daily quote
// //       if (result.quotes && result.quotes.length > 0) {
// //         selectDailyQuote(result.quotes)
// //       } else {
// //         setDailyQuote('Money follows small actions repeated daily.')
// //       }
      
// //     } catch (err) {
// //       console.error('Error fetching data:', err)
// //       setError(err.message || 'Failed to load dashboard data')
// //     } finally {
// //       setLoading(false)
// //     }
// //   }, [])

// //   // Function to select daily quote (changes daily)
// //   const selectDailyQuote = (quotesList) => {
// //     if (!quotesList || quotesList.length === 0) return
    
// //     // Use the day of the year to select a consistent daily quote
// //     const today = new Date()
// //     const start = new Date(today.getFullYear(), 0, 0)
// //     const diff = today - start
// //     const oneDay = 1000 * 60 * 60 * 24
// //     const dayOfYear = Math.floor(diff / oneDay)
    
// //     const quoteIndex = dayOfYear % quotesList.length
// //     const selectedQuote = quotesList[quoteIndex]
// //     setDailyQuote(selectedQuote.text + (selectedQuote.author ? ` - ${selectedQuote.author}` : ''))
// //   }

// //   useEffect(() => {
// //     fetchData()
// //     const interval = setInterval(fetchData, 60000)
// //     return () => clearInterval(interval)
// //   }, [fetchData])

// //   const formatCurrency = (amount) => {
// //     return new Intl.NumberFormat("en-US", {
// //       style: "currency",
// //       currency: "USD",
// //       minimumFractionDigits: 0
// //     }).format(amount || 0)
// //   }

// //   const cleanNumber = (value) => {
// //     if (!value) return 0
// //     const str = String(value)
// //     const cleaned = str.replace(/[^\d.-]/g, '')
// //     return Number(cleaned) || 0
// //   }

// //   const calculateMetrics = () => {
// //     const today = new Date()
// //     today.setHours(0, 0, 0, 0)

// //     // Initialize metrics with Scott, George, and Other Agents
// //     let metrics = {
// //       today: { commission: 0, production: 0, deals: 0, premium: 0 },
// //       wtd: { commission: 0, production: 0, deals: 0, premium: 0 },
// //       mtd: { commission: 0, production: 0, deals: 0, premium: 0 },
// //       ytd: { commission: 0, production: 0, deals: 0, premium: 0 },
// //       byAgent: {
// //         'Scott Watkins': {
// //           today: { commission: 0, production: 0, deals: 0, premium: 0 },
// //           wtd: { commission: 0, production: 0, deals: 0, premium: 0 },
// //           mtd: { commission: 0, production: 0, deals: 0, premium: 0 },
// //           ytd: { commission: 0, production: 0, deals: 0, premium: 0 }
// //         },
// //         'George Knox': {
// //           today: { commission: 0, production: 0, deals: 0, premium: 0 },
// //           wtd: { commission: 0, production: 0, deals: 0, premium: 0 },
// //           mtd: { commission: 0, production: 0, deals: 0, premium: 0 },
// //           ytd: { commission: 0, production: 0, deals: 0, premium: 0 }
// //         },
// //         'Other Agents': {
// //           today: { commission: 0, production: 0, deals: 0, premium: 0 },
// //           wtd: { commission: 0, production: 0, deals: 0, premium: 0 },
// //           mtd: { commission: 0, production: 0, deals: 0, premium: 0 },
// //           ytd: { commission: 0, production: 0, deals: 0, premium: 0 }
// //         }
// //       },
// //       leadSources: {},
// //       coverageAmounts: 0
// //     }

// //     if (!data || data.length === 0) {
// //       return metrics
// //     }

// //     // Date ranges
// //     const weekStart = new Date(today)
// //     weekStart.setDate(today.getDate() - today.getDay()) // Sunday start
// //     weekStart.setHours(0, 0, 0, 0)

// //     const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)
// //     monthStart.setHours(0, 0, 0, 0)

// //     const yearStart = new Date(today.getFullYear(), 0, 1)
// //     yearStart.setHours(0, 0, 0, 0)

// //     console.log('Date ranges:', {
// //       today: today.toDateString(),
// //       weekStart: weekStart.toDateString(),
// //       monthStart: monthStart.toDateString(),
// //       yearStart: yearStart.toDateString()
// //     })

// //     data.forEach((row) => {
// //       // Check status - must be "Approved"
// //       const status = row._status
// //       if (!status || status.toLowerCase() !== 'approved') {
// //         return
// //       }

// //       // Parse date from "MM/DD/YYYY" format
// //       const dateStr = row._dateSold
// //       if (!dateStr) return
      
// //       let dealDate
// //       if (dateStr.includes('/')) {
// //         const [month, day, year] = dateStr.split('/').map(Number)
// //         dealDate = new Date(year, month - 1, day)
// //       } else {
// //         dealDate = new Date(dateStr)
// //       }
      
// //       if (isNaN(dealDate.getTime())) {
// //         return
// //       }
// //       dealDate.setHours(0, 0, 0, 0)

// //       // Get agent and categorize
// //       const agent = row._agent || ''
// //       const agentCategory = getAgentCategory(agent)
      
// //       const lead = row._leadVendor || 'Unknown'
      
// //       // Get values
// //       const monthlyPremium = cleanNumber(row._monthlyPremium)
// //       const annualPremium = monthlyPremium * 12
// //       const commission = cleanNumber(row._netCommission) // Using Column AA
// //       const coverageAmount = cleanNumber(row._coverageAmount)

// //       // Update coverage total
// //       metrics.coverageAmounts += coverageAmount

// //       // Initialize lead source if not exists
// //       if (!metrics.leadSources[lead]) {
// //         metrics.leadSources[lead] = 0
// //       }
// //       metrics.leadSources[lead] += annualPremium

// //       // Helper to update metrics for a time period
// //       const updatePeriod = (period, periodStart) => {
// //         if (dealDate >= periodStart) {
// //           metrics[period].commission += commission
// //           metrics[period].production += annualPremium
// //           metrics[period].premium += monthlyPremium
// //           metrics[period].deals += 1
          
// //           metrics.byAgent[agentCategory][period].commission += commission
// //           metrics.byAgent[agentCategory][period].production += annualPremium
// //           metrics.byAgent[agentCategory][period].premium += monthlyPremium
// //           metrics.byAgent[agentCategory][period].deals += 1
// //         }
// //       }

// //       // Today (exact match)
// //       if (dealDate.toDateString() === today.toDateString()) {
// //         metrics.today.commission += commission
// //         metrics.today.production += annualPremium
// //         metrics.today.premium += monthlyPremium
// //         metrics.today.deals += 1
        
// //         metrics.byAgent[agentCategory].today.commission += commission
// //         metrics.byAgent[agentCategory].today.production += annualPremium
// //         metrics.byAgent[agentCategory].today.premium += monthlyPremium
// //         metrics.byAgent[agentCategory].today.deals += 1
// //       }

// //       // Update other periods
// //       updatePeriod('wtd', weekStart)
// //       updatePeriod('mtd', monthStart)
// //       updatePeriod('ytd', yearStart)
// //     })

// //     console.log('Calculated metrics:', {
// //       today: metrics.today,
// //       ytd: metrics.ytd,
// //       agents: metrics.byAgent,
// //       coverage: metrics.coverageAmounts
// //     })

// //     return metrics
// //   }

// //   // Helper to categorize agents
// //   const getAgentCategory = (agentName) => {
// //     if (!agentName) return 'Other Agents'
    
// //     const name = agentName.toLowerCase()
// //     if (name.includes('scott') || name.includes('watkins')) {
// //       return 'Scott Watkins'
// //     } else if (name.includes('george') || name.includes('knox')) {
// //       return 'George Knox'
// //     } else {
// //       return 'Other Agents'
// //     }
// //   }

// //   const handleLogout = async () => {
// //     try {
// //       const response = await fetch('/api/auth/logout', { method: 'POST' })
// //       if (response.ok) {
// //         window.location.href = '/login'
// //       }
// //     } catch (error) {
// //       console.error('Logout error:', error)
// //       window.location.href = '/login'
// //     }
// //   }

// //   if (loading && data.length === 0) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
// //         <div className="text-white text-xl animate-pulse">Loading dashboard...</div>
// //       </div>
// //     )
// //   }

// //   if (error) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
// //         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
// //           <div className="text-white text-xl mb-4">Error: {error}</div>
// //           <button
// //             onClick={fetchData}
// //             className="px-6 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors mr-2"
// //           >
// //             Retry
// //           </button>
// //           <button
// //             onClick={handleLogout}
// //             className="px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
// //           >
// //             Logout
// //           </button>
// //         </div>
// //       </div>
// //     )
// //   }

// //   const metrics = calculateMetrics()
// //   const commissionPercent = Math.min(100, (metrics.ytd.commission / goals.commission) * 100)
// //   const productionPercent = Math.min(100, (metrics.ytd.production / goals.production) * 100)
// //   const dealsPercent = Math.min(100, (metrics.ytd.deals / goals.deals) * 100)

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white p-4">
// //       {/* Top Bar with Logout */}
// //       <div className="flex justify-between items-center mb-4">
// //         <div className="text-sm opacity-75">
// //           Welcome to Production Dashboard
// //         </div>
// //         <button
// //           onClick={handleLogout}
// //           className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-sm"
// //         >
// //           Logout
// //         </button>
// //       </div>

// //       <div className="max-w-7xl mx-auto space-y-4">
// //         {/* Header */}
// //         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20">
// //           <h1 className="text-4xl font-bold mb-2">🎯 Production Scoreboard</h1>
// //           <p className="text-white/80">Being consistently consistent will make me a millionaire</p>
// //         </div>

// //         {/* Daily Quote */}
// //         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20">
// //           <div className="text-2xl mb-2">💭</div>
// //           <div className="text-xl italic font-medium">{dailyQuote}</div>
// //           {quotes.length > 0 && (
// //             <div className="mt-2 text-sm text-white/60">
// //               Daily Quote • {quotes.length} quotes in rotation
// //             </div>
// //           )}
// //         </div>

// //         {/* Today's Metrics Row */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// //           {/* Today's Commission */}
// //           <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Today's Commission</div>
// //               <div className="text-2xl">💰</div>
// //             </div>
// //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// //               {formatCurrency(metrics.today.commission)}
// //             </div>
// //             <div className="grid grid-cols-3 gap-2">
// //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
// //                 <span className="block text-xs font-semibold text-gray-600 mb-1">Scott</span>
// //                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].today.commission)}</span>
// //               </div>
// //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
// //                 <span className="block text-xs font-semibold text-gray-600 mb-1">George</span>
// //                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].today.commission)}</span>
// //               </div>
// //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
// //                 <span className="block text-xs font-semibold text-gray-600 mb-1">Others</span>
// //                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['Other Agents'].today.commission)}</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Today's Premium */}
// //           <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Today's Premium</div>
// //               <div className="text-2xl">📈</div>
// //             </div>
// //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
// //               {formatCurrency(metrics.today.premium)}
// //             </div>
// //             <div className="text-sm text-gray-600 mb-2">Annual: {formatCurrency(metrics.today.production)}</div>
// //             <div className="grid grid-cols-3 gap-2">
// //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-orange-500">
// //                 <span className="block text-xs font-semibold text-gray-600 mb-1">Scott</span>
// //                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].today.premium)}</span>
// //               </div>
// //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-orange-500">
// //                 <span className="block text-xs font-semibold text-gray-600 mb-1">George</span>
// //                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].today.premium)}</span>
// //               </div>
// //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-orange-500">
// //                 <span className="block text-xs font-semibold text-gray-600 mb-1">Others</span>
// //                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['Other Agents'].today.premium)}</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Today's Deals */}
// //           <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Today's Deals</div>
// //               <div className="text-2xl">📑</div>
// //             </div>
// //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
// //               {metrics.today.deals}
// //             </div>
// //             <div className="grid grid-cols-3 gap-2">
// //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-blue-500">
// //                 <span className="block text-xs font-semibold text-gray-600 mb-1">Scott</span>
// //                 <span className="text-lg font-black text-gray-800">{metrics.byAgent['Scott Watkins'].today.deals}</span>
// //               </div>
// //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-blue-500">
// //                 <span className="block text-xs font-semibold text-gray-600 mb-1">George</span>
// //                 <span className="text-lg font-black text-gray-800">{metrics.byAgent['George Knox'].today.deals}</span>
// //               </div>
// //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-blue-500">
// //                 <span className="block text-xs font-semibold text-gray-600 mb-1">Others</span>
// //                 <span className="text-lg font-black text-gray-800">{metrics.byAgent['Other Agents'].today.deals}</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Today's Coverage */}
// //           <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Today's Coverage</div>
// //               <div className="text-2xl">🛡️</div>
// //             </div>
// //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
// //               {formatCurrency(metrics.coverageAmounts)}
// //             </div>
// //             <div className="text-sm text-gray-600">
// //               Total Coverage • {metrics.ytd.deals} deals YTD
// //             </div>
// //           </div>
// //         </div>

// //         {/* WTD, MTD, YTD Row */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// //           {/* WTD Commission */}
// //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">WTD Commission</div>
// //               <div className="text-2xl">📅</div>
// //             </div>
// //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// //               {formatCurrency(metrics.wtd.commission)}
// //             </div>
// //             <div className="space-y-2">
// //               <div className="flex justify-between py-2 border-b border-gray-200">
// //                 <span className="text-sm font-semibold text-gray-600">Scott</span>
// //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].wtd.commission)}</span>
// //               </div>
// //               <div className="flex justify-between py-2 border-b border-gray-200">
// //                 <span className="text-sm font-semibold text-gray-600">George</span>
// //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].wtd.commission)}</span>
// //               </div>
// //               <div className="flex justify-between py-2">
// //                 <span className="text-sm font-semibold text-gray-600">Other Agents</span>
// //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Other Agents'].wtd.commission)}</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* MTD Commission */}
// //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">MTD Commission</div>
// //               <div className="text-2xl">📊</div>
// //             </div>
// //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// //               {formatCurrency(metrics.mtd.commission)}
// //             </div>
// //             <div className="space-y-2">
// //               <div className="flex justify-between py-2 border-b border-gray-200">
// //                 <span className="text-sm font-semibold text-gray-600">Scott</span>
// //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].mtd.commission)}</span>
// //               </div>
// //               <div className="flex justify-between py-2 border-b border-gray-200">
// //                 <span className="text-sm font-semibold text-gray-600">George</span>
// //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].mtd.commission)}</span>
// //               </div>
// //               <div className="flex justify-between py-2">
// //                 <span className="text-sm font-semibold text-gray-600">Other Agents</span>
// //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Other Agents'].mtd.commission)}</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* YTD Commission */}
// //           {/* <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">YTD Commission</div>
// //               <div className="text-2xl">🎯</div>
// //             </div>
// //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// //               {formatCurrency(metrics.ytd.commission)}
// //             </div>
// //             <div className="space-y-2 mb-4">
// //               <div className="flex justify-between py-2">
// //                 <span className="text-sm font-semibold text-gray-600">Annual Goal</span>
// //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(goals.commission)}</span>
// //               </div>
// //             </div>
// //             <div className="mb-4">
// //               <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
// //                 <div 
// //                   className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow transition-all duration-500"
// //                   style={{ width: `${commissionPercent}%` }}
// //                 ></div>
// //               </div>
// //               <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// //                 {commissionPercent.toFixed(1)}%
// //               </div>
// //             </div>
// //             <div className="flex justify-between py-2">
// //               <span className="text-sm font-semibold text-gray-600">Progress</span>
// //               <span className="text-sm font-bold text-gray-800">{commissionPercent.toFixed(1)}%</span>
// //             </div>
// //           </div> */}

// //           {/* YTD Commission */}
// //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">YTD Commission</div>
// //               <div className="text-2xl">💰</div>
// //             </div>
            
// //             {/* Main YTD Commission Number */}
// //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// //               {formatCurrency(metrics.ytd.commission)}
// //             </div>
            
// //             {/* Annual Goal */}
// //             <div className="flex justify-between items-center mb-3">
// //               <span className="text-sm font-semibold text-gray-600">Annual Goal</span>
// //               <span className="text-sm font-bold text-gray-800">{formatCurrency(goals.commission)}</span>
// //             </div>
            
// //             {/* Agent Breakdown */}
// //             <div className="space-y-2 mb-4">
// //               <div className="flex justify-between items-center">
// //                 <span className="text-sm font-semibold text-gray-600">George Knox</span>
// //                 <span className="text-sm font-bold text-gray-800">
// //                   {formatCurrency(metrics.byAgent['George Knox']?.ytd.commission || 0)}
// //                 </span>
// //               </div>
// //               <div className="flex justify-between items-center">
// //                 <span className="text-sm font-semibold text-gray-600">Scott Watkins</span>
// //                 <span className="text-sm font-bold text-gray-800">
// //                   {formatCurrency(metrics.byAgent['Scott Watkins']?.ytd.commission || 0)}
// //                 </span>
// //               </div>
// //               <div className="flex justify-between items-center">
// //                 <span className="text-sm font-semibold text-gray-600">Other Agents</span>
// //                 <span className="text-sm font-bold text-gray-800">
// //                   {formatCurrency(metrics.byAgent['Other Agents']?.ytd.commission || 0)}
// //                 </span>
// //               </div>
// //             </div>
            
// //             {/* Progress Bar */}
// //             <div className="mb-3">
// //               <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
// //                 <div 
// //                   className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow transition-all duration-500"
// //                   style={{ width: `${commissionPercent}%` }}
// //                 ></div>
// //               </div>
// //               <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// //                 {commissionPercent.toFixed(1)}%
// //               </div>
// //             </div>
            
// //             {/* Progress Label */}
// //             <div className="flex justify-between items-center">
// //               <span className="text-sm font-semibold text-gray-600">Progress</span>
// //               <span className="text-sm font-bold text-gray-800">{commissionPercent.toFixed(1)}%</span>
// //             </div>
// //           </div>

// //           {/* YTD Production */}
// //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">YTD Production</div>
// //               <div className="text-2xl">📈</div>
// //             </div>
            
// //             {/* Main YTD Production Number */}
// //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
// //               {formatCurrency(metrics.ytd.production)}
// //             </div>
            
// //             {/* Annual Goal */}
// //             <div className="flex justify-between items-center mb-3">
// //               <span className="text-sm font-semibold text-gray-600">Annual Goal</span>
// //               <span className="text-sm font-bold text-gray-800">{formatCurrency(goals.production)}</span>
// //             </div>
            
// //             {/* Agent Breakdown */}
// //             <div className="space-y-2 mb-4">
// //               {Object.entries(metrics.byAgent || {})
// //                 .sort((a, b) => {
// //                   // Always keep "Other Agents" at the bottom
// //                   if (a[0] === "Other Agents") return 1;
// //                   if (b[0] === "Other Agents") return -1;

// //                   // Sort remaining agents by production (highest first)
// //                   return (b[1]?.ytd.production || 0) - (a[1]?.ytd.production || 0);
// //                 })
// //                 .map(([agentName, agentData]) => (
// //                   <div
// //                     key={agentName}
// //                     className="flex justify-between items-center"
// //                   >
// //                     <span className="text-sm font-semibold text-gray-600">
// //                       {agentName}
// //                     </span>

// //                     <span className="text-sm font-bold text-gray-800">
// //                       {formatCurrency(agentData?.ytd.production || 0)}
// //                     </span>
// //                   </div>
// //                 ))}
// //             </div>

            
// //             {/* Progress Bar */}
// //             <div className="mb-3">
// //               <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
// //                 <div 
// //                   className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow transition-all duration-500"
// //                   style={{ width: `${productionPercent}%` }}
// //                 ></div>
// //               </div>
// //               <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// //                 {productionPercent.toFixed(1)}%
// //               </div>
// //             </div>
            
// //             {/* Progress Label */}
// //             <div className="flex justify-between items-center">
// //               <span className="text-sm font-semibold text-gray-600">Progress</span>
// //               <span className="text-sm font-bold text-gray-800">{productionPercent.toFixed(1)}%</span>
// //             </div>
// //           </div>

// //           {/* YTD Premium */}
// //           {/* <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">YTD Premium</div>
// //               <div className="text-2xl">🏆</div>
// //             </div>
// //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
// //               {formatCurrency(metrics.ytd.premium)}
// //             </div>
// //             <div className="text-sm text-gray-600 mb-2">Annual: {formatCurrency(metrics.ytd.production)}</div>
// //             <div className="space-y-2 mb-4">
// //               <div className="flex justify-between py-2">
// //                 <span className="text-sm font-semibold text-gray-600">Annual Goal</span>
// //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(goals.production)}</span>
// //               </div>
// //             </div>
// //             <div className="mb-4">
// //               <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
// //                 <div 
// //                   className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow transition-all duration-500"
// //                   style={{ width: `${productionPercent}%` }}
// //                 ></div>
// //               </div>
// //               <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// //                 {productionPercent.toFixed(1)}%
// //               </div>
// //             </div>
// //             <div className="flex justify-between py-2">
// //               <span className="text-sm font-semibold text-gray-600">Progress</span>
// //               <span className="text-sm font-bold text-gray-800">{productionPercent.toFixed(1)}%</span>
// //             </div>
// //           </div> */}
// //         </div>

// //         {/* Goals and Lead Sources Row */}
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
// //           {/* 2026 Annual Goals Progress */}
// //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">2026 Annual Goals</div>
// //               <div className="text-2xl">🎯</div>
// //             </div>
            
// //             <div className="space-y-4">
// //               {/* Commission Goal */}
// //               <div>
// //                 <div className="flex justify-between mb-1">
// //                   <span className="text-sm font-semibold text-gray-600">Commission</span>
// //                   <span className="text-sm font-bold text-gray-800">
// //                     {formatCurrency(metrics.ytd.commission)} / {formatCurrency(goals.commission)}
// //                   </span>
// //                 </div>
// //                 <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
// //                   <div 
// //                     className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
// //                     style={{ width: `${commissionPercent}%` }}
// //                   ></div>
// //                 </div>
// //                 <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// //                   {commissionPercent.toFixed(1)}%
// //                 </div>
// //               </div>
              
// //               {/* Production Goal */}
// //               <div>
// //                 <div className="flex justify-between mb-1">
// //                   <span className="text-sm font-semibold text-gray-600">Production</span>
// //                   <span className="text-sm font-bold text-gray-800">
// //                     {formatCurrency(metrics.ytd.production)} / {formatCurrency(goals.production)}
// //                   </span>
// //                 </div>
// //                 <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
// //                   <div 
// //                     className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"
// //                     style={{ width: `${productionPercent}%` }}
// //                   ></div>
// //                 </div>
// //                 <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// //                   {productionPercent.toFixed(1)}%
// //                 </div>
// //               </div>
              
// //               {/* Deals Goal */}
// //               <div>
// //                 <div className="flex justify-between mb-1">
// //                   <span className="text-sm font-semibold text-gray-600">Deals</span>
// //                   <span className="text-sm font-bold text-gray-800">
// //                     {metrics.ytd.deals} / {goals.deals}
// //                   </span>
// //                 </div>
// //                 <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
// //                   <div 
// //                     className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
// //                     style={{ width: `${dealsPercent}%` }}
// //                   ></div>
// //                 </div>
// //                 <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// //                   {dealsPercent.toFixed(1)}%
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Top Lead Sources */}
// //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Top Lead Sources (MTD)</div>
// //               <div className="text-2xl">🏆</div>
// //             </div>
// //             <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
// //               {Object.entries(metrics.leadSources)
// //                 .sort((a, b) => b[1] - a[1])
// //                 .slice(0, 8)
// //                 .map(([lead, total]) => (
// //                   <div key={lead} className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500 flex justify-between items-center">
// //                     <span className="text-sm font-bold text-gray-800 truncate max-w-[70%]" title={lead}>
// //                       {lead}
// //                     </span>
// //                     <span className="text-sm font-black bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent whitespace-nowrap">
// //                       {formatCurrency(total)}
// //                     </span>
// //                   </div>
// //                 ))}
// //               {Object.keys(metrics.leadSources).length === 0 && (
// //                 <div className="text-center py-4 text-gray-500">
// //                   No lead source data available
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Footer */}
// //         <div className="text-right text-sm text-white/70">
// //           Last Updated: {lastUpdated.toLocaleString()} | 
// //           Auto-refresh: 60s | 
// //           Status: 
// //           <span className="ml-2 inline-block px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs font-semibold">
// //             {data.length > 0 ? `Connected (${data.length} records)` : 'No Data'}
// //           </span>
// //           <button
// //             onClick={fetchData}
// //             className="ml-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-xs"
// //             disabled={loading}
// //           >
// //             {loading ? 'Refreshing...' : 'Refresh Now'}
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }






























// // // // 'use client'

// // // // import { useState, useEffect, useCallback } from 'react'
// // // // import { supabase } from '../../lib/supabase'

// // // // const GOALS = {
// // // //   commission: 450000,
// // // //   production: 1500000
// // // // }

// // // // export default function DashboardContent() {
// // // //   const [data, setData] = useState([])
// // // //   const [loading, setLoading] = useState(true)
// // // //   const [error, setError] = useState(null)
// // // //   const [lastUpdated, setLastUpdated] = useState(new Date())

// // // // //   const fetchData = useCallback(async () => {
// // // // //     try {
// // // // //       setLoading(true)
      
// // // // //       const response = await fetch('/api/sheet')
// // // // //       const result = await response.json()
      
// // // // //       if (!response.ok) {
// // // // //         throw new Error(result.error || 'Failed to fetch data')
// // // // //       }
      
// // // // //       setData(result.data || [])
// // // // //       setError(null)
// // // // //       setLastUpdated(new Date())
// // // // //     } catch (err) {
// // // // //       console.error('Error fetching data:', err)
// // // // //       setError(err.message || 'Failed to load dashboard data')
// // // // //     } finally {
// // // // //       setLoading(false)
// // // // //     }
// // // // //   }, [])


// // // //     const fetchData = useCallback(async () => {
// // // //     try {
// // // //         setLoading(true)
        
// // // //         const response = await fetch('/api/sheet')
// // // //         const result = await response.json()
        
// // // //         if (!response.ok) {
// // // //         throw new Error(result.error || 'Failed to fetch data')
// // // //         }
        
// // // //         console.log('API Response:', result)
// // // //         console.log('Data received:', result.data)
// // // //         console.log('First row:', result.data?.[0])
// // // //         console.log('All row keys:', result.data?.[0] ? Object.keys(result.data[0]) : 'No data')
        
// // // //         setData(result.data || [])
// // // //         setError(null)
// // // //         setLastUpdated(new Date())
// // // //     } catch (err) {
// // // //         console.error('Error fetching data:', err)
// // // //         setError(err.message || 'Failed to load dashboard data')
// // // //     } finally {
// // // //         setLoading(false)
// // // //     }
// // // //     }, [])


// // // //   useEffect(() => {
// // // //     fetchData()
// // // //     const interval = setInterval(fetchData, 60000)
// // // //     return () => clearInterval(interval)
// // // //   }, [fetchData])

// // // //   const formatCurrency = (amount) => {
// // // //     return new Intl.NumberFormat("en-US", {
// // // //       style: "currency",
// // // //       currency: "USD",
// // // //       minimumFractionDigits: 0
// // // //     }).format(amount || 0)
// // // //   }

// // // // //   const calculateMetrics = () => {
// // // // //     const today = new Date()
// // // // //     today.setHours(0, 0, 0, 0)

// // // // //     let metrics = {
// // // // //       today: { commission: 0, production: 0 },
// // // // //       wtd: { commission: 0, production: 0 },
// // // // //       mtd: { commission: 0, production: 0 },
// // // // //       ytd: { commission: 0, production: 0 },
// // // // //       byAgent: {},
// // // // //       leadSources: {}
// // // // //     }

// // // // //     if (!data || data.length === 0) {
// // // // //       return metrics
// // // // //     }

// // // // //     // Get start of week (Sunday)
// // // // //     const weekStart = new Date(today)
// // // // //     weekStart.setDate(today.getDate() - today.getDay())

// // // // //     // Get start of month
// // // // //     const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)

// // // // //     // Get start of year
// // // // //     const yearStart = new Date(today.getFullYear(), 0, 1)

// // // // //     data.forEach((row) => {
// // // // //       if (!row || !row.Status || row.Status.toLowerCase() !== "approved") return

// // // // //       const dealDate = new Date(row["Date Sold"] || row["Date Sold"])
// // // // //       if (isNaN(dealDate.getTime())) return

// // // // //       const agent = row.Agent || "Unknown"
// // // // //       const lead = row["Lead Vendor"] || "Unknown"
// // // // //       const monthlyPremium = Number(row["Monthly Premium"]) || 0
// // // // //       const production = monthlyPremium * 12
// // // // //       const commission = Number(row["Net Advance (60%)"]) || 0

// // // // //       // Initialize agent if not exists
// // // // //       if (!metrics.byAgent[agent]) {
// // // // //         metrics.byAgent[agent] = {
// // // // //           today: { commission: 0, production: 0 },
// // // // //           wtd: { commission: 0, production: 0 },
// // // // //           mtd: { commission: 0, production: 0 },
// // // // //           ytd: { commission: 0, production: 0 }
// // // // //         }
// // // // //       }

// // // // //       // Initialize lead source if not exists
// // // // //       if (!metrics.leadSources[lead]) {
// // // // //         metrics.leadSources[lead] = 0
// // // // //       }

// // // // //       // Update totals
// // // // //       metrics.leadSources[lead] += production

// // // // //       // Today
// // // // //       if (dealDate.toDateString() === today.toDateString()) {
// // // // //         metrics.today.commission += commission
// // // // //         metrics.today.production += production
// // // // //         metrics.byAgent[agent].today.commission += commission
// // // // //         metrics.byAgent[agent].today.production += production
// // // // //       }

// // // // //       // Week to Date
// // // // //       if (dealDate >= weekStart) {
// // // // //         metrics.wtd.commission += commission
// // // // //         metrics.wtd.production += production
// // // // //         metrics.byAgent[agent].wtd.commission += commission
// // // // //         metrics.byAgent[agent].wtd.production += production
// // // // //       }

// // // // //       // Month to Date
// // // // //       if (dealDate >= monthStart) {
// // // // //         metrics.mtd.commission += commission
// // // // //         metrics.mtd.production += production
// // // // //         metrics.byAgent[agent].mtd.commission += commission
// // // // //         metrics.byAgent[agent].mtd.production += production
// // // // //       }

// // // // //       // Year to Date
// // // // //       if (dealDate >= yearStart) {
// // // // //         metrics.ytd.commission += commission
// // // // //         metrics.ytd.production += production
// // // // //         metrics.byAgent[agent].ytd.commission += commission
// // // // //         metrics.byAgent[agent].ytd.production += production
// // // // //       }
// // // // //     })

// // // // //     return metrics
// // // // //   }



// // // // //     const calculateMetrics = () => {
// // // // //   const today = new Date()
// // // // //   today.setHours(0, 0, 0, 0)

// // // // //   let metrics = {
// // // // //     today: { commission: 0, production: 0 },
// // // // //     wtd: { commission: 0, production: 0 },
// // // // //     mtd: { commission: 0, production: 0 },
// // // // //     ytd: { commission: 0, production: 0 },
// // // // //     byAgent: {},
// // // // //     leadSources: {}
// // // // //   }

// // // // //   if (!data || data.length === 0) {
// // // // //     return metrics
// // // // //   }

// // // // //   console.log('Processing data with columns:', Object.keys(data[0]))

// // // // //   // Date ranges
// // // // //   const weekStart = new Date(today)
// // // // //   weekStart.setDate(today.getDate() - today.getDay())
// // // // //   weekStart.setHours(0, 0, 0, 0)

// // // // //   const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)
// // // // //   monthStart.setHours(0, 0, 0, 0)

// // // // //   const yearStart = new Date(today.getFullYear(), 0, 1)
// // // // //   yearStart.setHours(0, 0, 0, 0)

// // // // //   let approvedCount = 0
// // // // //   let totalRows = 0

// // // // //   data.forEach((row, index) => {
// // // // //     totalRows++
    
// // // // //     // Check if row has Status field - based on your columns
// // // // //     const status = row.Status
// // // // //     if (!status || status.toLowerCase() !== "approved") {
// // // // //       console.log(`Row ${index} skipped - Status: ${status}`)
// // // // //       return
// // // // //     }
    
// // // // //     approvedCount++

// // // // //     // Parse date - handle MM/DD/YYYY format
// // // // //     const dateStr = row["Date Sold"]
// // // // //     let dealDate
// // // // //     if (dateStr.includes('/')) {
// // // // //       // Parse MM/DD/YYYY format
// // // // //       const [month, day, year] = dateStr.split('/').map(Number)
// // // // //       dealDate = new Date(year, month - 1, day) // month is 0-indexed in JS
// // // // //     } else {
// // // // //       dealDate = new Date(dateStr)
// // // // //     }
    
// // // // //     if (isNaN(dealDate.getTime())) {
// // // // //       console.log(`Row ${index} invalid date: ${dateStr}`)
// // // // //       return
// // // // //     }
// // // // //     dealDate.setHours(0, 0, 0, 0)

// // // // //     const agent = row.Agent || "Unknown"
// // // // //     const lead = row["Lead Vendor"] || "Unknown"
    
// // // // //     // Get Monthly Premium - clean it first
// // // // //     let monthlyPremium = row["Monthly Premium"]
// // // // //     if (typeof monthlyPremium === 'string') {
// // // // //       // Remove $, commas, and any non-numeric characters
// // // // //       monthlyPremium = monthlyPremium.replace(/[^\d.-]/g, '')
// // // // //     }
// // // // //     monthlyPremium = Number(monthlyPremium) || 0
    
// // // // //     const production = monthlyPremium * 12

// // // // //     // Try different commission columns - based on your sheet
// // // // //     // First try "Advance (75%)" then "Annual Commission $"
// // // // //     let commission = row["Advance (75%)"] || row["Annual Commission $"] || 0
// // // // //     if (typeof commission === 'string') {
// // // // //       // Remove $, commas, and any non-numeric characters
// // // // //       commission = commission.replace(/[^\d.-]/g, '')
// // // // //     }
// // // // //     commission = Number(commission) || 0

// // // // //     console.log(`Row ${index} - Approved deal:`, {
// // // // //       agent,
// // // // //       lead,
// // // // //       monthlyPremium,
// // // // //       production,
// // // // //       commission,
// // // // //       dateSold: dateStr,
// // // // //       parsedDate: dealDate.toDateString(),
// // // // //       today: today.toDateString()
// // // // //     })

// // // // //     // Initialize agent if not exists
// // // // //     if (!metrics.byAgent[agent]) {
// // // // //       metrics.byAgent[agent] = {
// // // // //         today: { commission: 0, production: 0 },
// // // // //         wtd: { commission: 0, production: 0 },
// // // // //         mtd: { commission: 0, production: 0 },
// // // // //         ytd: { commission: 0, production: 0 }
// // // // //       }
// // // // //     }

// // // // //     // Initialize lead source if not exists
// // // // //     if (!metrics.leadSources[lead]) {
// // // // //       metrics.leadSources[lead] = 0
// // // // //     }

// // // // //     // Update totals
// // // // //     metrics.leadSources[lead] += production

// // // // //     // Today
// // // // //     if (dealDate.toDateString() === today.toDateString()) {
// // // // //       metrics.today.commission += commission
// // // // //       metrics.today.production += production
// // // // //       metrics.byAgent[agent].today.commission += commission
// // // // //       metrics.byAgent[agent].today.production += production
// // // // //       console.log(`Added to today: ${commission} commission, ${production} production`)
// // // // //     }

// // // // //     // Week to Date
// // // // //     if (dealDate >= weekStart) {
// // // // //       metrics.wtd.commission += commission
// // // // //       metrics.wtd.production += production
// // // // //       metrics.byAgent[agent].wtd.commission += commission
// // // // //       metrics.byAgent[agent].wtd.production += production
// // // // //     }

// // // // //     // Month to Date
// // // // //     if (dealDate >= monthStart) {
// // // // //       metrics.mtd.commission += commission
// // // // //       metrics.mtd.production += production
// // // // //       metrics.byAgent[agent].mtd.commission += commission
// // // // //       metrics.byAgent[agent].mtd.production += production
// // // // //     }

// // // // //     // Year to Date
// // // // //     if (dealDate >= yearStart) {
// // // // //       metrics.ytd.commission += commission
// // // // //       metrics.ytd.production += production
// // // // //       metrics.byAgent[agent].ytd.commission += commission
// // // // //       metrics.byAgent[agent].ytd.production += production
// // // // //     }
// // // // //   })

// // // // //   console.log(`Summary: Processed ${totalRows} rows, ${approvedCount} approved deals`)
// // // // //   console.log('Final metrics:', {
// // // // //     today: metrics.today,
// // // // //     ytd: metrics.ytd,
// // // // //     agents: Object.keys(metrics.byAgent),
// // // // //     leadSources: metrics.leadSources
// // // // //   })

// // // // //   return metrics
// // // // // }



// // // // const calculateMetrics = () => {
// // // //   const today = new Date()
// // // //   today.setHours(0, 0, 0, 0)

// // // //   let metrics = {
// // // //     today: { 
// // // //       commission: 0, 
// // // //       production: 0,
// // // //       policies: 0,
// // // //       premium: 0
// // // //     },
// // // //     wtd: { 
// // // //       commission: 0, 
// // // //       production: 0,
// // // //       policies: 0,
// // // //       premium: 0
// // // //     },
// // // //     mtd: { 
// // // //       commission: 0, 
// // // //       production: 0,
// // // //       policies: 0,
// // // //       premium: 0
// // // //     },
// // // //     ytd: { 
// // // //       commission: 0, 
// // // //       production: 0,
// // // //       policies: 0,
// // // //       premium: 0
// // // //     },
// // // //     byAgent: {},
// // // //     leadSources: {},
// // // //     byProduct: {},  // Track by product type
// // // //     coverageAmounts: 0
// // // //   }

// // // //   if (!data || data.length === 0) {
// // // //     return metrics
// // // //   }

// // // //   console.log('Processing mortgage/insurance data...')

// // // //   // Date ranges
// // // //   const weekStart = new Date(today)
// // // //   weekStart.setDate(today.getDate() - today.getDay())
// // // //   weekStart.setHours(0, 0, 0, 0)

// // // //   const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)
// // // //   monthStart.setHours(0, 0, 0, 0)

// // // //   const yearStart = new Date(today.getFullYear(), 0, 1)
// // // //   yearStart.setHours(0, 0, 0, 0)

// // // //   data.forEach((row, index) => {
// // // //     // Check status
// // // //     if (!row.Status || row.Status.toLowerCase() !== 'approved') {
// // // //       return
// // // //     }

// // // //     // Parse date
// // // //     const dateStr = row["Date Sold"]
// // // //     const [month, day, year] = dateStr.split('/').map(Number)
// // // //     const dealDate = new Date(year, month - 1, day)
// // // //     dealDate.setHours(0, 0, 0, 0)

// // // //     const agent = row.Agent || "Unknown"
// // // //     const lead = row["Lead Vendor"] || "Unknown"
// // // //     const product = row["Product"] || "Unknown"
    
// // // //     // Mortgage/Insurance specific metrics
// // // //     // Coverage Amount (loan amount/insurance coverage)
// // // //     let coverageAmount = row["Coverage Amount"] || 0
// // // //     if (typeof coverageAmount === 'string') {
// // // //       coverageAmount = coverageAmount.replace(/[^\d.-]/g, '')
// // // //     }
// // // //     coverageAmount = Number(coverageAmount) || 0
    
// // // //     // Monthly Premium (mortgage insurance premium)
// // // //     let monthlyPremium = row["Monthly Premium"] || 0
// // // //     if (typeof monthlyPremium === 'string') {
// // // //       monthlyPremium = monthlyPremium.replace(/[^\d.-]/g, '')
// // // //     }
// // // //     monthlyPremium = Number(monthlyPremium) || 0
    
// // // //     // Annual Premium (monthly * 12)
// // // //     const annualPremium = monthlyPremium * 12
    
// // // //     // Commission calculations
// // // //     // Try different commission columns
// // // //     let commission = 0
// // // //     const commissionSources = [
// // // //       'Advance (75%)',
// // // //       'Annual Commission $', 
// // // //       'Override Commission $',
// // // //       'Agent Commission %' // This might need calculation
// // // //     ]
    
// // // //     for (const source of commissionSources) {
// // // //       if (row[source] && row[source] !== '') {
// // // //         let value = row[source]
// // // //         if (typeof value === 'string') {
// // // //           value = value.replace(/[^\d.-]/g, '')
// // // //         }
// // // //         commission = Number(value) || 0
// // // //         if (commission > 0) break
// // // //       }
// // // //     }
    
// // // //     // If commission is percentage, calculate from premium
// // // //     if (row["Agent Commission %"] && commission === 0) {
// // // //       let commissionPercent = row["Agent Commission %"]
// // // //       if (typeof commissionPercent === 'string') {
// // // //         commissionPercent = commissionPercent.replace(/[^\d.-]/g, '')
// // // //       }
// // // //       commissionPercent = Number(commissionPercent) || 0
// // // //       commission = (commissionPercent / 100) * annualPremium
// // // //     }

// // // //     // Initialize agent if not exists
// // // //     if (!metrics.byAgent[agent]) {
// // // //       metrics.byAgent[agent] = {
// // // //         today: { commission: 0, production: 0, policies: 0, premium: 0 },
// // // //         wtd: { commission: 0, production: 0, policies: 0, premium: 0 },
// // // //         mtd: { commission: 0, production: 0, policies: 0, premium: 0 },
// // // //         ytd: { commission: 0, production: 0, policies: 0, premium: 0 }
// // // //       }
// // // //     }

// // // //     // Initialize product tracking
// // // //     if (!metrics.byProduct[product]) {
// // // //       metrics.byProduct[product] = 0
// // // //     }

// // // //     // Initialize lead source if not exists
// // // //     if (!metrics.leadSources[lead]) {
// // // //       metrics.leadSources[lead] = 0
// // // //     }

// // // //     // Update totals
// // // //     metrics.coverageAmounts += coverageAmount
// // // //     metrics.byProduct[product] += 1
// // // //     metrics.leadSources[lead] += annualPremium

// // // //     // Today
// // // //     if (dealDate.toDateString() === today.toDateString()) {
// // // //       metrics.today.commission += commission
// // // //       metrics.today.production += annualPremium
// // // //       metrics.today.policies += 1
// // // //       metrics.today.premium += monthlyPremium
      
// // // //       metrics.byAgent[agent].today.commission += commission
// // // //       metrics.byAgent[agent].today.production += annualPremium
// // // //       metrics.byAgent[agent].today.policies += 1
// // // //       metrics.byAgent[agent].today.premium += monthlyPremium
// // // //     }

// // // //     // Week to Date
// // // //     if (dealDate >= weekStart) {
// // // //       metrics.wtd.commission += commission
// // // //       metrics.wtd.production += annualPremium
// // // //       metrics.wtd.policies += 1
// // // //       metrics.wtd.premium += monthlyPremium
      
// // // //       metrics.byAgent[agent].wtd.commission += commission
// // // //       metrics.byAgent[agent].wtd.production += annualPremium
// // // //       metrics.byAgent[agent].wtd.policies += 1
// // // //       metrics.byAgent[agent].wtd.premium += monthlyPremium
// // // //     }

// // // //     // Month to Date
// // // //     if (dealDate >= monthStart) {
// // // //       metrics.mtd.commission += commission
// // // //       metrics.mtd.production += annualPremium
// // // //       metrics.mtd.policies += 1
// // // //       metrics.mtd.premium += monthlyPremium
      
// // // //       metrics.byAgent[agent].mtd.commission += commission
// // // //       metrics.byAgent[agent].mtd.production += annualPremium
// // // //       metrics.byAgent[agent].mtd.policies += 1
// // // //       metrics.byAgent[agent].mtd.premium += monthlyPremium
// // // //     }

// // // //     // Year to Date
// // // //     if (dealDate >= yearStart) {
// // // //       metrics.ytd.commission += commission
// // // //       metrics.ytd.production += annualPremium
// // // //       metrics.ytd.policies += 1
// // // //       metrics.ytd.premium += monthlyPremium
      
// // // //       metrics.byAgent[agent].ytd.commission += commission
// // // //       metrics.byAgent[agent].ytd.production += annualPremium
// // // //       metrics.byAgent[agent].ytd.policies += 1
// // // //       metrics.byAgent[agent].ytd.premium += monthlyPremium
// // // //     }
// // // //   })

// // // //   console.log('Mortgage metrics calculated:', {
// // // //     totalCoverage: metrics.coverageAmounts,
// // // //     totalPolicies: metrics.ytd.policies,
// // // //     byProduct: metrics.byProduct
// // // //   })

// // // //   return metrics
// // // // }


// // // //   const handleLogout = async () => {
// // // //     await supabase.auth.signOut()
// // // //     window.location.href = '/auth/login'
// // // //   }

// // // //   if (loading && data.length === 0) {
// // // //     return (
// // // //       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
// // // //         <div className="text-white text-xl animate-pulse">Loading dashboard...</div>
// // // //       </div>
// // // //     )
// // // //   }

// // // //   if (error) {
// // // //     return (
// // // //       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
// // // //         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
// // // //           <div className="text-white text-xl mb-4">Error: {error}</div>
// // // //           <button
// // // //             onClick={fetchData}
// // // //             className="px-6 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors mr-2"
// // // //           >
// // // //             Retry
// // // //           </button>
// // // //           <button
// // // //             onClick={handleLogout}
// // // //             className="px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
// // // //           >
// // // //             Logout
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     )
// // // //   }

// // // //   const metrics = calculateMetrics()
// // // //   const commissionPercent = Math.min(100, (metrics.ytd.commission / GOALS.commission) * 100)

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white p-4">
// // // //       {/* Top Bar with Logout */}
// // // //       {/* <div className="flex justify-between items-center mb-4">
// // // //         <div className="text-sm opacity-75">
// // // //           Welcome to Production Dashboard
// // // //         </div>
// // // //         <button
// // // //             onClick={handleLogout}
// // // //             className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-sm float-right top-0"
// // // //             >
// // // //             Logout
// // // //         </button>
        
// // // //       </div> */}

// // // //       <div className="max-w-7xl mx-auto space-y-4">
// // // //         {/* Header */}
// // // //         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20">
// // // //           <button
// // // //             onClick={handleLogout}
// // // //             className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-sm float-right top-0"
// // // //             >
// // // //             Logout
// // // //           </button>
          
// // // //           <h1 className="text-4xl font-bold mb-2">🎯 Production Scoreboard</h1>
// // // //           <p className="text-white/80">Being consistently consistent will make me a millionaire</p>

// // // //         </div>

// // // //         {/* Daily Quote */}
// // // //         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20">
// // // //           <div className="text-2xl mb-2">💭</div>
// // // //           <div className="text-xl italic font-medium">Money follows small actions repeated daily.</div>
// // // //         </div>

// // // //         {/* Grid */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// // // //           {/* Today Commission */}
// // // //           <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
// // // //             <div className="flex justify-between items-center mb-4">
// // // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Today Commission</div>
// // // //               <div className="text-2xl">💰</div>
// // // //             </div>
// // // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // // //               {formatCurrency(metrics.today.commission)}
// // // //             </div>
// // // //             <div className="grid grid-cols-3 gap-2">
// // // //               {Object.entries(metrics.byAgent).map(([agent, stats]) => (
// // // //                 <div key={agent} className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
// // // //                   <span className="block text-xs font-semibold text-gray-600 mb-1 truncate" title={agent}>
// // // //                     {agent}
// // // //                   </span>
// // // //                   <span className="text-lg font-black text-gray-800">{formatCurrency(stats.today.commission)}</span>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           {/* WTD Commission */}
// // // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // // //             <div className="flex justify-between items-center mb-4">
// // // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Week to Date</div>
// // // //               <div className="text-2xl">📅</div>
// // // //             </div>
// // // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // // //               {formatCurrency(metrics.wtd.commission)}
// // // //             </div>
// // // //             <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
// // // //               {Object.entries(metrics.byAgent).map(([agent, stats]) => (
// // // //                 <div key={`${agent}-wtd`} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
// // // //                   <span className="text-sm font-semibold text-gray-600 truncate max-w-[60%]" title={agent}>
// // // //                     {agent}
// // // //                   </span>
// // // //                   <span className="text-sm font-bold text-gray-800 whitespace-nowrap">
// // // //                     {formatCurrency(stats.wtd.commission)}
// // // //                   </span>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           {/* MTD Commission */}
// // // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // // //             <div className="flex justify-between items-center mb-4">
// // // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Month to Date</div>
// // // //               <div className="text-2xl">📊</div>
// // // //             </div>
// // // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // // //               {formatCurrency(metrics.mtd.commission)}
// // // //             </div>
// // // //             <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
// // // //               {Object.entries(metrics.byAgent).map(([agent, stats]) => (
// // // //                 <div key={`${agent}-mtd`} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
// // // //                   <span className="text-sm font-semibold text-gray-600 truncate max-w-[60%]" title={agent}>
// // // //                     {agent}
// // // //                   </span>
// // // //                   <span className="text-sm font-bold text-gray-800 whitespace-nowrap">
// // // //                     {formatCurrency(stats.mtd.commission)}
// // // //                   </span>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           {/* YTD Commission */}
// // // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // // //             <div className="flex justify-between items-center mb-4">
// // // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Year to Date</div>
// // // //               <div className="text-2xl">🎯</div>
// // // //             </div>
// // // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // // //               {formatCurrency(metrics.ytd.commission)}
// // // //             </div>
// // // //             <div className="space-y-2 mb-4">
// // // //               <div className="flex justify-between py-2">
// // // //                 <span className="text-sm font-semibold text-gray-600">Annual Goal</span>
// // // //                 <span className="text-sm font-bold text-gray-800">$450,000</span>
// // // //               </div>
// // // //             </div>
// // // //             <div className="mb-4">
// // // //               <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
// // // //                 <div 
// // // //                   className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow transition-all duration-500"
// // // //                   style={{ width: `${commissionPercent}%` }}
// // // //                 ></div>
// // // //               </div>
// // // //               <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// // // //                 {commissionPercent.toFixed(1)}% to Goal
// // // //               </div>
// // // //             </div>
// // // //             <div className="flex justify-between py-2">
// // // //               <span className="text-sm font-semibold text-gray-600">Progress</span>
// // // //               <span className="text-sm font-bold text-gray-800">{commissionPercent.toFixed(1)}%</span>
// // // //             </div>
// // // //           </div>

// // // //           {/* Today Production */}
// // // //           <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
// // // //             <div className="flex justify-between items-center mb-4">
// // // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Today Production</div>
// // // //               <div className="text-2xl">📈</div>
// // // //             </div>
// // // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
// // // //               {formatCurrency(metrics.today.production)}
// // // //             </div>
// // // //             <div className="grid grid-cols-3 gap-2">
// // // //               {Object.entries(metrics.byAgent).map(([agent, stats]) => (
// // // //                 <div key={`${agent}-prod`} className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
// // // //                   <span className="block text-xs font-semibold text-gray-600 mb-1 truncate" title={agent}>
// // // //                     {agent}
// // // //                   </span>
// // // //                   <span className="text-lg font-black text-gray-800">{formatCurrency(stats.today.production)}</span>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           {/* WTD Production */}
// // // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // // //             <div className="flex justify-between items-center mb-4">
// // // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">WTD Production</div>
// // // //               <div className="text-2xl">📈</div>
// // // //             </div>
// // // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // // //               {formatCurrency(metrics.wtd.production)}
// // // //             </div>
// // // //             <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
// // // //               {Object.entries(metrics.byAgent).map(([agent, stats]) => (
// // // //                 <div key={`${agent}-wtd-prod`} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
// // // //                   <span className="text-sm font-semibold text-gray-600 truncate max-w-[60%]" title={agent}>
// // // //                     {agent}
// // // //                   </span>
// // // //                   <span className="text-sm font-bold text-gray-800 whitespace-nowrap">
// // // //                     {formatCurrency(stats.wtd.production)}
// // // //                   </span>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           {/* MTD Production */}
// // // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // // //             <div className="flex justify-between items-center mb-4">
// // // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">MTD Production</div>
// // // //               <div className="text-2xl">📈</div>
// // // //             </div>
// // // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // // //               {formatCurrency(metrics.mtd.production)}
// // // //             </div>
// // // //             <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
// // // //               {Object.entries(metrics.byAgent).map(([agent, stats]) => (
// // // //                 <div key={`${agent}-mtd-prod`} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
// // // //                   <span className="text-sm font-semibold text-gray-600 truncate max-w-[60%]" title={agent}>
// // // //                     {agent}
// // // //                   </span>
// // // //                   <span className="text-sm font-bold text-gray-800 whitespace-nowrap">
// // // //                     {formatCurrency(stats.mtd.production)}
// // // //                   </span>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           {/* Top Leads */}
// // // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // // //             <div className="flex justify-between items-center mb-4">
// // // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Top Lead Sources</div>
// // // //               <div className="text-2xl">🏆</div>
// // // //             </div>
// // // //             <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
// // // //               {Object.entries(metrics.leadSources)
// // // //                 .sort((a, b) => b[1] - a[1])
// // // //                 .slice(0, 6)
// // // //                 .map(([lead, total]) => (
// // // //                   <div key={lead} className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500 flex justify-between items-center">
// // // //                     <span className="text-sm font-bold text-gray-800 truncate max-w-[70%]" title={lead}>
// // // //                       {lead}
// // // //                     </span>
// // // //                     <span className="text-sm font-black bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent whitespace-nowrap">
// // // //                       {formatCurrency(total)}
// // // //                     </span>
// // // //                   </div>
// // // //                 ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Footer */}
// // // //         <div className="text-right text-sm text-white/70">
// // // //           Last Updated: {lastUpdated.toLocaleString()} | 
// // // //           Auto-refresh: 60s | 
// // // //           Status: 
// // // //           <span className="ml-2 inline-block px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs font-semibold">
// // // //             {data.length > 0 ? `Connected (${data.length} records)` : 'No Data'}
// // // //           </span>
// // // //           <button
// // // //             onClick={fetchData}
// // // //             className="ml-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-xs"
// // // //             disabled={loading}
// // // //           >
// // // //             {loading ? 'Refreshing...' : 'Refresh Now'}
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }




















// // // 'use client'

// // // import { useState, useEffect, useCallback } from 'react'

// // // // Default goals (will be overridden by Google Sheets data)
// // // const DEFAULT_GOALS = {
// // //   commission: 450000,
// // //   production: 1500000,
// // //   deals: 600
// // // }

// // // export default function DashboardContent() {
// // //   const [data, setData] = useState([])
// // //   const [quotes, setQuotes] = useState([])
// // //   const [dailyQuote, setDailyQuote] = useState('')
// // //   const [goals, setGoals] = useState(DEFAULT_GOALS)
// // //   const [loading, setLoading] = useState(true)
// // //   const [error, setError] = useState(null)
// // //   const [lastUpdated, setLastUpdated] = useState(new Date())

// // //   const fetchData = useCallback(async () => {
// // //     try {
// // //       setLoading(true)
      
// // //       const response = await fetch('/api/sheet')
// // //       const result = await response.json()
      
// // //       if (!response.ok) {
// // //         throw new Error(result.error || 'Failed to fetch data')
// // //       }
      
// // //       console.log('Data received:', {
// // //         rows: result.data?.length,
// // //         quotes: result.quotes?.length,
// // //         goals: result.goals
// // //       })
      
// // //       setData(result.data || [])
// // //       setQuotes(result.quotes || [])
// // //       setGoals(result.goals || DEFAULT_GOALS)
// // //       setError(null)
// // //       setLastUpdated(new Date())
      
// // //       // Set daily quote
// // //       if (result.quotes && result.quotes.length > 0) {
// // //         selectDailyQuote(result.quotes)
// // //       } else {
// // //         setDailyQuote('Money follows small actions repeated daily.')
// // //       }
      
// // //     } catch (err) {
// // //       console.error('Error fetching data:', err)
// // //       setError(err.message || 'Failed to load dashboard data')
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }, [])

// // //   // Function to select daily quote (changes daily)
// // //   const selectDailyQuote = (quotesList) => {
// // //     if (!quotesList || quotesList.length === 0) return
    
// // //     // Use the day of the year to select a consistent daily quote
// // //     const today = new Date()
// // //     const start = new Date(today.getFullYear(), 0, 0)
// // //     const diff = today - start
// // //     const oneDay = 1000 * 60 * 60 * 24
// // //     const dayOfYear = Math.floor(diff / oneDay)
    
// // //     const quoteIndex = dayOfYear % quotesList.length
// // //     const selectedQuote = quotesList[quoteIndex]
// // //     setDailyQuote(selectedQuote.text + (selectedQuote.author ? ` - ${selectedQuote.author}` : ''))
// // //   }

// // //   useEffect(() => {
// // //     fetchData()
// // //     const interval = setInterval(fetchData, 60000)
// // //     return () => clearInterval(interval)
// // //   }, [fetchData])

// // //   const formatCurrency = (amount) => {
// // //     return new Intl.NumberFormat("en-US", {
// // //       style: "currency",
// // //       currency: "USD",
// // //       minimumFractionDigits: 0
// // //     }).format(amount || 0)
// // //   }

// // //   const cleanNumber = (value) => {
// // //     if (!value) return 0
// // //     const str = String(value)
// // //     const cleaned = str.replace(/[^\d.-]/g, '')
// // //     return Number(cleaned) || 0
// // //   }

// // //   const calculateMetrics = () => {
// // //     const today = new Date()
// // //     today.setHours(0, 0, 0, 0)

// // //     // Initialize metrics with Scott, George, and Other Agents
// // //     let metrics = {
// // //       today: { commission: 0, production: 0, deals: 0, premium: 0 },
// // //       wtd: { commission: 0, production: 0, deals: 0, premium: 0 },
// // //       mtd: { commission: 0, production: 0, deals: 0, premium: 0 },
// // //       ytd: { commission: 0, production: 0, deals: 0, premium: 0 },
// // //       byAgent: {
// // //         'Scott Watkins': {
// // //           today: { commission: 0, production: 0, deals: 0, premium: 0 },
// // //           wtd: { commission: 0, production: 0, deals: 0, premium: 0 },
// // //           mtd: { commission: 0, production: 0, deals: 0, premium: 0 },
// // //           ytd: { commission: 0, production: 0, deals: 0, premium: 0 }
// // //         },
// // //         'George Knox': {
// // //           today: { commission: 0, production: 0, deals: 0, premium: 0 },
// // //           wtd: { commission: 0, production: 0, deals: 0, premium: 0 },
// // //           mtd: { commission: 0, production: 0, deals: 0, premium: 0 },
// // //           ytd: { commission: 0, production: 0, deals: 0, premium: 0 }
// // //         },
// // //         'Other Agents': {
// // //           today: { commission: 0, production: 0, deals: 0, premium: 0 },
// // //           wtd: { commission: 0, production: 0, deals: 0, premium: 0 },
// // //           mtd: { commission: 0, production: 0, deals: 0, premium: 0 },
// // //           ytd: { commission: 0, production: 0, deals: 0, premium: 0 }
// // //         }
// // //       },
// // //       leadSources: {},
// // //       coverageAmounts: 0
// // //     }

// // //     if (!data || data.length === 0) {
// // //       return metrics
// // //     }

// // //     // Date ranges
// // //     const weekStart = new Date(today)
// // //     weekStart.setDate(today.getDate() - today.getDay()) // Sunday start
// // //     weekStart.setHours(0, 0, 0, 0)

// // //     const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)
// // //     monthStart.setHours(0, 0, 0, 0)

// // //     const yearStart = new Date(today.getFullYear(), 0, 1)
// // //     yearStart.setHours(0, 0, 0, 0)

// // //     console.log('Date ranges:', {
// // //       today: today.toDateString(),
// // //       weekStart: weekStart.toDateString(),
// // //       monthStart: monthStart.toDateString(),
// // //       yearStart: yearStart.toDateString()
// // //     })

// // //     data.forEach((row) => {
// // //       // Check status - must be "Approved"
// // //       const status = row._status
// // //       if (!status || status.toLowerCase() !== 'approved') {
// // //         return
// // //       }

// // //       // Parse date from "MM/DD/YYYY" format
// // //       const dateStr = row._dateSold
// // //       if (!dateStr) return
      
// // //       let dealDate
// // //       if (dateStr.includes('/')) {
// // //         const [month, day, year] = dateStr.split('/').map(Number)
// // //         dealDate = new Date(year, month - 1, day)
// // //       } else {
// // //         dealDate = new Date(dateStr)
// // //       }
      
// // //       if (isNaN(dealDate.getTime())) {
// // //         return
// // //       }
// // //       dealDate.setHours(0, 0, 0, 0)

// // //       // Get agent and categorize
// // //       const agent = row._agent || ''
// // //       const agentCategory = getAgentCategory(agent)
      
// // //       const lead = row._leadVendor || 'Unknown'
      
// // //       // Get values
// // //       const monthlyPremium = cleanNumber(row._monthlyPremium)
// // //       const annualPremium = monthlyPremium * 12
// // //       const commission = cleanNumber(row._netCommission) // Using Column AA
// // //       const coverageAmount = cleanNumber(row._coverageAmount)

// // //       // Update coverage total
// // //       metrics.coverageAmounts += coverageAmount

// // //       // Initialize lead source if not exists
// // //       if (!metrics.leadSources[lead]) {
// // //         metrics.leadSources[lead] = 0
// // //       }
// // //       metrics.leadSources[lead] += annualPremium

// // //       // Helper to update metrics for a time period
// // //       const updatePeriod = (period, periodStart) => {
// // //         if (dealDate >= periodStart) {
// // //           metrics[period].commission += commission
// // //           metrics[period].production += annualPremium
// // //           metrics[period].premium += monthlyPremium
// // //           metrics[period].deals += 1
          
// // //           metrics.byAgent[agentCategory][period].commission += commission
// // //           metrics.byAgent[agentCategory][period].production += annualPremium
// // //           metrics.byAgent[agentCategory][period].premium += monthlyPremium
// // //           metrics.byAgent[agentCategory][period].deals += 1
// // //         }
// // //       }

// // //       // Today (exact match)
// // //       if (dealDate.toDateString() === today.toDateString()) {
// // //         metrics.today.commission += commission
// // //         metrics.today.production += annualPremium
// // //         metrics.today.premium += monthlyPremium
// // //         metrics.today.deals += 1
        
// // //         metrics.byAgent[agentCategory].today.commission += commission
// // //         metrics.byAgent[agentCategory].today.production += annualPremium
// // //         metrics.byAgent[agentCategory].today.premium += monthlyPremium
// // //         metrics.byAgent[agentCategory].today.deals += 1
// // //       }

// // //       // Update other periods
// // //       updatePeriod('wtd', weekStart)
// // //       updatePeriod('mtd', monthStart)
// // //       updatePeriod('ytd', yearStart)
// // //     })

// // //     console.log('Calculated metrics:', {
// // //       today: metrics.today,
// // //       ytd: metrics.ytd,
// // //       agents: metrics.byAgent,
// // //       coverage: metrics.coverageAmounts
// // //     })

// // //     return metrics
// // //   }

// // //   // Helper to categorize agents
// // //   const getAgentCategory = (agentName) => {
// // //     if (!agentName) return 'Other Agents'
    
// // //     const name = agentName.toLowerCase()
// // //     if (name.includes('scott') || name.includes('watkins')) {
// // //       return 'Scott Watkins'
// // //     } else if (name.includes('george') || name.includes('knox')) {
// // //       return 'George Knox'
// // //     } else {
// // //       return 'Other Agents'
// // //     }
// // //   }

// // //   const handleLogout = async () => {
// // //     try {
// // //       const response = await fetch('/api/auth/logout', { method: 'POST' })
// // //       if (response.ok) {
// // //         window.location.href = '/login'
// // //       }
// // //     } catch (error) {
// // //       console.error('Logout error:', error)
// // //       window.location.href = '/login'
// // //     }
// // //   }

// // //   if (loading && data.length === 0) {
// // //     return (
// // //       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
// // //         <div className="text-white text-xl animate-pulse">Loading dashboard...</div>
// // //       </div>
// // //     )
// // //   }

// // //   if (error) {
// // //     return (
// // //       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
// // //         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
// // //           <div className="text-white text-xl mb-4">Error: {error}</div>
// // //           <button
// // //             onClick={fetchData}
// // //             className="px-6 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors mr-2"
// // //           >
// // //             Retry
// // //           </button>
// // //           <button
// // //             onClick={handleLogout}
// // //             className="px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
// // //           >
// // //             Logout
// // //           </button>
// // //         </div>
// // //       </div>
// // //     )
// // //   }

// // //   const metrics = calculateMetrics()
// // //   const commissionPercent = Math.min(100, (metrics.ytd.commission / goals.commission) * 100)
// // //   const productionPercent = Math.min(100, (metrics.ytd.production / goals.production) * 100)
// // //   const dealsPercent = Math.min(100, (metrics.ytd.deals / goals.deals) * 100)

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white p-4">
// // //       {/* Top Bar with Logout */}
// // //       <div className="flex justify-between items-center mb-4">
// // //         <div className="text-sm opacity-75">
// // //           Welcome to Production Dashboard
// // //         </div>
// // //         <button
// // //           onClick={handleLogout}
// // //           className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-sm"
// // //         >
// // //           Logout
// // //         </button>
// // //       </div>

// // //       <div className="max-w-7xl mx-auto space-y-4">
// // //         {/* Header */}
// // //         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20">
// // //           <h1 className="text-4xl font-bold mb-2">🎯 Production Scoreboard</h1>
// // //           <p className="text-white/80">Being consistently consistent will make me a millionaire</p>
// // //         </div>

// // //         {/* Daily Quote */}
// // //         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20">
// // //           <div className="text-2xl mb-2">💭</div>
// // //           <div className="text-xl italic font-medium">{dailyQuote}</div>
// // //           {quotes.length > 0 && (
// // //             <div className="mt-2 text-sm text-white/60">
// // //               Daily Quote • {quotes.length} quotes in rotation
// // //             </div>
// // //           )}
// // //         </div>

// // //         {/* Today's Metrics Row */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// // //           {/* Today's Commission */}
// // //           <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Today's Commission</div>
// // //               <div className="text-2xl">💰</div>
// // //             </div>
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.today.commission)}
// // //             </div>
// // //             <div className="grid grid-cols-3 gap-2">
// // //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
// // //                 <span className="block text-xs font-semibold text-gray-600 mb-1">Scott</span>
// // //                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].today.commission)}</span>
// // //               </div>
// // //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
// // //                 <span className="block text-xs font-semibold text-gray-600 mb-1">George</span>
// // //                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].today.commission)}</span>
// // //               </div>
// // //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
// // //                 <span className="block text-xs font-semibold text-gray-600 mb-1">Others</span>
// // //                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['Other Agents'].today.commission)}</span>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Today's Premium */}
// // //           <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Today's Premium</div>
// // //               <div className="text-2xl">📈</div>
// // //             </div>
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.today.premium)}
// // //             </div>
// // //             <div className="text-sm text-gray-600 mb-2">Annual: {formatCurrency(metrics.today.production)}</div>
// // //             <div className="grid grid-cols-3 gap-2">
// // //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-orange-500">
// // //                 <span className="block text-xs font-semibold text-gray-600 mb-1">Scott</span>
// // //                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].today.premium)}</span>
// // //               </div>
// // //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-orange-500">
// // //                 <span className="block text-xs font-semibold text-gray-600 mb-1">George</span>
// // //                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].today.premium)}</span>
// // //               </div>
// // //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-orange-500">
// // //                 <span className="block text-xs font-semibold text-gray-600 mb-1">Others</span>
// // //                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['Other Agents'].today.premium)}</span>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Today's Deals */}
// // //           <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Today's Deals</div>
// // //               <div className="text-2xl">📑</div>
// // //             </div>
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
// // //               {metrics.today.deals}
// // //             </div>
// // //             <div className="grid grid-cols-3 gap-2">
// // //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-blue-500">
// // //                 <span className="block text-xs font-semibold text-gray-600 mb-1">Scott</span>
// // //                 <span className="text-lg font-black text-gray-800">{metrics.byAgent['Scott Watkins'].today.deals}</span>
// // //               </div>
// // //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-blue-500">
// // //                 <span className="block text-xs font-semibold text-gray-600 mb-1">George</span>
// // //                 <span className="text-lg font-black text-gray-800">{metrics.byAgent['George Knox'].today.deals}</span>
// // //               </div>
// // //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-blue-500">
// // //                 <span className="block text-xs font-semibold text-gray-600 mb-1">Others</span>
// // //                 <span className="text-lg font-black text-gray-800">{metrics.byAgent['Other Agents'].today.deals}</span>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Today's Coverage */}
// // //           <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Today's Coverage</div>
// // //               <div className="text-2xl">🛡️</div>
// // //             </div>
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.coverageAmounts)}
// // //             </div>
// // //             <div className="text-sm text-gray-600">
// // //               Total Coverage • {metrics.ytd.deals} deals YTD
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* WTD, MTD, YTD Row */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// // //           {/* WTD Commission */}
// // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">WTD Commission</div>
// // //               <div className="text-2xl">📅</div>
// // //             </div>
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.wtd.commission)}
// // //             </div>
// // //             <div className="space-y-2">
// // //               <div className="flex justify-between py-2 border-b border-gray-200">
// // //                 <span className="text-sm font-semibold text-gray-600">Scott</span>
// // //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].wtd.commission)}</span>
// // //               </div>
// // //               <div className="flex justify-between py-2 border-b border-gray-200">
// // //                 <span className="text-sm font-semibold text-gray-600">George</span>
// // //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].wtd.commission)}</span>
// // //               </div>
// // //               <div className="flex justify-between py-2">
// // //                 <span className="text-sm font-semibold text-gray-600">Other Agents</span>
// // //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Other Agents'].wtd.commission)}</span>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* MTD Commission */}
// // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">MTD Commission</div>
// // //               <div className="text-2xl">📊</div>
// // //             </div>
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.mtd.commission)}
// // //             </div>
// // //             <div className="space-y-2">
// // //               <div className="flex justify-between py-2 border-b border-gray-200">
// // //                 <span className="text-sm font-semibold text-gray-600">Scott</span>
// // //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].mtd.commission)}</span>
// // //               </div>
// // //               <div className="flex justify-between py-2 border-b border-gray-200">
// // //                 <span className="text-sm font-semibold text-gray-600">George</span>
// // //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].mtd.commission)}</span>
// // //               </div>
// // //               <div className="flex justify-between py-2">
// // //                 <span className="text-sm font-semibold text-gray-600">Other Agents</span>
// // //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Other Agents'].mtd.commission)}</span>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* YTD Commission */}
// // //           {/* <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">YTD Commission</div>
// // //               <div className="text-2xl">🎯</div>
// // //             </div>
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.ytd.commission)}
// // //             </div>
// // //             <div className="space-y-2 mb-4">
// // //               <div className="flex justify-between py-2">
// // //                 <span className="text-sm font-semibold text-gray-600">Annual Goal</span>
// // //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(goals.commission)}</span>
// // //               </div>
// // //             </div>
// // //             <div className="mb-4">
// // //               <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
// // //                 <div 
// // //                   className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow transition-all duration-500"
// // //                   style={{ width: `${commissionPercent}%` }}
// // //                 ></div>
// // //               </div>
// // //               <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// // //                 {commissionPercent.toFixed(1)}%
// // //               </div>
// // //             </div>
// // //             <div className="flex justify-between py-2">
// // //               <span className="text-sm font-semibold text-gray-600">Progress</span>
// // //               <span className="text-sm font-bold text-gray-800">{commissionPercent.toFixed(1)}%</span>
// // //             </div>
// // //           </div> */}

// // //           {/* YTD Commission */}
// // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">YTD Commission</div>
// // //               <div className="text-2xl">💰</div>
// // //             </div>
            
// // //             {/* Main YTD Commission Number */}
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.ytd.commission)}
// // //             </div>
            
// // //             {/* Annual Goal */}
// // //             <div className="flex justify-between items-center mb-3">
// // //               <span className="text-sm font-semibold text-gray-600">Annual Goal</span>
// // //               <span className="text-sm font-bold text-gray-800">{formatCurrency(goals.commission)}</span>
// // //             </div>
            
// // //             {/* Agent Breakdown */}
// // //             <div className="space-y-2 mb-4">
// // //               <div className="flex justify-between items-center">
// // //                 <span className="text-sm font-semibold text-gray-600">George Knox</span>
// // //                 <span className="text-sm font-bold text-gray-800">
// // //                   {formatCurrency(metrics.byAgent['George Knox']?.ytd.commission || 0)}
// // //                 </span>
// // //               </div>
// // //               <div className="flex justify-between items-center">
// // //                 <span className="text-sm font-semibold text-gray-600">Scott Watkins</span>
// // //                 <span className="text-sm font-bold text-gray-800">
// // //                   {formatCurrency(metrics.byAgent['Scott Watkins']?.ytd.commission || 0)}
// // //                 </span>
// // //               </div>
// // //               <div className="flex justify-between items-center">
// // //                 <span className="text-sm font-semibold text-gray-600">Other Agents</span>
// // //                 <span className="text-sm font-bold text-gray-800">
// // //                   {formatCurrency(metrics.byAgent['Other Agents']?.ytd.commission || 0)}
// // //                 </span>
// // //               </div>
// // //             </div>
            
// // //             {/* Progress Bar */}
// // //             <div className="mb-3">
// // //               <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
// // //                 <div 
// // //                   className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow transition-all duration-500"
// // //                   style={{ width: `${commissionPercent}%` }}
// // //                 ></div>
// // //               </div>
// // //               <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// // //                 {commissionPercent.toFixed(1)}%
// // //               </div>
// // //             </div>
            
// // //             {/* Progress Label */}
// // //             <div className="flex justify-between items-center">
// // //               <span className="text-sm font-semibold text-gray-600">Progress</span>
// // //               <span className="text-sm font-bold text-gray-800">{commissionPercent.toFixed(1)}%</span>
// // //             </div>
// // //           </div>

// // //           {/* YTD Production */}
// // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">YTD Production</div>
// // //               <div className="text-2xl">📈</div>
// // //             </div>
            
// // //             {/* Main YTD Production Number */}
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.ytd.production)}
// // //             </div>
            
// // //             {/* Annual Goal */}
// // //             <div className="flex justify-between items-center mb-3">
// // //               <span className="text-sm font-semibold text-gray-600">Annual Goal</span>
// // //               <span className="text-sm font-bold text-gray-800">{formatCurrency(goals.production)}</span>
// // //             </div>
            
// // //             {/* Agent Breakdown */}
// // //             <div className="space-y-2 mb-4">
// // //               {Object.entries(metrics.byAgent || {})
// // //                 .sort((a, b) => {
// // //                   // Always keep "Other Agents" at the bottom
// // //                   if (a[0] === "Other Agents") return 1;
// // //                   if (b[0] === "Other Agents") return -1;

// // //                   // Sort remaining agents by production (highest first)
// // //                   return (b[1]?.ytd.production || 0) - (a[1]?.ytd.production || 0);
// // //                 })
// // //                 .map(([agentName, agentData]) => (
// // //                   <div
// // //                     key={agentName}
// // //                     className="flex justify-between items-center"
// // //                   >
// // //                     <span className="text-sm font-semibold text-gray-600">
// // //                       {agentName}
// // //                     </span>

// // //                     <span className="text-sm font-bold text-gray-800">
// // //                       {formatCurrency(agentData?.ytd.production || 0)}
// // //                     </span>
// // //                   </div>
// // //                 ))}
// // //             </div>

            
// // //             {/* Progress Bar */}
// // //             <div className="mb-3">
// // //               <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
// // //                 <div 
// // //                   className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow transition-all duration-500"
// // //                   style={{ width: `${productionPercent}%` }}
// // //                 ></div>
// // //               </div>
// // //               <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// // //                 {productionPercent.toFixed(1)}%
// // //               </div>
// // //             </div>
            
// // //             {/* Progress Label */}
// // //             <div className="flex justify-between items-center">
// // //               <span className="text-sm font-semibold text-gray-600">Progress</span>
// // //               <span className="text-sm font-bold text-gray-800">{productionPercent.toFixed(1)}%</span>
// // //             </div>
// // //           </div>

// // //           {/* YTD Premium */}
// // //           {/* <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">YTD Premium</div>
// // //               <div className="text-2xl">🏆</div>
// // //             </div>
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.ytd.premium)}
// // //             </div>
// // //             <div className="text-sm text-gray-600 mb-2">Annual: {formatCurrency(metrics.ytd.production)}</div>
// // //             <div className="space-y-2 mb-4">
// // //               <div className="flex justify-between py-2">
// // //                 <span className="text-sm font-semibold text-gray-600">Annual Goal</span>
// // //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(goals.production)}</span>
// // //               </div>
// // //             </div>
// // //             <div className="mb-4">
// // //               <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
// // //                 <div 
// // //                   className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow transition-all duration-500"
// // //                   style={{ width: `${productionPercent}%` }}
// // //                 ></div>
// // //               </div>
// // //               <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// // //                 {productionPercent.toFixed(1)}%
// // //               </div>
// // //             </div>
// // //             <div className="flex justify-between py-2">
// // //               <span className="text-sm font-semibold text-gray-600">Progress</span>
// // //               <span className="text-sm font-bold text-gray-800">{productionPercent.toFixed(1)}%</span>
// // //             </div>
// // //           </div> */}
// // //         </div>

// // //         {/* Goals and Lead Sources Row */}
// // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
// // //           {/* 2026 Annual Goals Progress */}
// // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">2026 Annual Goals</div>
// // //               <div className="text-2xl">🎯</div>
// // //             </div>
            
// // //             <div className="space-y-4">
// // //               {/* Commission Goal */}
// // //               <div>
// // //                 <div className="flex justify-between mb-1">
// // //                   <span className="text-sm font-semibold text-gray-600">Commission</span>
// // //                   <span className="text-sm font-bold text-gray-800">
// // //                     {formatCurrency(metrics.ytd.commission)} / {formatCurrency(goals.commission)}
// // //                   </span>
// // //                 </div>
// // //                 <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
// // //                   <div 
// // //                     className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
// // //                     style={{ width: `${commissionPercent}%` }}
// // //                   ></div>
// // //                 </div>
// // //                 <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// // //                   {commissionPercent.toFixed(1)}%
// // //                 </div>
// // //               </div>
              
// // //               {/* Production Goal */}
// // //               <div>
// // //                 <div className="flex justify-between mb-1">
// // //                   <span className="text-sm font-semibold text-gray-600">Production</span>
// // //                   <span className="text-sm font-bold text-gray-800">
// // //                     {formatCurrency(metrics.ytd.production)} / {formatCurrency(goals.production)}
// // //                   </span>
// // //                 </div>
// // //                 <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
// // //                   <div 
// // //                     className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"
// // //                     style={{ width: `${productionPercent}%` }}
// // //                   ></div>
// // //                 </div>
// // //                 <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// // //                   {productionPercent.toFixed(1)}%
// // //                 </div>
// // //               </div>
              
// // //               {/* Deals Goal */}
// // //               <div>
// // //                 <div className="flex justify-between mb-1">
// // //                   <span className="text-sm font-semibold text-gray-600">Deals</span>
// // //                   <span className="text-sm font-bold text-gray-800">
// // //                     {metrics.ytd.deals} / {goals.deals}
// // //                   </span>
// // //                 </div>
// // //                 <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
// // //                   <div 
// // //                     className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
// // //                     style={{ width: `${dealsPercent}%` }}
// // //                   ></div>
// // //                 </div>
// // //                 <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// // //                   {dealsPercent.toFixed(1)}%
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Top Lead Sources */}
// // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Top Lead Sources (MTD)</div>
// // //               <div className="text-2xl">🏆</div>
// // //             </div>
// // //             <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
// // //               {Object.entries(metrics.leadSources)
// // //                 .sort((a, b) => b[1] - a[1])
// // //                 .slice(0, 8)
// // //                 .map(([lead, total]) => (
// // //                   <div key={lead} className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500 flex justify-between items-center">
// // //                     <span className="text-sm font-bold text-gray-800 truncate max-w-[70%]" title={lead}>
// // //                       {lead}
// // //                     </span>
// // //                     <span className="text-sm font-black bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent whitespace-nowrap">
// // //                       {formatCurrency(total)}
// // //                     </span>
// // //                   </div>
// // //                 ))}
// // //               {Object.keys(metrics.leadSources).length === 0 && (
// // //                 <div className="text-center py-4 text-gray-500">
// // //                   No lead source data available
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Footer */}
// // //         <div className="text-right text-sm text-white/70">
// // //           Last Updated: {lastUpdated.toLocaleString()} | 
// // //           Auto-refresh: 60s | 
// // //           Status: 
// // //           <span className="ml-2 inline-block px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs font-semibold">
// // //             {data.length > 0 ? `Connected (${data.length} records)` : 'No Data'}
// // //           </span>
// // //           <button
// // //             onClick={fetchData}
// // //             className="ml-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-xs"
// // //             disabled={loading}
// // //           >
// // //             {loading ? 'Refreshing...' : 'Refresh Now'}
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }

















// // 'use client'

// // import { useState, useEffect, useCallback } from 'react'

// // // Default goals (will be overridden by Google Sheets data)
// // const DEFAULT_GOALS = {
// //   commission: 450000,
// //   production: 1500000,
// //   deals: 600
// // }

// // export default function DashboardContent() {
// //   const [data, setData] = useState([])
// //   const [quotes, setQuotes] = useState([])
// //   const [dailyQuote, setDailyQuote] = useState('')
// //   const [goals, setGoals] = useState(DEFAULT_GOALS)
// //   const [loading, setLoading] = useState(true)
// //   const [error, setError] = useState(null)
// //   const [lastUpdated, setLastUpdated] = useState(new Date())

// //   const fetchData = useCallback(async () => {
// //     try {
// //       setLoading(true)
      
// //       const response = await fetch('/api/sheet')
// //       const result = await response.json()
      
// //       if (!response.ok) {
// //         throw new Error(result.error || 'Failed to fetch data')
// //       }
      
// //       console.log('Data received:', {
// //         rows: result.data?.length,
// //         quotes: result.quotes?.length,
// //         goals: result.goals
// //       })
      
// //       setData(result.data || [])
// //       setQuotes(result.quotes || [])
// //       setGoals(result.goals || DEFAULT_GOALS)
// //       setError(null)
// //       setLastUpdated(new Date())
      
// //       // Set daily quote
// //       if (result.quotes && result.quotes.length > 0) {
// //         selectDailyQuote(result.quotes)
// //       } else {
// //         setDailyQuote('Money follows small actions repeated daily.')
// //       }
      
// //     } catch (err) {
// //       console.error('Error fetching data:', err)
// //       setError(err.message || 'Failed to load dashboard data')
// //     } finally {
// //       setLoading(false)
// //     }
// //   }, [])

// //   // Function to select daily quote (changes daily)
// //   const selectDailyQuote = (quotesList) => {
// //     if (!quotesList || quotesList.length === 0) return
    
// //     // Use the day of the year to select a consistent daily quote
// //     const today = new Date()
// //     const start = new Date(today.getFullYear(), 0, 0)
// //     const diff = today - start
// //     const oneDay = 1000 * 60 * 60 * 24
// //     const dayOfYear = Math.floor(diff / oneDay)
    
// //     const quoteIndex = dayOfYear % quotesList.length
// //     const selectedQuote = quotesList[quoteIndex]
// //     setDailyQuote(selectedQuote.text) // Only show text, no author
// //   }

// //   useEffect(() => {
// //     fetchData()
// //     const interval = setInterval(fetchData, 60000)
// //     return () => clearInterval(interval)
// //   }, [fetchData])

// //   const formatCurrency = (amount) => {
// //     return new Intl.NumberFormat("en-US", {
// //       style: "currency",
// //       currency: "USD",
// //       minimumFractionDigits: 0
// //     }).format(amount || 0)
// //   }

// //   const cleanNumber = (value) => {
// //     if (!value) return 0
// //     const str = String(value)
// //     const cleaned = str.replace(/[^\d.-]/g, '')
// //     return Number(cleaned) || 0
// //   }

// //   const calculateMetrics = () => {
// //     const today = new Date()
// //     today.setHours(0, 0, 0, 0)

// //     // Initialize metrics - Only Scott's total and George's total
// //     let metrics = {
// //       today: { commission: 0, production: 0, deals: 0 },
// //       wtd: { commission: 0, production: 0, deals: 0 },
// //       mtd: { commission: 0, production: 0, deals: 0 },
// //       ytd: { commission: 0, production: 0, deals: 0 },
// //       byAgent: {
// //         'Scott Watkins': {
// //           today: { commission: 0, production: 0, deals: 0 },
// //           wtd: { commission: 0, production: 0, deals: 0 },
// //           mtd: { commission: 0, production: 0, deals: 0 },
// //           ytd: { commission: 0, production: 0, deals: 0 }
// //         },
// //         'George Knox': {
// //           today: { commission: 0, production: 0, deals: 0 },
// //           wtd: { commission: 0, production: 0, deals: 0 },
// //           mtd: { commission: 0, production: 0, deals: 0 },
// //           ytd: { commission: 0, production: 0, deals: 0 }
// //         },
// //         'Total (Scott + George)': {
// //           today: { commission: 0, production: 0, deals: 0 },
// //           wtd: { commission: 0, production: 0, deals: 0 },
// //           mtd: { commission: 0, production: 0, deals: 0 },
// //           ytd: { commission: 0, production: 0, deals: 0 }
// //         }
// //       },
// //       leadSources: {}
// //     }

// //     if (!data || data.length === 0) {
// //       return metrics
// //     }

// //     // Date ranges
// //     const weekStart = new Date(today)
// //     weekStart.setDate(today.getDate() - today.getDay()) // Sunday start
// //     weekStart.setHours(0, 0, 0, 0)

// //     const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)
// //     monthStart.setHours(0, 0, 0, 0)

// //     const yearStart = new Date(today.getFullYear(), 0, 1)
// //     yearStart.setHours(0, 0, 0, 0)

// //     console.log('Processing deals...')
// //     data.forEach((row) => {
// //       // Check status - must be "Approved"
// //       const status = row._status
// //       if (!status || status.toLowerCase() !== 'approved') {
// //         return
// //       }

// //       // Parse date from "MM/DD/YYYY" format
// //       const dateStr = row._dateSold
// //       if (!dateStr) {
// //         console.log('No date found for row:', row._rowIndex)
// //         return
// //       }
      
// //       let dealDate
// //       if (dateStr.includes('/')) {
// //         const [month, day, year] = dateStr.split('/').map(Number)
// //         dealDate = new Date(year, month - 1, day)
// //       } else {
// //         dealDate = new Date(dateStr)
// //       }
      
// //       if (isNaN(dealDate.getTime())) {
// //         console.log('Invalid date:', dateStr)
// //         return
// //       }
// //       dealDate.setHours(0, 0, 0, 0)

// //       // Get agent and categorize
// //       const agent = row._agent || ''
// //       const agentCategory = getAgentCategory(agent)
      
// //       const lead = row._leadVendor || 'Unknown'
      
// //       // Get values - Use annual premium for production (not monthly)
// //       // Note: If annual premium isn't available, we'll need to calculate it
// //       const monthlyPremium = cleanNumber(row._monthlyPremium)
// //       const annualPremium = monthlyPremium * 12 // Convert to annual for production
// //       const commission = cleanNumber(row._netCommission) // Using Column AA

// //       // Debug logging for today's deals
// //       if (dealDate.toDateString() === today.toDateString() && commission > 0) {
// //         console.log('Today\'s approved deal found:', {
// //           agent: agent,
// //           commission: commission,
// //           annualPremium: annualPremium,
// //           date: dateStr
// //         })
// //       }

// //       // Initialize lead source if not exists
// //       if (!metrics.leadSources[lead]) {
// //         metrics.leadSources[lead] = 0
// //       }
// //       metrics.leadSources[lead] += annualPremium

// //       // Helper to update metrics for a time period
// //       const updatePeriod = (period, periodStart) => {
// //         if (dealDate >= periodStart) {
// //           // Update Scott + George total
// //           metrics[period].commission += commission
// //           metrics[period].production += annualPremium // Use annual for production
// //           metrics[period].deals += 1
          
// //           // Update individual agents
// //           if (agentCategory !== 'Other Agents') {
// //             metrics.byAgent[agentCategory][period].commission += commission
// //             metrics.byAgent[agentCategory][period].production += annualPremium // Use annual for production
// //             metrics.byAgent[agentCategory][period].deals += 1
            
// //             // Update total (Scott + George)
// //             if (agentCategory === 'Scott Watkins' || agentCategory === 'George Knox') {
// //               metrics.byAgent['Total (Scott + George)'][period].commission += commission
// //               metrics.byAgent['Total (Scott + George)'][period].production += annualPremium // Use annual for production
// //               metrics.byAgent['Total (Scott + George)'][period].deals += 1
// //             }
// //           }
// //         }
// //       }

// //       // Today (exact match)
// //       if (dealDate.toDateString() === today.toDateString()) {
// //         metrics.today.commission += commission
// //         metrics.today.production += annualPremium // Use annual for production
// //         metrics.today.deals += 1
        
// //         // Update individual agents
// //         if (agentCategory !== 'Other Agents') {
// //           metrics.byAgent[agentCategory].today.commission += commission
// //           metrics.byAgent[agentCategory].today.production += annualPremium // Use annual for production
// //           metrics.byAgent[agentCategory].today.deals += 1
          
// //           // Update total (Scott + George)
// //           if (agentCategory === 'Scott Watkins' || agentCategory === 'George Knox') {
// //             metrics.byAgent['Total (Scott + George)'].today.commission += commission
// //             metrics.byAgent['Total (Scott + George)'].today.production += annualPremium // Use annual for production
// //             metrics.byAgent['Total (Scott + George)'].today.deals += 1
// //           }
// //         }
// //       }

// //       // Update other periods
// //       updatePeriod('wtd', weekStart)
// //       updatePeriod('mtd', monthStart)
// //       updatePeriod('ytd', yearStart)
// //     })

// //     console.log('Calculated metrics:', {
// //       today: metrics.today,
// //       ytd: metrics.ytd,
// //       agents: metrics.byAgent,
// //       totalDealsProcessed: data.length
// //     })

// //     return metrics
// //   }

// //   // Helper to categorize agents
// //   const getAgentCategory = (agentName) => {
// //     if (!agentName) return 'Other Agents'
    
// //     const name = agentName.toLowerCase()
// //     if (name.includes('scott') || name.includes('watkins')) {
// //       return 'Scott Watkins'
// //     } else if (name.includes('george') || name.includes('knox')) {
// //       return 'George Knox'
// //     } else {
// //       return 'Other Agents'
// //     }
// //   }

// //   const handleLogout = async () => {
// //     try {
// //       const response = await fetch('/api/auth/logout', { method: 'POST' })
// //       if (response.ok) {
// //         window.location.href = '/login'
// //       }
// //     } catch (error) {
// //       console.error('Logout error:', error)
// //       window.location.href = '/login'
// //     }
// //   }

// //   if (loading && data.length === 0) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
// //         <div className="text-white text-xl animate-pulse">Loading dashboard...</div>
// //       </div>
// //     )
// //   }

// //   if (error) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
// //         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
// //           <div className="text-white text-xl mb-4">Error: {error}</div>
// //           <button
// //             onClick={fetchData}
// //             className="px-6 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors mr-2"
// //           >
// //             Retry
// //           </button>
// //           <button
// //             onClick={handleLogout}
// //             className="px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
// //           >
// //             Logout
// //           </button>
// //         </div>
// //       </div>
// //     )
// //   }

// //   const metrics = calculateMetrics()
// //   const commissionPercent = Math.min(100, (metrics.ytd.commission / goals.commission) * 100)
// //   const productionPercent = Math.min(100, (metrics.ytd.production / goals.production) * 100)
// //   const dealsPercent = Math.min(100, (metrics.ytd.deals / goals.deals) * 100)

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white p-4">
// //       {/* Top Bar with Logout */}
// //       {/*       
// //       <div className="flex justify-between items-center mb-4">
// //         <div className="text-sm opacity-75">
// //           Welcome to Production Dashboard
// //         </div>
// //         <button
// //           onClick={handleLogout}
// //           className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-sm"
// //         >
// //           Logout
// //         </button>
// //       </div>
// //       */}

// //       <div className="max-w-7xl mx-auto space-y-4">
// //         {/* Header */}
// //         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20">
// //           <button
// //             onClick={handleLogout}
// //             className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-sm float-right mb-2"
// //           >
// //             Logout
// //           </button>
// //           <h1 className="text-4xl font-bold mb-2">🎯 Production Scoreboard</h1>
// //           <p className="text-white/80">Being consistently consistent will make me a millionaire</p>
// //         </div>

// //         {/* Daily Quote (Simplified) */}
// //         {/* {dailyQuote && (
// //           <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 text-center border border-white/20">
// //             <div className="text-lg italic font-medium">💭 {dailyQuote}</div>
// //           </div>
// //         )} */}

// //         {/* Today's Metrics Row */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //           {/* Today's Commission */}
// //           <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">My Today's Commission</div>
// //               <div className="text-2xl">💰</div>
// //             </div>
// //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// //               {formatCurrency(metrics.byAgent['Total (Scott + George)'].today.commission)}
// //             </div>
// //             <div className="grid grid-cols-3 gap-2">
// //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
// //                 <span className="block text-xs font-semibold text-gray-600 mb-1">Scott</span>
// //                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].today.commission)}</span>
// //               </div>
// //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
// //                 <span className="block text-xs font-semibold text-gray-600 mb-1">George</span>
// //                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].today.commission)}</span>
// //               </div>
// //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
// //                 <span className="block text-xs font-semibold text-gray-600 mb-1">Total</span>
// //                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['Total (Scott + George)'].today.commission)}</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Today's Production (Annual Premium) */}
// //           <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">My Today's Production</div>
// //               <div className="text-2xl">📈</div>
// //             </div>
// //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
// //               {formatCurrency(metrics.byAgent['Total (Scott + George)'].today.production)}
// //             </div>
// //             <div className="grid grid-cols-3 gap-2">
// //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-orange-500">
// //                 <span className="block text-xs font-semibold text-gray-600 mb-1">Scott</span>
// //                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].today.production)}</span>
// //               </div>
// //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-orange-500">
// //                 <span className="block text-xs font-semibold text-gray-600 mb-1">George</span>
// //                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].today.production)}</span>
// //               </div>
// //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-orange-500">
// //                 <span className="block text-xs font-semibold text-gray-600 mb-1">Total</span>
// //                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['Total (Scott + George)'].today.production)}</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Today's Deals */}
// //           <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">My Today's Deals</div>
// //               <div className="text-2xl">📑</div>
// //             </div>
// //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
// //               {metrics.byAgent['Total (Scott + George)'].today.deals}
// //             </div>
// //             <div className="grid grid-cols-3 gap-2">
// //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-blue-500">
// //                 <span className="block text-xs font-semibold text-gray-600 mb-1">Scott</span>
// //                 <span className="text-lg font-black text-gray-800">{metrics.byAgent['Scott Watkins'].today.deals}</span>
// //               </div>
// //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-blue-500">
// //                 <span className="block text-xs font-semibold text-gray-600 mb-1">George</span>
// //                 <span className="text-lg font-black text-gray-800">{metrics.byAgent['George Knox'].today.deals}</span>
// //               </div>
// //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-blue-500">
// //                 <span className="block text-xs font-semibold text-gray-600 mb-1">Total</span>
// //                 <span className="text-lg font-black text-gray-800">{metrics.byAgent['Total (Scott + George)'].today.deals}</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* WTD, MTD, YTD Row */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //           {/* WTD Commission */}
// //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">WTD Commission</div>
// //               <div className="text-2xl">📅</div>
// //             </div>
// //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// //               {formatCurrency(metrics.byAgent['Total (Scott + George)'].wtd.commission)}
// //             </div>
// //             <div className="space-y-2">
// //               <div className="flex justify-between py-2 border-b border-gray-200">
// //                 <span className="text-sm font-semibold text-gray-600">Scott</span>
// //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].wtd.commission)}</span>
// //               </div>
// //               <div className="flex justify-between py-2 border-b border-gray-200">
// //                 <span className="text-sm font-semibold text-gray-600">George</span>
// //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].wtd.commission)}</span>
// //               </div>
// //               <div className="flex justify-between py-2">
// //                 <span className="text-sm font-semibold text-gray-600">Total</span>
// //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Total (Scott + George)'].wtd.commission)}</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* MTD Commission */}
// //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">MTD Commission</div>
// //               <div className="text-2xl">📊</div>
// //             </div>
// //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// //               {formatCurrency(metrics.byAgent['Total (Scott + George)'].mtd.commission)}
// //             </div>
// //             <div className="space-y-2">
// //               <div className="flex justify-between py-2 border-b border-gray-200">
// //                 <span className="text-sm font-semibold text-gray-600">Scott</span>
// //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].mtd.commission)}</span>
// //               </div>
// //               <div className="flex justify-between py-2 border-b border-gray-200">
// //                 <span className="text-sm font-semibold text-gray-600">George</span>
// //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].mtd.commission)}</span>
// //               </div>
// //               <div className="flex justify-between py-2">
// //                 <span className="text-sm font-semibold text-gray-600">Total</span>
// //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Total (Scott + George)'].mtd.commission)}</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* YTD Commission */}
// //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">YTD Commission</div>
// //               <div className="text-2xl">🎯</div>
// //             </div>
            
// //             {/* Main YTD Commission Number */}
// //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// //               {formatCurrency(metrics.byAgent['Total (Scott + George)'].ytd.commission)}
// //             </div>
            
// //             {/* Agent Breakdown */}
// //             <div className="space-y-2 mb-4">
// //               <div className="flex justify-between items-center">
// //                 <span className="text-sm font-semibold text-gray-600">Scott Watkins</span>
// //                 <span className="text-sm font-bold text-gray-800">
// //                   {formatCurrency(metrics.byAgent['Scott Watkins']?.ytd.commission || 0)}
// //                 </span>
// //               </div>
// //               <div className="flex justify-between items-center">
// //                 <span className="text-sm font-semibold text-gray-600">George Knox</span>
// //                 <span className="text-sm font-bold text-gray-800">
// //                   {formatCurrency(metrics.byAgent['George Knox']?.ytd.commission || 0)}
// //                 </span>
// //               </div>
// //               <div className="flex justify-between items-center">
// //                 <span className="text-sm font-semibold text-gray-600">Total</span>
// //                 <span className="text-sm font-bold text-gray-800">
// //                   {formatCurrency(metrics.byAgent['Total (Scott + George)']?.ytd.commission || 0)}
// //                 </span>
// //               </div>
// //             </div>
            
// //             {/* Annual Goal */}
// //             <div className="flex justify-between items-center mb-3">
// //               <span className="text-sm font-semibold text-gray-600">Annual Goal</span>
// //               <span className="text-sm font-bold text-gray-800">{formatCurrency(goals.commission)}</span>
// //             </div>
            
// //             {/* Progress Bar */}
// //             <div className="mb-3">
// //               <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
// //                 <div 
// //                   className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow transition-all duration-500"
// //                   style={{ width: `${commissionPercent}%` }}
// //                 ></div>
// //               </div>
// //               <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// //                 {commissionPercent.toFixed(1)}%
// //               </div>
// //             </div>
            
// //             {/* Progress Label */}
// //             <div className="flex justify-between items-center">
// //               <span className="text-sm font-semibold text-gray-600">Progress</span>
// //               <span className="text-sm font-bold text-gray-800">{commissionPercent.toFixed(1)}%</span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Production Metrics Row */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //           {/* WTD Production */}
// //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">WTD Production</div>
// //               <div className="text-2xl">📅</div>
// //             </div>
// //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
// //               {formatCurrency(metrics.byAgent['Total (Scott + George)'].wtd.production)}
// //             </div>
// //             <div className="space-y-2">
// //               <div className="flex justify-between py-2 border-b border-gray-200">
// //                 <span className="text-sm font-semibold text-gray-600">Scott</span>
// //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].wtd.production)}</span>
// //               </div>
// //               <div className="flex justify-between py-2 border-b border-gray-200">
// //                 <span className="text-sm font-semibold text-gray-600">George</span>
// //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].wtd.production)}</span>
// //               </div>
// //               <div className="flex justify-between py-2">
// //                 <span className="text-sm font-semibold text-gray-600">Total</span>
// //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Total (Scott + George)'].wtd.production)}</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* MTD Production */}
// //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">MTD Production</div>
// //               <div className="text-2xl">📊</div>
// //             </div>
// //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
// //               {formatCurrency(metrics.byAgent['Total (Scott + George)'].mtd.production)}
// //             </div>
// //             <div className="space-y-2">
// //               <div className="flex justify-between py-2 border-b border-gray-200">
// //                 <span className="text-sm font-semibold text-gray-600">Scott</span>
// //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].mtd.production)}</span>
// //               </div>
// //               <div className="flex justify-between py-2 border-b border-gray-200">
// //                 <span className="text-sm font-semibold text-gray-600">George</span>
// //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].mtd.production)}</span>
// //               </div>
// //               <div className="flex justify-between py-2">
// //                 <span className="text-sm font-semibold text-gray-600">Total</span>
// //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Total (Scott + George)'].mtd.production)}</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* YTD Production */}
// //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">YTD Production</div>
// //               <div className="text-2xl">🏆</div>
// //             </div>
            
// //             {/* Main YTD Production Number */}
// //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
// //               {formatCurrency(metrics.byAgent['Total (Scott + George)'].ytd.production)}
// //             </div>
            
// //             {/* Agent Breakdown */}
// //             <div className="space-y-2 mb-4">
// //               <div className="flex justify-between items-center">
// //                 <span className="text-sm font-semibold text-gray-600">Scott Watkins</span>
// //                 <span className="text-sm font-bold text-gray-800">
// //                   {formatCurrency(metrics.byAgent['Scott Watkins']?.ytd.production || 0)}
// //                 </span>
// //               </div>
// //               <div className="flex justify-between items-center">
// //                 <span className="text-sm font-semibold text-gray-600">George Knox</span>
// //                 <span className="text-sm font-bold text-gray-800">
// //                   {formatCurrency(metrics.byAgent['George Knox']?.ytd.production || 0)}
// //                 </span>
// //               </div>
// //               <div className="flex justify-between items-center">
// //                 <span className="text-sm font-semibold text-gray-600">Total</span>
// //                 <span className="text-sm font-bold text-gray-800">
// //                   {formatCurrency(metrics.byAgent['Total (Scott + George)']?.ytd.production || 0)}
// //                 </span>
// //               </div>
// //             </div>
            
// //             {/* Annual Goal */}
// //             <div className="flex justify-between items-center mb-3">
// //               <span className="text-sm font-semibold text-gray-600">Annual Goal</span>
// //               <span className="text-sm font-bold text-gray-800">{formatCurrency(goals.production)}</span>
// //             </div>
            
// //             {/* Progress Bar */}
// //             <div className="mb-3">
// //               <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
// //                 <div 
// //                   className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow transition-all duration-500"
// //                   style={{ width: `${productionPercent}%` }}
// //                 ></div>
// //               </div>
// //               <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// //                 {productionPercent.toFixed(1)}%
// //               </div>
// //             </div>
            
// //             {/* Progress Label */}
// //             <div className="flex justify-between items-center">
// //               <span className="text-sm font-semibold text-gray-600">Progress</span>
// //               <span className="text-sm font-bold text-gray-800">{productionPercent.toFixed(1)}%</span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Goals and Lead Sources Row */}
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
// //           {/* 2026 Annual Goals Progress */}
// //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">2026 Annual Goals</div>
// //               <div className="text-2xl">🎯</div>
// //             </div>
            
// //             <div className="space-y-4">
// //               {/* Commission Goal */}
// //               <div>
// //                 <div className="flex justify-between mb-1">
// //                   <span className="text-sm font-semibold text-gray-600">Commission</span>
// //                   <span className="text-sm font-bold text-gray-800">
// //                     {formatCurrency(metrics.byAgent['Total (Scott + George)'].ytd.commission)} / {formatCurrency(goals.commission)}
// //                   </span>
// //                 </div>
// //                 <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
// //                   <div 
// //                     className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
// //                     style={{ width: `${commissionPercent}%` }}
// //                   ></div>
// //                 </div>
// //                 <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// //                   {commissionPercent.toFixed(1)}%
// //                 </div>
// //               </div>
              
// //               {/* Production Goal */}
// //               <div>
// //                 <div className="flex justify-between mb-1">
// //                   <span className="text-sm font-semibold text-gray-600">Production</span>
// //                   <span className="text-sm font-bold text-gray-800">
// //                     {formatCurrency(metrics.byAgent['Total (Scott + George)'].ytd.production)} / {formatCurrency(goals.production)}
// //                   </span>
// //                 </div>
// //                 <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
// //                   <div 
// //                     className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"
// //                     style={{ width: `${productionPercent}%` }}
// //                   ></div>
// //                 </div>
// //                 <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// //                   {productionPercent.toFixed(1)}%
// //                 </div>
// //               </div>
              
// //               {/* Deals Goal */}
// //               <div>
// //                 <div className="flex justify-between mb-1">
// //                   <span className="text-sm font-semibold text-gray-600">Deals</span>
// //                   <span className="text-sm font-bold text-gray-800">
// //                     {metrics.byAgent['Total (Scott + George)'].ytd.deals} / {goals.deals}
// //                   </span>
// //                 </div>
// //                 <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
// //                   <div 
// //                     className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
// //                     style={{ width: `${dealsPercent}%` }}
// //                   ></div>
// //                 </div>
// //                 <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// //                   {dealsPercent.toFixed(1)}%
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Top Lead Sources */}
// //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Top Lead Sources (MTD)</div>
// //               <div className="text-2xl">🏆</div>
// //             </div>
// //             <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
// //               {Object.entries(metrics.leadSources)
// //                 .sort((a, b) => b[1] - a[1])
// //                 .slice(0, 8)
// //                 .map(([lead, total]) => (
// //                   <div key={lead} className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500 flex justify-between items-center">
// //                     <span className="text-sm font-bold text-gray-800 truncate max-w-[70%]" title={lead}>
// //                       {lead}
// //                     </span>
// //                     <span className="text-sm font-black bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent whitespace-nowrap">
// //                       {formatCurrency(total)}
// //                     </span>
// //                   </div>
// //                 ))}
// //               {Object.keys(metrics.leadSources).length === 0 && (
// //                 <div className="text-center py-4 text-gray-500">
// //                   No lead source data available
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Footer */}
// //         <div className="text-right text-sm text-white/70">
// //           Last Updated: {lastUpdated.toLocaleString()} | 
// //           Auto-refresh: 60s | 
// //           Status: 
// //           <span className="ml-2 inline-block px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs font-semibold">
// //             {data.length > 0 ? `Connected (${data.length} records)` : 'No Data'}
// //           </span>
// //           <button
// //             onClick={fetchData}
// //             className="ml-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-xs"
// //             disabled={loading}
// //           >
// //             {loading ? 'Refreshing...' : 'Refresh Now'}
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }














// 'use client'

// import { useState, useEffect, useCallback } from 'react'

// // Default goals (will be overridden by Google Sheets data)
// const DEFAULT_GOALS = {
//   commission: 375000,
//   production: 400000,
//   deals: 400,
//   dailyTarget: 2000
// }

// export default function DashboardContent() {
//   const [data, setData] = useState([])
//   const [quotes, setQuotes] = useState([])
//   const [dailyQuote, setDailyQuote] = useState('')
//   const [goals, setGoals] = useState(DEFAULT_GOALS)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const [lastUpdated, setLastUpdated] = useState(new Date())

//   const fetchData = useCallback(async () => {
//     try {
//       setLoading(true)
      
//       const response = await fetch('/api/sheet')
//       const result = await response.json()
      
//       if (!response.ok) {
//         throw new Error(result.error || 'Failed to fetch data')
//       }
      
//       console.log('Dashboard Data received:', {
//         rows: result.data?.length,
//         quotes: result.quotes?.length,
//         goals: result.goals,
//         firstRow: result.data?.[0]
//       })
      
//       setData(result.data || [])
//       setQuotes(result.quotes || [])
//       setGoals(result.goals || DEFAULT_GOALS)
//       setError(null)
//       setLastUpdated(new Date())
      
//       // Set daily quote
//       if (result.quotes && result.quotes.length > 0) {
//         selectDailyQuote(result.quotes)
//       } else {
//         setDailyQuote('Money follows small actions repeated daily.')
//       }
      
//     } catch (err) {
//       console.error('Error fetching data:', err)
//       setError(err.message || 'Failed to load dashboard data')
//     } finally {
//       setLoading(false)
//     }
//   }, [])

//   // Function to select daily quote (changes daily)
//   const selectDailyQuote = (quotesList) => {
//     if (!quotesList || quotesList.length === 0) return
    
//     // Use the day of the year to select a consistent daily quote
//     const today = new Date()
//     const start = new Date(today.getFullYear(), 0, 0)
//     const diff = today - start
//     const oneDay = 1000 * 60 * 60 * 24
//     const dayOfYear = Math.floor(diff / oneDay)
    
//     const quoteIndex = dayOfYear % quotesList.length
//     const selectedQuote = quotesList[quoteIndex]
//     setDailyQuote(selectedQuote.text)
//   }

//   useEffect(() => {
//     fetchData()
//     const interval = setInterval(fetchData, 60000)
//     return () => clearInterval(interval)
//   }, [fetchData])

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//       minimumFractionDigits: 0,
//       maximumFractionDigits: 0
//     }).format(amount || 0)
//   }

//   const cleanNumber = (value) => {
//     if (!value && value !== 0) return 0
//     const str = String(value)
//     const cleaned = str.replace(/[^\d.-]/g, '')
//     const num = Number(cleaned)
//     return isNaN(num) ? 0 : num
//   }

//   const calculateMetrics = () => {
//     const today = new Date()
//     today.setHours(0, 0, 0, 0)

//     // Initialize metrics - Only Scott's total and George's total
//     let metrics = {
//       today: { commission: 0, production: 0, deals: 0 },
//       wtd: { commission: 0, production: 0, deals: 0 },
//       mtd: { commission: 0, production: 0, deals: 0 },
//       ytd: { commission: 0, production: 0, deals: 0 },
//       byAgent: {
//         'Scott Watkins': {
//           today: { commission: 0, production: 0, deals: 0 },
//           wtd: { commission: 0, production: 0, deals: 0 },
//           mtd: { commission: 0, production: 0, deals: 0 },
//           ytd: { commission: 0, production: 0, deals: 0 }
//         },
//         'George Knox': {
//           today: { commission: 0, production: 0, deals: 0 },
//           wtd: { commission: 0, production: 0, deals: 0 },
//           mtd: { commission: 0, production: 0, deals: 0 },
//           ytd: { commission: 0, production: 0, deals: 0 }
//         },
//         'Total (Scott + George)': {
//           today: { commission: 0, production: 0, deals: 0 },
//           wtd: { commission: 0, production: 0, deals: 0 },
//           mtd: { commission: 0, production: 0, deals: 0 },
//           ytd: { commission: 0, production: 0, deals: 0 }
//         }
//       },
//       leadSources: {}
//     }

//     if (!data || data.length === 0) {
//       return metrics
//     }

//     // Date ranges
//     const weekStart = new Date(today)
//     weekStart.setDate(today.getDate() - today.getDay()) // Sunday start
//     weekStart.setHours(0, 0, 0, 0)

//     const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)
//     monthStart.setHours(0, 0, 0, 0)

//     const yearStart = new Date(today.getFullYear(), 0, 1)
//     yearStart.setHours(0, 0, 0, 0)

//     console.log('Processing deals...')
    
//     let processedCount = 0
//     let approvedCount = 0
    
//     data.forEach((row, index) => {
//       processedCount++
      
//       // Check status - must be "Approved"
//       const status = row._status
//       if (!status || status.toLowerCase() !== 'approved') {
//         return
//       }
      
//       approvedCount++

//       // Parse date from "MM/DD/YYYY" format
//       const dateStr = row._dateSold
//       if (!dateStr) {
//         return
//       }
      
//       let dealDate
//       if (dateStr.includes('/')) {
//         const [month, day, year] = dateStr.split('/').map(Number)
//         dealDate = new Date(year, month - 1, day)
//       } else {
//         dealDate = new Date(dateStr)
//       }
      
//       if (isNaN(dealDate.getTime())) {
//         console.log('Invalid date:', dateStr, 'in row:', index)
//         return
//       }
//       dealDate.setHours(0, 0, 0, 0)

//       // Get agent and categorize
//       const agent = row._agent || ''
//       const agentCategory = getAgentCategory(agent)
      
//       const lead = row._leadVendor || 'Unknown'
      
//       // Get values - Use annual premium for production
//       const monthlyPremium = cleanNumber(row._monthlyPremium)
//       const annualPremium = monthlyPremium * 12
//       const commission = cleanNumber(row._netCommission)

//       // Debug log for today's deals
//       if (dealDate.toDateString() === today.toDateString() && commission > 0) {
//         console.log('Today\'s approved deal:', {
//           agent: agent,
//           commission: commission,
//           annualPremium: annualPremium,
//           monthlyPremium: monthlyPremium,
//           date: dateStr
//         })
//       }

//       // Initialize lead source if not exists
//       if (!metrics.leadSources[lead]) {
//         metrics.leadSources[lead] = 0
//       }
//       metrics.leadSources[lead] += annualPremium

//       // Helper to update metrics for a time period
//       const updatePeriod = (period, periodStart) => {
//         if (dealDate >= periodStart) {
//           // Update Scott + George total
//           metrics[period].commission += commission
//           metrics[period].production += annualPremium
//           metrics[period].deals += 1
          
//           // Update individual agents
//           if (agentCategory !== 'Other Agents') {
//             metrics.byAgent[agentCategory][period].commission += commission
//             metrics.byAgent[agentCategory][period].production += annualPremium
//             metrics.byAgent[agentCategory][period].deals += 1
            
//             // Update total (Scott + George)
//             if (agentCategory === 'Scott Watkins' || agentCategory === 'George Knox') {
//               metrics.byAgent['Total (Scott + George)'][period].commission += commission
//               metrics.byAgent['Total (Scott + George)'][period].production += annualPremium
//               metrics.byAgent['Total (Scott + George)'][period].deals += 1
//             }
//           }
//         }
//       }

//       // Today (exact match)
//       if (dealDate.toDateString() === today.toDateString()) {
//         metrics.today.commission += commission
//         metrics.today.production += annualPremium
//         metrics.today.deals += 1
        
//         // Update individual agents
//         if (agentCategory !== 'Other Agents') {
//           metrics.byAgent[agentCategory].today.commission += commission
//           metrics.byAgent[agentCategory].today.production += annualPremium
//           metrics.byAgent[agentCategory].today.deals += 1
          
//           // Update total (Scott + George)
//           if (agentCategory === 'Scott Watkins' || agentCategory === 'George Knox') {
//             metrics.byAgent['Total (Scott + George)'].today.commission += commission
//             metrics.byAgent['Total (Scott + George)'].today.production += annualPremium
//             metrics.byAgent['Total (Scott + George)'].today.deals += 1
//           }
//         }
//       }

//       // Update other periods
//       updatePeriod('wtd', weekStart)
//       updatePeriod('mtd', monthStart)
//       updatePeriod('ytd', yearStart)
//     })

//     console.log('Metrics calculation complete:', {
//       totalRows: data.length,
//       processed: processedCount,
//       approved: approvedCount,
//       todayCommission: metrics.today.commission,
//       todayProduction: metrics.today.production,
//       todayDeals: metrics.today.deals,
//       ytdCommission: metrics.ytd.commission,
//       ytdProduction: metrics.ytd.production,
//       ytdDeals: metrics.ytd.deals
//     })

//     return metrics
//   }

//   // Helper to categorize agents
//   const getAgentCategory = (agentName) => {
//     if (!agentName) return 'Other Agents'
    
//     const name = agentName.toLowerCase()
//     if (name.includes('scott') || name.includes('watkins')) {
//       return 'Scott Watkins'
//     } else if (name.includes('george') || name.includes('knox')) {
//       return 'George Knox'
//     } else {
//       return 'Other Agents'
//     }
//   }

//   const handleLogout = async () => {
//     try {
//       const response = await fetch('/api/auth/logout', { method: 'POST' })
//       if (response.ok) {
//         window.location.href = '/login'
//       }
//     } catch (error) {
//       console.error('Logout error:', error)
//       window.location.href = '/login'
//     }
//   }

//   if (loading && data.length === 0) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
//         <div className="text-white text-xl animate-pulse">Loading dashboard...</div>
//       </div>
//     )
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
//         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
//           <div className="text-white text-xl mb-4">Error: {error}</div>
//           <button
//             onClick={fetchData}
//             className="px-6 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors mr-2"
//           >
//             Retry
//           </button>
//           <button
//             onClick={handleLogout}
//             className="px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//     )
//   }

//   const metrics = calculateMetrics()
  
//   // Calculate percentages
//   const commissionPercent = Math.min(100, (metrics.byAgent['Total (Scott + George)'].ytd.commission / goals.commission) * 100)
//   const productionPercent = Math.min(100, (metrics.byAgent['Total (Scott + George)'].ytd.production / goals.production) * 100)
//   const dealsPercent = Math.min(100, (metrics.byAgent['Total (Scott + George)'].ytd.deals / goals.deals) * 100)
  
//   // Calculate daily target progress
//   const dailyTargetProgress = Math.min(100, (metrics.byAgent['Total (Scott + George)'].today.commission / goals.dailyTarget) * 100)

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white p-4">
//       <div className="max-w-7xl mx-auto space-y-4">
//         {/* Header */}
//         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 relative">
//           <button
//             onClick={handleLogout}
//             className="absolute top-4 right-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-sm"
//           >
//             Logout
//           </button>
//           <h1 className="text-4xl font-bold mb-2">🎯 Production Scoreboard</h1>
//           <p className="text-white/80">Being consistently consistent will make me a millionaire</p>
          
//           {/* Daily Target Badge */}
//           <div className="mt-4 flex flex-wrap gap-2 justify-center">
//             <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full font-bold text-sm">
//               🎯 Daily Target: {formatCurrency(goals.dailyTarget)}
//             </div>
//             <div className={`px-4 py-2 rounded-full font-bold text-sm ${
//               dailyTargetProgress >= 100 
//                 ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
//                 : 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
//             }`}>
//               {dailyTargetProgress >= 100 ? '🎯 Target Achieved!' : `Progress: ${dailyTargetProgress.toFixed(1)}%`}
//             </div>
//           </div>
//         </div>

//         {/* Today's Metrics Row */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {/* Today's Commission with Daily Target */}
//           <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
//             <div className="flex justify-between items-center mb-4">
//               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Today's Commission</div>
//               <div className="text-2xl">💰</div>
//             </div>
//             <div className="text-3xl font-black mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//               {formatCurrency(metrics.byAgent['Total (Scott + George)'].today.commission)}
//             </div>
            
//             {/* Daily Target Progress */}
//             <div className="mb-3">
//               <div className="flex justify-between text-xs text-gray-600 mb-1">
//                 <span className="font-semibold">Daily Target: {formatCurrency(goals.dailyTarget)}</span>
//                 <span className="font-bold">{dailyTargetProgress.toFixed(1)}%</span>
//               </div>
//               <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
//                 <div 
//                   className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-500"
//                   style={{ width: `${dailyTargetProgress}%` }}
//                 ></div>
//               </div>
//             </div>
            
//             <div className="grid grid-cols-3 gap-2">
//               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
//                 <span className="block text-xs font-semibold text-gray-600 mb-1">Scott</span>
//                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].today.commission)}</span>
//               </div>
//               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
//                 <span className="block text-xs font-semibold text-gray-600 mb-1">George</span>
//                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].today.commission)}</span>
//               </div>
//               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
//                 <span className="block text-xs font-semibold text-gray-600 mb-1">Total</span>
//                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['Total (Scott + George)'].today.commission)}</span>
//               </div>
//             </div>
//           </div>

//           {/* Today's Production (Annual Premium) */}
//           <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
//             <div className="flex justify-between items-center mb-4">
//               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Today's Production</div>
//               <div className="text-2xl">📈</div>
//             </div>
//             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
//               {formatCurrency(metrics.byAgent['Total (Scott + George)'].today.production)}
//             </div>
//             <div className="text-sm text-gray-600 mb-3">
//               Annual Premium • {metrics.byAgent['Total (Scott + George)'].today.deals} deals
//             </div>
//             <div className="grid grid-cols-3 gap-2">
//               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-orange-500">
//                 <span className="block text-xs font-semibold text-gray-600 mb-1">Scott</span>
//                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].today.production)}</span>
//               </div>
//               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-orange-500">
//                 <span className="block text-xs font-semibold text-gray-600 mb-1">George</span>
//                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].today.production)}</span>
//               </div>
//               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-orange-500">
//                 <span className="block text-xs font-semibold text-gray-600 mb-1">Total</span>
//                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['Total (Scott + George)'].today.production)}</span>
//               </div>
//             </div>
//           </div>

//           {/* Today's Deals */}
//           <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
//             <div className="flex justify-between items-center mb-4">
//               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Today's Deals</div>
//               <div className="text-2xl">📑</div>
//             </div>
//             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
//               {metrics.byAgent['Total (Scott + George)'].today.deals}
//             </div>
//             <div className="text-sm text-gray-600 mb-3">
//               Approved deals today
//             </div>
//             <div className="grid grid-cols-3 gap-2">
//               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-blue-500">
//                 <span className="block text-xs font-semibold text-gray-600 mb-1">Scott</span>
//                 <span className="text-lg font-black text-gray-800">{metrics.byAgent['Scott Watkins'].today.deals}</span>
//               </div>
//               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-blue-500">
//                 <span className="block text-xs font-semibold text-gray-600 mb-1">George</span>
//                 <span className="text-lg font-black text-gray-800">{metrics.byAgent['George Knox'].today.deals}</span>
//               </div>
//               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-blue-500">
//                 <span className="block text-xs font-semibold text-gray-600 mb-1">Total</span>
//                 <span className="text-lg font-black text-gray-800">{metrics.byAgent['Total (Scott + George)'].today.deals}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* WTD, MTD, YTD Commission Row */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {/* WTD Commission */}
//           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
//             <div className="flex justify-between items-center mb-4">
//               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">WTD Commission</div>
//               <div className="text-2xl">📅</div>
//             </div>
//             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//               {formatCurrency(metrics.byAgent['Total (Scott + George)'].wtd.commission)}
//             </div>
//             <div className="space-y-2">
//               <div className="flex justify-between py-2 border-b border-gray-200">
//                 <span className="text-sm font-semibold text-gray-600">Scott</span>
//                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].wtd.commission)}</span>
//               </div>
//               <div className="flex justify-between py-2 border-b border-gray-200">
//                 <span className="text-sm font-semibold text-gray-600">George</span>
//                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].wtd.commission)}</span>
//               </div>
//               <div className="flex justify-between py-2">
//                 <span className="text-sm font-semibold text-gray-600">Total</span>
//                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Total (Scott + George)'].wtd.commission)}</span>
//               </div>
//             </div>
//           </div>

//           {/* MTD Commission */}
//           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
//             <div className="flex justify-between items-center mb-4">
//               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">MTD Commission</div>
//               <div className="text-2xl">📊</div>
//             </div>
//             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//               {formatCurrency(metrics.byAgent['Total (Scott + George)'].mtd.commission)}
//             </div>
//             <div className="space-y-2">
//               <div className="flex justify-between py-2 border-b border-gray-200">
//                 <span className="text-sm font-semibold text-gray-600">Scott</span>
//                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].mtd.commission)}</span>
//               </div>
//               <div className="flex justify-between py-2 border-b border-gray-200">
//                 <span className="text-sm font-semibold text-gray-600">George</span>
//                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].mtd.commission)}</span>
//               </div>
//               <div className="flex justify-between py-2">
//                 <span className="text-sm font-semibold text-gray-600">Total</span>
//                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Total (Scott + George)'].mtd.commission)}</span>
//               </div>
//             </div>
//           </div>

//           {/* YTD Commission */}
//           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
//             <div className="flex justify-between items-center mb-4">
//               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">YTD Commission</div>
//               <div className="text-2xl">🎯</div>
//             </div>
            
//             {/* Main YTD Commission Number */}
//             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//               {formatCurrency(metrics.byAgent['Total (Scott + George)'].ytd.commission)}
//             </div>
            
//             {/* Agent Breakdown */}
//             <div className="space-y-2 mb-4">
//               <div className="flex justify-between items-center">
//                 <span className="text-sm font-semibold text-gray-600">Scott Watkins</span>
//                 <span className="text-sm font-bold text-gray-800">
//                   {formatCurrency(metrics.byAgent['Scott Watkins']?.ytd.commission || 0)}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm font-semibold text-gray-600">George Knox</span>
//                 <span className="text-sm font-bold text-gray-800">
//                   {formatCurrency(metrics.byAgent['George Knox']?.ytd.commission || 0)}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm font-semibold text-gray-600">Total</span>
//                 <span className="text-sm font-bold text-gray-800">
//                   {formatCurrency(metrics.byAgent['Total (Scott + George)']?.ytd.commission || 0)}
//                 </span>
//               </div>
//             </div>
            
//             {/* Annual Goal & Progress Bar */}
//             <div className="flex justify-between items-center mb-3">
//               <span className="text-sm font-semibold text-gray-600">Annual Goal</span>
//               <span className="text-sm font-bold text-gray-800">{formatCurrency(goals.commission)}</span>
//             </div>
            
//             <div className="mb-3">
//               <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
//                 <div 
//                   className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow transition-all duration-500"
//                   style={{ width: `${commissionPercent}%` }}
//                 ></div>
//               </div>
//               <div className="text-xs text-center text-gray-600 font-semibold mt-1">
//                 {commissionPercent.toFixed(1)}%
//               </div>
//             </div>
            
//             <div className="flex justify-between items-center">
//               <span className="text-sm font-semibold text-gray-600">Progress</span>
//               <span className="text-sm font-bold text-gray-800">{commissionPercent.toFixed(1)}%</span>
//             </div>
//           </div>
//         </div>

//         {/* WTD, MTD, YTD Production Row */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {/* WTD Production */}
//           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
//             <div className="flex justify-between items-center mb-4">
//               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">WTD Production</div>
//               <div className="text-2xl">📅</div>
//             </div>
//             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
//               {formatCurrency(metrics.byAgent['Total (Scott + George)'].wtd.production)}
//             </div>
//             <div className="space-y-2">
//               <div className="flex justify-between py-2 border-b border-gray-200">
//                 <span className="text-sm font-semibold text-gray-600">Scott</span>
//                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].wtd.production)}</span>
//               </div>
//               <div className="flex justify-between py-2 border-b border-gray-200">
//                 <span className="text-sm font-semibold text-gray-600">George</span>
//                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].wtd.production)}</span>
//               </div>
//               <div className="flex justify-between py-2">
//                 <span className="text-sm font-semibold text-gray-600">Total</span>
//                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Total (Scott + George)'].wtd.production)}</span>
//               </div>
//             </div>
//           </div>

//           {/* MTD Production */}
//           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
//             <div className="flex justify-between items-center mb-4">
//               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">MTD Production</div>
//               <div className="text-2xl">📊</div>
//             </div>
//             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
//               {formatCurrency(metrics.byAgent['Total (Scott + George)'].mtd.production)}
//             </div>
//             <div className="space-y-2">
//               <div className="flex justify-between py-2 border-b border-gray-200">
//                 <span className="text-sm font-semibold text-gray-600">Scott</span>
//                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].mtd.production)}</span>
//               </div>
//               <div className="flex justify-between py-2 border-b border-gray-200">
//                 <span className="text-sm font-semibold text-gray-600">George</span>
//                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].mtd.production)}</span>
//               </div>
//               <div className="flex justify-between py-2">
//                 <span className="text-sm font-semibold text-gray-600">Total</span>
//                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Total (Scott + George)'].mtd.production)}</span>
//               </div>
//             </div>
//           </div>

//           {/* YTD Production */}
//           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
//             <div className="flex justify-between items-center mb-4">
//               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">YTD Production</div>
//               <div className="text-2xl">🏆</div>
//             </div>
            
//             {/* Main YTD Production Number */}
//             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
//               {formatCurrency(metrics.byAgent['Total (Scott + George)'].ytd.production)}
//             </div>
            
//             {/* Agent Breakdown */}
//             <div className="space-y-2 mb-4">
//               <div className="flex justify-between items-center">
//                 <span className="text-sm font-semibold text-gray-600">Scott Watkins</span>
//                 <span className="text-sm font-bold text-gray-800">
//                   {formatCurrency(metrics.byAgent['Scott Watkins']?.ytd.production || 0)}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm font-semibold text-gray-600">George Knox</span>
//                 <span className="text-sm font-bold text-gray-800">
//                   {formatCurrency(metrics.byAgent['George Knox']?.ytd.production || 0)}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm font-semibold text-gray-600">Total</span>
//                 <span className="text-sm font-bold text-gray-800">
//                   {formatCurrency(metrics.byAgent['Total (Scott + George)']?.ytd.production || 0)}
//                 </span>
//               </div>
//             </div>
            
//             {/* Annual Goal & Progress Bar */}
//             <div className="flex justify-between items-center mb-3">
//               <span className="text-sm font-semibold text-gray-600">Annual Goal</span>
//               <span className="text-sm font-bold text-gray-800">{formatCurrency(goals.production)}</span>
//             </div>
            
//             <div className="mb-3">
//               <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
//                 <div 
//                   className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow transition-all duration-500"
//                   style={{ width: `${productionPercent}%` }}
//                 ></div>
//               </div>
//               <div className="text-xs text-center text-gray-600 font-semibold mt-1">
//                 {productionPercent.toFixed(1)}%
//               </div>
//             </div>
            
//             <div className="flex justify-between items-center">
//               <span className="text-sm font-semibold text-gray-600">Progress</span>
//               <span className="text-sm font-bold text-gray-800">{productionPercent.toFixed(1)}%</span>
//             </div>
//           </div>
//         </div>

//         {/* Goals and Lead Sources Row */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//           {/* 2026 Annual Goals Progress */}
//           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
//             <div className="flex justify-between items-center mb-4">
//               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">2026 Annual Goals</div>
//               <div className="text-2xl">🎯</div>
//             </div>
            
//             <div className="space-y-4">
//               {/* Commission Goal */}
//               <div>
//                 <div className="flex justify-between mb-1">
//                   <span className="text-sm font-semibold text-gray-600">Commission</span>
//                   <span className="text-sm font-bold text-gray-800">
//                     {formatCurrency(metrics.byAgent['Total (Scott + George)'].ytd.commission)} / {formatCurrency(goals.commission)}
//                   </span>
//                 </div>
//                 <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
//                   <div 
//                     className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
//                     style={{ width: `${commissionPercent}%` }}
//                   ></div>
//                 </div>
//                 <div className="text-xs text-center text-gray-600 font-semibold mt-1">
//                   {commissionPercent.toFixed(1)}%
//                 </div>
//               </div>
              
//               {/* Production Goal */}
//               <div>
//                 <div className="flex justify-between mb-1">
//                   <span className="text-sm font-semibold text-gray-600">Production</span>
//                   <span className="text-sm font-bold text-gray-800">
//                     {formatCurrency(metrics.byAgent['Total (Scott + George)'].ytd.production)} / {formatCurrency(goals.production)}
//                   </span>
//                 </div>
//                 <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
//                   <div 
//                     className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"
//                     style={{ width: `${productionPercent}%` }}
//                   ></div>
//                 </div>
//                 <div className="text-xs text-center text-gray-600 font-semibold mt-1">
//                   {productionPercent.toFixed(1)}%
//                 </div>
//               </div>
              
//               {/* Deals Goal */}
//               <div>
//                 <div className="flex justify-between mb-1">
//                   <span className="text-sm font-semibold text-gray-600">Deals</span>
//                   <span className="text-sm font-bold text-gray-800">
//                     {metrics.byAgent['Total (Scott + George)'].ytd.deals} / {goals.deals}
//                   </span>
//                 </div>
//                 <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
//                   <div 
//                     className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
//                     style={{ width: `${dealsPercent}%` }}
//                   ></div>
//                 </div>
//                 <div className="text-xs text-center text-gray-600 font-semibold mt-1">
//                   {dealsPercent.toFixed(1)}%
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Top Lead Sources */}
//           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
//             <div className="flex justify-between items-center mb-4">
//               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Top Lead Sources (MTD)</div>
//               <div className="text-2xl">🏆</div>
//             </div>
//             <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
//               {Object.entries(metrics.leadSources)
//                 .sort((a, b) => b[1] - a[1])
//                 .slice(0, 8)
//                 .map(([lead, total]) => (
//                   <div key={lead} className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500 flex justify-between items-center">
//                     <span className="text-sm font-bold text-gray-800 truncate max-w-[70%]" title={lead}>
//                       {lead}
//                     </span>
//                     <span className="text-sm font-black bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent whitespace-nowrap">
//                       {formatCurrency(total)}
//                     </span>
//                   </div>
//                 ))}
//               {Object.keys(metrics.leadSources).length === 0 && (
//                 <div className="text-center py-4 text-gray-500">
//                   No lead source data available
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="text-right text-sm text-white/70">
//           Last Updated: {lastUpdated.toLocaleString()} | 
//           Auto-refresh: 60s | 
//           Status: 
//           <span className="ml-2 inline-block px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs font-semibold">
//             {data.length > 0 ? `Connected (${data.length} records)` : 'No Data'}
//           </span>
//           <button
//             onClick={fetchData}
//             className="ml-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-xs"
//             disabled={loading}
//           >
//             {loading ? 'Refreshing...' : 'Refresh Now'}
//           </button>
//         </div>
        
//         {/* Development Debug Info */}
//         {process.env.NODE_ENV === 'development' && data.length > 0 && (
//           <div className="mt-4 p-4 bg-black/20 rounded-lg">
//             <details>
//               <summary className="cursor-pointer text-sm font-semibold">Debug Info (Dev Only)</summary>
//               <div className="mt-2 text-xs space-y-1">
//                 <div>Total rows: {data.length}</div>
//                 <div>Approved deals: {metrics.ytd.deals}</div>
//                 <div>Today's commission: {formatCurrency(metrics.today.commission)}</div>
//                 <div>YTD commission: {formatCurrency(metrics.ytd.commission)}</div>
//                 <div>YTD production: {formatCurrency(metrics.ytd.production)}</div>
//                 <div>Goals loaded: Commission={formatCurrency(goals.commission)}, Production={formatCurrency(goals.production)}, Deals={goals.deals}</div>
//                 {data[0] && (
//                   <div className="mt-2">
//                     <div>First row sample:</div>
//                     <div>Agent: {data[0]._agent}</div>
//                     <div>Status: {data[0]._status}</div>
//                     <div>Monthly Premium: {data[0]._monthlyPremium}</div>
//                     <div>Commission: {data[0]._netCommission}</div>
//                     <div>Date Sold: {data[0]._dateSold}</div>
//                   </div>
//                 )}
//               </div>
//             </details>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }



































// // // 'use client'

// // // import { useState, useEffect, useCallback } from 'react'
// // // import { supabase } from '../../lib/supabase'

// // // const GOALS = {
// // //   commission: 450000,
// // //   production: 1500000
// // // }

// // // export default function DashboardContent() {
// // //   const [data, setData] = useState([])
// // //   const [loading, setLoading] = useState(true)
// // //   const [error, setError] = useState(null)
// // //   const [lastUpdated, setLastUpdated] = useState(new Date())

// // // //   const fetchData = useCallback(async () => {
// // // //     try {
// // // //       setLoading(true)
      
// // // //       const response = await fetch('/api/sheet')
// // // //       const result = await response.json()
      
// // // //       if (!response.ok) {
// // // //         throw new Error(result.error || 'Failed to fetch data')
// // // //       }
      
// // // //       setData(result.data || [])
// // // //       setError(null)
// // // //       setLastUpdated(new Date())
// // // //     } catch (err) {
// // // //       console.error('Error fetching data:', err)
// // // //       setError(err.message || 'Failed to load dashboard data')
// // // //     } finally {
// // // //       setLoading(false)
// // // //     }
// // // //   }, [])


// // //     const fetchData = useCallback(async () => {
// // //     try {
// // //         setLoading(true)
        
// // //         const response = await fetch('/api/sheet')
// // //         const result = await response.json()
        
// // //         if (!response.ok) {
// // //         throw new Error(result.error || 'Failed to fetch data')
// // //         }
        
// // //         console.log('API Response:', result)
// // //         console.log('Data received:', result.data)
// // //         console.log('First row:', result.data?.[0])
// // //         console.log('All row keys:', result.data?.[0] ? Object.keys(result.data[0]) : 'No data')
        
// // //         setData(result.data || [])
// // //         setError(null)
// // //         setLastUpdated(new Date())
// // //     } catch (err) {
// // //         console.error('Error fetching data:', err)
// // //         setError(err.message || 'Failed to load dashboard data')
// // //     } finally {
// // //         setLoading(false)
// // //     }
// // //     }, [])


// // //   useEffect(() => {
// // //     fetchData()
// // //     const interval = setInterval(fetchData, 60000)
// // //     return () => clearInterval(interval)
// // //   }, [fetchData])

// // //   const formatCurrency = (amount) => {
// // //     return new Intl.NumberFormat("en-US", {
// // //       style: "currency",
// // //       currency: "USD",
// // //       minimumFractionDigits: 0
// // //     }).format(amount || 0)
// // //   }

// // // //   const calculateMetrics = () => {
// // // //     const today = new Date()
// // // //     today.setHours(0, 0, 0, 0)

// // // //     let metrics = {
// // // //       today: { commission: 0, production: 0 },
// // // //       wtd: { commission: 0, production: 0 },
// // // //       mtd: { commission: 0, production: 0 },
// // // //       ytd: { commission: 0, production: 0 },
// // // //       byAgent: {},
// // // //       leadSources: {}
// // // //     }

// // // //     if (!data || data.length === 0) {
// // // //       return metrics
// // // //     }

// // // //     // Get start of week (Sunday)
// // // //     const weekStart = new Date(today)
// // // //     weekStart.setDate(today.getDate() - today.getDay())

// // // //     // Get start of month
// // // //     const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)

// // // //     // Get start of year
// // // //     const yearStart = new Date(today.getFullYear(), 0, 1)

// // // //     data.forEach((row) => {
// // // //       if (!row || !row.Status || row.Status.toLowerCase() !== "approved") return

// // // //       const dealDate = new Date(row["Date Sold"] || row["Date Sold"])
// // // //       if (isNaN(dealDate.getTime())) return

// // // //       const agent = row.Agent || "Unknown"
// // // //       const lead = row["Lead Vendor"] || "Unknown"
// // // //       const monthlyPremium = Number(row["Monthly Premium"]) || 0
// // // //       const production = monthlyPremium * 12
// // // //       const commission = Number(row["Net Advance (60%)"]) || 0

// // // //       // Initialize agent if not exists
// // // //       if (!metrics.byAgent[agent]) {
// // // //         metrics.byAgent[agent] = {
// // // //           today: { commission: 0, production: 0 },
// // // //           wtd: { commission: 0, production: 0 },
// // // //           mtd: { commission: 0, production: 0 },
// // // //           ytd: { commission: 0, production: 0 }
// // // //         }
// // // //       }

// // // //       // Initialize lead source if not exists
// // // //       if (!metrics.leadSources[lead]) {
// // // //         metrics.leadSources[lead] = 0
// // // //       }

// // // //       // Update totals
// // // //       metrics.leadSources[lead] += production

// // // //       // Today
// // // //       if (dealDate.toDateString() === today.toDateString()) {
// // // //         metrics.today.commission += commission
// // // //         metrics.today.production += production
// // // //         metrics.byAgent[agent].today.commission += commission
// // // //         metrics.byAgent[agent].today.production += production
// // // //       }

// // // //       // Week to Date
// // // //       if (dealDate >= weekStart) {
// // // //         metrics.wtd.commission += commission
// // // //         metrics.wtd.production += production
// // // //         metrics.byAgent[agent].wtd.commission += commission
// // // //         metrics.byAgent[agent].wtd.production += production
// // // //       }

// // // //       // Month to Date
// // // //       if (dealDate >= monthStart) {
// // // //         metrics.mtd.commission += commission
// // // //         metrics.mtd.production += production
// // // //         metrics.byAgent[agent].mtd.commission += commission
// // // //         metrics.byAgent[agent].mtd.production += production
// // // //       }

// // // //       // Year to Date
// // // //       if (dealDate >= yearStart) {
// // // //         metrics.ytd.commission += commission
// // // //         metrics.ytd.production += production
// // // //         metrics.byAgent[agent].ytd.commission += commission
// // // //         metrics.byAgent[agent].ytd.production += production
// // // //       }
// // // //     })

// // // //     return metrics
// // // //   }



// // // //     const calculateMetrics = () => {
// // // //   const today = new Date()
// // // //   today.setHours(0, 0, 0, 0)

// // // //   let metrics = {
// // // //     today: { commission: 0, production: 0 },
// // // //     wtd: { commission: 0, production: 0 },
// // // //     mtd: { commission: 0, production: 0 },
// // // //     ytd: { commission: 0, production: 0 },
// // // //     byAgent: {},
// // // //     leadSources: {}
// // // //   }

// // // //   if (!data || data.length === 0) {
// // // //     return metrics
// // // //   }

// // // //   console.log('Processing data with columns:', Object.keys(data[0]))

// // // //   // Date ranges
// // // //   const weekStart = new Date(today)
// // // //   weekStart.setDate(today.getDate() - today.getDay())
// // // //   weekStart.setHours(0, 0, 0, 0)

// // // //   const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)
// // // //   monthStart.setHours(0, 0, 0, 0)

// // // //   const yearStart = new Date(today.getFullYear(), 0, 1)
// // // //   yearStart.setHours(0, 0, 0, 0)

// // // //   let approvedCount = 0
// // // //   let totalRows = 0

// // // //   data.forEach((row, index) => {
// // // //     totalRows++
    
// // // //     // Check if row has Status field - based on your columns
// // // //     const status = row.Status
// // // //     if (!status || status.toLowerCase() !== "approved") {
// // // //       console.log(`Row ${index} skipped - Status: ${status}`)
// // // //       return
// // // //     }
    
// // // //     approvedCount++

// // // //     // Parse date - handle MM/DD/YYYY format
// // // //     const dateStr = row["Date Sold"]
// // // //     let dealDate
// // // //     if (dateStr.includes('/')) {
// // // //       // Parse MM/DD/YYYY format
// // // //       const [month, day, year] = dateStr.split('/').map(Number)
// // // //       dealDate = new Date(year, month - 1, day) // month is 0-indexed in JS
// // // //     } else {
// // // //       dealDate = new Date(dateStr)
// // // //     }
    
// // // //     if (isNaN(dealDate.getTime())) {
// // // //       console.log(`Row ${index} invalid date: ${dateStr}`)
// // // //       return
// // // //     }
// // // //     dealDate.setHours(0, 0, 0, 0)

// // // //     const agent = row.Agent || "Unknown"
// // // //     const lead = row["Lead Vendor"] || "Unknown"
    
// // // //     // Get Monthly Premium - clean it first
// // // //     let monthlyPremium = row["Monthly Premium"]
// // // //     if (typeof monthlyPremium === 'string') {
// // // //       // Remove $, commas, and any non-numeric characters
// // // //       monthlyPremium = monthlyPremium.replace(/[^\d.-]/g, '')
// // // //     }
// // // //     monthlyPremium = Number(monthlyPremium) || 0
    
// // // //     const production = monthlyPremium * 12

// // // //     // Try different commission columns - based on your sheet
// // // //     // First try "Advance (75%)" then "Annual Commission $"
// // // //     let commission = row["Advance (75%)"] || row["Annual Commission $"] || 0
// // // //     if (typeof commission === 'string') {
// // // //       // Remove $, commas, and any non-numeric characters
// // // //       commission = commission.replace(/[^\d.-]/g, '')
// // // //     }
// // // //     commission = Number(commission) || 0

// // // //     console.log(`Row ${index} - Approved deal:`, {
// // // //       agent,
// // // //       lead,
// // // //       monthlyPremium,
// // // //       production,
// // // //       commission,
// // // //       dateSold: dateStr,
// // // //       parsedDate: dealDate.toDateString(),
// // // //       today: today.toDateString()
// // // //     })

// // // //     // Initialize agent if not exists
// // // //     if (!metrics.byAgent[agent]) {
// // // //       metrics.byAgent[agent] = {
// // // //         today: { commission: 0, production: 0 },
// // // //         wtd: { commission: 0, production: 0 },
// // // //         mtd: { commission: 0, production: 0 },
// // // //         ytd: { commission: 0, production: 0 }
// // // //       }
// // // //     }

// // // //     // Initialize lead source if not exists
// // // //     if (!metrics.leadSources[lead]) {
// // // //       metrics.leadSources[lead] = 0
// // // //     }

// // // //     // Update totals
// // // //     metrics.leadSources[lead] += production

// // // //     // Today
// // // //     if (dealDate.toDateString() === today.toDateString()) {
// // // //       metrics.today.commission += commission
// // // //       metrics.today.production += production
// // // //       metrics.byAgent[agent].today.commission += commission
// // // //       metrics.byAgent[agent].today.production += production
// // // //       console.log(`Added to today: ${commission} commission, ${production} production`)
// // // //     }

// // // //     // Week to Date
// // // //     if (dealDate >= weekStart) {
// // // //       metrics.wtd.commission += commission
// // // //       metrics.wtd.production += production
// // // //       metrics.byAgent[agent].wtd.commission += commission
// // // //       metrics.byAgent[agent].wtd.production += production
// // // //     }

// // // //     // Month to Date
// // // //     if (dealDate >= monthStart) {
// // // //       metrics.mtd.commission += commission
// // // //       metrics.mtd.production += production
// // // //       metrics.byAgent[agent].mtd.commission += commission
// // // //       metrics.byAgent[agent].mtd.production += production
// // // //     }

// // // //     // Year to Date
// // // //     if (dealDate >= yearStart) {
// // // //       metrics.ytd.commission += commission
// // // //       metrics.ytd.production += production
// // // //       metrics.byAgent[agent].ytd.commission += commission
// // // //       metrics.byAgent[agent].ytd.production += production
// // // //     }
// // // //   })

// // // //   console.log(`Summary: Processed ${totalRows} rows, ${approvedCount} approved deals`)
// // // //   console.log('Final metrics:', {
// // // //     today: metrics.today,
// // // //     ytd: metrics.ytd,
// // // //     agents: Object.keys(metrics.byAgent),
// // // //     leadSources: metrics.leadSources
// // // //   })

// // // //   return metrics
// // // // }



// // // const calculateMetrics = () => {
// // //   const today = new Date()
// // //   today.setHours(0, 0, 0, 0)

// // //   let metrics = {
// // //     today: { 
// // //       commission: 0, 
// // //       production: 0,
// // //       policies: 0,
// // //       premium: 0
// // //     },
// // //     wtd: { 
// // //       commission: 0, 
// // //       production: 0,
// // //       policies: 0,
// // //       premium: 0
// // //     },
// // //     mtd: { 
// // //       commission: 0, 
// // //       production: 0,
// // //       policies: 0,
// // //       premium: 0
// // //     },
// // //     ytd: { 
// // //       commission: 0, 
// // //       production: 0,
// // //       policies: 0,
// // //       premium: 0
// // //     },
// // //     byAgent: {},
// // //     leadSources: {},
// // //     byProduct: {},  // Track by product type
// // //     coverageAmounts: 0
// // //   }

// // //   if (!data || data.length === 0) {
// // //     return metrics
// // //   }

// // //   console.log('Processing mortgage/insurance data...')

// // //   // Date ranges
// // //   const weekStart = new Date(today)
// // //   weekStart.setDate(today.getDate() - today.getDay())
// // //   weekStart.setHours(0, 0, 0, 0)

// // //   const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)
// // //   monthStart.setHours(0, 0, 0, 0)

// // //   const yearStart = new Date(today.getFullYear(), 0, 1)
// // //   yearStart.setHours(0, 0, 0, 0)

// // //   data.forEach((row, index) => {
// // //     // Check status
// // //     if (!row.Status || row.Status.toLowerCase() !== 'approved') {
// // //       return
// // //     }

// // //     // Parse date
// // //     const dateStr = row["Date Sold"]
// // //     const [month, day, year] = dateStr.split('/').map(Number)
// // //     const dealDate = new Date(year, month - 1, day)
// // //     dealDate.setHours(0, 0, 0, 0)

// // //     const agent = row.Agent || "Unknown"
// // //     const lead = row["Lead Vendor"] || "Unknown"
// // //     const product = row["Product"] || "Unknown"
    
// // //     // Mortgage/Insurance specific metrics
// // //     // Coverage Amount (loan amount/insurance coverage)
// // //     let coverageAmount = row["Coverage Amount"] || 0
// // //     if (typeof coverageAmount === 'string') {
// // //       coverageAmount = coverageAmount.replace(/[^\d.-]/g, '')
// // //     }
// // //     coverageAmount = Number(coverageAmount) || 0
    
// // //     // Monthly Premium (mortgage insurance premium)
// // //     let monthlyPremium = row["Monthly Premium"] || 0
// // //     if (typeof monthlyPremium === 'string') {
// // //       monthlyPremium = monthlyPremium.replace(/[^\d.-]/g, '')
// // //     }
// // //     monthlyPremium = Number(monthlyPremium) || 0
    
// // //     // Annual Premium (monthly * 12)
// // //     const annualPremium = monthlyPremium * 12
    
// // //     // Commission calculations
// // //     // Try different commission columns
// // //     let commission = 0
// // //     const commissionSources = [
// // //       'Advance (75%)',
// // //       'Annual Commission $', 
// // //       'Override Commission $',
// // //       'Agent Commission %' // This might need calculation
// // //     ]
    
// // //     for (const source of commissionSources) {
// // //       if (row[source] && row[source] !== '') {
// // //         let value = row[source]
// // //         if (typeof value === 'string') {
// // //           value = value.replace(/[^\d.-]/g, '')
// // //         }
// // //         commission = Number(value) || 0
// // //         if (commission > 0) break
// // //       }
// // //     }
    
// // //     // If commission is percentage, calculate from premium
// // //     if (row["Agent Commission %"] && commission === 0) {
// // //       let commissionPercent = row["Agent Commission %"]
// // //       if (typeof commissionPercent === 'string') {
// // //         commissionPercent = commissionPercent.replace(/[^\d.-]/g, '')
// // //       }
// // //       commissionPercent = Number(commissionPercent) || 0
// // //       commission = (commissionPercent / 100) * annualPremium
// // //     }

// // //     // Initialize agent if not exists
// // //     if (!metrics.byAgent[agent]) {
// // //       metrics.byAgent[agent] = {
// // //         today: { commission: 0, production: 0, policies: 0, premium: 0 },
// // //         wtd: { commission: 0, production: 0, policies: 0, premium: 0 },
// // //         mtd: { commission: 0, production: 0, policies: 0, premium: 0 },
// // //         ytd: { commission: 0, production: 0, policies: 0, premium: 0 }
// // //       }
// // //     }

// // //     // Initialize product tracking
// // //     if (!metrics.byProduct[product]) {
// // //       metrics.byProduct[product] = 0
// // //     }

// // //     // Initialize lead source if not exists
// // //     if (!metrics.leadSources[lead]) {
// // //       metrics.leadSources[lead] = 0
// // //     }

// // //     // Update totals
// // //     metrics.coverageAmounts += coverageAmount
// // //     metrics.byProduct[product] += 1
// // //     metrics.leadSources[lead] += annualPremium

// // //     // Today
// // //     if (dealDate.toDateString() === today.toDateString()) {
// // //       metrics.today.commission += commission
// // //       metrics.today.production += annualPremium
// // //       metrics.today.policies += 1
// // //       metrics.today.premium += monthlyPremium
      
// // //       metrics.byAgent[agent].today.commission += commission
// // //       metrics.byAgent[agent].today.production += annualPremium
// // //       metrics.byAgent[agent].today.policies += 1
// // //       metrics.byAgent[agent].today.premium += monthlyPremium
// // //     }

// // //     // Week to Date
// // //     if (dealDate >= weekStart) {
// // //       metrics.wtd.commission += commission
// // //       metrics.wtd.production += annualPremium
// // //       metrics.wtd.policies += 1
// // //       metrics.wtd.premium += monthlyPremium
      
// // //       metrics.byAgent[agent].wtd.commission += commission
// // //       metrics.byAgent[agent].wtd.production += annualPremium
// // //       metrics.byAgent[agent].wtd.policies += 1
// // //       metrics.byAgent[agent].wtd.premium += monthlyPremium
// // //     }

// // //     // Month to Date
// // //     if (dealDate >= monthStart) {
// // //       metrics.mtd.commission += commission
// // //       metrics.mtd.production += annualPremium
// // //       metrics.mtd.policies += 1
// // //       metrics.mtd.premium += monthlyPremium
      
// // //       metrics.byAgent[agent].mtd.commission += commission
// // //       metrics.byAgent[agent].mtd.production += annualPremium
// // //       metrics.byAgent[agent].mtd.policies += 1
// // //       metrics.byAgent[agent].mtd.premium += monthlyPremium
// // //     }

// // //     // Year to Date
// // //     if (dealDate >= yearStart) {
// // //       metrics.ytd.commission += commission
// // //       metrics.ytd.production += annualPremium
// // //       metrics.ytd.policies += 1
// // //       metrics.ytd.premium += monthlyPremium
      
// // //       metrics.byAgent[agent].ytd.commission += commission
// // //       metrics.byAgent[agent].ytd.production += annualPremium
// // //       metrics.byAgent[agent].ytd.policies += 1
// // //       metrics.byAgent[agent].ytd.premium += monthlyPremium
// // //     }
// // //   })

// // //   console.log('Mortgage metrics calculated:', {
// // //     totalCoverage: metrics.coverageAmounts,
// // //     totalPolicies: metrics.ytd.policies,
// // //     byProduct: metrics.byProduct
// // //   })

// // //   return metrics
// // // }


// // //   const handleLogout = async () => {
// // //     await supabase.auth.signOut()
// // //     window.location.href = '/auth/login'
// // //   }

// // //   if (loading && data.length === 0) {
// // //     return (
// // //       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
// // //         <div className="text-white text-xl animate-pulse">Loading dashboard...</div>
// // //       </div>
// // //     )
// // //   }

// // //   if (error) {
// // //     return (
// // //       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
// // //         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
// // //           <div className="text-white text-xl mb-4">Error: {error}</div>
// // //           <button
// // //             onClick={fetchData}
// // //             className="px-6 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors mr-2"
// // //           >
// // //             Retry
// // //           </button>
// // //           <button
// // //             onClick={handleLogout}
// // //             className="px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
// // //           >
// // //             Logout
// // //           </button>
// // //         </div>
// // //       </div>
// // //     )
// // //   }

// // //   const metrics = calculateMetrics()
// // //   const commissionPercent = Math.min(100, (metrics.ytd.commission / GOALS.commission) * 100)

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white p-4">
// // //       {/* Top Bar with Logout */}
// // //       {/* <div className="flex justify-between items-center mb-4">
// // //         <div className="text-sm opacity-75">
// // //           Welcome to Production Dashboard
// // //         </div>
// // //         <button
// // //             onClick={handleLogout}
// // //             className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-sm float-right top-0"
// // //             >
// // //             Logout
// // //         </button>
        
// // //       </div> */}

// // //       <div className="max-w-7xl mx-auto space-y-4">
// // //         {/* Header */}
// // //         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20">
// // //           <button
// // //             onClick={handleLogout}
// // //             className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-sm float-right top-0"
// // //             >
// // //             Logout
// // //           </button>
          
// // //           <h1 className="text-4xl font-bold mb-2">🎯 Production Scoreboard</h1>
// // //           <p className="text-white/80">Being consistently consistent will make me a millionaire</p>

// // //         </div>

// // //         {/* Daily Quote */}
// // //         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20">
// // //           <div className="text-2xl mb-2">💭</div>
// // //           <div className="text-xl italic font-medium">Money follows small actions repeated daily.</div>
// // //         </div>

// // //         {/* Grid */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// // //           {/* Today Commission */}
// // //           <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Today Commission</div>
// // //               <div className="text-2xl">💰</div>
// // //             </div>
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.today.commission)}
// // //             </div>
// // //             <div className="grid grid-cols-3 gap-2">
// // //               {Object.entries(metrics.byAgent).map(([agent, stats]) => (
// // //                 <div key={agent} className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
// // //                   <span className="block text-xs font-semibold text-gray-600 mb-1 truncate" title={agent}>
// // //                     {agent}
// // //                   </span>
// // //                   <span className="text-lg font-black text-gray-800">{formatCurrency(stats.today.commission)}</span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* WTD Commission */}
// // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Week to Date</div>
// // //               <div className="text-2xl">📅</div>
// // //             </div>
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.wtd.commission)}
// // //             </div>
// // //             <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
// // //               {Object.entries(metrics.byAgent).map(([agent, stats]) => (
// // //                 <div key={`${agent}-wtd`} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
// // //                   <span className="text-sm font-semibold text-gray-600 truncate max-w-[60%]" title={agent}>
// // //                     {agent}
// // //                   </span>
// // //                   <span className="text-sm font-bold text-gray-800 whitespace-nowrap">
// // //                     {formatCurrency(stats.wtd.commission)}
// // //                   </span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* MTD Commission */}
// // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Month to Date</div>
// // //               <div className="text-2xl">📊</div>
// // //             </div>
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.mtd.commission)}
// // //             </div>
// // //             <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
// // //               {Object.entries(metrics.byAgent).map(([agent, stats]) => (
// // //                 <div key={`${agent}-mtd`} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
// // //                   <span className="text-sm font-semibold text-gray-600 truncate max-w-[60%]" title={agent}>
// // //                     {agent}
// // //                   </span>
// // //                   <span className="text-sm font-bold text-gray-800 whitespace-nowrap">
// // //                     {formatCurrency(stats.mtd.commission)}
// // //                   </span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* YTD Commission */}
// // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Year to Date</div>
// // //               <div className="text-2xl">🎯</div>
// // //             </div>
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.ytd.commission)}
// // //             </div>
// // //             <div className="space-y-2 mb-4">
// // //               <div className="flex justify-between py-2">
// // //                 <span className="text-sm font-semibold text-gray-600">Annual Goal</span>
// // //                 <span className="text-sm font-bold text-gray-800">$450,000</span>
// // //               </div>
// // //             </div>
// // //             <div className="mb-4">
// // //               <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
// // //                 <div 
// // //                   className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow transition-all duration-500"
// // //                   style={{ width: `${commissionPercent}%` }}
// // //                 ></div>
// // //               </div>
// // //               <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// // //                 {commissionPercent.toFixed(1)}% to Goal
// // //               </div>
// // //             </div>
// // //             <div className="flex justify-between py-2">
// // //               <span className="text-sm font-semibold text-gray-600">Progress</span>
// // //               <span className="text-sm font-bold text-gray-800">{commissionPercent.toFixed(1)}%</span>
// // //             </div>
// // //           </div>

// // //           {/* Today Production */}
// // //           <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Today Production</div>
// // //               <div className="text-2xl">📈</div>
// // //             </div>
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.today.production)}
// // //             </div>
// // //             <div className="grid grid-cols-3 gap-2">
// // //               {Object.entries(metrics.byAgent).map(([agent, stats]) => (
// // //                 <div key={`${agent}-prod`} className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
// // //                   <span className="block text-xs font-semibold text-gray-600 mb-1 truncate" title={agent}>
// // //                     {agent}
// // //                   </span>
// // //                   <span className="text-lg font-black text-gray-800">{formatCurrency(stats.today.production)}</span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* WTD Production */}
// // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">WTD Production</div>
// // //               <div className="text-2xl">📈</div>
// // //             </div>
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.wtd.production)}
// // //             </div>
// // //             <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
// // //               {Object.entries(metrics.byAgent).map(([agent, stats]) => (
// // //                 <div key={`${agent}-wtd-prod`} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
// // //                   <span className="text-sm font-semibold text-gray-600 truncate max-w-[60%]" title={agent}>
// // //                     {agent}
// // //                   </span>
// // //                   <span className="text-sm font-bold text-gray-800 whitespace-nowrap">
// // //                     {formatCurrency(stats.wtd.production)}
// // //                   </span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* MTD Production */}
// // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">MTD Production</div>
// // //               <div className="text-2xl">📈</div>
// // //             </div>
// // //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // //               {formatCurrency(metrics.mtd.production)}
// // //             </div>
// // //             <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
// // //               {Object.entries(metrics.byAgent).map(([agent, stats]) => (
// // //                 <div key={`${agent}-mtd-prod`} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
// // //                   <span className="text-sm font-semibold text-gray-600 truncate max-w-[60%]" title={agent}>
// // //                     {agent}
// // //                   </span>
// // //                   <span className="text-sm font-bold text-gray-800 whitespace-nowrap">
// // //                     {formatCurrency(stats.mtd.production)}
// // //                   </span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* Top Leads */}
// // //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Top Lead Sources</div>
// // //               <div className="text-2xl">🏆</div>
// // //             </div>
// // //             <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
// // //               {Object.entries(metrics.leadSources)
// // //                 .sort((a, b) => b[1] - a[1])
// // //                 .slice(0, 6)
// // //                 .map(([lead, total]) => (
// // //                   <div key={lead} className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500 flex justify-between items-center">
// // //                     <span className="text-sm font-bold text-gray-800 truncate max-w-[70%]" title={lead}>
// // //                       {lead}
// // //                     </span>
// // //                     <span className="text-sm font-black bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent whitespace-nowrap">
// // //                       {formatCurrency(total)}
// // //                     </span>
// // //                   </div>
// // //                 ))}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Footer */}
// // //         <div className="text-right text-sm text-white/70">
// // //           Last Updated: {lastUpdated.toLocaleString()} | 
// // //           Auto-refresh: 60s | 
// // //           Status: 
// // //           <span className="ml-2 inline-block px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs font-semibold">
// // //             {data.length > 0 ? `Connected (${data.length} records)` : 'No Data'}
// // //           </span>
// // //           <button
// // //             onClick={fetchData}
// // //             className="ml-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-xs"
// // //             disabled={loading}
// // //           >
// // //             {loading ? 'Refreshing...' : 'Refresh Now'}
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }




















// // 'use client'

// // import { useState, useEffect, useCallback } from 'react'

// // // Default goals (will be overridden by Google Sheets data)
// // const DEFAULT_GOALS = {
// //   commission: 450000,
// //   production: 1500000,
// //   deals: 600
// // }

// // export default function DashboardContent() {
// //   const [data, setData] = useState([])
// //   const [quotes, setQuotes] = useState([])
// //   const [dailyQuote, setDailyQuote] = useState('')
// //   const [goals, setGoals] = useState(DEFAULT_GOALS)
// //   const [loading, setLoading] = useState(true)
// //   const [error, setError] = useState(null)
// //   const [lastUpdated, setLastUpdated] = useState(new Date())

// //   const fetchData = useCallback(async () => {
// //     try {
// //       setLoading(true)
      
// //       const response = await fetch('/api/sheet')
// //       const result = await response.json()
      
// //       if (!response.ok) {
// //         throw new Error(result.error || 'Failed to fetch data')
// //       }
      
// //       console.log('Data received:', {
// //         rows: result.data?.length,
// //         quotes: result.quotes?.length,
// //         goals: result.goals
// //       })
      
// //       setData(result.data || [])
// //       setQuotes(result.quotes || [])
// //       setGoals(result.goals || DEFAULT_GOALS)
// //       setError(null)
// //       setLastUpdated(new Date())
      
// //       // Set daily quote
// //       if (result.quotes && result.quotes.length > 0) {
// //         selectDailyQuote(result.quotes)
// //       } else {
// //         setDailyQuote('Money follows small actions repeated daily.')
// //       }
      
// //     } catch (err) {
// //       console.error('Error fetching data:', err)
// //       setError(err.message || 'Failed to load dashboard data')
// //     } finally {
// //       setLoading(false)
// //     }
// //   }, [])

// //   // Function to select daily quote (changes daily)
// //   const selectDailyQuote = (quotesList) => {
// //     if (!quotesList || quotesList.length === 0) return
    
// //     // Use the day of the year to select a consistent daily quote
// //     const today = new Date()
// //     const start = new Date(today.getFullYear(), 0, 0)
// //     const diff = today - start
// //     const oneDay = 1000 * 60 * 60 * 24
// //     const dayOfYear = Math.floor(diff / oneDay)
    
// //     const quoteIndex = dayOfYear % quotesList.length
// //     const selectedQuote = quotesList[quoteIndex]
// //     setDailyQuote(selectedQuote.text + (selectedQuote.author ? ` - ${selectedQuote.author}` : ''))
// //   }

// //   useEffect(() => {
// //     fetchData()
// //     const interval = setInterval(fetchData, 60000)
// //     return () => clearInterval(interval)
// //   }, [fetchData])

// //   const formatCurrency = (amount) => {
// //     return new Intl.NumberFormat("en-US", {
// //       style: "currency",
// //       currency: "USD",
// //       minimumFractionDigits: 0
// //     }).format(amount || 0)
// //   }

// //   const cleanNumber = (value) => {
// //     if (!value) return 0
// //     const str = String(value)
// //     const cleaned = str.replace(/[^\d.-]/g, '')
// //     return Number(cleaned) || 0
// //   }

// //   const calculateMetrics = () => {
// //     const today = new Date()
// //     today.setHours(0, 0, 0, 0)

// //     // Initialize metrics with Scott, George, and Other Agents
// //     let metrics = {
// //       today: { commission: 0, production: 0, deals: 0, premium: 0 },
// //       wtd: { commission: 0, production: 0, deals: 0, premium: 0 },
// //       mtd: { commission: 0, production: 0, deals: 0, premium: 0 },
// //       ytd: { commission: 0, production: 0, deals: 0, premium: 0 },
// //       byAgent: {
// //         'Scott Watkins': {
// //           today: { commission: 0, production: 0, deals: 0, premium: 0 },
// //           wtd: { commission: 0, production: 0, deals: 0, premium: 0 },
// //           mtd: { commission: 0, production: 0, deals: 0, premium: 0 },
// //           ytd: { commission: 0, production: 0, deals: 0, premium: 0 }
// //         },
// //         'George Knox': {
// //           today: { commission: 0, production: 0, deals: 0, premium: 0 },
// //           wtd: { commission: 0, production: 0, deals: 0, premium: 0 },
// //           mtd: { commission: 0, production: 0, deals: 0, premium: 0 },
// //           ytd: { commission: 0, production: 0, deals: 0, premium: 0 }
// //         },
// //         'Other Agents': {
// //           today: { commission: 0, production: 0, deals: 0, premium: 0 },
// //           wtd: { commission: 0, production: 0, deals: 0, premium: 0 },
// //           mtd: { commission: 0, production: 0, deals: 0, premium: 0 },
// //           ytd: { commission: 0, production: 0, deals: 0, premium: 0 }
// //         }
// //       },
// //       leadSources: {},
// //       coverageAmounts: 0
// //     }

// //     if (!data || data.length === 0) {
// //       return metrics
// //     }

// //     // Date ranges
// //     const weekStart = new Date(today)
// //     weekStart.setDate(today.getDate() - today.getDay()) // Sunday start
// //     weekStart.setHours(0, 0, 0, 0)

// //     const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)
// //     monthStart.setHours(0, 0, 0, 0)

// //     const yearStart = new Date(today.getFullYear(), 0, 1)
// //     yearStart.setHours(0, 0, 0, 0)

// //     console.log('Date ranges:', {
// //       today: today.toDateString(),
// //       weekStart: weekStart.toDateString(),
// //       monthStart: monthStart.toDateString(),
// //       yearStart: yearStart.toDateString()
// //     })

// //     data.forEach((row) => {
// //       // Check status - must be "Approved"
// //       const status = row._status
// //       if (!status || status.toLowerCase() !== 'approved') {
// //         return
// //       }

// //       // Parse date from "MM/DD/YYYY" format
// //       const dateStr = row._dateSold
// //       if (!dateStr) return
      
// //       let dealDate
// //       if (dateStr.includes('/')) {
// //         const [month, day, year] = dateStr.split('/').map(Number)
// //         dealDate = new Date(year, month - 1, day)
// //       } else {
// //         dealDate = new Date(dateStr)
// //       }
      
// //       if (isNaN(dealDate.getTime())) {
// //         return
// //       }
// //       dealDate.setHours(0, 0, 0, 0)

// //       // Get agent and categorize
// //       const agent = row._agent || ''
// //       const agentCategory = getAgentCategory(agent)
      
// //       const lead = row._leadVendor || 'Unknown'
      
// //       // Get values
// //       const monthlyPremium = cleanNumber(row._monthlyPremium)
// //       const annualPremium = monthlyPremium * 12
// //       const commission = cleanNumber(row._netCommission) // Using Column AA
// //       const coverageAmount = cleanNumber(row._coverageAmount)

// //       // Update coverage total
// //       metrics.coverageAmounts += coverageAmount

// //       // Initialize lead source if not exists
// //       if (!metrics.leadSources[lead]) {
// //         metrics.leadSources[lead] = 0
// //       }
// //       metrics.leadSources[lead] += annualPremium

// //       // Helper to update metrics for a time period
// //       const updatePeriod = (period, periodStart) => {
// //         if (dealDate >= periodStart) {
// //           metrics[period].commission += commission
// //           metrics[period].production += annualPremium
// //           metrics[period].premium += monthlyPremium
// //           metrics[period].deals += 1
          
// //           metrics.byAgent[agentCategory][period].commission += commission
// //           metrics.byAgent[agentCategory][period].production += annualPremium
// //           metrics.byAgent[agentCategory][period].premium += monthlyPremium
// //           metrics.byAgent[agentCategory][period].deals += 1
// //         }
// //       }

// //       // Today (exact match)
// //       if (dealDate.toDateString() === today.toDateString()) {
// //         metrics.today.commission += commission
// //         metrics.today.production += annualPremium
// //         metrics.today.premium += monthlyPremium
// //         metrics.today.deals += 1
        
// //         metrics.byAgent[agentCategory].today.commission += commission
// //         metrics.byAgent[agentCategory].today.production += annualPremium
// //         metrics.byAgent[agentCategory].today.premium += monthlyPremium
// //         metrics.byAgent[agentCategory].today.deals += 1
// //       }

// //       // Update other periods
// //       updatePeriod('wtd', weekStart)
// //       updatePeriod('mtd', monthStart)
// //       updatePeriod('ytd', yearStart)
// //     })

// //     console.log('Calculated metrics:', {
// //       today: metrics.today,
// //       ytd: metrics.ytd,
// //       agents: metrics.byAgent,
// //       coverage: metrics.coverageAmounts
// //     })

// //     return metrics
// //   }

// //   // Helper to categorize agents
// //   const getAgentCategory = (agentName) => {
// //     if (!agentName) return 'Other Agents'
    
// //     const name = agentName.toLowerCase()
// //     if (name.includes('scott') || name.includes('watkins')) {
// //       return 'Scott Watkins'
// //     } else if (name.includes('george') || name.includes('knox')) {
// //       return 'George Knox'
// //     } else {
// //       return 'Other Agents'
// //     }
// //   }

// //   const handleLogout = async () => {
// //     try {
// //       const response = await fetch('/api/auth/logout', { method: 'POST' })
// //       if (response.ok) {
// //         window.location.href = '/login'
// //       }
// //     } catch (error) {
// //       console.error('Logout error:', error)
// //       window.location.href = '/login'
// //     }
// //   }

// //   if (loading && data.length === 0) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
// //         <div className="text-white text-xl animate-pulse">Loading dashboard...</div>
// //       </div>
// //     )
// //   }

// //   if (error) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
// //         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
// //           <div className="text-white text-xl mb-4">Error: {error}</div>
// //           <button
// //             onClick={fetchData}
// //             className="px-6 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors mr-2"
// //           >
// //             Retry
// //           </button>
// //           <button
// //             onClick={handleLogout}
// //             className="px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
// //           >
// //             Logout
// //           </button>
// //         </div>
// //       </div>
// //     )
// //   }

// //   const metrics = calculateMetrics()
// //   const commissionPercent = Math.min(100, (metrics.ytd.commission / goals.commission) * 100)
// //   const productionPercent = Math.min(100, (metrics.ytd.production / goals.production) * 100)
// //   const dealsPercent = Math.min(100, (metrics.ytd.deals / goals.deals) * 100)

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white p-4">
// //       {/* Top Bar with Logout */}
// //       <div className="flex justify-between items-center mb-4">
// //         <div className="text-sm opacity-75">
// //           Welcome to Production Dashboard
// //         </div>
// //         <button
// //           onClick={handleLogout}
// //           className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-sm"
// //         >
// //           Logout
// //         </button>
// //       </div>

// //       <div className="max-w-7xl mx-auto space-y-4">
// //         {/* Header */}
// //         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20">
// //           <h1 className="text-4xl font-bold mb-2">🎯 Production Scoreboard</h1>
// //           <p className="text-white/80">Being consistently consistent will make me a millionaire</p>
// //         </div>

// //         {/* Daily Quote */}
// //         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20">
// //           <div className="text-2xl mb-2">💭</div>
// //           <div className="text-xl italic font-medium">{dailyQuote}</div>
// //           {quotes.length > 0 && (
// //             <div className="mt-2 text-sm text-white/60">
// //               Daily Quote • {quotes.length} quotes in rotation
// //             </div>
// //           )}
// //         </div>

// //         {/* Today's Metrics Row */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// //           {/* Today's Commission */}
// //           <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Today's Commission</div>
// //               <div className="text-2xl">💰</div>
// //             </div>
// //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// //               {formatCurrency(metrics.today.commission)}
// //             </div>
// //             <div className="grid grid-cols-3 gap-2">
// //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
// //                 <span className="block text-xs font-semibold text-gray-600 mb-1">Scott</span>
// //                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].today.commission)}</span>
// //               </div>
// //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
// //                 <span className="block text-xs font-semibold text-gray-600 mb-1">George</span>
// //                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].today.commission)}</span>
// //               </div>
// //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
// //                 <span className="block text-xs font-semibold text-gray-600 mb-1">Others</span>
// //                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['Other Agents'].today.commission)}</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Today's Premium */}
// //           <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Today's Premium</div>
// //               <div className="text-2xl">📈</div>
// //             </div>
// //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
// //               {formatCurrency(metrics.today.premium)}
// //             </div>
// //             <div className="text-sm text-gray-600 mb-2">Annual: {formatCurrency(metrics.today.production)}</div>
// //             <div className="grid grid-cols-3 gap-2">
// //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-orange-500">
// //                 <span className="block text-xs font-semibold text-gray-600 mb-1">Scott</span>
// //                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].today.premium)}</span>
// //               </div>
// //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-orange-500">
// //                 <span className="block text-xs font-semibold text-gray-600 mb-1">George</span>
// //                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].today.premium)}</span>
// //               </div>
// //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-orange-500">
// //                 <span className="block text-xs font-semibold text-gray-600 mb-1">Others</span>
// //                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['Other Agents'].today.premium)}</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Today's Deals */}
// //           <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Today's Deals</div>
// //               <div className="text-2xl">📑</div>
// //             </div>
// //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
// //               {metrics.today.deals}
// //             </div>
// //             <div className="grid grid-cols-3 gap-2">
// //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-blue-500">
// //                 <span className="block text-xs font-semibold text-gray-600 mb-1">Scott</span>
// //                 <span className="text-lg font-black text-gray-800">{metrics.byAgent['Scott Watkins'].today.deals}</span>
// //               </div>
// //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-blue-500">
// //                 <span className="block text-xs font-semibold text-gray-600 mb-1">George</span>
// //                 <span className="text-lg font-black text-gray-800">{metrics.byAgent['George Knox'].today.deals}</span>
// //               </div>
// //               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-blue-500">
// //                 <span className="block text-xs font-semibold text-gray-600 mb-1">Others</span>
// //                 <span className="text-lg font-black text-gray-800">{metrics.byAgent['Other Agents'].today.deals}</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Today's Coverage */}
// //           <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Today's Coverage</div>
// //               <div className="text-2xl">🛡️</div>
// //             </div>
// //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
// //               {formatCurrency(metrics.coverageAmounts)}
// //             </div>
// //             <div className="text-sm text-gray-600">
// //               Total Coverage • {metrics.ytd.deals} deals YTD
// //             </div>
// //           </div>
// //         </div>

// //         {/* WTD, MTD, YTD Row */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// //           {/* WTD Commission */}
// //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">WTD Commission</div>
// //               <div className="text-2xl">📅</div>
// //             </div>
// //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// //               {formatCurrency(metrics.wtd.commission)}
// //             </div>
// //             <div className="space-y-2">
// //               <div className="flex justify-between py-2 border-b border-gray-200">
// //                 <span className="text-sm font-semibold text-gray-600">Scott</span>
// //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].wtd.commission)}</span>
// //               </div>
// //               <div className="flex justify-between py-2 border-b border-gray-200">
// //                 <span className="text-sm font-semibold text-gray-600">George</span>
// //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].wtd.commission)}</span>
// //               </div>
// //               <div className="flex justify-between py-2">
// //                 <span className="text-sm font-semibold text-gray-600">Other Agents</span>
// //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Other Agents'].wtd.commission)}</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* MTD Commission */}
// //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">MTD Commission</div>
// //               <div className="text-2xl">📊</div>
// //             </div>
// //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// //               {formatCurrency(metrics.mtd.commission)}
// //             </div>
// //             <div className="space-y-2">
// //               <div className="flex justify-between py-2 border-b border-gray-200">
// //                 <span className="text-sm font-semibold text-gray-600">Scott</span>
// //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].mtd.commission)}</span>
// //               </div>
// //               <div className="flex justify-between py-2 border-b border-gray-200">
// //                 <span className="text-sm font-semibold text-gray-600">George</span>
// //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].mtd.commission)}</span>
// //               </div>
// //               <div className="flex justify-between py-2">
// //                 <span className="text-sm font-semibold text-gray-600">Other Agents</span>
// //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Other Agents'].mtd.commission)}</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* YTD Commission */}
// //           {/* <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">YTD Commission</div>
// //               <div className="text-2xl">🎯</div>
// //             </div>
// //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// //               {formatCurrency(metrics.ytd.commission)}
// //             </div>
// //             <div className="space-y-2 mb-4">
// //               <div className="flex justify-between py-2">
// //                 <span className="text-sm font-semibold text-gray-600">Annual Goal</span>
// //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(goals.commission)}</span>
// //               </div>
// //             </div>
// //             <div className="mb-4">
// //               <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
// //                 <div 
// //                   className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow transition-all duration-500"
// //                   style={{ width: `${commissionPercent}%` }}
// //                 ></div>
// //               </div>
// //               <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// //                 {commissionPercent.toFixed(1)}%
// //               </div>
// //             </div>
// //             <div className="flex justify-between py-2">
// //               <span className="text-sm font-semibold text-gray-600">Progress</span>
// //               <span className="text-sm font-bold text-gray-800">{commissionPercent.toFixed(1)}%</span>
// //             </div>
// //           </div> */}

// //           {/* YTD Commission */}
// //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">YTD Commission</div>
// //               <div className="text-2xl">💰</div>
// //             </div>
            
// //             {/* Main YTD Commission Number */}
// //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// //               {formatCurrency(metrics.ytd.commission)}
// //             </div>
            
// //             {/* Annual Goal */}
// //             <div className="flex justify-between items-center mb-3">
// //               <span className="text-sm font-semibold text-gray-600">Annual Goal</span>
// //               <span className="text-sm font-bold text-gray-800">{formatCurrency(goals.commission)}</span>
// //             </div>
            
// //             {/* Agent Breakdown */}
// //             <div className="space-y-2 mb-4">
// //               <div className="flex justify-between items-center">
// //                 <span className="text-sm font-semibold text-gray-600">George Knox</span>
// //                 <span className="text-sm font-bold text-gray-800">
// //                   {formatCurrency(metrics.byAgent['George Knox']?.ytd.commission || 0)}
// //                 </span>
// //               </div>
// //               <div className="flex justify-between items-center">
// //                 <span className="text-sm font-semibold text-gray-600">Scott Watkins</span>
// //                 <span className="text-sm font-bold text-gray-800">
// //                   {formatCurrency(metrics.byAgent['Scott Watkins']?.ytd.commission || 0)}
// //                 </span>
// //               </div>
// //               <div className="flex justify-between items-center">
// //                 <span className="text-sm font-semibold text-gray-600">Other Agents</span>
// //                 <span className="text-sm font-bold text-gray-800">
// //                   {formatCurrency(metrics.byAgent['Other Agents']?.ytd.commission || 0)}
// //                 </span>
// //               </div>
// //             </div>
            
// //             {/* Progress Bar */}
// //             <div className="mb-3">
// //               <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
// //                 <div 
// //                   className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow transition-all duration-500"
// //                   style={{ width: `${commissionPercent}%` }}
// //                 ></div>
// //               </div>
// //               <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// //                 {commissionPercent.toFixed(1)}%
// //               </div>
// //             </div>
            
// //             {/* Progress Label */}
// //             <div className="flex justify-between items-center">
// //               <span className="text-sm font-semibold text-gray-600">Progress</span>
// //               <span className="text-sm font-bold text-gray-800">{commissionPercent.toFixed(1)}%</span>
// //             </div>
// //           </div>

// //           {/* YTD Production */}
// //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">YTD Production</div>
// //               <div className="text-2xl">📈</div>
// //             </div>
            
// //             {/* Main YTD Production Number */}
// //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
// //               {formatCurrency(metrics.ytd.production)}
// //             </div>
            
// //             {/* Annual Goal */}
// //             <div className="flex justify-between items-center mb-3">
// //               <span className="text-sm font-semibold text-gray-600">Annual Goal</span>
// //               <span className="text-sm font-bold text-gray-800">{formatCurrency(goals.production)}</span>
// //             </div>
            
// //             {/* Agent Breakdown */}
// //             <div className="space-y-2 mb-4">
// //               {Object.entries(metrics.byAgent || {})
// //                 .sort((a, b) => {
// //                   // Always keep "Other Agents" at the bottom
// //                   if (a[0] === "Other Agents") return 1;
// //                   if (b[0] === "Other Agents") return -1;

// //                   // Sort remaining agents by production (highest first)
// //                   return (b[1]?.ytd.production || 0) - (a[1]?.ytd.production || 0);
// //                 })
// //                 .map(([agentName, agentData]) => (
// //                   <div
// //                     key={agentName}
// //                     className="flex justify-between items-center"
// //                   >
// //                     <span className="text-sm font-semibold text-gray-600">
// //                       {agentName}
// //                     </span>

// //                     <span className="text-sm font-bold text-gray-800">
// //                       {formatCurrency(agentData?.ytd.production || 0)}
// //                     </span>
// //                   </div>
// //                 ))}
// //             </div>

            
// //             {/* Progress Bar */}
// //             <div className="mb-3">
// //               <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
// //                 <div 
// //                   className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow transition-all duration-500"
// //                   style={{ width: `${productionPercent}%` }}
// //                 ></div>
// //               </div>
// //               <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// //                 {productionPercent.toFixed(1)}%
// //               </div>
// //             </div>
            
// //             {/* Progress Label */}
// //             <div className="flex justify-between items-center">
// //               <span className="text-sm font-semibold text-gray-600">Progress</span>
// //               <span className="text-sm font-bold text-gray-800">{productionPercent.toFixed(1)}%</span>
// //             </div>
// //           </div>

// //           {/* YTD Premium */}
// //           {/* <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">YTD Premium</div>
// //               <div className="text-2xl">🏆</div>
// //             </div>
// //             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
// //               {formatCurrency(metrics.ytd.premium)}
// //             </div>
// //             <div className="text-sm text-gray-600 mb-2">Annual: {formatCurrency(metrics.ytd.production)}</div>
// //             <div className="space-y-2 mb-4">
// //               <div className="flex justify-between py-2">
// //                 <span className="text-sm font-semibold text-gray-600">Annual Goal</span>
// //                 <span className="text-sm font-bold text-gray-800">{formatCurrency(goals.production)}</span>
// //               </div>
// //             </div>
// //             <div className="mb-4">
// //               <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
// //                 <div 
// //                   className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow transition-all duration-500"
// //                   style={{ width: `${productionPercent}%` }}
// //                 ></div>
// //               </div>
// //               <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// //                 {productionPercent.toFixed(1)}%
// //               </div>
// //             </div>
// //             <div className="flex justify-between py-2">
// //               <span className="text-sm font-semibold text-gray-600">Progress</span>
// //               <span className="text-sm font-bold text-gray-800">{productionPercent.toFixed(1)}%</span>
// //             </div>
// //           </div> */}
// //         </div>

// //         {/* Goals and Lead Sources Row */}
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
// //           {/* 2026 Annual Goals Progress */}
// //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">2026 Annual Goals</div>
// //               <div className="text-2xl">🎯</div>
// //             </div>
            
// //             <div className="space-y-4">
// //               {/* Commission Goal */}
// //               <div>
// //                 <div className="flex justify-between mb-1">
// //                   <span className="text-sm font-semibold text-gray-600">Commission</span>
// //                   <span className="text-sm font-bold text-gray-800">
// //                     {formatCurrency(metrics.ytd.commission)} / {formatCurrency(goals.commission)}
// //                   </span>
// //                 </div>
// //                 <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
// //                   <div 
// //                     className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
// //                     style={{ width: `${commissionPercent}%` }}
// //                   ></div>
// //                 </div>
// //                 <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// //                   {commissionPercent.toFixed(1)}%
// //                 </div>
// //               </div>
              
// //               {/* Production Goal */}
// //               <div>
// //                 <div className="flex justify-between mb-1">
// //                   <span className="text-sm font-semibold text-gray-600">Production</span>
// //                   <span className="text-sm font-bold text-gray-800">
// //                     {formatCurrency(metrics.ytd.production)} / {formatCurrency(goals.production)}
// //                   </span>
// //                 </div>
// //                 <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
// //                   <div 
// //                     className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"
// //                     style={{ width: `${productionPercent}%` }}
// //                   ></div>
// //                 </div>
// //                 <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// //                   {productionPercent.toFixed(1)}%
// //                 </div>
// //               </div>
              
// //               {/* Deals Goal */}
// //               <div>
// //                 <div className="flex justify-between mb-1">
// //                   <span className="text-sm font-semibold text-gray-600">Deals</span>
// //                   <span className="text-sm font-bold text-gray-800">
// //                     {metrics.ytd.deals} / {goals.deals}
// //                   </span>
// //                 </div>
// //                 <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
// //                   <div 
// //                     className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
// //                     style={{ width: `${dealsPercent}%` }}
// //                   ></div>
// //                 </div>
// //                 <div className="text-xs text-center text-gray-600 font-semibold mt-1">
// //                   {dealsPercent.toFixed(1)}%
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Top Lead Sources */}
// //           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Top Lead Sources (MTD)</div>
// //               <div className="text-2xl">🏆</div>
// //             </div>
// //             <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
// //               {Object.entries(metrics.leadSources)
// //                 .sort((a, b) => b[1] - a[1])
// //                 .slice(0, 8)
// //                 .map(([lead, total]) => (
// //                   <div key={lead} className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500 flex justify-between items-center">
// //                     <span className="text-sm font-bold text-gray-800 truncate max-w-[70%]" title={lead}>
// //                       {lead}
// //                     </span>
// //                     <span className="text-sm font-black bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent whitespace-nowrap">
// //                       {formatCurrency(total)}
// //                     </span>
// //                   </div>
// //                 ))}
// //               {Object.keys(metrics.leadSources).length === 0 && (
// //                 <div className="text-center py-4 text-gray-500">
// //                   No lead source data available
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Footer */}
// //         <div className="text-right text-sm text-white/70">
// //           Last Updated: {lastUpdated.toLocaleString()} | 
// //           Auto-refresh: 60s | 
// //           Status: 
// //           <span className="ml-2 inline-block px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs font-semibold">
// //             {data.length > 0 ? `Connected (${data.length} records)` : 'No Data'}
// //           </span>
// //           <button
// //             onClick={fetchData}
// //             className="ml-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-xs"
// //             disabled={loading}
// //           >
// //             {loading ? 'Refreshing...' : 'Refresh Now'}
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

















// 'use client'

// import { useState, useEffect, useCallback } from 'react'

// // Default goals (will be overridden by Google Sheets data)
// const DEFAULT_GOALS = {
//   commission: 450000,
//   production: 1500000,
//   deals: 600
// }

// export default function DashboardContent() {
//   const [data, setData] = useState([])
//   const [quotes, setQuotes] = useState([])
//   const [dailyQuote, setDailyQuote] = useState('')
//   const [goals, setGoals] = useState(DEFAULT_GOALS)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const [lastUpdated, setLastUpdated] = useState(new Date())

//   const fetchData = useCallback(async () => {
//     try {
//       setLoading(true)
      
//       const response = await fetch('/api/sheet')
//       const result = await response.json()
      
//       if (!response.ok) {
//         throw new Error(result.error || 'Failed to fetch data')
//       }
      
//       console.log('Data received:', {
//         rows: result.data?.length,
//         quotes: result.quotes?.length,
//         goals: result.goals
//       })
      
//       setData(result.data || [])
//       setQuotes(result.quotes || [])
//       setGoals(result.goals || DEFAULT_GOALS)
//       setError(null)
//       setLastUpdated(new Date())
      
//       // Set daily quote
//       if (result.quotes && result.quotes.length > 0) {
//         selectDailyQuote(result.quotes)
//       } else {
//         setDailyQuote('Money follows small actions repeated daily.')
//       }
      
//     } catch (err) {
//       console.error('Error fetching data:', err)
//       setError(err.message || 'Failed to load dashboard data')
//     } finally {
//       setLoading(false)
//     }
//   }, [])

//   // Function to select daily quote (changes daily)
//   const selectDailyQuote = (quotesList) => {
//     if (!quotesList || quotesList.length === 0) return
    
//     // Use the day of the year to select a consistent daily quote
//     const today = new Date()
//     const start = new Date(today.getFullYear(), 0, 0)
//     const diff = today - start
//     const oneDay = 1000 * 60 * 60 * 24
//     const dayOfYear = Math.floor(diff / oneDay)
    
//     const quoteIndex = dayOfYear % quotesList.length
//     const selectedQuote = quotesList[quoteIndex]
//     setDailyQuote(selectedQuote.text) // Only show text, no author
//   }

//   useEffect(() => {
//     fetchData()
//     const interval = setInterval(fetchData, 60000)
//     return () => clearInterval(interval)
//   }, [fetchData])

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//       minimumFractionDigits: 0
//     }).format(amount || 0)
//   }

//   const cleanNumber = (value) => {
//     if (!value) return 0
//     const str = String(value)
//     const cleaned = str.replace(/[^\d.-]/g, '')
//     return Number(cleaned) || 0
//   }

//   const calculateMetrics = () => {
//     const today = new Date()
//     today.setHours(0, 0, 0, 0)

//     // Initialize metrics - Only Scott's total and George's total
//     let metrics = {
//       today: { commission: 0, production: 0, deals: 0 },
//       wtd: { commission: 0, production: 0, deals: 0 },
//       mtd: { commission: 0, production: 0, deals: 0 },
//       ytd: { commission: 0, production: 0, deals: 0 },
//       byAgent: {
//         'Scott Watkins': {
//           today: { commission: 0, production: 0, deals: 0 },
//           wtd: { commission: 0, production: 0, deals: 0 },
//           mtd: { commission: 0, production: 0, deals: 0 },
//           ytd: { commission: 0, production: 0, deals: 0 }
//         },
//         'George Knox': {
//           today: { commission: 0, production: 0, deals: 0 },
//           wtd: { commission: 0, production: 0, deals: 0 },
//           mtd: { commission: 0, production: 0, deals: 0 },
//           ytd: { commission: 0, production: 0, deals: 0 }
//         },
//         'Total (Scott + George)': {
//           today: { commission: 0, production: 0, deals: 0 },
//           wtd: { commission: 0, production: 0, deals: 0 },
//           mtd: { commission: 0, production: 0, deals: 0 },
//           ytd: { commission: 0, production: 0, deals: 0 }
//         }
//       },
//       leadSources: {}
//     }

//     if (!data || data.length === 0) {
//       return metrics
//     }

//     // Date ranges
//     const weekStart = new Date(today)
//     weekStart.setDate(today.getDate() - today.getDay()) // Sunday start
//     weekStart.setHours(0, 0, 0, 0)

//     const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)
//     monthStart.setHours(0, 0, 0, 0)

//     const yearStart = new Date(today.getFullYear(), 0, 1)
//     yearStart.setHours(0, 0, 0, 0)

//     console.log('Processing deals...')
//     data.forEach((row) => {
//       // Check status - must be "Approved"
//       const status = row._status
//       if (!status || status.toLowerCase() !== 'approved') {
//         return
//       }

//       // Parse date from "MM/DD/YYYY" format
//       const dateStr = row._dateSold
//       if (!dateStr) {
//         console.log('No date found for row:', row._rowIndex)
//         return
//       }
      
//       let dealDate
//       if (dateStr.includes('/')) {
//         const [month, day, year] = dateStr.split('/').map(Number)
//         dealDate = new Date(year, month - 1, day)
//       } else {
//         dealDate = new Date(dateStr)
//       }
      
//       if (isNaN(dealDate.getTime())) {
//         console.log('Invalid date:', dateStr)
//         return
//       }
//       dealDate.setHours(0, 0, 0, 0)

//       // Get agent and categorize
//       const agent = row._agent || ''
//       const agentCategory = getAgentCategory(agent)
      
//       const lead = row._leadVendor || 'Unknown'
      
//       // Get values - Use annual premium for production (not monthly)
//       // Note: If annual premium isn't available, we'll need to calculate it
//       const monthlyPremium = cleanNumber(row._monthlyPremium)
//       const annualPremium = monthlyPremium * 12 // Convert to annual for production
//       const commission = cleanNumber(row._netCommission) // Using Column AA

//       // Debug logging for today's deals
//       if (dealDate.toDateString() === today.toDateString() && commission > 0) {
//         console.log('Today\'s approved deal found:', {
//           agent: agent,
//           commission: commission,
//           annualPremium: annualPremium,
//           date: dateStr
//         })
//       }

//       // Initialize lead source if not exists
//       if (!metrics.leadSources[lead]) {
//         metrics.leadSources[lead] = 0
//       }
//       metrics.leadSources[lead] += annualPremium

//       // Helper to update metrics for a time period
//       const updatePeriod = (period, periodStart) => {
//         if (dealDate >= periodStart) {
//           // Update Scott + George total
//           metrics[period].commission += commission
//           metrics[period].production += annualPremium // Use annual for production
//           metrics[period].deals += 1
          
//           // Update individual agents
//           if (agentCategory !== 'Other Agents') {
//             metrics.byAgent[agentCategory][period].commission += commission
//             metrics.byAgent[agentCategory][period].production += annualPremium // Use annual for production
//             metrics.byAgent[agentCategory][period].deals += 1
            
//             // Update total (Scott + George)
//             if (agentCategory === 'Scott Watkins' || agentCategory === 'George Knox') {
//               metrics.byAgent['Total (Scott + George)'][period].commission += commission
//               metrics.byAgent['Total (Scott + George)'][period].production += annualPremium // Use annual for production
//               metrics.byAgent['Total (Scott + George)'][period].deals += 1
//             }
//           }
//         }
//       }

//       // Today (exact match)
//       if (dealDate.toDateString() === today.toDateString()) {
//         metrics.today.commission += commission
//         metrics.today.production += annualPremium // Use annual for production
//         metrics.today.deals += 1
        
//         // Update individual agents
//         if (agentCategory !== 'Other Agents') {
//           metrics.byAgent[agentCategory].today.commission += commission
//           metrics.byAgent[agentCategory].today.production += annualPremium // Use annual for production
//           metrics.byAgent[agentCategory].today.deals += 1
          
//           // Update total (Scott + George)
//           if (agentCategory === 'Scott Watkins' || agentCategory === 'George Knox') {
//             metrics.byAgent['Total (Scott + George)'].today.commission += commission
//             metrics.byAgent['Total (Scott + George)'].today.production += annualPremium // Use annual for production
//             metrics.byAgent['Total (Scott + George)'].today.deals += 1
//           }
//         }
//       }

//       // Update other periods
//       updatePeriod('wtd', weekStart)
//       updatePeriod('mtd', monthStart)
//       updatePeriod('ytd', yearStart)
//     })

//     console.log('Calculated metrics:', {
//       today: metrics.today,
//       ytd: metrics.ytd,
//       agents: metrics.byAgent,
//       totalDealsProcessed: data.length
//     })

//     return metrics
//   }

//   // Helper to categorize agents
//   const getAgentCategory = (agentName) => {
//     if (!agentName) return 'Other Agents'
    
//     const name = agentName.toLowerCase()
//     if (name.includes('scott') || name.includes('watkins')) {
//       return 'Scott Watkins'
//     } else if (name.includes('george') || name.includes('knox')) {
//       return 'George Knox'
//     } else {
//       return 'Other Agents'
//     }
//   }

//   const handleLogout = async () => {
//     try {
//       const response = await fetch('/api/auth/logout', { method: 'POST' })
//       if (response.ok) {
//         window.location.href = '/login'
//       }
//     } catch (error) {
//       console.error('Logout error:', error)
//       window.location.href = '/login'
//     }
//   }

//   if (loading && data.length === 0) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
//         <div className="text-white text-xl animate-pulse">Loading dashboard...</div>
//       </div>
//     )
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
//         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
//           <div className="text-white text-xl mb-4">Error: {error}</div>
//           <button
//             onClick={fetchData}
//             className="px-6 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors mr-2"
//           >
//             Retry
//           </button>
//           <button
//             onClick={handleLogout}
//             className="px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//     )
//   }

//   const metrics = calculateMetrics()
//   const commissionPercent = Math.min(100, (metrics.ytd.commission / goals.commission) * 100)
//   const productionPercent = Math.min(100, (metrics.ytd.production / goals.production) * 100)
//   const dealsPercent = Math.min(100, (metrics.ytd.deals / goals.deals) * 100)

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white p-4">
//       {/* Top Bar with Logout */}
//       {/*       
//       <div className="flex justify-between items-center mb-4">
//         <div className="text-sm opacity-75">
//           Welcome to Production Dashboard
//         </div>
//         <button
//           onClick={handleLogout}
//           className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-sm"
//         >
//           Logout
//         </button>
//       </div>
//       */}

//       <div className="max-w-7xl mx-auto space-y-4">
//         {/* Header */}
//         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20">
//           <button
//             onClick={handleLogout}
//             className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-sm float-right mb-2"
//           >
//             Logout
//           </button>
//           <h1 className="text-4xl font-bold mb-2">🎯 Production Scoreboard</h1>
//           <p className="text-white/80">Being consistently consistent will make me a millionaire</p>
//         </div>

//         {/* Daily Quote (Simplified) */}
//         {/* {dailyQuote && (
//           <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 text-center border border-white/20">
//             <div className="text-lg italic font-medium">💭 {dailyQuote}</div>
//           </div>
//         )} */}

//         {/* Today's Metrics Row */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {/* Today's Commission */}
//           <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
//             <div className="flex justify-between items-center mb-4">
//               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">My Today's Commission</div>
//               <div className="text-2xl">💰</div>
//             </div>
//             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//               {formatCurrency(metrics.byAgent['Total (Scott + George)'].today.commission)}
//             </div>
//             <div className="grid grid-cols-3 gap-2">
//               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
//                 <span className="block text-xs font-semibold text-gray-600 mb-1">Scott</span>
//                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].today.commission)}</span>
//               </div>
//               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
//                 <span className="block text-xs font-semibold text-gray-600 mb-1">George</span>
//                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].today.commission)}</span>
//               </div>
//               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
//                 <span className="block text-xs font-semibold text-gray-600 mb-1">Total</span>
//                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['Total (Scott + George)'].today.commission)}</span>
//               </div>
//             </div>
//           </div>

//           {/* Today's Production (Annual Premium) */}
//           <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
//             <div className="flex justify-between items-center mb-4">
//               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">My Today's Production</div>
//               <div className="text-2xl">📈</div>
//             </div>
//             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
//               {formatCurrency(metrics.byAgent['Total (Scott + George)'].today.production)}
//             </div>
//             <div className="grid grid-cols-3 gap-2">
//               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-orange-500">
//                 <span className="block text-xs font-semibold text-gray-600 mb-1">Scott</span>
//                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].today.production)}</span>
//               </div>
//               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-orange-500">
//                 <span className="block text-xs font-semibold text-gray-600 mb-1">George</span>
//                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].today.production)}</span>
//               </div>
//               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-orange-500">
//                 <span className="block text-xs font-semibold text-gray-600 mb-1">Total</span>
//                 <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['Total (Scott + George)'].today.production)}</span>
//               </div>
//             </div>
//           </div>

//           {/* Today's Deals */}
//           <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
//             <div className="flex justify-between items-center mb-4">
//               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">My Today's Deals</div>
//               <div className="text-2xl">📑</div>
//             </div>
//             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
//               {metrics.byAgent['Total (Scott + George)'].today.deals}
//             </div>
//             <div className="grid grid-cols-3 gap-2">
//               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-blue-500">
//                 <span className="block text-xs font-semibold text-gray-600 mb-1">Scott</span>
//                 <span className="text-lg font-black text-gray-800">{metrics.byAgent['Scott Watkins'].today.deals}</span>
//               </div>
//               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-blue-500">
//                 <span className="block text-xs font-semibold text-gray-600 mb-1">George</span>
//                 <span className="text-lg font-black text-gray-800">{metrics.byAgent['George Knox'].today.deals}</span>
//               </div>
//               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-blue-500">
//                 <span className="block text-xs font-semibold text-gray-600 mb-1">Total</span>
//                 <span className="text-lg font-black text-gray-800">{metrics.byAgent['Total (Scott + George)'].today.deals}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* WTD, MTD, YTD Row */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {/* WTD Commission */}
//           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
//             <div className="flex justify-between items-center mb-4">
//               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">WTD Commission</div>
//               <div className="text-2xl">📅</div>
//             </div>
//             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//               {formatCurrency(metrics.byAgent['Total (Scott + George)'].wtd.commission)}
//             </div>
//             <div className="space-y-2">
//               <div className="flex justify-between py-2 border-b border-gray-200">
//                 <span className="text-sm font-semibold text-gray-600">Scott</span>
//                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].wtd.commission)}</span>
//               </div>
//               <div className="flex justify-between py-2 border-b border-gray-200">
//                 <span className="text-sm font-semibold text-gray-600">George</span>
//                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].wtd.commission)}</span>
//               </div>
//               <div className="flex justify-between py-2">
//                 <span className="text-sm font-semibold text-gray-600">Total</span>
//                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Total (Scott + George)'].wtd.commission)}</span>
//               </div>
//             </div>
//           </div>

//           {/* MTD Commission */}
//           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
//             <div className="flex justify-between items-center mb-4">
//               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">MTD Commission</div>
//               <div className="text-2xl">📊</div>
//             </div>
//             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//               {formatCurrency(metrics.byAgent['Total (Scott + George)'].mtd.commission)}
//             </div>
//             <div className="space-y-2">
//               <div className="flex justify-between py-2 border-b border-gray-200">
//                 <span className="text-sm font-semibold text-gray-600">Scott</span>
//                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].mtd.commission)}</span>
//               </div>
//               <div className="flex justify-between py-2 border-b border-gray-200">
//                 <span className="text-sm font-semibold text-gray-600">George</span>
//                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].mtd.commission)}</span>
//               </div>
//               <div className="flex justify-between py-2">
//                 <span className="text-sm font-semibold text-gray-600">Total</span>
//                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Total (Scott + George)'].mtd.commission)}</span>
//               </div>
//             </div>
//           </div>

//           {/* YTD Commission */}
//           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
//             <div className="flex justify-between items-center mb-4">
//               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">YTD Commission</div>
//               <div className="text-2xl">🎯</div>
//             </div>
            
//             {/* Main YTD Commission Number */}
//             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//               {formatCurrency(metrics.byAgent['Total (Scott + George)'].ytd.commission)}
//             </div>
            
//             {/* Agent Breakdown */}
//             <div className="space-y-2 mb-4">
//               <div className="flex justify-between items-center">
//                 <span className="text-sm font-semibold text-gray-600">Scott Watkins</span>
//                 <span className="text-sm font-bold text-gray-800">
//                   {formatCurrency(metrics.byAgent['Scott Watkins']?.ytd.commission || 0)}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm font-semibold text-gray-600">George Knox</span>
//                 <span className="text-sm font-bold text-gray-800">
//                   {formatCurrency(metrics.byAgent['George Knox']?.ytd.commission || 0)}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm font-semibold text-gray-600">Total</span>
//                 <span className="text-sm font-bold text-gray-800">
//                   {formatCurrency(metrics.byAgent['Total (Scott + George)']?.ytd.commission || 0)}
//                 </span>
//               </div>
//             </div>
            
//             {/* Annual Goal */}
//             <div className="flex justify-between items-center mb-3">
//               <span className="text-sm font-semibold text-gray-600">Annual Goal</span>
//               <span className="text-sm font-bold text-gray-800">{formatCurrency(goals.commission)}</span>
//             </div>
            
//             {/* Progress Bar */}
//             <div className="mb-3">
//               <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
//                 <div 
//                   className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow transition-all duration-500"
//                   style={{ width: `${commissionPercent}%` }}
//                 ></div>
//               </div>
//               <div className="text-xs text-center text-gray-600 font-semibold mt-1">
//                 {commissionPercent.toFixed(1)}%
//               </div>
//             </div>
            
//             {/* Progress Label */}
//             <div className="flex justify-between items-center">
//               <span className="text-sm font-semibold text-gray-600">Progress</span>
//               <span className="text-sm font-bold text-gray-800">{commissionPercent.toFixed(1)}%</span>
//             </div>
//           </div>
//         </div>

//         {/* Production Metrics Row */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {/* WTD Production */}
//           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
//             <div className="flex justify-between items-center mb-4">
//               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">WTD Production</div>
//               <div className="text-2xl">📅</div>
//             </div>
//             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
//               {formatCurrency(metrics.byAgent['Total (Scott + George)'].wtd.production)}
//             </div>
//             <div className="space-y-2">
//               <div className="flex justify-between py-2 border-b border-gray-200">
//                 <span className="text-sm font-semibold text-gray-600">Scott</span>
//                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].wtd.production)}</span>
//               </div>
//               <div className="flex justify-between py-2 border-b border-gray-200">
//                 <span className="text-sm font-semibold text-gray-600">George</span>
//                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].wtd.production)}</span>
//               </div>
//               <div className="flex justify-between py-2">
//                 <span className="text-sm font-semibold text-gray-600">Total</span>
//                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Total (Scott + George)'].wtd.production)}</span>
//               </div>
//             </div>
//           </div>

//           {/* MTD Production */}
//           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
//             <div className="flex justify-between items-center mb-4">
//               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">MTD Production</div>
//               <div className="text-2xl">📊</div>
//             </div>
//             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
//               {formatCurrency(metrics.byAgent['Total (Scott + George)'].mtd.production)}
//             </div>
//             <div className="space-y-2">
//               <div className="flex justify-between py-2 border-b border-gray-200">
//                 <span className="text-sm font-semibold text-gray-600">Scott</span>
//                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].mtd.production)}</span>
//               </div>
//               <div className="flex justify-between py-2 border-b border-gray-200">
//                 <span className="text-sm font-semibold text-gray-600">George</span>
//                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].mtd.production)}</span>
//               </div>
//               <div className="flex justify-between py-2">
//                 <span className="text-sm font-semibold text-gray-600">Total</span>
//                 <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Total (Scott + George)'].mtd.production)}</span>
//               </div>
//             </div>
//           </div>

//           {/* YTD Production */}
//           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
//             <div className="flex justify-between items-center mb-4">
//               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">YTD Production</div>
//               <div className="text-2xl">🏆</div>
//             </div>
            
//             {/* Main YTD Production Number */}
//             <div className="text-3xl font-black mb-4 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
//               {formatCurrency(metrics.byAgent['Total (Scott + George)'].ytd.production)}
//             </div>
            
//             {/* Agent Breakdown */}
//             <div className="space-y-2 mb-4">
//               <div className="flex justify-between items-center">
//                 <span className="text-sm font-semibold text-gray-600">Scott Watkins</span>
//                 <span className="text-sm font-bold text-gray-800">
//                   {formatCurrency(metrics.byAgent['Scott Watkins']?.ytd.production || 0)}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm font-semibold text-gray-600">George Knox</span>
//                 <span className="text-sm font-bold text-gray-800">
//                   {formatCurrency(metrics.byAgent['George Knox']?.ytd.production || 0)}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm font-semibold text-gray-600">Total</span>
//                 <span className="text-sm font-bold text-gray-800">
//                   {formatCurrency(metrics.byAgent['Total (Scott + George)']?.ytd.production || 0)}
//                 </span>
//               </div>
//             </div>
            
//             {/* Annual Goal */}
//             <div className="flex justify-between items-center mb-3">
//               <span className="text-sm font-semibold text-gray-600">Annual Goal</span>
//               <span className="text-sm font-bold text-gray-800">{formatCurrency(goals.production)}</span>
//             </div>
            
//             {/* Progress Bar */}
//             <div className="mb-3">
//               <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
//                 <div 
//                   className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow transition-all duration-500"
//                   style={{ width: `${productionPercent}%` }}
//                 ></div>
//               </div>
//               <div className="text-xs text-center text-gray-600 font-semibold mt-1">
//                 {productionPercent.toFixed(1)}%
//               </div>
//             </div>
            
//             {/* Progress Label */}
//             <div className="flex justify-between items-center">
//               <span className="text-sm font-semibold text-gray-600">Progress</span>
//               <span className="text-sm font-bold text-gray-800">{productionPercent.toFixed(1)}%</span>
//             </div>
//           </div>
//         </div>

//         {/* Goals and Lead Sources Row */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//           {/* 2026 Annual Goals Progress */}
//           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
//             <div className="flex justify-between items-center mb-4">
//               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">2026 Annual Goals</div>
//               <div className="text-2xl">🎯</div>
//             </div>
            
//             <div className="space-y-4">
//               {/* Commission Goal */}
//               <div>
//                 <div className="flex justify-between mb-1">
//                   <span className="text-sm font-semibold text-gray-600">Commission</span>
//                   <span className="text-sm font-bold text-gray-800">
//                     {formatCurrency(metrics.byAgent['Total (Scott + George)'].ytd.commission)} / {formatCurrency(goals.commission)}
//                   </span>
//                 </div>
//                 <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
//                   <div 
//                     className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
//                     style={{ width: `${commissionPercent}%` }}
//                   ></div>
//                 </div>
//                 <div className="text-xs text-center text-gray-600 font-semibold mt-1">
//                   {commissionPercent.toFixed(1)}%
//                 </div>
//               </div>
              
//               {/* Production Goal */}
//               <div>
//                 <div className="flex justify-between mb-1">
//                   <span className="text-sm font-semibold text-gray-600">Production</span>
//                   <span className="text-sm font-bold text-gray-800">
//                     {formatCurrency(metrics.byAgent['Total (Scott + George)'].ytd.production)} / {formatCurrency(goals.production)}
//                   </span>
//                 </div>
//                 <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
//                   <div 
//                     className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"
//                     style={{ width: `${productionPercent}%` }}
//                   ></div>
//                 </div>
//                 <div className="text-xs text-center text-gray-600 font-semibold mt-1">
//                   {productionPercent.toFixed(1)}%
//                 </div>
//               </div>
              
//               {/* Deals Goal */}
//               <div>
//                 <div className="flex justify-between mb-1">
//                   <span className="text-sm font-semibold text-gray-600">Deals</span>
//                   <span className="text-sm font-bold text-gray-800">
//                     {metrics.byAgent['Total (Scott + George)'].ytd.deals} / {goals.deals}
//                   </span>
//                 </div>
//                 <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
//                   <div 
//                     className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
//                     style={{ width: `${dealsPercent}%` }}
//                   ></div>
//                 </div>
//                 <div className="text-xs text-center text-gray-600 font-semibold mt-1">
//                   {dealsPercent.toFixed(1)}%
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Top Lead Sources */}
//           <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
//             <div className="flex justify-between items-center mb-4">
//               <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Top Lead Sources (MTD)</div>
//               <div className="text-2xl">🏆</div>
//             </div>
//             <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
//               {Object.entries(metrics.leadSources)
//                 .sort((a, b) => b[1] - a[1])
//                 .slice(0, 8)
//                 .map(([lead, total]) => (
//                   <div key={lead} className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500 flex justify-between items-center">
//                     <span className="text-sm font-bold text-gray-800 truncate max-w-[70%]" title={lead}>
//                       {lead}
//                     </span>
//                     <span className="text-sm font-black bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent whitespace-nowrap">
//                       {formatCurrency(total)}
//                     </span>
//                   </div>
//                 ))}
//               {Object.keys(metrics.leadSources).length === 0 && (
//                 <div className="text-center py-4 text-gray-500">
//                   No lead source data available
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="text-right text-sm text-white/70">
//           Last Updated: {lastUpdated.toLocaleString()} | 
//           Auto-refresh: 60s | 
//           Status: 
//           <span className="ml-2 inline-block px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs font-semibold">
//             {data.length > 0 ? `Connected (${data.length} records)` : 'No Data'}
//           </span>
//           <button
//             onClick={fetchData}
//             className="ml-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-xs"
//             disabled={loading}
//           >
//             {loading ? 'Refreshing...' : 'Refresh Now'}
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }














'use client'

import { useState, useEffect, useCallback } from 'react'

// Default goals (will be overridden by Google Sheets data)
const DEFAULT_GOALS = {
  commission: 375000,
  production: 400000,
  deals: 400,
  dailyTarget: 2000
}

export default function DashboardContent() {
  const [data, setData] = useState([])
  const [quotes, setQuotes] = useState([])
  const [dailyQuote, setDailyQuote] = useState('')
  const [goals, setGoals] = useState(DEFAULT_GOALS)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lastUpdated, setLastUpdated] = useState(new Date())

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      
      const response = await fetch('/api/sheet')
      const result = await response.json()
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to fetch data')
      }
      
      console.log('Dashboard Data received:', {
        rows: result.data?.length,
        quotes: result.quotes?.length,
        goals: result.goals,
        firstRow: result.data?.[0]
      })
      
      setData(result.data || [])
      setQuotes(result.quotes || [])
      setGoals(result.goals || DEFAULT_GOALS)
      setError(null)
      setLastUpdated(new Date())
      
      // Set daily quote
      if (result.quotes && result.quotes.length > 0) {
        selectDailyQuote(result.quotes)
      } else {
        setDailyQuote('Money follows small actions repeated daily.')
      }
      
    } catch (err) {
      console.error('Error fetching data:', err)
      setError(err.message || 'Failed to load dashboard data')
    } finally {
      setLoading(false)
    }
  }, [])

  // Function to select daily quote (changes daily)
  const selectDailyQuote = (quotesList) => {
    if (!quotesList || quotesList.length === 0) return
    
    // Use the day of the year to select a consistent daily quote
    const today = new Date()
    const start = new Date(today.getFullYear(), 0, 0)
    const diff = today - start
    const oneDay = 1000 * 60 * 60 * 24
    const dayOfYear = Math.floor(diff / oneDay)
    
    const quoteIndex = dayOfYear % quotesList.length
    const selectedQuote = quotesList[quoteIndex]
    setDailyQuote(selectedQuote.text)
  }

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 60000)
    return () => clearInterval(interval)
  }, [fetchData])

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount || 0)
  }

  const cleanNumber = (value) => {
    if (!value && value !== 0) return 0
    const str = String(value)
    const cleaned = str.replace(/[^\d.-]/g, '')
    const num = Number(cleaned)
    return isNaN(num) ? 0 : num
  }

  const calculateMetrics = () => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // Initialize metrics - Only Scott's total and George's total
    let metrics = {
      today: { commission: 0, production: 0, deals: 0 },
      wtd: { commission: 0, production: 0, deals: 0 },
      mtd: { commission: 0, production: 0, deals: 0 },
      ytd: { commission: 0, production: 0, deals: 0 },
      byAgent: {
        'Scott Watkins': {
          today: { commission: 0, production: 0, deals: 0 },
          wtd: { commission: 0, production: 0, deals: 0 },
          mtd: { commission: 0, production: 0, deals: 0 },
          ytd: { commission: 0, production: 0, deals: 0 }
        },
        'George Knox': {
          today: { commission: 0, production: 0, deals: 0 },
          wtd: { commission: 0, production: 0, deals: 0 },
          mtd: { commission: 0, production: 0, deals: 0 },
          ytd: { commission: 0, production: 0, deals: 0 }
        },
        'Total (Scott + George)': {
          today: { commission: 0, production: 0, deals: 0 },
          wtd: { commission: 0, production: 0, deals: 0 },
          mtd: { commission: 0, production: 0, deals: 0 },
          ytd: { commission: 0, production: 0, deals: 0 }
        }
      },
      leadSources: {}
    }

    if (!data || data.length === 0) {
      return metrics
    }

    // Date ranges
    const weekStart = new Date(today)
    weekStart.setDate(today.getDate() - today.getDay()) // Sunday start
    weekStart.setHours(0, 0, 0, 0)

    const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)
    monthStart.setHours(0, 0, 0, 0)

    const yearStart = new Date(today.getFullYear(), 0, 1)
    yearStart.setHours(0, 0, 0, 0)

    console.log('Processing deals...')
    
    let processedCount = 0
    let approvedCount = 0
    
    data.forEach((row, index) => {
      processedCount++
      
      // Check status - must be "Approved"
      const status = row._status
      if (!status || status.toLowerCase() !== 'approved') {
        return
      }
      
      approvedCount++

      // Parse date from "MM/DD/YYYY" format
      const dateStr = row._dateSold
      if (!dateStr) {
        return
      }
      
      let dealDate
      if (dateStr.includes('/')) {
        const [month, day, year] = dateStr.split('/').map(Number)
        dealDate = new Date(year, month - 1, day)
      } else {
        dealDate = new Date(dateStr)
      }
      
      if (isNaN(dealDate.getTime())) {
        console.log('Invalid date:', dateStr, 'in row:', index)
        return
      }
      dealDate.setHours(0, 0, 0, 0)

      // Get agent and categorize
      const agent = row._agent || ''
      const agentCategory = getAgentCategory(agent)
      
      const lead = row._leadVendor || 'Unknown'
      
      // Get values - Use annual premium for production
      const monthlyPremium = cleanNumber(row._monthlyPremium)
      const annualPremium = monthlyPremium * 12
      const commission = cleanNumber(row._netCommission)

      // Debug log for today's deals
      if (dealDate.toDateString() === today.toDateString() && commission > 0) {
        console.log('Today\'s approved deal:', {
          agent: agent,
          commission: commission,
          annualPremium: annualPremium,
          monthlyPremium: monthlyPremium,
          date: dateStr
        })
      }

      // Initialize lead source if not exists
      if (!metrics.leadSources[lead]) {
        metrics.leadSources[lead] = 0
      }
      metrics.leadSources[lead] += annualPremium

      // Helper to update metrics for a time period
      const updatePeriod = (period, periodStart) => {
        if (dealDate >= periodStart) {
          // Update Scott + George total
          metrics[period].commission += commission
          metrics[period].production += annualPremium
          metrics[period].deals += 1
          
          // Update individual agents
          if (agentCategory !== 'Other Agents') {
            metrics.byAgent[agentCategory][period].commission += commission
            metrics.byAgent[agentCategory][period].production += annualPremium
            metrics.byAgent[agentCategory][period].deals += 1
            
            // Update total (Scott + George)
            if (agentCategory === 'Scott Watkins' || agentCategory === 'George Knox') {
              metrics.byAgent['Total (Scott + George)'][period].commission += commission
              metrics.byAgent['Total (Scott + George)'][period].production += annualPremium
              metrics.byAgent['Total (Scott + George)'][period].deals += 1
            }
          }
        }
      }

      // Today (exact match)
      if (dealDate.toDateString() === today.toDateString()) {
        metrics.today.commission += commission
        metrics.today.production += annualPremium
        metrics.today.deals += 1
        
        // Update individual agents
        if (agentCategory !== 'Other Agents') {
          metrics.byAgent[agentCategory].today.commission += commission
          metrics.byAgent[agentCategory].today.production += annualPremium
          metrics.byAgent[agentCategory].today.deals += 1
          
          // Update total (Scott + George)
          if (agentCategory === 'Scott Watkins' || agentCategory === 'George Knox') {
            metrics.byAgent['Total (Scott + George)'].today.commission += commission
            metrics.byAgent['Total (Scott + George)'].today.production += annualPremium
            metrics.byAgent['Total (Scott + George)'].today.deals += 1
          }
        }
      }

      // Update other periods
      updatePeriod('wtd', weekStart)
      updatePeriod('mtd', monthStart)
      updatePeriod('ytd', yearStart)
    })

    console.log('Metrics calculation complete:', {
      totalRows: data.length,
      processed: processedCount,
      approved: approvedCount,
      todayCommission: metrics.today.commission,
      todayProduction: metrics.today.production,
      todayDeals: metrics.today.deals,
      ytdCommission: metrics.ytd.commission,
      ytdProduction: metrics.ytd.production,
      ytdDeals: metrics.ytd.deals
    })

    return metrics
  }

  // Helper to categorize agents
  const getAgentCategory = (agentName) => {
    if (!agentName) return 'Other Agents'
    
    const name = agentName.toLowerCase()
    if (name.includes('scott') || name.includes('watkins')) {
      return 'Scott Watkins'
    } else if (name.includes('george') || name.includes('knox')) {
      return 'George Knox'
    } else {
      return 'Other Agents'
    }
  }

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', { method: 'POST' })
      if (response.ok) {
        window.location.href = '/login'
      }
    } catch (error) {
      console.error('Logout error:', error)
      window.location.href = '/login'
    }
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
  
  // Calculate percentages
  const commissionPercent = Math.min(100, (metrics.byAgent['Total (Scott + George)'].ytd.commission / goals.commission) * 100)
  const productionPercent = Math.min(100, (metrics.byAgent['Total (Scott + George)'].ytd.production / goals.production) * 100)
  const dealsPercent = Math.min(100, (metrics.byAgent['Total (Scott + George)'].ytd.deals / goals.deals) * 100)
  
  // Calculate daily target progress
  const dailyTargetProgress = Math.min(100, (metrics.byAgent['Total (Scott + George)'].today.commission / goals.dailyTarget) * 100)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white p-4">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 relative">
          <button
            onClick={handleLogout}
            className="absolute top-4 right-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-sm"
          >
            Logout
          </button>
          <h1 className="text-4xl font-bold mb-2">🎯 Production Scoreboard</h1>
          <p className="text-white/80">Being consistently consistent will make me a millionaire</p>
          
          {/* Daily Target Badge */}
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full font-bold text-sm">
              🎯 Daily Target: {formatCurrency(goals.dailyTarget)}
            </div>
            <div className={`px-4 py-2 rounded-full font-bold text-sm ${
              dailyTargetProgress >= 100 
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                : 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
            }`}>
              {dailyTargetProgress >= 100 ? '🎯 Target Achieved!' : `Progress: ${dailyTargetProgress.toFixed(1)}%`}
            </div>
          </div>
        </div>

        {/* Daily Quote Block */}
          {dailyQuote && (
            <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 shadow-lg">
              <div className="flex flex-col items-center">
                {/* Quote Icon */}
                {/* <div className="mb-4 p-3 bg-white/20 rounded-full">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div> */}
                
                {/* Quote Text */}
                <div className="text-xl italic font-medium mb-3 leading-relaxed">
                  "{dailyQuote}"
                </div>
                
                {/* Author/Footer */}
                <div className="text-sm text-white/70 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 18h-2v-8h2v8zm-1-12.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25z" />
                  </svg>
                  <span>Daily Motivation • {quotes.length} quotes in rotation</span>
                </div>
              </div>
            </div>
          )}

        {/* Today's Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Today's Commission with Daily Target */}
          <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Today's Commission</div>
              <div className="text-2xl">💰</div>
            </div>
            <div className="text-3xl font-black mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {formatCurrency(metrics.byAgent['Total (Scott + George)'].today.commission)}
            </div>
            
            {/* Daily Target Progress */}
            <div className="mb-3">
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span className="font-semibold">Daily Target: {formatCurrency(goals.dailyTarget)}</span>
                <span className="font-bold">{dailyTargetProgress.toFixed(1)}%</span>
              </div>
              <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-500"
                  style={{ width: `${dailyTargetProgress}%` }}
                ></div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
                <span className="block text-xs font-semibold text-gray-600 mb-1">Scott</span>
                <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].today.commission)}</span>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
                <span className="block text-xs font-semibold text-gray-600 mb-1">George</span>
                <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].today.commission)}</span>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-purple-500">
                <span className="block text-xs font-semibold text-gray-600 mb-1">Total</span>
                <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['Total (Scott + George)'].today.commission)}</span>
              </div>
            </div>
          </div>

          {/* Today's Production (Annual Premium) */}
          <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Today's Production</div>
              <div className="text-2xl">📈</div>
            </div>
            <div className="text-3xl font-black mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              {formatCurrency(metrics.byAgent['Total (Scott + George)'].today.production)}
            </div>
            <div className="text-sm text-gray-600 mb-3">
              Annual Premium • {metrics.byAgent['Total (Scott + George)'].today.deals} deals
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-orange-500">
                <span className="block text-xs font-semibold text-gray-600 mb-1">Scott</span>
                <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].today.production)}</span>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-orange-500">
                <span className="block text-xs font-semibold text-gray-600 mb-1">George</span>
                <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].today.production)}</span>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-orange-500">
                <span className="block text-xs font-semibold text-gray-600 mb-1">Total</span>
                <span className="text-lg font-black text-gray-800">{formatCurrency(metrics.byAgent['Total (Scott + George)'].today.production)}</span>
              </div>
            </div>
          </div>

          {/* Today's Deals */}
          <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-4 border-2 border-yellow-300">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Today's Deals</div>
              <div className="text-2xl">📑</div>
            </div>
            <div className="text-3xl font-black mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {metrics.byAgent['Total (Scott + George)'].today.deals}
            </div>
            <div className="text-sm text-gray-600 mb-3">
              Approved deals today
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-blue-500">
                <span className="block text-xs font-semibold text-gray-600 mb-1">Scott</span>
                <span className="text-lg font-black text-gray-800">{metrics.byAgent['Scott Watkins'].today.deals}</span>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-blue-500">
                <span className="block text-xs font-semibold text-gray-600 mb-1">George</span>
                <span className="text-lg font-black text-gray-800">{metrics.byAgent['George Knox'].today.deals}</span>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border-l-4 border-blue-500">
                <span className="block text-xs font-semibold text-gray-600 mb-1">Total</span>
                <span className="text-lg font-black text-gray-800">{metrics.byAgent['Total (Scott + George)'].today.deals}</span>
              </div>
            </div>
          </div>
        </div>

        {/* WTD, MTD, YTD Commission Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* WTD Commission */}
          <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">WTD Commission</div>
              <div className="text-2xl">📅</div>
            </div>
            <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {formatCurrency(metrics.byAgent['Total (Scott + George)'].wtd.commission)}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-sm font-semibold text-gray-600">Scott</span>
                <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].wtd.commission)}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-sm font-semibold text-gray-600">George</span>
                <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].wtd.commission)}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-sm font-semibold text-gray-600">Total</span>
                <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Total (Scott + George)'].wtd.commission)}</span>
              </div>
            </div>
          </div>

          {/* MTD Commission */}
          <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">MTD Commission</div>
              <div className="text-2xl">📊</div>
            </div>
            <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {formatCurrency(metrics.byAgent['Total (Scott + George)'].mtd.commission)}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-sm font-semibold text-gray-600">Scott</span>
                <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].mtd.commission)}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-sm font-semibold text-gray-600">George</span>
                <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].mtd.commission)}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-sm font-semibold text-gray-600">Total</span>
                <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Total (Scott + George)'].mtd.commission)}</span>
              </div>
            </div>
          </div>

          {/* YTD Commission */}
          <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">YTD Commission</div>
              <div className="text-2xl">🎯</div>
            </div>
            
            {/* Main YTD Commission Number */}
            <div className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {formatCurrency(metrics.byAgent['Total (Scott + George)'].ytd.commission)}
            </div>
            
            {/* Agent Breakdown */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-600">Scott Watkins</span>
                <span className="text-sm font-bold text-gray-800">
                  {formatCurrency(metrics.byAgent['Scott Watkins']?.ytd.commission || 0)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-600">George Knox</span>
                <span className="text-sm font-bold text-gray-800">
                  {formatCurrency(metrics.byAgent['George Knox']?.ytd.commission || 0)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-600">Total</span>
                <span className="text-sm font-bold text-gray-800">
                  {formatCurrency(metrics.byAgent['Total (Scott + George)']?.ytd.commission || 0)}
                </span>
              </div>
            </div>
            
            {/* Annual Goal & Progress Bar */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-gray-600">Annual Goal</span>
              <span className="text-sm font-bold text-gray-800">{formatCurrency(goals.commission)}</span>
            </div>
            
            <div className="mb-3">
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
            
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-gray-600">Progress</span>
              <span className="text-sm font-bold text-gray-800">{commissionPercent.toFixed(1)}%</span>
            </div>
          </div>
        </div>

        {/* WTD, MTD, YTD Production Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* WTD Production */}
          <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">WTD Production</div>
              <div className="text-2xl">📅</div>
            </div>
            <div className="text-3xl font-black mb-4 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              {formatCurrency(metrics.byAgent['Total (Scott + George)'].wtd.production)}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-sm font-semibold text-gray-600">Scott</span>
                <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].wtd.production)}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-sm font-semibold text-gray-600">George</span>
                <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].wtd.production)}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-sm font-semibold text-gray-600">Total</span>
                <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Total (Scott + George)'].wtd.production)}</span>
              </div>
            </div>
          </div>

          {/* MTD Production */}
          <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">MTD Production</div>
              <div className="text-2xl">📊</div>
            </div>
            <div className="text-3xl font-black mb-4 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              {formatCurrency(metrics.byAgent['Total (Scott + George)'].mtd.production)}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-sm font-semibold text-gray-600">Scott</span>
                <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Scott Watkins'].mtd.production)}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-sm font-semibold text-gray-600">George</span>
                <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['George Knox'].mtd.production)}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-sm font-semibold text-gray-600">Total</span>
                <span className="text-sm font-bold text-gray-800">{formatCurrency(metrics.byAgent['Total (Scott + George)'].mtd.production)}</span>
              </div>
            </div>
          </div>

          {/* YTD Production */}
          <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">YTD Production</div>
              <div className="text-2xl">🏆</div>
            </div>
            
            {/* Main YTD Production Number */}
            <div className="text-3xl font-black mb-4 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              {formatCurrency(metrics.byAgent['Total (Scott + George)'].ytd.production)}
            </div>
            
            {/* Agent Breakdown */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-600">Scott Watkins</span>
                <span className="text-sm font-bold text-gray-800">
                  {formatCurrency(metrics.byAgent['Scott Watkins']?.ytd.production || 0)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-600">George Knox</span>
                <span className="text-sm font-bold text-gray-800">
                  {formatCurrency(metrics.byAgent['George Knox']?.ytd.production || 0)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-600">Total</span>
                <span className="text-sm font-bold text-gray-800">
                  {formatCurrency(metrics.byAgent['Total (Scott + George)']?.ytd.production || 0)}
                </span>
              </div>
            </div>
            
            {/* Annual Goal & Progress Bar */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-gray-600">Annual Goal</span>
              <span className="text-sm font-bold text-gray-800">{formatCurrency(goals.production)}</span>
            </div>
            
            <div className="mb-3">
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow transition-all duration-500"
                  style={{ width: `${productionPercent}%` }}
                ></div>
              </div>
              <div className="text-xs text-center text-gray-600 font-semibold mt-1">
                {productionPercent.toFixed(1)}%
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-gray-600">Progress</span>
              <span className="text-sm font-bold text-gray-800">{productionPercent.toFixed(1)}%</span>
            </div>
          </div>
        </div>

        {/* Goals and Lead Sources Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* 2026 Annual Goals Progress */}
          <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">2026 Annual Goals</div>
              <div className="text-2xl">🎯</div>
            </div>
            
            <div className="space-y-4">
              {/* Commission Goal */}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-semibold text-gray-600">Commission</span>
                  <span className="text-sm font-bold text-gray-800">
                    {formatCurrency(metrics.byAgent['Total (Scott + George)'].ytd.commission)} / {formatCurrency(goals.commission)}
                  </span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                    style={{ width: `${commissionPercent}%` }}
                  ></div>
                </div>
                <div className="text-xs text-center text-gray-600 font-semibold mt-1">
                  {commissionPercent.toFixed(1)}%
                </div>
              </div>
              
              {/* Production Goal */}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-semibold text-gray-600">Production</span>
                  <span className="text-sm font-bold text-gray-800">
                    {formatCurrency(metrics.byAgent['Total (Scott + George)'].ytd.production)} / {formatCurrency(goals.production)}
                  </span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"
                    style={{ width: `${productionPercent}%` }}
                  ></div>
                </div>
                <div className="text-xs text-center text-gray-600 font-semibold mt-1">
                  {productionPercent.toFixed(1)}%
                </div>
              </div>
              
              {/* Deals Goal */}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-semibold text-gray-600">Deals</span>
                  <span className="text-sm font-bold text-gray-800">
                    {metrics.byAgent['Total (Scott + George)'].ytd.deals} / {goals.deals}
                  </span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                    style={{ width: `${dealsPercent}%` }}
                  ></div>
                </div>
                <div className="text-xs text-center text-gray-600 font-semibold mt-1">
                  {dealsPercent.toFixed(1)}%
                </div>
              </div>
            </div>
          </div>

          {/* Top Lead Sources */}
          <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-white/30">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Top Lead Sources (MTD)</div>
              <div className="text-2xl">🏆</div>
            </div>
            <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
              {Object.entries(metrics.leadSources)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 8)
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
              {Object.keys(metrics.leadSources).length === 0 && (
                <div className="text-center py-4 text-gray-500">
                  No lead source data available
                </div>
              )}
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
        
        {/* Development Debug Info */}
        {process.env.NODE_ENV === 'development' && data.length > 0 && (
          <div className="mt-4 p-4 bg-black/20 rounded-lg">
            <details>
              <summary className="cursor-pointer text-sm font-semibold">Debug Info (Dev Only)</summary>
              <div className="mt-2 text-xs space-y-1">
                <div>Total rows: {data.length}</div>
                <div>Approved deals: {metrics.ytd.deals}</div>
                <div>Today's commission: {formatCurrency(metrics.today.commission)}</div>
                <div>YTD commission: {formatCurrency(metrics.ytd.commission)}</div>
                <div>YTD production: {formatCurrency(metrics.ytd.production)}</div>
                <div>Goals loaded: Commission={formatCurrency(goals.commission)}, Production={formatCurrency(goals.production)}, Deals={goals.deals}</div>
                {data[0] && (
                  <div className="mt-2">
                    <div>First row sample:</div>
                    <div>Agent: {data[0]._agent}</div>
                    <div>Status: {data[0]._status}</div>
                    <div>Monthly Premium: {data[0]._monthlyPremium}</div>
                    <div>Commission: {data[0]._netCommission}</div>
                    <div>Date Sold: {data[0]._dateSold}</div>
                  </div>
                )}
              </div>
            </details>
          </div>
        )}
      </div>
    </div>
  )
}
