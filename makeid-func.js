const makeId = (number) => {
    let text = "";
    let possible = "ABCDEFGHIKLMNOPQRSTYWZ0123456789";

    for (let i = 0; i < number; i++ )
        text+=possible.charAt(Math.floor(Math.random() * possible.length));
        
    return text;
};