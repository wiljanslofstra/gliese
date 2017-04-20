(function() {
  var _this = this;
  var $el = $('.js-generator');
  var rowTemplate = $('#generator-row').html();
  var $addRow = $('.js-generator-add');
  var formType = '';
  var labelClass = '';
  var inputClass = '';

  function init() {
    $el.append(rowTemplate);

    $addRow.on('click', function(e) {
      e.preventDefault();
      $el.append(rowTemplate);
    });

    $('.js-generator-create').on('click', function(e) {
      e.preventDefault();
      $('#output').text(createForm());
    });

    $el.on('keyup', '[name="name"]', function() {
      var $el = $(this);
      var $row = $el.parents('.st-generator-row');
      var $id = $row.find('[name="id"]');

      if (!$id.hasClass('is-changed')) {
        $id.val($el.val());
      }
    });

    $el.on('keyup', '[name="id"]', function() {
      $(this).addClass('is-changed');
    });
  }

  function createInputWrap(obj, content) {
    console.log(formType);
    if (formType === 'form-standard') {
      return `
    <div class="form-group" id="${obj.id}-wrapper">
        <label class="control-label" for="${obj.id}">
            ${obj.label}
        </label>
        ${content}
    </div>
      `;
    } else {
      return `
    <div class="form-group row">
        <label class="control-label ${labelClass}" for="${obj.id}">
            ${obj.label}
        </label>

        <div class="${inputClass}" id="${obj.id}-wrapper">
            ${content}
        </div>
    </div>
      `;
    }
  }

  var createInput = {
    createSelect: function(obj) {
      var required = (obj.required) ? ' required' : '';

      return createInputWrap(obj, `
        <div class="custom-select">
            <select name="${obj.name}" id="${obj.id}"${required} data-parsley-errors-container="#${obj.id}-wrapper">
                <option value="">Maak een keuze</option>
                <option value="keuze-1">Keuze #1</option>
            </select>
        </div>`);
    },

    createInput: function(obj) {
      var required = (obj.required) ? ' required' : '';
      var type = obj.type;
      var isDatepicker = (type === 'datepicker');
      var extraClass = '';

      if (isDatepicker) {
        extraClass = ' js-datepicker';
        obj.type = 'text';
      }

      return createInputWrap(obj, `
        <input class="form-control${extraClass}" type="${obj.type}" name="${obj.name}" id="${obj.id}"${required}>`);
    },

    createTextarea: function(obj) {
      var required = (obj.required) ? ' required' : '';

      return createInputWrap(obj, `
        <textarea class="form-control" name="${obj.name}" id="${obj.id}"${required}></textarea>`);
    },

    createCheckbox: function(obj) {
      var required = (obj.required) ? ' required' : '';
      var type = obj.type;

      return createInputWrap(obj, `
        <input type="${type}" name="${obj.name}" id="${obj.id}-1"${required}>
        <label for="${obj.id}-1">Optie #1</label>

        <input type="${type}" name="${obj.name}" id="${obj.id}-2"${required}>
        <label for="${obj.id}-2">Optie #2</label>`);
    },
  };

  function createForm() {
    var $rows = $('.js-generator-row');
    var data = [];
    formType = $('[name="form-type"]:checked').attr('id');
    labelClass = $('[name="form-label-col"]').val();
    inputClass = $('[name="form-input-col"]').val();

    $rows.each(function(i, row) {
      var type = $(row).find('[name="type"] option:selected').data('type');
      var typeFunc = `create${type[0].toUpperCase() + type.slice(1)}`;
      var input = $(row).find('input, select, textarea');
      var obj = {};

      input.toArray().forEach(function(item) {
        if (item.type === 'checkbox' || item.type === 'radio') {
          obj[item.name] = item.checked;
        } else {
          obj[item.name] = item.value;
        }
      });

      data.push(createInput[typeFunc](obj));
    });

    var formClass = (formType === 'form-standard') ? '' : 'u-' + formType;

    return `
<form method="POST" action="" class="${formClass} js-form">
    ${data.join('')}
</form>
    `;
  }

  init();
})();
