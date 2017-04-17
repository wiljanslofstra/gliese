<?php include('../templates/_header.php'); ?>

<div class="js-generator st-generator">
</div>

<div class="u-mb2">
    <button type="button" class="btn btn--secondary js-generator-add">Add row</button>
</div>

<div class="u-mb2">
    <input type="radio" name="form-type" id="form-standard" checked><label for="form-standard">Standard</label>
    <input type="radio" name="form-type" id="form-inline"><label for="form-inline">Inline</label>
    <input type="radio" name="form-type" id="form-inline-sm"><label for="form-inline-sm">Inline SM</label>
    <input type="radio" name="form-type" id="form-inline-md"><label for="form-inline-md">Inline MD</label>
    <input type="radio" name="form-type" id="form-inline-lg"><label for="form-inline-lg">Inline LG</label>
    <input type="radio" name="form-type" id="form-inline-xl"><label for="form-inline-xl">Inline XL</label>
</div>

<div class="u-mb2">
    <label>label col classes</label>
    <input class="form-control u-mb2" type="text" name="form-label-col" value="col-sm-4">

    <label>input col classes</label>
    <input class="form-control " type="text" name="form-input-col" value="col-sm-8">
</div>

<button type="button" class="btn btn--primary js-generator-create">Create form</button>

<pre>
    <code id="output"></code>
</pre>

<script type="text/template" id="generator-row">
    <div class="st-generator-row js-generator-row">
        <select class="form-control" name="type">
            <option value="text" data-type="input">Text</option>
            <option value="email" data-type="input">Email</option>
            <option value="tel" data-type="input">Tel</option>
            <option value="number" data-type="input">Number</option>
            <option value="datepicker" data-type="input">Datepicker</option>
            <option value="textarea" data-type="textarea">Textarea</option>
            <option value="select" data-type="select">Select</option>
            <option value="checkbox" data-type="checkbox">Checkbox</option>
            <option value="radio" data-type="checkbox">Radio</option>
        </select>
        <input class="form-control" type="text" name="label" placeholder="label">
        <input class="form-control" type="text" name="name" placeholder="name">
        <input class="form-control" type="text" name="id" placeholder="id">
        <label><input type="checkbox" name="required" checked>Required?</label>
    </div>
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" src="<?= BASE_PATH; ?>/styleguide/form-generator.js"></script>

<?php include('../templates/_footer.php'); ?>
