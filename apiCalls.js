const getAllProducts = () => {
  return fetch('http://localhost:3001/')
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    });
}

module.exports = {
  getAllProducts
}