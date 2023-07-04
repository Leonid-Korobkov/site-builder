import { Site } from '../classes/site.js'
import { Sidebar } from '../classes/sidebar.js'

export class App {
  constructor(model) {
    this.model = model
  }

  init() {

    const site = new Site('#site')

    site.render(this.model)

    const updateCallback = newBlock => {
      this.model.push(newBlock)
      site.render(this.model)
    }
    new Sidebar('#panel', updateCallback)
  }
}
