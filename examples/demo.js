var columns1 = $('#example1').columns({
  data: [
    {'Emp. Number': 00001, 'First Name':'John', 'Last Name':'Smith' },
    {'Emp. Number': 00002, 'First Name':'Jane', 'Last Name':'Doe' },
    {'Emp. Number': 00003, 'First Name':'Ted', 'Last Name':'Johnson' },
    {'Emp. Number': 00004, 'First Name':'Betty', 'Last Name':'Smith' },
    {'Emp. Number': 00005, 'First Name':'Susan', 'Last Name':'Wilson' },
    {'Emp. Number': 00006, 'First Name':'John', 'Last Name':'Doe' },
    {'Emp. Number': 00007, 'First Name':'Bill', 'Last Name':'Watson' },
    {'Emp. Number': 00008, 'First Name':'Walter', 'Last Name':'Wright' }
  ]
});

//example 2
$.ajax({
  url:'data.json',
  dataType: 'json',
  success: function(json) {
    example2 = $('#example2').columns({
      data:json
    }); 
  }
}); 

//example 3: schema
$.ajax({
  url:'data.json',
  dataType: 'json',
  success: function(json) {
    example3 = $('#example3').columns({
      data:json,
      schema: [
        {"header":"ID", "key":"id"},
        {"header":"Name", "key":"name"},
        {"header":"Email", "key":"email"},
        {"header":"Gender", "key":"gender"}
      ]
    });
  }
});


//example 4: schema&template
$.ajax({
  url:'data.json',
  dataType: 'json',
  success: function(json) {
    example3 = $('#example4').columns({
      data:json,
      schema: [
        {"header":"ID", "key":"id", "template":"000{{id}}"},
        {"header":"Name", "key":"name"},
        {"header":"Email", "key":"email", "template":'&lt;a href="mailto:{{email}}"&gt;{{email}}&lt;/a&gt;'},
        {"header":"Gender", "key":"gender"}
      ]
    });
  }
});

//example 5:schema&condition
$.ajax({
  url:'data.json',
  dataType: 'json', 
  success: function(json) { 
    example4 = $('#example5').columns({
      data:json,
      schema: [
        {"header":"ID", "key":"id", "template":"000{{id}}"},
        {"header":"Name", "key":"name", "template":'{{#name}} {{name}} {{/name}} {{^name}} Unknown Author {{/name}}'},
        {"header":"Email", "key":"email", "template":'<a href="mailto:{{email}}">{{email}}</a>'},
        {"header":"Gender", "key":"gender", "condition":function(val) {return (val=="male");}}
      ]

    }); 
  }
}); 

//example 6:gotpage
$.ajax({
  url:'data.json',
  dataType: 'json',
  success: function(json) {
    example6 = $('#example6').columns({
      data:json,
      schema: [
        {"header":"ID", "key":"id", "template":"000{{id}}-{{name}}"},
        {"header":"Name", "key":"name", "template":'{{#name}} {{name}} {{/name}} {{^name}} Unknown Author {{/name}}'},
        {"header":"Email", "key":"email", "template":'<a href="mailto:{{email}}">{{email}}</a>'}
      ],
      templateFile: '../templates/custom.mst',
      plugins:['gotopage']

    });
  }
});

//example 7:ajaxPaging
$.ajax({
  url:'data.php',
  data: {"page": 1, "size": 5},
  dataType: 'json',
  success: function(json) {
    console.dir(json);
    example7 = $('#example7').columns({
      data:json.data,
      pages: json.pages,
      total: json.total,
      plugins:['ajaxpaging']
    });
  }
});

//example 8
$.ajax({
  url:'data.json',
  dataType: 'json', 
  success: function(json) { 
    example8 = $('#example8').columns({
      data:json,
      templateFile: '../templates/default.mst',
      schema: [
        {"header":"ID", "key":"id", "template":"000{{id}}"},
        {"header":"Name", "key":"name"},
        {"header":"Email", "key":"email", "template":'<a href="mailto:{{email}}">{{email}}</a>'},
        {"header":"Gender", "key":"gender"}
      ]

    }); 
  }
});

$('#example8Button').click(function() { 
  $('#example8').columns('destroy');

  $.ajax({
    url:'data.json',
    dataType: 'json', 
    success: function(json) { 
      example8 = $('#example8').columns({
        data:json,
        schema: [
          {"header":"Name", "key":"name"},
          {"header":"Email", "key":"email", "template":'<a href="mailto:{{email}}">{{email}}</a>'},
          {"header":"Address", "key":"address"},
          {"header":"City", "key":"city"},
          {"header":"State", "key":"state"},
          {"header":"Zip", "key":"zip"}
        ]
      });
    }
  });
});
