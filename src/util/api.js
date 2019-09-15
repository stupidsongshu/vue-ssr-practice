import axios from 'axios'

export function fetchItem(id) {
  return new Promise((resolve, reject) => {
    axios({
      baseURL: 'http://127.0.0.1:8888',
      url: '/api/fetchItem',
      method: 'POST',
      data: { id }
    }).then(res => {
      // console.log(res)
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
