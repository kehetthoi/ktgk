const BASE_URL = 'https://mindx-mockup-server.vercel.app/api/resources/users?apiKey=685022df8b20679b19d90165';
export async function fectchUsers() {
    const res = await fetch(BASE_URL);
    return await res.json()
} 

export async function CreateUser(userData){
    const response = await fetch(BASE_URL,{
        method:'POST',
        body:JSON.stringify(userData)
    })
    return await response.json()
}