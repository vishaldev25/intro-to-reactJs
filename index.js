const fullName = (user) => user.firstName + " " + user.lastName;
const user = { firstName: "Vishal", lastName: "Dev25" };
const className = "greeting";
const element = (
  <div>
    <h1 className={className}>Hello {fullName(user)}!</h1>
    <p>Its pleasure to see you !!</p>
    <button>Click Here</button>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
