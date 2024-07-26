const options = {
    method: 'GET',
  };
  const API_URL = 'https://pixabay.com/api/?';
  const API_KEY = '45125188-29656ded7c12a384255e46c86';
  
  export async function getGalleryData(queryValue) {
    try {
      const searchParams = new URLSearchParams({
        key: API_KEY,
        q: queryValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      });
  
      const response = await fetch(API_URL + searchParams, options).then();
      if (!response.ok) {
        showInfoMessage(MESSAGES.error, MESSAGES_BG_COLORS.orange);
        return;
      }
      return await response.json();
    } catch (err) {
      showInfoMessage(
        `${MESSAGES.exception} ERROR:  ${err}`,
        MESSAGES_BG_COLORS.orange
      );
    }
  }


  const MESSAGES = {
    info: 'Please enter a value in the search field!',
    warning:
      'Sorry, there are no images matching your search query. Please try again!',
    error:
      'Sorry, there are no connection to the server. Please try again later! ',
    exception:
      'Exception: We have some issue with connection. Please try again later! ',
  };
  
  const MESSAGES_BG_COLORS = {
    blue: '#abd4f8',
    orange: '#f28111',
    red: '#e97782',
  };
  
  function showInfoMessage(message, color) {
    iziToast.info({
      position: 'topRight',
      backgroundColor: `${color}`,
      message: `${message}`,
    });
  }

  export { MESSAGES, MESSAGES_BG_COLORS, showInfoMessage };