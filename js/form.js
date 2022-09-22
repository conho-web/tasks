const body = document.body;

const btn = document.querySelector(".button");

let firstForm = {
  name: "firstForm",

  fields: [
    {
      control: "text",
      name: "userName",
      label: "Username",
      min: 3,
      max: 8,
    },
    {
      control: "text",
      name: "firstName",
      label: "First Name",
      min: 3,
      max: 5,
    },
    {
      control: "text",
      name: "lastName",
      label: "Last Name",
      min: 3,
      max: 50,
    },
    {
      control: "number",
      name: "age",
      label: "Age",
      min: 1,
      max: 100,
    },
    {
      control: "email",
      name: "email",
      label: "Email",
      min: 6,
      max: 50,
    },
  ],
};

const generateForm = (form) => {
  let chosenForm = document.createElement("div");

  chosenForm.innerHTML = `
	<form>
		<p>formName:${form.name}</p>
		<input placeholder="${form.fields[1].name}" type="${form.fields[1].control}" maxlength="${form.fields[1].max}" />
		<input placeholder="${form.fields[2].name}" type="${form.fields[2].control}" maxlength="${form.fields[2].max}" />
		<input placeholder="${form.fields[3].name}" type="${form.fields[3].control}" max="${form.fields[3].max}" min="${form.fields[3].min}" />
		<input placeholder="${form.fields[4].name}" type="${form.fields[4].control}" maxlength="${form.fields[4].max}" />
	</form>
`;
  body.appendChild(chosenForm);
};
