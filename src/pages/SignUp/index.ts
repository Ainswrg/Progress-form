import Page from "features/Page"

class SignUp extends Page {
  async generateProgressBar(): Promise<HTMLElement> {
    const title = document.createElement("h2")
    title.textContent = "Here we go"
    return title
  }

  generateForm(): void {}

  async render(): Promise<HTMLElement> {
    this.container.append(this.createHeaderTitle("Hello"))
    return this.container
  }
}

export default SignUp
