// // import { google } from 'googleapis'
// // import { NextResponse } from 'next/server'

// // // Helper function to parse private key
// // function parsePrivateKey(privateKey) {
// //   if (!privateKey) return ''
  
// //   let key = privateKey
  
// //   // Remove surrounding quotes if present
// //   if (key.startsWith('"') && key.endsWith('"')) {
// //     key = key.slice(1, -1)
// //   }
  
// //   // Replace escaped newlines with actual newlines
// //   return key.replace(/\\n/g, '\n')
// // }

// // // Google Sheets service function
// // async function getGoogleSheetData() {
// //   try {
// //     // Check if required environment variables are set
// //     if (!process.env.GOOGLE_SHEET_ID) {
// //       throw new Error('GOOGLE_SHEET_ID environment variable is not set')
// //     }
    
// //     if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) {
// //       throw new Error('GOOGLE_SERVICE_ACCOUNT_EMAIL environment variable is not set')
// //     }
    
// //     if (!process.env.GOOGLE_PRIVATE_KEY) {
// //       throw new Error('GOOGLE_PRIVATE_KEY environment variable is not set')
// //     }

// //     console.log('Initializing Google Sheets API...')
    
// //     const auth = new google.auth.GoogleAuth({
// //       credentials: {
// //         type: 'service_account',
// //         project_id: process.env.NEXT_PUBLIC_SUPBASE_PROJECT_ID,
// //         private_key_id: '', // Not required for basic auth
// //         private_key: parsePrivateKey(process.env.GOOGLE_PRIVATE_KEY),
// //         client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
// //         client_id: '', // Not required for basic auth
// //         auth_uri: 'https://accounts.google.com/o/oauth2/auth',
// //         token_uri: 'https://oauth2.googleapis.com/token',
// //         auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
// //         client_x509_cert_url: '', // Not required for basic auth
// //       },
// //       scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
// //     })

// //     const authClient = await auth.getClient()
// //     const sheets = google.sheets({ version: 'v4', auth: authClient })
    
// //     const spreadsheetId = process.env.GOOGLE_SHEET_ID
// //     const range = process.env.GOOGLE_SHEET_RANGE || 'Calculations!A1:Z1000'
    
// //     console.log(`Fetching sheet ${spreadsheetId}, range: ${range}`)
    
// //     const response = await sheets.spreadsheets.values.get({
// //       spreadsheetId,
// //       range,
// //       valueRenderOption: 'FORMATTED_VALUE',
// //       dateTimeRenderOption: 'FORMATTED_STRING',
// //     })
    
// //     const rows = response.data.values
    
// //     if (!rows || rows.length === 0) {
// //       return { success: false, error: 'No data found in the sheet' }
// //     }
    
// //     console.log(`Retrieved ${rows.length} rows from Google Sheets`)
    
// //     // Convert rows to objects
// //     const headers = rows[0]
// //     const data = rows.slice(1).map((row, rowIndex) => {
// //       const obj = {}
// //       headers.forEach((header, colIndex) => {
// //         // Use empty string for undefined cells
// //         obj[header] = row[colIndex] || ''
// //       })
// //       return obj
// //     })
    
// //     return { 
// //       success: true, 
// //       data,
// //       totalRows: data.length,
// //       headers: headers
// //     }
    
// //   } catch (error) {
// //     console.error('Google Sheets API error:', error.message)
    
// //     // Provide more helpful error messages
// //     let errorMessage = error.message
    
// //     if (error.message.includes('invalid_grant')) {
// //       errorMessage = 'Invalid Google service account credentials. Please check your private key and service account email.'
// //     } else if (error.message.includes('PERMISSION_DENIED')) {
// //       errorMessage = 'Permission denied. Please ensure the service account has access to the Google Sheet.'
// //     } else if (error.message.includes('not found')) {
// //       errorMessage = 'Google Sheet not found. Please check the Sheet ID.'
// //     }
    
// //     return { 
// //       success: false, 
// //       error: errorMessage,
// //       details: error.toString()
// //     }
// //   }
// // }

// // // Main API route handler
// // export async function GET(request) {
// //   try {

// //     // Fetch data from Google Sheets
// //     const result = await getGoogleSheetData()
    
// //     if (!result.success) {
// //       return NextResponse.json(
// //         { 
// //           error: 'Failed to fetch Google Sheet data',
// //           details: result.error,
// //           timestamp: new Date().toISOString()
// //         },
// //         { status: 500 }
// //       )
// //     }

// //     // Success response
// //     return NextResponse.json({ 
// //       success: true, 
// //       data: result.data,
// //       metadata: {
// //         totalRows: result.totalRows,
// //         headers: result.headers,
// //         timestamp: new Date().toISOString(),
// //         fetchedBy: 'Scott Production'
// //       }
// //     })
    
// //   } catch (error) {
// //     console.error('API route error:', error)
    
// //     return NextResponse.json(
// //       { 
// //         error: 'Internal server error',
// //         message: error.message || 'An unexpected error occurred',
// //         timestamp: new Date().toISOString()
// //       },
// //       { status: 500 }
// //     )
// //   }
// // }

// // // Optional: Add support for other HTTP methods
// // export async function POST() {
// //   return NextResponse.json(
// //     { error: 'Method not allowed. Use GET to retrieve data.' },
// //     { status: 405 }
// //   )
// // }

// // export async function PUT() {
// //   return NextResponse.json(
// //     { error: 'Method not allowed. Use GET to retrieve data.' },
// //     { status: 405 }
// //   )
// // }

// // export async function DELETE() {
// //   return NextResponse.json(
// //     { error: 'Method not allowed. Use GET to retrieve data.' },
// //     { status: 405 }
// //   )
// // }























// import { google } from 'googleapis'
// import { NextResponse } from 'next/server'

// function parsePrivateKey(privateKey) {
//   if (!privateKey) return ''
//   let key = privateKey
//   if (key.startsWith('"') && key.endsWith('"')) {
//     key = key.slice(1, -1)
//   }
//   return key.replace(/\\n/g, '\n')
// }

// async function getGoogleSheetData() {
//   try {
//     if (!process.env.GOOGLE_SHEET_ID) {
//       throw new Error('GOOGLE_SHEET_ID environment variable is not set')
//     }
    
//     if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) {
//       throw new Error('GOOGLE_SERVICE_ACCOUNT_EMAIL environment variable is not set')
//     }
    
//     if (!process.env.GOOGLE_PRIVATE_KEY) {
//       throw new Error('GOOGLE_PRIVATE_KEY environment variable is not set')
//     }

//     const auth = new google.auth.GoogleAuth({
//       credentials: {
//         type: 'service_account',
//         project_id: process.env.NEXT_PUBLIC_SUPBASE_PROJECT_ID,
//         private_key_id: '',
//         private_key: parsePrivateKey(process.env.GOOGLE_PRIVATE_KEY),
//         client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
//         client_id: '',
//         auth_uri: 'https://accounts.google.com/o/oauth2/auth',
//         token_uri: 'https://oauth2.googleapis.com/token',
//         auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
//         client_x509_cert_url: '',
//       },
//       scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
//     })

//     const authClient = await auth.getClient()
//     const sheets = google.sheets({ version: 'v4', auth: authClient })
    
//     const spreadsheetId = process.env.GOOGLE_SHEET_ID
    
//     // Fetch from multiple tabs
//     const [calculationsResponse, quoteBankResponse, goalsResponse] = await Promise.all([
//       sheets.spreadsheets.values.get({
//         spreadsheetId,
//         range: 'Calculations!A1:AJ1000', // Columns A through AJ
//       }),
//       sheets.spreadsheets.values.get({
//         spreadsheetId,
//         range: 'QuoteBank!A1:B100', // Quotes with optional author
//       }),
//       sheets.spreadsheets.values.get({
//         spreadsheetId,
//         range: 'Goals!A1:C10', // Annual goals
//       })
//     ])
    
//     const calculationsRows = calculationsResponse.data.values
//     const quoteRows = quoteBankResponse.data.values || []
//     const goalRows = goalsResponse.data.values || []
    
//     if (!calculationsRows || calculationsRows.length === 0) {
//       return { success: false, error: 'No data found in Calculations tab' }
//     }
    
//     // Find column indexes
//     const headers = calculationsRows[0]
//     const columnIndexes = {
//       dateSold: headers.indexOf('Date Sold'),
//       agent: headers.indexOf('Agent'),
//       leadVendor: headers.indexOf('Lead Vendor'),
//       status: headers.indexOf('Status'),
//       monthlyPremium: headers.indexOf('Monthly Premium'),
//       netCommission: headers.indexOf('Net Commission Advance (60%)'), // Column AA
//       coverageAmount: headers.indexOf('Coverage Amount'),
//       product: headers.indexOf('Product')
//     }
    
//     console.log('Column indexes found:', columnIndexes)
    
//     // Process calculations data
//     const data = calculationsRows.slice(1).map((row, rowIndex) => {
//       const obj = {}
//       headers.forEach((header, colIndex) => {
//         obj[header] = row[colIndex] || ''
//       })
      
//       // Add derived fields for easy access
//       obj._rowIndex = rowIndex + 2 // Actual row in sheet
//       obj._dateSold = row[columnIndexes.dateSold] || ''
//       obj._agent = row[columnIndexes.agent] || ''
//       obj._leadVendor = row[columnIndexes.leadVendor] || ''
//       obj._status = row[columnIndexes.status] || ''
//       obj._monthlyPremium = row[columnIndexes.monthlyPremium] || '0'
//       obj._netCommission = row[columnIndexes.netCommission] || '0'
//       obj._coverageAmount = row[columnIndexes.coverageAmount] || '0'
//       obj._product = row[columnIndexes.product] || ''
      
//       return obj
//     })
    
//     // Process quotes
//     const quotes = quoteRows.slice(1).map(row => ({
//       text: row[0] || '',
//       author: row[1] || ''
//     })).filter(quote => quote.text.trim() !== '')
    
//     // Process goals (assuming Goals tab has: Goal Type, Target, Current)
//     const goals = {}
//     goalRows.slice(1).forEach(row => {
//       if (row[0] && row[1]) {
//         const goalType = row[0].toLowerCase().replace(/[^a-z]/g, '')
//         const target = Number(row[1].replace(/[^\d.-]/g, '')) || 0
//         goals[goalType] = target
//       }
//     })
    
//     // Default goals if not found
//     const defaultGoals = {
//       commission: 450000,
//       production: 1500000,
//       deals: 600
//     }
    
//     return { 
//       success: true, 
//       data,
//       quotes,
//       goals: { ...defaultGoals, ...goals },
//       metadata: {
//         totalRows: data.length,
//         totalQuotes: quotes.length,
//         columnIndexes: columnIndexes
//       }
//     }
    
//   } catch (error) {
//     console.error('Google Sheets API error:', error.message)
//     return { 
//       success: false, 
//       error: error.message
//     }
//   }
// }

// export async function GET(request) {
//   try {
    

//     const result = await getGoogleSheetData()
    
//     if (!result.success) {
//       return NextResponse.json(
//         { 
//           error: 'Failed to fetch Google Sheet data',
//           details: result.error,
//           timestamp: new Date().toISOString()
//         },
//         { status: 500 }
//       )
//     }

//     return NextResponse.json({ 
//       success: true, 
//       data: result.data,
//       quotes: result.quotes,
//       goals: result.goals,
//       metadata: {
//         ...result.metadata,
//         timestamp: new Date().toISOString(),
//         fetchedBy: 'Scott Wattson'
//       }
//     })
    
//   } catch (error) {
//     console.error('API route error:', error)
//     return NextResponse.json(
//       { 
//         error: 'Internal server error',
//         message: error.message || 'An unexpected error occurred',
//         timestamp: new Date().toISOString()
//       },
//       { status: 500 }
//     )
//   }
// }

// export async function POST() {
//   return NextResponse.json(
//     { error: 'Method not allowed. Use GET to retrieve data.' },
//     { status: 405 }
//   )
// }





















// import { google } from 'googleapis'
// import { NextResponse } from 'next/server'

// // Helper function to parse private key
// function parsePrivateKey(privateKey) {
//   if (!privateKey) return ''
  
//   let key = privateKey
  
//   // Remove surrounding quotes if present
//   if (key.startsWith('"') && key.endsWith('"')) {
//     key = key.slice(1, -1)
//   }
  
//   // Replace escaped newlines with actual newlines
//   return key.replace(/\\n/g, '\n')
// }

// // Google Sheets service function
// async function getGoogleSheetData() {
//   try {
//     // Check if required environment variables are set
//     if (!process.env.GOOGLE_SHEET_ID) {
//       throw new Error('GOOGLE_SHEET_ID environment variable is not set')
//     }
    
//     if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) {
//       throw new Error('GOOGLE_SERVICE_ACCOUNT_EMAIL environment variable is not set')
//     }
    
//     if (!process.env.GOOGLE_PRIVATE_KEY) {
//       throw new Error('GOOGLE_PRIVATE_KEY environment variable is not set')
//     }

//     console.log('Initializing Google Sheets API...')
    
//     const auth = new google.auth.GoogleAuth({
//       credentials: {
//         type: 'service_account',
//         project_id: process.env.NEXT_PUBLIC_SUPBASE_PROJECT_ID,
//         private_key_id: '', // Not required for basic auth
//         private_key: parsePrivateKey(process.env.GOOGLE_PRIVATE_KEY),
//         client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
//         client_id: '', // Not required for basic auth
//         auth_uri: 'https://accounts.google.com/o/oauth2/auth',
//         token_uri: 'https://oauth2.googleapis.com/token',
//         auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
//         client_x509_cert_url: '', // Not required for basic auth
//       },
//       scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
//     })

//     const authClient = await auth.getClient()
//     const sheets = google.sheets({ version: 'v4', auth: authClient })
    
//     const spreadsheetId = process.env.GOOGLE_SHEET_ID
//     const range = process.env.GOOGLE_SHEET_RANGE || 'Calculations!A1:Z1000'
    
//     console.log(`Fetching sheet ${spreadsheetId}, range: ${range}`)
    
//     const response = await sheets.spreadsheets.values.get({
//       spreadsheetId,
//       range,
//       valueRenderOption: 'FORMATTED_VALUE',
//       dateTimeRenderOption: 'FORMATTED_STRING',
//     })
    
//     const rows = response.data.values
    
//     if (!rows || rows.length === 0) {
//       return { success: false, error: 'No data found in the sheet' }
//     }
    
//     console.log(`Retrieved ${rows.length} rows from Google Sheets`)
    
//     // Convert rows to objects
//     const headers = rows[0]
//     const data = rows.slice(1).map((row, rowIndex) => {
//       const obj = {}
//       headers.forEach((header, colIndex) => {
//         // Use empty string for undefined cells
//         obj[header] = row[colIndex] || ''
//       })
//       return obj
//     })
    
//     return { 
//       success: true, 
//       data,
//       totalRows: data.length,
//       headers: headers
//     }
    
//   } catch (error) {
//     console.error('Google Sheets API error:', error.message)
    
//     // Provide more helpful error messages
//     let errorMessage = error.message
    
//     if (error.message.includes('invalid_grant')) {
//       errorMessage = 'Invalid Google service account credentials. Please check your private key and service account email.'
//     } else if (error.message.includes('PERMISSION_DENIED')) {
//       errorMessage = 'Permission denied. Please ensure the service account has access to the Google Sheet.'
//     } else if (error.message.includes('not found')) {
//       errorMessage = 'Google Sheet not found. Please check the Sheet ID.'
//     }
    
//     return { 
//       success: false, 
//       error: errorMessage,
//       details: error.toString()
//     }
//   }
// }

// // Main API route handler
// export async function GET(request) {
//   try {

//     // Fetch data from Google Sheets
//     const result = await getGoogleSheetData()
    
//     if (!result.success) {
//       return NextResponse.json(
//         { 
//           error: 'Failed to fetch Google Sheet data',
//           details: result.error,
//           timestamp: new Date().toISOString()
//         },
//         { status: 500 }
//       )
//     }

//     // Success response
//     return NextResponse.json({ 
//       success: true, 
//       data: result.data,
//       metadata: {
//         totalRows: result.totalRows,
//         headers: result.headers,
//         timestamp: new Date().toISOString(),
//         fetchedBy: 'Scott Production'
//       }
//     })
    
//   } catch (error) {
//     console.error('API route error:', error)
    
//     return NextResponse.json(
//       { 
//         error: 'Internal server error',
//         message: error.message || 'An unexpected error occurred',
//         timestamp: new Date().toISOString()
//       },
//       { status: 500 }
//     )
//   }
// }

// // Optional: Add support for other HTTP methods
// export async function POST() {
//   return NextResponse.json(
//     { error: 'Method not allowed. Use GET to retrieve data.' },
//     { status: 405 }
//   )
// }

// export async function PUT() {
//   return NextResponse.json(
//     { error: 'Method not allowed. Use GET to retrieve data.' },
//     { status: 405 }
//   )
// }

// export async function DELETE() {
//   return NextResponse.json(
//     { error: 'Method not allowed. Use GET to retrieve data.' },
//     { status: 405 }
//   )
// }























import { google } from 'googleapis'
import { NextResponse } from 'next/server'

function parsePrivateKey(privateKey) {
  if (!privateKey) return ''
  let key = privateKey
  if (key.startsWith('"') && key.endsWith('"')) {
    key = key.slice(1, -1)
  }
  return key.replace(/\\n/g, '\n')
}

async function getGoogleSheetData() {
  try {
    if (!process.env.GOOGLE_SHEET_ID) {
      throw new Error('GOOGLE_SHEET_ID environment variable is not set')
    }
    
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) {
      throw new Error('GOOGLE_SERVICE_ACCOUNT_EMAIL environment variable is not set')
    }
    
    if (!process.env.GOOGLE_PRIVATE_KEY) {
      throw new Error('GOOGLE_PRIVATE_KEY environment variable is not set')
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: 'service_account',
        project_id: process.env.NEXT_PUBLIC_SUPBASE_PROJECT_ID,
        private_key_id: '',
        private_key: parsePrivateKey(process.env.GOOGLE_PRIVATE_KEY),
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        client_id: '',
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://oauth2.googleapis.com/token',
        auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
        client_x509_cert_url: '',
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    })

    const authClient = await auth.getClient()
    const sheets = google.sheets({ version: 'v4', auth: authClient })
    
    const spreadsheetId = process.env.GOOGLE_SHEET_ID
    
    // Fetch from multiple tabs
    const [calculationsResponse, quoteBankResponse, goalsResponse] = await Promise.all([
      sheets.spreadsheets.values.get({
        spreadsheetId,
        range: 'Calculations!A1:AJ1000', // Columns A through AJ
      }),
      sheets.spreadsheets.values.get({
        spreadsheetId,
        range: 'QuoteBank!A1:B100', // Quotes with optional author
      }),
      sheets.spreadsheets.values.get({
        spreadsheetId,
        range: 'Goals!A1:C10', // Annual goals
      })
    ])
    
    const calculationsRows = calculationsResponse.data.values
    const quoteRows = quoteBankResponse.data.values || []
    const goalRows = goalsResponse.data.values || []
    
    if (!calculationsRows || calculationsRows.length === 0) {
      return { success: false, error: 'No data found in Calculations tab' }
    }
    
    // Find column indexes
    const headers = calculationsRows[0]
    const columnIndexes = {
      dateSold: headers.indexOf('Date Sold'),
      agent: headers.indexOf('Agent'),
      leadVendor: headers.indexOf('Lead Vendor'),
      status: headers.indexOf('Status'),
      monthlyPremium: headers.indexOf('Monthly Premium'),
      netCommission: headers.indexOf('Net Commission Advance (60%)'), // Column AA
      coverageAmount: headers.indexOf('Coverage Amount'),
      product: headers.indexOf('Product')
    }
    
    console.log('Column indexes found:', columnIndexes)
    
    // Process calculations data
    const data = calculationsRows.slice(1).map((row, rowIndex) => {
      const obj = {}
      headers.forEach((header, colIndex) => {
        obj[header] = row[colIndex] || ''
      })
      
      // Add derived fields for easy access
      obj._rowIndex = rowIndex + 2 // Actual row in sheet
      obj._dateSold = row[columnIndexes.dateSold] || ''
      obj._agent = row[columnIndexes.agent] || ''
      obj._leadVendor = row[columnIndexes.leadVendor] || ''
      obj._status = row[columnIndexes.status] || ''
      obj._monthlyPremium = row[columnIndexes.monthlyPremium] || '0'
      obj._netCommission = row[columnIndexes.netCommission] || '0'
      obj._coverageAmount = row[columnIndexes.coverageAmount] || '0'
      obj._product = row[columnIndexes.product] || ''
      
      return obj
    })
    
    // Process quotes
    const quotes = quoteRows.slice(1).map(row => ({
      text: row[0] || '',
      author: row[1] || ''
    })).filter(quote => quote.text.trim() !== '')
    
    // Process goals (assuming Goals tab has: Goal Type, Target, Current)
    const goals = {}
    goalRows.slice(1).forEach(row => {
      if (row[0] && row[1]) {
        const goalType = row[0].toLowerCase().replace(/[^a-z]/g, '')
        const target = Number(row[1].replace(/[^\d.-]/g, '')) || 0
        goals[goalType] = target
      }
    })
    
    // Default goals if not found
    const defaultGoals = {
      commission: 450000,
      production: 1500000,
      deals: 600
    }
    
    return { 
      success: true, 
      data,
      quotes,
      goals: { ...defaultGoals, ...goals },
      metadata: {
        totalRows: data.length,
        totalQuotes: quotes.length,
        columnIndexes: columnIndexes
      }
    }
    
  } catch (error) {
    console.error('Google Sheets API error:', error.message)
    return { 
      success: false, 
      error: error.message
    }
  }
}

export async function GET(request) {
  try {
    

    const result = await getGoogleSheetData()
    
    if (!result.success) {
      return NextResponse.json(
        { 
          error: 'Failed to fetch Google Sheet data',
          details: result.error,
          timestamp: new Date().toISOString()
        },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      data: result.data,
      quotes: result.quotes,
      goals: result.goals,
      metadata: {
        ...result.metadata,
        timestamp: new Date().toISOString(),
        fetchedBy: 'Scott Wattson'
      }
    })
    
  } catch (error) {
    console.error('API route error:', error)
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: error.message || 'An unexpected error occurred',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}

export async function POST() {
  return NextResponse.json(
    { error: 'Method not allowed. Use GET to retrieve data.' },
    { status: 405 }
  )
}
