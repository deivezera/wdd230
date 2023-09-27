const items = document.getElementsByTagName("*");
const charItems = document.getElementsByClassName("char")

const hexToString = (hex) => {
  let str = '';
  for (let i = 0; i < hex.length; i += 2) {
    const hexValue = hex.substr(i, 2);
    const decimalValue = parseInt(hexValue, 16);
    str += String.fromCharCode(decimalValue);
  }
  return str;
};
function hex_to_ascii(str1)
 {
	var hex  = str1.toString();
	var str = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
 }

var base64reg = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$/


for(var i = 0; i < items.length; i++){
  const itemclass = items[i].getAttribute("data-class")
  const itemTag = items[i].getAttribute("data-tag")
  const itemId = items[i].getAttribute("data-id")
  if(itemclass) {
    // console.log("ITEM class", hexToString(itemclass))
    if(Number(hexToString(itemclass)[0])){
      // console.log(itemclass, hexToString(itemclass))
      // console.log(items[i].childNodes)
    }
    
  }
  if(itemTag){
    // console.log("ITEM TAG", itemTag)
  }
  if(itemId){
    // if(Number(hexToString(itemId))){
    const hash = hexToString(itemId)  
    // console.log('ITEMID',  hexToString(itemId))
    hash.split("").forEach(i => {
      if(Number(i)){
        console.log(itemId, hexToString(itemId), Number(i))
      }
    })
      // console.log(items[i].childNodes)
    // }
    // console.log("ITEM ID", itemId)
  }
}

