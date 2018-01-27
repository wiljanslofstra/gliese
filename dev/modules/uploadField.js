/* npm-add blueimp-file-upload */

/* global FILE_UPLOAD_MESSAGES */

const $fileupload = $('.js-fileupload');
const $fileuploadInput = $('.js-fileupload-input');
const $fileuploadErrors = $('.js-fileupload-errors');
const $fileuploadList = $('.js-fileupload-list');
const $fileuploadData = $('.js-fileupload-data');

const $emptyState = $('#fileupload-empty');

let files = [];

const fileUpload = {
  initialize() {
    if ($fileupload.length) {
      this.load();
    }
  },

  load() {
    require([ // eslint-disable-line
      'blueimp-file-upload/js/jquery.iframe-transport',
      'blueimp-file-upload/js/jquery.fileupload-process',
      'blueimp-file-upload/js/jquery.fileupload-validate',
      'blueimp-file-upload/js/jquery.fileupload',
    ], () => {
      this.create();
      this.renderFiles();
    });
  },

  showError(text) {
    $fileuploadErrors.text(text);
  },

  renderFiles() {
    $fileuploadList.removeAttr('hidden');
    $fileuploadList.html('');

    $fileuploadData.val(JSON.stringify(files));

    if (!files.length) {
      $fileuploadList.html($emptyState.html());
    } else {
      files.forEach((file) => {
        $fileuploadList.append(`
          <li class="upload-field__item js-fileupload-item">
            <img class="upload-field__thumb" src="${file.thumbnailUrl}">
            <span class="upload-field__title">${file.name}</span>
            <a class="upload-field__delete js-fileupload-remove" href="#">&times; verwijder</a>
          </li>
        `);
      });
    }
  },

  create() {
    $fileupload.on('click', '.js-fileupload-remove', (e) => {
      e.preventDefault();
      const $el = $(e.currentTarget);
      const $row = $el.parents('.js-fileupload-item');
      const index = $row.index();
      const file = files[index];

      $.ajax({
        url: file.deleteUrl,
        type: 'DELETE',
      });

      files.splice(index, 1);

      this.renderFiles();
    });

    const fileUploadInst = $fileuploadInput.fileupload({
      dataType: 'json',
      acceptFileTypes: /(\.|\/)(jpg|png|jpeg|gif)$/i,
      maxFileSize: 5000000,
      messages: FILE_UPLOAD_MESSAGES,
    });

    fileUploadInst.on('fileuploaddone', (e, data) => {
      if (typeof data.result.uploads !== 'undefined' && data.result.uploads.length) {
        files = files.concat(data.result.uploads);
      }

      this.renderFiles();
    });

    fileUploadInst.on('fileuploadadd', () => {
      this.showError('');
    });

    fileUploadInst.on('fileuploadfail', () => {
      this.showError(FILE_UPLOAD_MESSAGES.uploadError);
    });

    fileUploadInst.on('fileuploadprocessalways', (e, data) => {
      const index = data.index;
      const file = data.files[index];

      if (file.error) {
        this.showError(file.error);
      }
    });
  },
};

export default fileUpload;
