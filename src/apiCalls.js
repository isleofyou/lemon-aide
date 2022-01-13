const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://protected-bayou-83479.herokuapp.com/';

const getAllProducts = () => {
  return fetch(`${baseUrl}/api/v1/all-products`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    });
}

const updateFavorite = (id) => {
  return fetch(`${baseUrl}/api/v1/favorites/${id.id}`, {
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
  return fetch(`${baseUrl}/api/v1/outfits`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    return response.json();
  });
}

const addNewOutfit = (outfitItems) => {
  let unparsedResponse;
  return fetch(`${baseUrl}/api/v1/outfits`, {
    method: 'POST',
    body: JSON.stringify(outfitItems),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      unparsedResponse = response;
      return response.json();
    })
    .then(parsedResponse => {
      if (!unparsedResponse.ok) {
        throw new Error(`${unparsedResponse.status} ${parsedResponse.error}`);
      }
      return parsedResponse;
    });
}

const deleteOutfit = (id) => {
  return fetch(`${baseUrl}/api/v1/outfits/${id}`, {
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