import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID stJb2JJ8KuQXQTXbqwDvAGekEAhfPKZAVTC66tNrrCo'
    }
});