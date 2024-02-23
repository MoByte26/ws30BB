const API_URL = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api'

export async function fetchBooks() {
  const response = await fetch(`${API_URL}/books`);
  const data = await response.json();
  return data;
}

export async function login(email, password) {
  const response = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  const data = await response.json();
  return data;
}