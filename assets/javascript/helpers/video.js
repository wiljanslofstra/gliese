import $ from 'jquery';

const videoHelpers = {
  /**
   * Extract the video ID from a url
   * @param  {string} url - URL to extract the ID from
   * @return {string|boolean} ID or false if it's a invalid url
   */
  getYoutubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/; // eslint-disable-line
    const match = url.match(regExp);
    const idFound = (match && match[2].length === 11);

    return (idFound) ? match[2] : false;
  },

  /**
   * Create YouTube embed HTML
   * @param  {string} id - ID of the video to embed
   * @return {string} YouTube embed HTML
   */
  createYoutubeEmbed(id) {
    return `
      <iframe
        width="560"
        height="315"
        src="//www.youtube.com/embed/${id}?rel=0&amp;autoplay=1&amp;color=white"
        frameborder="0"
        allowfullscreen></iframe>
      `;
  },

  /**
   * Get the poster from a YouTube video
   * @param  {string} id - YouTube video ID
   * @return {string} url of the YouTube poster
   */
  getYoutubePoster(id) {
    return `http://img.youtube.com/vi/${id}/0.jpg`;
  },

  /**
   * Extract the ID from a Vimeo URL
   * @param  {string} url - Vimeo video url
   * @return {string|boolean} ID or false if it's a invalid url
   */
  getVimeoId(url) {
    const regExp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/; // eslint-disable-line
    const match = url.match(regExp);

    return (match) ? match[3] : false;
  },

  /**
   * Create Vimeo embed
   * @param  {string} id - Vimeo video ID
   * @return {string} Vimeo embed HTML
   */
  createVimeoEmbed(id) {
    return `
      <iframe
        src="https://player.vimeo.com/video/${id}?autoplay=1&color=ee7f00"
        width="640"
        height="360"
        frameborder="0"
        allowfullscreen></iframe>
    `;
  },

  /**
   * Get the Vimeo poster by requesting the video information
   * @param  {string} id - ID of the video to request the poster for
   * @param  {function} cb - Because the function is asynchronous we have to use a callback
   * @return {void}
   */
  getVimeoPoster(id, cb) {
    $.ajax({
      type: 'GET',
      url: `http://vimeo.com/api/v2/video/${id}.json`,
      jsonp: 'callback',
      dataType: 'jsonp',
      success: (data) => {
        const thumbnailSrc = data[0].thumbnail_large;
        cb.call(this, thumbnailSrc);
      },
    });
  },
};

export default videoHelpers;
