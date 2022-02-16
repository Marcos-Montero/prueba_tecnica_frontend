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
    try {
        const result = await fetch(`http://localhost:8080/supplier/${id}`, {
            method: 'GET',
            headers: {
                Authorization: 'Basic root:springroot',
            },
        });
        const response = await result.json();
        return response;
    } catch (err) {
        console.log(err);
    }
};
