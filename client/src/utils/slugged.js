function slugify(text){
   if (text) {
       return text.replace(/[^-a-zA-Z0-9\s+]+/ig, '').replace(/\s+/gi, "-").toLowerCase();
   }

  }

export default slugify
