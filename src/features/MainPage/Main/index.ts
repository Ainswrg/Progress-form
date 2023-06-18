import Component from "features/Component"

class Main extends Component {
  rerender(): HTMLElement {
    this.container.innerHTML = ""
    return this.container
  }

  render(): HTMLElement {
    return this.container
  }
}

export default Main
