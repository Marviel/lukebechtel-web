import React from 'react'

interface FileChangeMessageProps {
  fileName: string
  added?: number
  removed?: number
  // Icons can be added as props later if a library is available or SVGs are preferred
  // fileTypeIcon?: React.ReactNode;
  // statusIcon?: React.ReactNode;
  // expandIcon?: React.ReactNode;
}

export default function FileChangeMessage({ fileName, added, removed }: FileChangeMessageProps) {
  const containerStyle: React.CSSProperties = {
    backgroundColor: '#333333', // Dark grey background
    borderRadius: '6px',
    padding: '8px 12px',
    margin: '8px 0',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    color: '#E0E0E0', // Light text for filename
    fontSize: '13px',
    border: '1px solid #444444',
  }

  const fileIconStyle: React.CSSProperties = {
    color: '#E6B42F', // Yellowish-gold for 'MDX' icon
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginRight: '10px',
    fontSize: '12px', // Slightly smaller for the icon text
  }

  const fileNameStyle: React.CSSProperties = {
    flexGrow: 1,
  }

  const changesStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '10px',
  }

  const addedStyle: React.CSSProperties = {
    color: '#6CC644', // Green for added lines
    fontWeight: 'bold',
    fontSize: '13px',
  }

  const removedStyle: React.CSSProperties = {
    color: '#BD2C00', // Red for removed lines
    marginLeft: '8px',
    fontWeight: 'bold',
    fontSize: '13px',
  }

  const statusIconStyle: React.CSSProperties = {
    color: '#6CC644', // Green checkmark
    marginLeft: '10px',
    fontSize: '14px',
  }

  const expandIconStyle: React.CSSProperties = {
    color: '#888888', // Grey for expand/collapse arrows
    marginLeft: '10px',
    fontSize: '14px',
  }

  return (
    <div style={containerStyle}>
      <span style={fileIconStyle}>MDX</span> {/* Mimicking the 'MDX' icon from screenshot */}
      <span style={fileNameStyle}>{fileName}</span>
      <div style={changesStyle}>
        {typeof added === 'number' && <span style={addedStyle}>+{added}</span>}
        {typeof removed === 'number' && <span style={removedStyle}>-{removed}</span>}
        <span style={statusIconStyle}>✓</span> {/* Checkmark icon */}
      </div>
      <span style={expandIconStyle}>↕</span> {/* Placeholder for expand/collapse arrows */}
    </div>
  )
}
