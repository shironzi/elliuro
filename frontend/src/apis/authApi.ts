interface Response {
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
): Promise<Response> {
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

export async function login(
  username: string,
  password: string,
): Promise<Response> {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })

    const result = response.json()

    if (response.ok) {
      return { message: 'logged In' }
    }

    return result
  } catch (error) {
    throw new Error(String(error))
  }
}
