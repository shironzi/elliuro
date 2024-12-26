export async function getProperties() {
    const response = await fetch('/api/user/properties', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) {
        throw new Error('Failed to get properties');
    }

    const result = await response.json();
    console.log(result.properties);

    return result.properties;
}