export interface DecodeTokenResponse {
  id: string
  enabled: boolean
  emailVerified: boolean
  username: string
  email: string
  firstName: string
  lastName: string
  tenant: string
  totp: boolean
  disableableCredentialTypes: string[]
  requiredActions: string[]
  notBefore: number
  createdTimestamp: number
  access: Access
  attributes: Attributes
}

export interface Access {
  manageGroupMembership: boolean
  view: boolean
  mapRoles: boolean
  impersonate: boolean
  manage: boolean
}

export interface Attributes {
  additionalProp1: string[]
  additionalProp2: string[]
  additionalProp3: string[]
}
