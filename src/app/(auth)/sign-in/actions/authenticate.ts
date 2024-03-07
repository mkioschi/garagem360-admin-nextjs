'use server'

import { signIn } from '@/lib/actions/api/auth/sign-in'
import { toClientError } from '@/lib/utils'

export async function authenticate(email: string, password: string) {
  try {
    const response = await signIn({ email, password })
    return response
  } catch (error) {
    return toClientError(error)
  }

  // gravar o cookie
}
