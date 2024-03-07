'use server'

import { redirect } from 'next/navigation'

import { signIn } from '@/lib/actions/api/auth/sign-in'
import { setCookie } from '@/lib/actions/cookies/setCookie'
import { COOKIE_AUTH_TOKEN_KEY } from '@/lib/constants/keys'
import { ONE_MONTH_IN_SECONDS } from '@/lib/constants/time'
import { toClientError } from '@/lib/utils'

export async function authenticate(email: string, password: string) {
  try {
    const response = await signIn({ email, password })

    await setCookie(COOKIE_AUTH_TOKEN_KEY, response.token, {
      path: '/',
      httpOnly: true,
      maxAge: ONE_MONTH_IN_SECONDS,
    })
  } catch (error) {
    return toClientError(error)
  }

  redirect('/')
}
