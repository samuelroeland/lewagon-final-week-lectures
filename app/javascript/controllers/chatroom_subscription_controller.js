import { Controller } from "@hotwired/stimulus"
import { createConsumer } from "@rails/actioncable"

// Connects to data-controller="chatroom-subscription"
export default class extends Controller {
  static targets = ['messages']
  static values = { chatroomId: Number }
  connect() {
    console.log("Controller is connected")
    console.log(this.messagesTarget)
    console.log(this.chatroomIdValue)
    createConsumer().subscriptions.create(
      { channel: "ChatroomChannel", id: this.chatroomIdValue },
      { received: data => console.log(data) }

      )
  }
}
