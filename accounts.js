import { SharedArray } from "k6/html"

const accounts = new SharedArray("accounts", function () {
  return JSON.parse(open('./accounts.json'))
})

export function getAccount() {
  return accounts[Math.floor(Math.random() * accounts.length)]
}
