import API_ENDPOINT from '../../global/ApiEndpoint'

export const createDetailHeroTemplate = (restaurant) => `
  <div class="about__container  grid">
    <div class="about__data">
      <span class="section-subtitle about__initial">${restaurant.address},  ${restaurant.city}</span>
      <h2 class="section-title about__initial">${restaurant.name}</h2>
      <p class="about__description">${restaurant.description}</p>
      
    </div>

    <img src="${API_ENDPOINT.GET_MEDIUM_IMAGE_RESTAURANT}/${restaurant.pictureId}" alt="${restaurant.name}'s picture" class="about__img">
  </div>`

export const createLikeButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like">
  <i class="bx bx-heart" aria-hidden="true"></i>
</button>`

export const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="bx bxs-heart" aria-hidden="true"></i>
  </button>`
