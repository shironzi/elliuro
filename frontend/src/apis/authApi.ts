interface RegisterResponse {
  message: string
}

/**
 * Creating User
 * @param name
 * @param username
 * @param email
 * @param password
 * @param cPassword
 * @returns
 */

export async function register(
  name: string,
  username: string,
  email: string,
  password: string,
  cPassword: string,
): Promise<RegisterResponse> {
  try {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, username, email, password, cPassword }),
    })

    const result = await response.json()

    if (response.ok) {
      return { message: 'created' }
    }

    return result
  } catch (error) {
    throw new Error(String(error))
  }
}
