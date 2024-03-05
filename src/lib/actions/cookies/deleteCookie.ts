'use server'

import { cookies } from 'next/headers'

export async function deleteCookie(key: string) {
  cookies().delete(key)
}
