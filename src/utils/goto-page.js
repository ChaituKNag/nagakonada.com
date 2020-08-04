import { navigate } from "gatsby"

export default url => e => {
  if (e.type === "keypress" && e.code === "Enter") {
    navigate(url)
  } else {
    navigate(url)
  }
}
