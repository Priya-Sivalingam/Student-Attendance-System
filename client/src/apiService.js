export async function loginUser(username, password) {
    try {
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        if (!response.ok) {
            throw new Error('Invalid login credentials');
        }
        return await response.json(); 
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}
