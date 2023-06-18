class Component {
  protected container: HTMLElement
  constructor(tagName: string, className: string) {
    this.container = document.createElement(tagName)
    this.container.className = className
  }

  appendContent(content: HTMLElement): void {
    this.container.append(content)
  }

  appendText(text: string): void {
    this.container.innerText = text
  }

  render(): HTMLElement {
    return this.container
  }
}

export default Component
