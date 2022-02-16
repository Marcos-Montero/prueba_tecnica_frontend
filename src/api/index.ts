export const initApi = async () => {
    const result = await fetch('http://localhost:8080/supplier', {
        method: 'GET',
        headers: {
            Authorization: 'Basic root:springroot',
        },
    });
    const response = await result.json();
    return response;
};
export const searchId = async (id: number) => {
    const result = await fetch(`http://localhost:8080/supplier/${id}`, {
        method: 'GET',
        headers: {
            Authorization: 'Basic root:springroot',
        },
    });
    const response = await result.json();
    return response;
};
type TypeSupplier = {
    id: number;
    nombre: string;
    cif: number;
    logo: string;
    rating: number;
    dateCreated: string;
};
export const changeRating = async function (obj: TypeSupplier) {
    const result = await fetch('http://localhost:8080/supplier', {
        method: 'PUT',
        headers: {
            Authorization: 'Basic root:springroot',
        },
        body: JSON.stringify(obj),
    });
    const response = await result.json();
    return response;
};
