import { onRequest } from 'firebase-functions/v2/https'
import * as logger from 'firebase-functions/logger'
import { TodoistApi } from '@doist/todoist-api-typescript'

import { defineString } from 'firebase-functions/params'
import { TodoistWebhookRequest } from './types/todoist'
const TODOIST_API_KEY = defineString('TODOIST_API_KEY')
const api = new TodoistApi(TODOIST_API_KEY.value())

export const helloWorld = onRequest({
  region: 'europe-west3',
},
async (request, response) => {
  const body = request.body as TodoistWebhookRequest
  logger.info('Hello logs!', body)
  if (body.event_data.content.startsWith('Hello')) {
    await api.quickAddTask({ text: 'Hello from Firebase!' })
  }
  response.send('Hello to the browser!')
})
