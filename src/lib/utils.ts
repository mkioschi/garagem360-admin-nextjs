import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { ApiError } from './actions/api/error'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function sleep(milliseconds: number) {
  await new Promise((resolve) => setTimeout(resolve, milliseconds))
}

export async function safeJsonReponse(response: Response) {
  if (response.headers.get('content-type') === 'application/json') {
    return await response.json()
  }
}

type ClientError = {
  error: {
    message: string
    details?: string[]
  }
}

export function toClientError(error: unknown): ClientError {
  if (error instanceof ApiError) {
    return { error: { message: error.message, details: error.details } }
  }

  if (error instanceof Error) {
    return { error: { message: error.message } }
  }

  if (error && typeof error === 'object' && 'message' in error) {
    return { error: { message: String(error.message) } }
  }

  return { error: { message: 'Ops! Ocorreu um erro inexperado.' } }
}
