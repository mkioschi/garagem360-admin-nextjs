'use server'

import { cookies } from 'next/headers'

type Options = {
  domain?: string
  httpOnly?: boolean
  maxAge?: number
  path?: string
  priority?: 'low' | 'medium' | 'high'
  sameSite?: boolean | 'lax' | 'strict' | 'none'
  secure?: boolean
}

export async function setCookie(key: string, value: string, options?: Options) {
  cookies().set(key, value, options)
}
