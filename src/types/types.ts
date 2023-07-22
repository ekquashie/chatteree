export interface Message {
  type: string
  content: string
  timestamp: string
  sender_id: string
  recipient_id: string
  isRead: boolean
}

export interface RecentChat {
  contact_id: string
  profilePic: string
  contactName: string
  lastMessage: string
  timeStamp: string
  unreadMessages: number
}

export interface Contact {
  contact_id: string
  profilePicture: string
  unreadMessages: number
  isFavourite: boolean
  contactName: string
  lastSeen?: string
}