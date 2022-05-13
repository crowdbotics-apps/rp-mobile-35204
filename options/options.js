import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
  hr: {
    marginTop: 20,
    marginBottom: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  container: { flex: 1, height: 100, padding: 13 },
  text: { color: "black", fontSize: 20 },
  buttonPressed: { backgroundColor: "aquamarine" },
  buttonNotPressed: { backgroundColor: "blue" },
  button: { borderRadius: 4, padding: 15, marginTop: 10 },
  buttonText: { color: "white", textAlign: "center", fontSize: 16 }
})

export const globalOptions = {
  name: "rp_mobile_35204",
  url: "https://rp_mobile_35204.botics.co",
  api: "https://rp_mobile_35204.botics.co/api/v1"
}

export const modulesOptions = {
  "@modules/app-menu": {
    title: "Menu",
    copy: "Routes available!",
    styles: styles
  }
}
