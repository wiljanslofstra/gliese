<?php include('../templates/_header.php'); ?>

<h2 class="st-heading u-mb2">Forms</h2>

<form>
    <div class="form-group">
        <label for="text_field">Text Field:</label><br />
        <input class="form-control" type="text" id="text_field" />
    </div>

    <div class="form-group">
        <label for="text_field">Text Field (with Parsley.js error):</label><br />
        <input class="form-control" type="text" id="text_field" />
        <ul class="parsley-errors-list">
            <li>This field is required</li>
        </ul>
    </div>

    <div class="form-group">
        <label for="text_field">Text Field (with .form-error):</label><br />
        <input class="form-control" type="text" id="text_field" />
        <div class="form-error">
            This field is required
        </div>
    </div>

    <div class="form-group">
        <label for="text_field">Password Field:</label><br />
        <input class="form-control js-password-input" type="password" id="password_field" />
        <a href="#password_field" class="js-password-toggle">Show password</a>
    </div>

    <div class="form-group">
        <label for="text_field_disabled">Disabled Text Field:</label><br />
        <input class="form-control" type="text" id="text_field_disabled" disabled value="I'm disabled" />
    </div>

    <div class="form-group">
        <label for="text_field_readonly">Readonly Text Field:</label><br />
        <input class="form-control" type="text" id="text_field_readonly" readonly value="I'm readonly" />
    </div>

    <div class="form-group">
        <label for="text_area">Text Area:</label><br />
        <textarea class="form-control" id="text_area"></textarea>
    </div>

    <div class="form-group">
        <label for="text_area_disabled">Disabled Text Area:</label><br />
        <textarea class="form-control" id="text_area_disabled" disabled>I'm disabled</textarea>
    </div>

    <div class="form-group">
        <label for="text_area">Readonly Text Area:</label><br />
        <textarea class="form-control" id="text_area" readonly>I'm readonly</textarea>
    </div>

    <div class="form-group">
        <label for="select_element">Select Element:</label><br />
        <div class="custom-select">
            <select id="select_element">
                <optgroup label="Option Group 1">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </optgroup>
                <optgroup label="Option Group 2">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3" disabled>Disabled Option</option>
                </optgroup>
            </select>
        </div>
    </div>

    <div class="form-group">
        <label for="select_element_disabled">Disabled Select Element:</label><br/>
        <div class="custom-select">
            <select id="select_element_disabled" disabled>
                <option value="1">Unselectable Option</option>
                <option value="2">This option should not even be seen</option>
            </select>
        </div>
    </div>

    <div class="form-group">
        Radio Buttons:<br />
        <input type="radio" name="radios" id="radio_1" value="radio_1" /><label for="radio_1">Radio 1</label><br/>
        <input type="radio" name="radios" id="radio_2" value="radio_2" /><label for="radio_2">Radio 2</label><br/>
        <input type="radio" name="radios" id="radio_3" value="radio_3" disabled /><label for="radio_3">Radio 3 (disabled)</label><br/>
    </div>

    <div class="form-group">
        Checkboxes:<br />
        <input type="checkbox" class="checkbox" name="checkboxes" id="check_1" value="check_1" /><label for="check_1">Checkbox 1</label><br/>
        <input type="checkbox" class="checkbox" name="checkboxes" id="check_2" value="check_2" /><label for="check_2">Checkbox 2</label><br/>
        <input type="checkbox" class="checkbox" name="checkboxes" id="check_3" value="check_3" disabled /><label for="check_3">Checkbox 3 (disabled)</label><br/>
    </div>

    <div class="form-group">
        <label for="file">File Input:</label><br />
        <input type="file" class="form-control file" id="file" />
    </div>

    <div class="form-group">
        <label for="date">Date (with datepicker):</label><br />
        <input class="form-control js-datepicker" type="text" id="text-date" />
    </div>
</form>

<h2 class="st-heading u-mb2">Form inline (sm)</h2>

<form class="u-form-inline-sm">
    <div class="form-group row">
        <label class="col-sm-4">
            Label #1
        </label>

        <div class="col-sm-8">
            <input type="text" class="form-control">
        </div>
    </div>

    <div class="form-group row">
        <label class="col-sm-4">
            Label #2
        </label>

        <div class="col-sm-8">
            <input type="text" class="form-control">
        </div>
    </div>
</form>

<h2 class="st-heading u-mb2">Form inline (md)</h2>

<form class="u-form-inline-md">
    <div class="form-group row">
        <label class="col-md-4">
            Label #1
        </label>

        <div class="col-md-8">
            <input type="text" class="form-control">
        </div>
    </div>

    <div class="form-group row">
        <label class="col-md-4">
            Label #2
        </label>

        <div class="col-md-8">
            <input type="text" class="form-control">
        </div>
    </div>
</form>

<?php include('../templates/_footer.php'); ?>
