// https://developer.todoist.com/sync/v9/#request-format
export interface TodoistWebhookRequest {
  event_name: string
  user_id: number
  event_data: {
    added_by_uid: number
    assigned_by_uid: number | null
    checked: boolean
    child_order: number
    collapsed: boolean
    content: string
    description: string
    added_at: Date
    completed_at: Date | null
    due: Date | null
    id: number
    is_deleted: boolean
    labels: string[]
    parent_id: number | null
    priority: number
    project_id: number
    responsible_uid: number | null
    section_id: number | null
    sync_id: number | null
    url: string
    user_id: number
  }
  initiator: {
    email: number
    full_name: string
    id: number
    image_id: string
    is_premium: boolean
  }
  triggered_at: Date
  version: number
}
