//Map2 method
Array.prototype.map2 = function(callback){
  let mapArr= [];
  for(let i = 0; i < this.length; i++){
    var result = callback(this[i],i);
    mapArr.push(result)
  }
  return mapArr
}




//Filter2 method
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

//Find2 method
Array.prototype.find2 = function(callback){
	for(let index in this){
  	if(this.hasOwnProperty(index)){
    	var result = callback(this[index],index,this)
      if(result){
      	return this[index] 
      }
    }
  }
}