let figlet = require('figlet');

let getFiglet = (word, font) => {

    return figlet.text(word, {
        font: font,
        horizontalLayout: 'Default',
        verticalLayout: 'Default',
        width: 80,
        whitespaceBreak: true
    }, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data);
    });
}
 

getFiglet('Marina', '3D-ASCII');