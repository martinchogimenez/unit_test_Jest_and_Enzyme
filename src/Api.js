import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users'

export const recobrarDatos = async () => {
    
    return await axios.get(url)

};

recobrarDatos();
