import axios from "axios"; 
import { recobrarDatos } from "../Api";

//Mock de llamadas a la API - Async
jest.mock('axios')

describe('Test suite para APIs', () => {

    it('recobra datos de forma exitosa de una API', async () => {
      
        const data = {
        
            data: [
                {
                    "id": 1,
                    "name": "Namedummie1 Gramnham",
                    "username": "Brut",
                    "email": "Sincerde@april.biz",
                    "address": {
                        "street": "Kulass Light",
                        "suite": "Apt. 5456",
                        "city": "Gwenbosrough",
                        "zipcode": "929948-3874",
                        "geo": {
                            "lat": "-37.3139",
                            "lng": "81.1423"
                        }
                    },
                    "phone": "1-770-734-8031 x56442",
                    "website": "hildegaerd.org",
                    "company": {
                        "name": "Romagudra-Crona",
                        "catchPhrase": "Multi-layered client-server neural-net",
                        "bs": "harness real-time e-markets"
                    }
                },
                {
                    "id": 2,
                    "name": "Ervindummie Howall",
                    "username": "Antonitte",
                    "email": "Shanne@melissa.tvv",
                    "address": {
                        "street": "Vuuuctor Plains",
                        "suite": "Suiteeee 5579",
                        "city": "Wisokyburgh",
                        "zipcode": "90544-7771",
                        "geo": {
                            "lat": "-43.9566",
                            "lng": "-34.4618"
                        }
                    },
                    "phone": "010-692-4593 x09125",
                    "website": "anastasia.net",
                    "company": {
                        "name": "Deckow-Crist",
                        "catchPhrase": "Proactive didactic contingency",
                        "bs": "synergize scalable supply-chains"
                    }
            
                }
            ]
        }

        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        
      
        await expect(recobrarDatos()).resolves.toEqual(data);

        expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');

    });

});