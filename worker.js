//website: https://addresskeys.com/btc-basket
var list = "";
var count = parseInt(document.getElementById("basketcountm").innerText);

function download(data, filename, type) { //copy paste shit
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob)
        window.navigator.msSaveOrOpenBlob(file, filename);
    else {
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

function dump(separator)
{
	for(let i = 0; i < count; i++)
	{
		if(i == count-1)
			list += document.getElementsByTagName("td")[(5*(i+1))+i].innerText;
		else
			list += document.getElementsByTagName("td")[(5*(i+1))+i].innerText + separator;
	}
	download(list, + new Date + ".txt", "private-keys");
	list = "";
}
//usage: dump(separator);
dump("\n");
dump(":");
dump(",");
dump(", ");
dump(";");