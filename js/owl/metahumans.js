var settings = {
  "url": "http://homologacao3.azapfy.com.br/api/ps/metahumans",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

