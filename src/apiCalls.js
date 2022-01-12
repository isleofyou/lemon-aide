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

const getAllOutfits = () => {
  return fetch('http://localhost:3001/api/v1/outfits')
  .then(response => {
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    return response.json();
  });
}

const addNewOutfit = (outfitItems) => {
  return fetch('http://localhost:3001/api/v1/outfits', {
    method: 'POST',
    body: JSON.stringify(outfitItems),
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

const deleteOutfit = (id) => {
  return fetch(`http://localhost:3001/api/v1/outfits/${id}`, {
    method: 'DELETE',
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

module.exports = {
  getAllProducts, 
  updateFavorite,
  getAllOutfits,
  addNewOutfit,
  deleteOutfit
}