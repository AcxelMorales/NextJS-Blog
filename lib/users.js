export async function getUsersByAPI() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await resp.json();

  return data;
}
