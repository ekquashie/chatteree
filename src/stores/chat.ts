import { defineStore } from 'pinia'
import { Contact, Message, RecentChat } from '../types/types'
import { contacts, messages, recentChats } from '../constants/ui-data'

interface State {
  selectedContact: Contact | null
  chats: RecentChat[]
  currentChat: Message[]
  favouriteContacts: Contact[]
}

export const useChatStore = defineStore('chat-store', {
  state: (): State => ({
    selectedContact: null,
    chats: [],
    currentChat: [],
    favouriteContacts: []
  }),

  actions: {
    getChats () {
      this.chats = recentChats
    },
    getCurrentChat (contactId: string): void {
      this.currentChat = messages.filter((message: Message) => message.sender_id === contactId || message.recipient_id === contactId)
        .map((message: Message) => {
          return { ...message, isRead: true }
        })
      this.chats = [...this.chats].map((chat: RecentChat) => {
        if(chat.contact_id === this.selectedContact?.contact_id)
          return { ...chat, isRead: true, unreadMessages: 0 }
        return chat
      })
    },
    setSelectedContact (contactId: string): void {
      this.selectedContact = contacts.filter((contact: Contact) => contact.contact_id === contactId)[0]
    },
    getFavouriteContacts (): void {
      this.favouriteContacts = contacts.filter((contact: Contact) => contact.isFavourite)
    },
    handleSearch (keyword: string): void {
      if(keyword !== '') {
        this.chats = recentChats.filter((chat: RecentChat) => {
          return chat.contactName.toLowerCase().includes(keyword.toLowerCase())
        })
      } else {
        this.chats = recentChats
      }
    }
  }
})