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
      max: 50,
    },
    {
      control: "text",
      name: "firstName",
      label: "FirstName",
      min: 3,
      max: 5,
    },
    {
      control: "text",
      name: "lastName",
      label: "LastName",
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
    {
      control: "checkbox",
      name: "active",
      label: "Active",
    },
    {
      name: "description",
      label: "Description",
      rows: 5,
    },
    {
      name: "gender",
      label: "Gender",
      options: [
        {
          value: "man",
        },
        {
          value: "woman",
        },
      ],
    },
    {
      control: "password",
      name: "password",
      label: "Password",
    },
  ],
};

const generateForm = (form) => {
  let chosenForm = document.createElement("div");
  chosenForm.classList.add('chosenForm');

  chosenForm.innerHTML = `
    <form>
      <p>formName: ${form.name}</p>

      <label for="${form.fields[0].label}">
        ${form.fields[0].label}
        <input id="${form.fields[0].label}" placeholder="${form.fields[0].name}" type="${form.fields[0].control}" maxlength="${form.fields[0].max}" />
      </label>

      <label for="${form.fields[1].label}">
        ${form.fields[1].label}
        <input id="${form.fields[1].label}" placeholder="${form.fields[1].name}" type="${form.fields[1].control}" maxlength="${form.fields[1].max}" />
      </label>

      <label for="${form.fields[2].label}">
        ${form.fields[2].label}
        <input id="${form.fields[2].label}" placeholder="${form.fields[2].name}" type="${form.fields[2].control}" maxlength="${form.fields[2].max}" />
      </label>

      <label for="${form.fields[3].label}">
        ${form.fields[3].label}
        <input id="${form.fields[3].label}" placeholder="${form.fields[3].name}" type="${form.fields[3].control}" max="${form.fields[3].max}" min="${form.fields[3].min}" />
      </label>

      <label for="${form.fields[4].label}">
        ${form.fields[4].label}
        <input id="${form.fields[4].label}" placeholder="${form.fields[4].name}" type="${form.fields[4].control}" maxlength="${form.fields[4].max}" />
      </label>

      <label for="${form.fields[5].label}">
        ${form.fields[5].label}
        <input id="${form.fields[5].label}" placeholder="${form.fields[5].name}" type="${form.fields[5].control}" />
      </label>

      <label for="${form.fields[6].label}">
        ${form.fields[6].label}
        <textarea id="${form.fields[6].label}" name="${form.fields[6].name}" rows="${form.fields[6].rows}"></textarea>
      </label>

      <label for="${form.fields[7].name}">
        ${form.fields[7].name}
        <select>
          <option>${form.fields[7].options[0].value}</option>
          <option>${form.fields[7].options[1].value}</option>
        </select>
      </label>

      <label for="${form.fields[8].label}">
        ${form.fields[8].label}
        <input id="${form.fields[8].label}" placeholder="${form.fields[8].name}" type="${form.fields[8].control}" maxlength="${form.fields[8].max}" />
      </label>

    </form>
  `;

  localStorage.setItem("form", chosenForm.outerHTML);
};

let resultForm = document.createElement("div");
resultForm.innerHTML = localStorage.getItem("form");

body.appendChild(resultForm)