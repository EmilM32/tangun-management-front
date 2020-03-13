export interface CardOpts {
  color?: string,
  icon?: string
}

export interface UserList {
  id: string,
  fullName: string,
  firstName?: string,
  lastName?: string,
  level: string,
  dateOfBirth: string,
  group: string,
  isActive?: boolean
}