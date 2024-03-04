'use server'

export async function signIn(email: string, password: string) {
  console.log(email, password)
  // try {
  //   const response = await fetch(
  //     'http://api.garagem360.local/admin/auth/login',
  //     {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //     },
  //   )
  //   console.log('success')
  //   console.log(await response.json())
  // } catch (error) {
  //   console.log(error)
  //   console.log('error')
  // }
  // gravar o cookie
}
