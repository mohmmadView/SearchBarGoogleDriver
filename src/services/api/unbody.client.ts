import { Unbody } from '@unbody-io/ts-client'

export const unbody = new Unbody({
  apiKey:
    process.env.NEXT_PUBLIC_UNBODY_API_KEY ||
    '98A09613829E61DDAE9116759669ED76',
  projectId:
    process.env.NEXT_PUBLIC_UNBODY_PROJECT_ID ||
    '8f0e4f34-c647-493d-af94-0ddfab4a25dc',
})
