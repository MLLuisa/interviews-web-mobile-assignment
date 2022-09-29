const api = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    const dataClean = data.map((user) => {
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