import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const LeaderboardsTable = ({ playersScores }) => {
  const columns = [
    {
      id: 'userName',
      label: 'Player Name',
      format: value => value.toLocaleString('en-US')
    },
    {
      id: 'score',
      label: 'Score',
      format: value => value.toInt()
    }
  ]

  const rows = playersScores.map(playerScore => ({ userName: playerScore.userName, score: playerScore.score, id: playerScore.id }))
  
  return (
    <TableContainer sx={{ maxHeight: 250, maxWidth: 650 }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            { columns.map(col => (
              <TableCell style={{ background: '#c4dbf5', fontWeight: 700 }} key={ col.id }>
                { col.label }
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow hover key={ row.id }>
              { columns.map(col => {
                const value = row[col.id]
                return <TableCell key={ `${row.id}-${col.id}` }>{ value }</TableCell>
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default LeaderboardsTable
