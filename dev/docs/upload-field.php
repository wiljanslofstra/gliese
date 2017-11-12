<?php include(__DIR__ . '/../../templates/header.php'); ?>

<div class="u-p2 u-md-p3">
    <div class="st-explanation">
        <h1>Upload field</h1>

        <a href="/docs/pages/upload-script.zip">Download .PHP</a>
    </div>

    <div class="upload-field js-fileupload">
        <ul class="upload-field__files u-mb1 js-fileupload-list" hidden>
        </ul>

        <div class="upload-field__errors u-mb1 js-fileupload-errors"></div>

        <div class="upload-field__button btn btn--primary">
            Add files&hellip;
            <input class="upload-field__input js-fileupload-input" id="upload" type="file" name="upload[]" data-url="<?= BASE_URL; ?>/upload/" multiple>
        </div>

        <input type="hidden" class="js-fileupload-data" name="files" id="files" value="[]">
    </div>
</div>

<script type="text/javascript">
    var FILE_UPLOAD_MESSAGES = {
        maxNumberOfFiles: 'Maximum number of files exceeded',
        acceptFileTypes: 'This file type is not supported',
        maxFileSize: 'The file to upload is too large',
        minFileSize: 'The file to upload is too small',
        uploadError: 'Something went wrong during the upload. Try again later.',
    };

    // var FILE_UPLOAD_MESSAGES = {
    //     maxNumberOfFiles: 'Maximaal aantal bestanden is overschreden',
    //     acceptFileTypes: 'Dit bestandstype is niet toegestaan. Wij accepteren JPG, PNG en GIF bestanden',
    //     maxFileSize: 'Het geuploade bestand is te groot. Het bestand mag maximaal 5MB groot zijn.',
    //     minFileSize: 'Het geuploade bestand is te klein.',
    //     uploadError: 'Er ging iets mis bij het uploaden',
    // };
</script>

<script type="text/template" id="fileupload-empty">
    <li>
        No files uploaded
    </li>
</script>

<?php include(__DIR__ . '/../../templates/footer.php'); ?>
