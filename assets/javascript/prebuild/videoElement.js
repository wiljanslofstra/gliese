import videoHelpers from '../helpers/video';

const videos = document.querySelectorAll('.js-video');
const videosArr = Array.prototype.slice.call(videos);

const videoElement = {
  /**
   * Initialize video elements
   * @return {void}
   */
  initialize() {
    if (videosArr.length) {
      videosArr.forEach((vid) => {
        this.checkEmbed(vid);
      });
    }
  },

  /**
   * Check the sources of a video element and create listeners
   * @param  {object} vid - jQuery element of video elements
   * @return {void}
   */
  checkEmbed(vid) {
    const source = vid.dataset.videoSrc;

    if (source.length) {
      const type = (source.indexOf('youtube') >= 0 || source.indexOf('youtu.be') >= 0)
        ? 'youtube' : 'vimeo';

      this.createListener(vid, source, type);
    }
  },

  /**
   * Create click listeners on video elements to create embeds on click
   * @param  {object} el   - jQuery element of the video
   * @param  {string} type - Video type (e.g. youtube or vimeo)
   * @return {void}
   */
  createListener(el, source, type) {
    let embed = '';

    // YouTube specific code
    if (type === 'youtube') {
      const id = videoHelpers.getYoutubeId(source);
      embed = videoHelpers.createYoutubeEmbed(id);

      this.addYoutubePoster(el, id);

    // Vimeo specific code
    } else if (type === 'vimeo') {
      const id = videoHelpers.getVimeoId(source);
      embed = videoHelpers.createVimeoEmbed(id);

      this.addVimeoPoster(el, id);
    }

    // Listen for clicks on the poster element
    el.querySelector('.js-video-poster').addEventListener('click', (e) => {
      e.preventDefault();

      el.insertAdjacentHTML('beforeend', embed);
      el.classList.add('is-loaded');

      setTimeout(() => {
        el.classList.add('is-playing');
      }, 400);
    });
  },

  addYoutubePoster(el, id) {
    // Get the poster with ID
    const poster = videoHelpers.getYoutubePoster(id);

    // Add the video poster on the element
    this.addVideoPoster(el, poster);
  },

  addVimeoPoster(el, id) {
    videoHelpers.getVimeoPoster(id, (src) => {
      this.addVideoPoster(el, src);
    });
  },

  addVideoPoster(el, poster) {
    // Get the poster element
    const posterNode = el.querySelector('.js-video-poster');

    // Add the poster as background-image
    posterNode.style.backgroundImage = `url(${poster})`;
  },
};

export default videoElement;
