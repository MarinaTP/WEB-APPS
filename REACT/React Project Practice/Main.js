const rootElement = document.getElementById('root');


const view = React.createElement(
    "ul",
    {className: "ulList"},
    React.createElement("li", {className: "one", key: "1"}, "Apple"),
    React.createElement("li", null, "Banana"),
    React.createElement("li", null, "Peach"),
    React.createElement("li", null, "Grapes"),
);

ReactDOM.render(
    view,
    rootElement
)