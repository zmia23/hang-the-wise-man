import { scoreCalculator } from '../utils/score-utils'
import { scoreData } from './___mocks___/score-data-mock'

describe('score calculation', () => {
  const scores = scoreCalculator(scoreData)

  test('different number of errors', () => {
    const player1 = scores.find(player => player.userName === 'Charles')
    const player2 = scores.find(player => player.userName=== 'Max')

    expect(player1.errors).toBeGreaterThan(player2.errors)
    expect(player1.score).toBeLessThan(player2.score)
  }) 

  test('same number of erroros and different number of unique chars', () => {
    const player1 = scores.find(player => player.userName=== 'Max')
    const player2 = scores.find(player => player.userName==='Lando')

    expect(player1.errors).toEqual(player2.errors)

    expect(player1.uniqueCharacters).toBeLessThan(player2.uniqueCharacters)
    expect(player1.score).toBeLessThan(player2.score)
  })

  test('same number of errors and unique chars, but different quote length', () => {
    const player1 = scores.find(player => player.userName=== 'Lando')
    const player2 = scores.find(player => player.userName==='Fernando')

    expect(player1.errors).toEqual(player2.errors)
    expect(player1.uniqueCharacters).toEqual(player2.uniqueCharacters)

    expect(player1.length).toBeLessThan(player2.length)
    expect(player1.score).toBeLessThan(player2.score)
  })

  test('same number of erros, unique chars and quote length, but different duration', () => {
    const player1 = scores.find(player => player.userName=== 'Fernando')
    const player2 = scores.find(player => player.userName==='Oscar')

    expect(player1.errors).toEqual(player2.errors)
    expect(player1.uniqueCharacters).toEqual(player2.uniqueCharacters)
    expect(player1.length).toEqual(player2.length)

    expect(player1.duration).toBeGreaterThan(player2.duration)
    expect(player1.score).toBeLessThan(player2.score)
  })
})