export interface AddCampaignTemplateRequest {
  phoneNumberId: string
  templateRequest: TemplateRequest
}

export interface TemplateRequest {
  name: string
  language: string
  category: string
  components: Component[]
}

export interface Component {
  type: string
  format: string
  text: string
  buttons: Button[]
  examples: any
}

export interface Button {
  type: string
  text: string
}

export interface Template {
  name: string
  category: string
  language: string
  content: string
  status: "in_review" | "rejected" | "active_pending"
  lastUpdated: string
}

