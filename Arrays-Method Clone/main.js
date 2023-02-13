// create Map2
Array.prototype.map2 = function(callback){
  let mapArr= [];
  for(let i = 0; i < this.length; i++){
    var result = callback(this[i],i);
    mapArr.push(result)
  }
  return mapArr
}




//create Filter2
Array.prototype.filter2 = function(callback){
	let filterArr = [];   
	for(let index in this){
  	if(this.hasOwnProperty(index)){
    	let result = callback(this[index],index)
      	if(result){
        	filterArr.push(this[index],index);
        }
    }
  }
  return filterArr
}


