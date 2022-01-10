const getAllProducts = () => {
  return fetch('http://localhost:3001/api/v1/all-products')
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    });
}

const updateFavorite = (id) => {
  return fetch(`http://localhost:3001/api/v1/favorites/${id.id}`, {
    method: 'PUT',
    body: JSON.stringify(id),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    });
}

const getFavorites = () => {
  return fetch('http://localhost:3001/api/v1/favorites')
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    });
}

module.exports = {
  getAllProducts, 
  updateFavorite,
  getFavorites
}