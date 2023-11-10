import axios from "axios"

const getQuote = async () => {
  const response = await axios.get('http://api.quotable.io/random')
  return response.data
}

const postScore = async (data) => {
  const response = await axios.post('https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores', data)
  console.log('Uplaod response ::: ', response.data)
  return response.data
}

const getScore = async () => {
  const response = await axios.get('https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores')
  console.log('GET SCORE :::: ', response.data)
  return response.data
}

export const apiClient = {
  getQuote: getQuote,
  postScore: postScore,
  getScore: getScore
}