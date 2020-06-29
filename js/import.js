gLoadJS('formvalidation.js'); 


// Do NOT edit below this line
function gConsole(msg)
{
	// Attempt to add data to JS Console log.
	try      { console.log(msg); }
	catch(e) { /* Browser has no console object */ }
} // end gConsole

function gLoadJS()
{
	// Are there JS files to import?
	var jsFiles = gLoadJS.arguments;
	if(jsFiles.length == 0) 
	{ 
		gConsole('gLoadJS() was called with no scripts to load. :`(');
		return false;
	}
	
	// Attempt to import JS files 					
	scriptPath = scriptURI  = false;

	try { scriptPath = document.getElementById('importJSURI').src; }
	catch(e)
	{
		var allScripts = document.getElementsByTagName('script');
		for(i=0; i<=(allScripts.length-1); i++)
		{
			scriptPath = allScripts[i]['src'];
			if(scriptPath.indexOf('import.js') >= 0) { break; }
		}
		gConsole('gLoadJS() found the scriptPath by using a loop, you should add the ID to this page. See the import.js file for directions.');
	}
	
	scriptURI  = scriptPath.replace(/import\.js/gi, '');
	gConsole('Script URI: ' + scriptURI);
	
	if(!scriptURI) 
	{ 
		gConsole('No script URI path found for importing JavaScripts :(.');
		return false;
	}
	
	for(i = 0; i <= (jsFiles.length - 1); i++) 
	{ 
		try 
		{
			document.write('<scr' + 'ipt type="text/javascript" src="' + scriptURI + jsFiles[i] + '">/* Loaded by gLoadJS() */</scr' + 'ipt>'); 
			gConsole('gLoadJS() added script `' + scriptURI + jsFiles[i] + '` to DOM.');
		}
		catch(e) { gConsole('gLoadJS() encountered an error loading `' + scriptURI + jsFiles[i] + '`'); }
	}
} // end gLoadJS
