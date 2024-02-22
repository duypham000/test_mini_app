import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'

class BlogAxios {
  private static instance: AxiosInstance

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */

  // eslint-disable-next-line
  private constructor() {}

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */

  public static getInstance(
    config: AxiosRequestConfig<any> | undefined
  ): AxiosInstance {
    if (!BlogAxios.instance) {
      BlogAxios.instance = axios.create(config)
    }

    return BlogAxios.instance
  }

  /**
   * Finally, any singleton should define some business logic, which can be
   * executed on its instance.
   */
  public someBusinessLogic() {
    // ...
  }
}

const blogAxios = BlogAxios.getInstance({
  baseURL: process.env.VITE_BLOG_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})
const cfg: any = (config: AxiosRequestConfig<any>) => {
  // Do something before request is sent
  return config
}

blogAxios.interceptors.request.use(cfg, (error: AxiosError) => {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
blogAxios.interceptors.response.use(
  (response: AxiosResponse<any, any>) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response && response.data) {
      return response.data
    }
    return response
  },
  (error: AxiosError) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    return Promise.reject(error)
  }
)

export default blogAxios
