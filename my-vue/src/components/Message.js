import { ref, watch } from 'vue'
import { bus } from './MessageBus'
import Message from './Message.vue'
export default {
  name: 'MessageMixin',
  components: {
    Message,
  },
  setup() {
    const messageExpiration = 7
    let message = ref({})
    function sendMessage(content, type, duration) {
      const key = `message_${Date.now()}`
      const message = { content, type, key, duration }
      localStorage.setItem(key, JSON.stringify(message))
      bus.emit('message', message)
    }
    async function cleanExpiredMessages() {
      const now = Date.now()
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        const messageStr = localStorage.getItem(key) || ''
        const message = JSON.parse(messageStr)
        if (
          message &&
          message.key === key &&
          now - message.duration * 1000 > message.key
        ) {
          await localStorage.removeItem(key)
        }
      }
    }
    function initCleaner() {
      setInterval(() => {
        cleanExpiredMessages()
      }, 60 * 60 * 1000)
    }
    watch(bus, () => {
      message = bus.message
    })
    initCleaner()
    return { sendMessage, message }
  },
}
