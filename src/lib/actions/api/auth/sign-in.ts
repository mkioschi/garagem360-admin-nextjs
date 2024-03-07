'use server'

import { safeJsonReponse } from '@/lib/utils'

import { api } from '../api'

type SignInRequest = {
  email: string
  password: string
}

type SignInResponse = {
  token: string
}

export async function signIn({
  email,
  password,
}: SignInRequest): Promise<SignInResponse> {
  const response = await api.post('/auth/sign-in', { email, password })
  const jsonResponse = await safeJsonReponse(response)

  return {
    token: jsonResponse.token,
  }
}
