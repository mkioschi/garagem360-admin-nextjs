'use server'

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
  const response = await apiClient.post('/auth/sign-in', {
    email,
    password,
  })

  return { token: response.data.token }
}
