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
    const response = await fetch('http://localhost:3000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, username, email, password, cPassword }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(
        `Failed to register: ${errorData.message || response.statusText}`,
      )
    }

    return await response.json()
  } catch (error) {
    throw new Error(String(error))
  }
}
