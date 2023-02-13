// crate Map2
Array.prototype.map2 = function(callback){
  let output= [];
  for(let i = 0; i < this.length; i++){
    var result = callback(this[i],i);
    output.push(result)
  }
  return output
}


// ex
// get course.name from courses Arr to render in HTML
const courses  = [
  {
    id: 1,
    name: "Javascript Cơ Bản",
    coin: 500
  }, 
  {
  	id: 2,
    name: "React JS Beginner",    
    coin: 0

  }, 
  {
    id: 3,
    name: "PHP chuyên sâu",
    coin: 0

  },
  {
  	id: 4,
    name: "Javascript Nâng Cao",
    coin: 0

  }
];

var result = courses.map2((course,index)=> {
  return `<li>${course.name}</li>`
}) 