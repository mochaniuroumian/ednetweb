import axios from 'axios'

axios = {
  baseURL:'https://cms.ednet.cn',
  proxy: true,
  credentials: true
}
axios.interceptors.request.use(
    config => {
        config.headers.common[store.state.app.headerName] = store.getters['app/getCulture']
        config.headers.common[store.state.app.multiTenancyHeader] = store.getters['app/getTenantId']
        return config
      },
      function(error) {
        return Promise.reject(error)
      }
)
axios.interceptors.response.use(
    response => {
        return response
      },
      error => {
        if (
          !!error.response &&
          !!error.response.data.error &&
          !!error.response.data.error.message &&
          error.response.data.error.details
        ) {
          console.error(error.response.data.error.message)
          console.error(error.response.data.error.details)
        } else if (!!error.response && !!error.response.data.error && !!error.response.data.error.message) {
          console.error(error.response.data.error.message)
          redirect('/error')
        } else if (!error.response) {
          console.error('no response')
        }
        console.error('ajax error')
        return Promise.reject(error)
      }
)