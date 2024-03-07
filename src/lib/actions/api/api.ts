'use serve'

import { redirect } from 'next/navigation'

import { env } from '@/env'
import { COOKIE_AUTH_TOKEN_KEY } from '@/lib/constants/keys'
import { safeJsonReponse } from '@/lib/utils'

import { getCookie } from '../cookies/getCookie'
import { ApiError } from './error'

type Options = Omit<RequestInit, 'body' | 'method'>

type Body = BodyInit | object

type Method = 'GET' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'PATCH'

async function fetchWrapper(
  path: string,
  method: Method,
  bodyInit?: Body,
  options?: Options,
): Promise<Response> {
  const url = new URL(removeStartSlashes(path), env.NEXT_PUBLIC_API_BASE_URL)
  const headers = await parseHeaders(options?.headers)
  const body = parseBody(bodyInit)

  delete options?.headers

  const response = await fetch(url, {
    method,
    headers,
    body,
    ...options,
  })

  if (response.ok) {
    return response
  }

  if (response.status === 401 && response.statusText === 'Unauthorized') {
    redirect('/sign-in')
  }

  throw await buildApiError(response)
}

function parseBody(bodyInit: Body | undefined) {
  if (!bodyInit) {
    return undefined
  }

  if (typeof bodyInit === 'object') {
    return JSON.stringify(bodyInit)
  }

  return bodyInit as BodyInit
}

async function parseHeaders(headersInit: HeadersInit | undefined) {
  const authToken = await getCookie(COOKIE_AUTH_TOKEN_KEY)
  const headers = new Headers(headersInit)

  if (!headers.has('Accept')) {
    headers.set('Accept', 'application/json')
  }

  if (!headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json')
  }

  if (!headers.has('Authorization') && authToken) {
    headers.set('Authorization', authToken)
  }

  return Object.fromEntries(headers)
}

async function buildApiError(response: Response): Promise<ApiError> {
  const jsonResponse = await safeJsonReponse(response)

  if (jsonResponse && jsonResponse?.error) {
    return new ApiError(jsonResponse.error.message, jsonResponse.error?.details)
  }

  return new ApiError('Erro ao realizar requisição à API.')
}

function removeStartSlashes(path: string) {
  if (path.startsWith('/')) {
    return removeStartSlashes(path.substring(1))
  }

  return path
}

export const api = {
  get: (path: string, body?: Body, options?: Options) =>
    fetchWrapper(path, 'GET', body, options),
  delete: (path: string, body?: Body, options?: Options) =>
    fetchWrapper(path, 'DELETE', body, options),
  head: (path: string, body?: Body, options?: Options) =>
    fetchWrapper(path, 'HEAD', body, options),
  options: (path: string, body?: Body, options?: Options) =>
    fetchWrapper(path, 'OPTIONS', body, options),
  post: (path: string, body?: Body, options?: Options) =>
    fetchWrapper(path, 'POST', body, options),
  put: (path: string, body?: Body, options?: Options) =>
    fetchWrapper(path, 'PUT', body, options),
  patch: (path: string, body?: Body, options?: Options) =>
    fetchWrapper(path, 'PATCH', body, options),
}
