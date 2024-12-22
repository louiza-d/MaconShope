
export const fetchData = async ({ url, method = "GET", data = null, headers = {} }) => {
    try {
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
        };
  
        // Si des données sont passées, ajoutez-les à la requête
        if (data) {
            options.body = JSON.stringify(data);
        }
  
        // Faites la requête à l'API
        const response = await fetch(url, options);
        

        // Vérifiez le statut de la réponse (200-299 est OK)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
