export const scoreCalculator = (playersScores) => {
  return playersScores.map( playerScore => {
    const { length, uniqueCharacters, errors, duration } = playerScore

    const score = Math.round((10000*((length*uniqueCharacters))/(1+(errors*duration))))
    return { ...playerScore, score }
  })
}

export const sortByScore = (playersList) => {
  return playersList.sort((a, b) => {
    if(a.score > b.score) {
      return -1
    }
    if(a.score < b.score) {
      return 1
    }
    return 0
  })
}