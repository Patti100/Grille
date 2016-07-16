var menuparser =  function ()  {
	var menuparserOBJ={
		
		reader : null,
		
		
		initialize : function(){
			reader = new FileReader();
			
			
			
		},
		readfile : function(file){
			var filetext;
			
			reader.file = file; 
			

			  reader.addEventListener('load', function() {
				text = this.result;
			  });
			
           reader.onerror = function(e) 
            {
                switch(e.target.error.code) 
                {
                    case e.target.error.NOT_FOUND_ERR:
                        alert('File Not Found!');
                        break;
                    case e.target.error.NOT_READABLE_ERR:
                        alert('File is not readable');
                        break;
                    case e.target.error.ABORT_ERR:
                        break; // noop
                    default:
                        alert('An error occurred reading this file.');
                };
            };
			
			
			
			reader.readAsText(file);
			return text;
		},
		parsemenu : function (menuname,submenu){
			var loc = window.location;
			var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
			
			var filename = "~/" + "pages/" + menuname + ".txt";
			
			var text = menuparserOBJ.readfile(filename);
			
			
			
		}

	}
	return menuparserOBJ;
}