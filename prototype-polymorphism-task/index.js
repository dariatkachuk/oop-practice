function CreateHtmlElement() {
    this.click = function() {
        console.log('clicked');
    }
}

CreateHtmlElement.prototype.focus = function() {
    console.log('focused');
}


function CreateHtmlSelectElement(items = []/*...items*/) {
    this.items = items/*[...items]*/;
    this.addItem = function(item) {
        this.items.push(item);
    };
    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    this.render = function() {
        return `
        <select>${this.items.map(item => `
            <option>${item}</option>`).join('')}
        </select>`;
    }

}

//CreateHtmlSelectElement.prototype = Object.create(CreateHtmlElement.prototype); // doesnt work because prototype doesnt have click method
CreateHtmlSelectElement.prototype = new CreateHtmlElement(); // creating new object that has click method
CreateHtmlSelectElement.prototype.constructor = CreateHtmlSelectElement;


function CreateImgElement(source) {
    this.source = source;

    this.render = function() {
        return `<img src="${this.source}" />`;
    };
}

CreateImgElement.prototype = new CreateHtmlElement();
CreateImgElement.prototype.constructor = CreateImgElement;


const elements = [
    new CreateHtmlSelectElement([1, 2, 3]),
    new CreateImgElement('http://')
];

for (let elem of elements)
    console.log(elem.render());





