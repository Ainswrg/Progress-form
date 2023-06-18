import { Main } from "features/MainPage"
import SignUp from "pages/SignUp"

class App {
  private static readonly body: HTMLElement = document.body
  private static readonly main: Main = new Main("main", "main")

  async generatePage(): Promise<void> {
    const wrapper = document.createElement("div")
    wrapper.setAttribute("class", "page-wrapper")

    const mainPage = new SignUp("signUp")
    const page = async (): Promise<void> => {
      const pageHTML = await mainPage.render()
      App.main.render().append(pageHTML)
    }
    await page()
    wrapper.append(App.main.render())
    App.body.append(wrapper)
  }

  run(): void {
    void this.generatePage()
  }
}

export default App
