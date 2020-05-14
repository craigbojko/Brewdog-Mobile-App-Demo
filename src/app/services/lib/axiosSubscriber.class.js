import { Subscriber } from 'rxjs'
import axios from 'axios'

export default class AxiosSubscriber extends Subscriber {
  constructor (observer, options) {
    super(observer)
    this.requestId = `${Math.random()}-xhr-id`
    this.completed = false

    axios(options)
      .then((response) => {
        observer.next(response.data)
        this.completed = true
        observer.complete()
      })
      .catch((error) => {
        this.completed = true
        observer.error(error)
      })
  }

  unsubscribe () {
    super.unsubscribe()
    if (this.completed === false) {
      axios.cancel(this.requestId)
      this.completed = true
    }
  }
}
