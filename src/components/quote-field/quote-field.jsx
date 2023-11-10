const QuoteField = ({ quoteText, author }) => {
  return (
    <div style={{ marginBottom: '20px', padding: '10px', fontSize: '20px', textAlign: 'center' }}>
      <div style={{ letterSpacing: '0.2rem' }}>"{ quoteText }"</div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '15px' }}>- { author }</div>
    </div>
  )
}

export default QuoteField
