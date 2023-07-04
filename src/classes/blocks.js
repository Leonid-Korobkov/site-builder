import { row, col, css } from '../utils.js'

export class Block {
  constructor(type, value, options) {
    this.type = type
    this.value = value
    this.options = options
  }
  toHTML() {
    throw new Error('Метод toHTML должен быть реализован в каждом классе') 
  }
}
export class TitleBlock extends Block {
  constructor(value, options) {
    super('title', value, options)
  }

  toHTML() {
    const { tag = 'h1', styles } = this.options
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
  }
}
export class ImageBlock extends Block {
  constructor(value, options) {
    super('image', value, options)
  }
  toHTML() {
    const { imageStyles: is, alt = 'Картинка', styles } = this.options
    return row(`<img src="${this.value}" style="${css(is)}" alt="${alt}">`, css(styles))
  }
}
export class ColumnsBlock extends Block {
  constructor(value, options) {
    super('columns', value, options)
  }
  toHTML() {
    const html = this.value.map(col).join('')
    return row(html, css(this.options.styles))
  }
}
export class TextBlock extends Block {
  constructor(value, options) {
    super('text', value, options)
  }
  toHTML() {
    return row(col(`<p>${this.value}</p>`), css(this.options.styles))
  }
}
