let jsonstring = `{
    "name": "aswin",
    "email": "aswinma14@gmail.com",
    "skills": ["html", "css", "js", "python"]
}`;

let object = JSON.parse(jsonstring);

console.log("name :", object.name);
console.log("email :", object.email);
console.log("skills :", object.skills.join(', '));

