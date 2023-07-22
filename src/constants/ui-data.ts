import { Contact, Message, RecentChat } from '@/types/types'

export const recentChats: RecentChat[] = [
  {
    contact_id: '1',
    profilePic: 'profile-pic-url-1',
    contactName: 'Dexter Quaye',
    lastMessage: 'Hello there!',
    timeStamp: '2023-07-15 10:30',
    unreadMessages: 3
  },
  {
    contact_id: '2',
    profilePic: 'profile-pic-url-2',
    contactName: 'Patricia Addai',
    lastMessage: 'Hi Patricia!',
    timeStamp: '2023-07-15 11:45',
    unreadMessages: 2
  },
  {
    contact_id: '3',
    profilePic: 'profile-pic-url-3',
    contactName: 'Koomson',
    lastMessage: 'How are you?',
    timeStamp: '2023-07-15 09:20',
    unreadMessages: 0
  },
  {
    contact_id: '4',
    profilePic: 'profile-pic-url-4',
    contactName: 'Denah',
    lastMessage: 'Good morning!',
    timeStamp: '2023-07-15 08:00',
    unreadMessages: 1
  },
  {
    contact_id: '5',
    profilePic: 'profile-pic-url-5',
    contactName: 'Beatrice Boateng',
    lastMessage: 'See you later!',
    timeStamp: '2023-07-14 18:30',
    unreadMessages: 0
  },
  {
    contact_id: '6',
    profilePic: 'profile-pic-url-6',
    contactName: 'Benedicta',
    lastMessage: 'Take care!',
    timeStamp: '2023-07-13 21:15',
    unreadMessages: 0
  },
  {
    contact_id: '7',
    profilePic: 'profile-pic-url-7',
    contactName: 'Anastasia',
    lastMessage: 'Can we meet?',
    timeStamp: '2023-07-12 16:45',
    unreadMessages: 3
  },
  {
    contact_id: '8',
    profilePic: 'profile-pic-url-8',
    contactName: 'Dontwi Kweku',
    lastMessage: 'Got it!',
    timeStamp: '2023-07-11 14:30',
    unreadMessages: 1
  },
  {
    contact_id: '9',
    profilePic: 'profile-pic-url-9',
    contactName: 'Adelaide',
    lastMessage: 'Thanks!',
    timeStamp: '2023-07-11 12:00',
    unreadMessages: 0
  },
  {
    contact_id: '10',
    profilePic: 'profile-pic-url-10',
    contactName: 'Juan Allidu',
    lastMessage: 'Hi!',
    timeStamp: '2023-07-15 11:15',
    unreadMessages: 1
  },
  {
    contact_id: '11',
    profilePic: 'profile-pic-url-11',
    contactName: 'Abena',
    lastMessage: 'Goodbye!',
    timeStamp: '2023-07-14 20:45',
    unreadMessages: 0
  },
  {
    contact_id: '12',
    profilePic: 'profile-pic-url-12',
    contactName: 'Selase',
    lastMessage: 'Take care!',
    timeStamp: '2023-07-13 23:30',
    unreadMessages: 2
  },
  {
    contact_id: '13',
    profilePic: 'profile-pic-url-13',
    contactName: 'Erica Sackey',
    lastMessage: 'Hello!',
    timeStamp: '2023-07-11 12:00',
    unreadMessages: 1
  }
]

export const contacts: Contact[] = [
  {
    'contact_id': '2',
    'profilePicture': 'profile-pic-url-2',
    'unreadMessages': 2,
    'isFavourite': false,
    'contactName': 'Patricia Addai'
  },
  {
    'contact_id': '3',
    'profilePicture': 'profile-pic-url-3',
    'unreadMessages': 0,
    'isFavourite': false,
    'contactName': 'Koomson'
  },
  {
    'contact_id': '4',
    'profilePicture': 'profile-pic-url-4',
    'unreadMessages': 1,
    'isFavourite': false,
    'contactName': 'Denah'
  },
  {
    'contact_id': '5',
    'profilePicture': 'profile-pic-url-5',
    'unreadMessages': 0,
    'isFavourite': false,
    'contactName': 'Beatrice Boateng'
  },
  {
    'contact_id': '6',
    'profilePicture': 'profile-pic-url-6',
    'unreadMessages': 0,
    'isFavourite': false,
    'contactName': 'Benedicta'
  },
  {
    'contact_id': '7',
    'profilePicture': 'profile-pic-url-7',
    'unreadMessages': 3,
    'isFavourite': false,
    'contactName': 'Anastasia'
  },
  {
    'contact_id': '8',
    'profilePicture': 'profile-pic-url-8',
    'unreadMessages': 1,
    'isFavourite': false,
    'contactName': 'Dontwi Kweku'
  },
  {
    'contact_id': '9',
    'profilePicture': 'profile-pic-url-9',
    'unreadMessages': 0,
    'isFavourite': false,
    'contactName': 'Adelaide'
  },
  {
    'contact_id': '10',
    'profilePicture': 'src/assets/imgs/contacts/juanalli.png',
    'unreadMessages': 1,
    'isFavourite': true,
    'contactName': 'Juan Allidu'
  },
  {
    'contact_id': '11',
    'profilePicture': 'src/assets/imgs/contacts/abena.png',
    'unreadMessages': 2,
    'isFavourite': true,
    'contactName': 'Abena'
  },
  {
    'contact_id': '1',
    'profilePicture': 'src/assets/imgs/contacts/dexterquaye.png',
    'unreadMessages': 0,
    'isFavourite': true,
    'contactName': 'Dexter Quaye'
  },
  {
    'contact_id': '12',
    'profilePicture': 'src/assets/imgs/contacts/selase.png',
    'unreadMessages': 0,
    'isFavourite': true,
    'contactName': 'Selase'
  },
  {
    'contact_id': '13',
    'profilePicture': 'src/assets/imgs/contacts/ericasackey.png',
    'unreadMessages': 0,
    'isFavourite': true,
    'contactName': 'Erica Sackey'
  }
]


export const messages: Message[] = []