let token = 'ae36c620bb3ef7b20a1f91214a5a2743b9c7a4838ec5c6a3';

export const server_calls = {
    get: async () => {
        const response = await fetch(`http://127.0.0.1:5000/api/contacts`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`http://127.0.0.1:5000/api/contacts`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
		},
    
        update: async (id:string, data:any = {}) => {
            const response = await fetch(`http://127.0.0.1:5000/api/contacts/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });
        },
    
        delete: async(id:string) => {
            const response = await fetch(`http://127.0.0.1:5000//api/contacts/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`
                }
            })
        }
    }