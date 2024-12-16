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
}

interface PropertyImages {
    name: string,
    image: File,
    added_at: Date,
    updated_at: Date,
}

export async function createIntialProperty(): Promise<string> {
    const response = await fetch('/api/property-listing/intialProperty', {
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

export async function propertyDetails(details: Details): Promise<string> {
    const response = await fetch('/api/property-listing/details/:id', {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(details)
    });

    if (!response.ok) {
        throw new Error('Failed to update property details');
    }

    const result = response.json()

    return result
}

export async function propertyAmenities(Amenities: PropertyAmenity[]): Promise<string> {
    const response = await fetch('/api/property-listing/amenities/:id', {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Amenities)
    });

    if (!response.ok) {
        throw new Error('Failed to update property amenities');
    }

    const result = response.json()

    return result
}

export async function propertyImages(images: PropertyImages[]): Promise<string> {
    const response = await fetch('/api/property-listing/amenities/:id', {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(images)
    });

    if (!response.ok) {
        throw new Error('Failed to update property Images');
    }

    const result = response.json()

    return result
}