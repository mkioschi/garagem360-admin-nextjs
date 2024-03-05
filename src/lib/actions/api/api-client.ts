'use serve'

import { redirect } from 'next/navigation'

import { env } from '@/env'
import { COOKIE_AUTH_TOKEN_KEY } from '@/lib/constants/keys'

import { getCookie } from '../cookies/getCookie'

type Options = Omit<RequestInit, 'body' | 'method'>

type Body = object | BodyInit

type Method = 'POST' | 'GET'

export async function apiClient(
  path: string,
  method: Method,
  body?: Body,
  options?: Options,
) {
  const url = new URL(removeStartSlashes(path), env.NEXT_PUBLIC_API_BASE_URL)
  const authToken = getCookie(COOKIE_AUTH_TOKEN_KEY)

  // TODO Verificar se está chegando alguma header dessas padrões
  // e substituir da forma que está ele vai duplicar as chaves Accept,
  // Authorization e Content-Type

  const response = await fetch(url, {
    ...options,
    method,
    body: typeof body === 'object' ? JSON.stringify(body) : body,
    headers: {
      Accept: 'application/json',
      Authorization: authToken ? `Bearer ${authToken}` : '',
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    // console.log('BEGIN-------------------', response, 'END-------------------')

    if (response.status === 401 && response.statusText === 'Unauthorized') {
      redirect('/sign-in')
    }

    throw new Error(`HTTP error! Status: ${response.status}`)
  }

  return await response.json()
}

function removeStartSlashes(path: string) {
  if (path.startsWith('/')) {
    return removeStartSlashes(path.substring(1))
  }

  return path
}
