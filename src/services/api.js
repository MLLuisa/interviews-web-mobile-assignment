const api = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts?limit=50")
  .then(response => response.json())
  .then(data => {
    const dataClean = data.slice(0,50).map((user) => {
      return {
        userId: user.userId,
        id: user.id,
        title: user.title,
        body: user.body
      }
    });
    return dataClean;
  })
}

export default api;