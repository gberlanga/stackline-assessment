export const fetchProductDetails = async () => {
    const response = await fetch('./data.json');
    if(!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return response.json();
}