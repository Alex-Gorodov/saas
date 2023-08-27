import { ChatIcon, ContactsIcon, DashboardIcon, DealsIcon, EmailIcon, SettingsIcon, TasksIcon } from "./components/icons/icons"

export enum AppRoute {
  Root = '/',
  Dashboard = 'saas/dashboard',
  Tasks = 'saas/tasks',
  Email = 'saas/email',
  Contacts = 'saas/contacts',
  Chat = 'saas/chat',
  Deals = 'saas/deals',
  Settings = 'saas/settings',
}

export const MENU_WIDTH = [
  '256px', '68px'
]

export enum TaskStatuses {
  Completed = 'Completed',
  Active = 'Active',
  Ended = 'Ended'
}

export enum TaskTypes {
  Reminder = 'Reminder',
  Call = 'Call',
  Event = 'Event'
}

export const PAGES = [
  {title: 'Dashboard', route: AppRoute.Dashboard, icon: DashboardIcon()},
  {title: 'Tasks', route: AppRoute.Tasks, icon: TasksIcon()},
  {title: 'Email', route: AppRoute.Email, icon: EmailIcon()},
  {title: 'Contacts', route: AppRoute.Contacts, icon: ContactsIcon()},
  {title: 'Chat', route: AppRoute.Chat, icon: ChatIcon()},
  {title: 'Deals', route: AppRoute.Deals, icon: DealsIcon()},
  {title: 'Settings', route: AppRoute.Settings, icon: SettingsIcon()},
]
