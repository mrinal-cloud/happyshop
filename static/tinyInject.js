var script= document.createElement('script');
script.type='text/javascript';
script.src="https://cdn.tiny.cloud/1/1v75cfwbhffpcm3osm7gfsjdrhfrfe73152a32gqao0qpw92/tinymce/5/tinymce.min.js";
document.head.appendChild(script);

script.onload=function(){
tinymce.init({
    selector: "#id_title", //but not required, working as well when comment outing  
    height:546,
    plugins: [
        'advlist autolink link image lists charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
        'table emoticons template paste help'
      ],
      toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
        'bullist numlist outdent indent | link image | print preview media fullpage | ' +
        'forecolor backcolor emoticons | help',
      menu: {
        favs: {title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons'}
      },
      menubar: 'favs file edit view insert format tools table help',
      content_css: 'css/content.css'
    });
}
  // interesting--> this not require at all, if the file name is tinyInject.js. this file can be blank

  // in general this should be in static folder(outer)