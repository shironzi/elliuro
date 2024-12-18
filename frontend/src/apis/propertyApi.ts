enum PropertyType {
    HOUSE = 'HOUSE',
    APARTMENT = 'APARTMENT',
    HOTEL = 'HOTEL',
    CONDOMINIUM = 'CONDOMINIUM',
    PRIVATE = 'PRIVATE',
}

interface Details {
    title: string;
    type: PropertyType;
    location: string;
    price: number;
    description: string;
}

interface PropertyAmenity {
    name: string;
    value: number
    property_id: number
}

interface PropertyImages {
    base64: Base64URLString
}

export async function createIntialProperty(): Promise<string> {
    const response = await fetch('/api/property-listing/initialProperty', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
    })

    if (!response.ok) {
        throw new Error('Failed to create initial property');
    }

    const result = await response.json();
    return result;
}

export async function getPropertyDetails(propertyId: string) {
    const response = await fetch(`/api/property-listing/details/${propertyId}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        }
    })

    if (!response.ok) {
        throw new Error('Failed to fetch property details')
    }

    const result = await response.json()

    return result.details
}

export async function propertyDetails(details: Details, propertyId: string): Promise<void> {
    const response = await fetch(`/api/property-listing/details/${propertyId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(details)
    });

    if (!response.ok) {
        throw new Error('Failed to update property details');
    }
}

export async function getPropertyAmenities(propertyId: string) {
    const response = await fetch(`/api/property-listing/amenities/${propertyId}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    })

    const result = await response.json();

    return result
}

export async function propertyAmenities(amenities: PropertyAmenity[], propertyId: string): Promise<void> {
    const response = await fetch(`/api/property-listing/amenities/${propertyId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(amenities)
    });

    if (!response.ok) {
        throw new Error('Failed to update property amenities');
    }
}

export async function getPropertyImages(propertyId: string) {
    const response = await fetch(`/api/property-listing/images/${propertyId}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const result = await response.json()

    return result
}

export async function propertyImages(images: PropertyImages[], propertyId: string): Promise<void> {
    const response = await fetch(`/api/property-listing/images/${propertyId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(images)
    })

    if (!response.ok) {
        throw new Error('Failed to update property Images');
    }
}