class App {
  private static readonly body: HTMLElement = document.body

  generatePage(): void {
    const wrapper = document.createElement("div")
    wrapper.classList.add("page-wrapper")
    const title = document.createElement("h1")
    title.textContent = "Hello world"

    wrapper.append(title)
    App.body.append(wrapper)
  }

  run(): void {
    this.generatePage()
  }
}

export default App
