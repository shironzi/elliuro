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
    name: string,
    image: File,
    added_at: Date,
    updated_at: Date,
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

export async function getPropertyDetails(propertyId: number) {
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

export async function getPropertyAmenities(propertyId: number) {
    const response = await fetch(`/api/property-listing/amenities/${propertyId}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    })

    const result = await response.json();

    console.log(result)

    return result
}

export async function propertyAmenities(amenities: PropertyAmenity[], propertyId: string): Promise<void> {
    const response = await fetch(`/api/property-listing/amenities/${parseInt(propertyId)}`, {
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