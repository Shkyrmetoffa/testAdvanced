import { form, tbody } from './model';
import { view } from './view';

class Controller {
    constructor() {}
    addUser() {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let name = form.name.value;
            let email = form.email.value;
            let role;
            let options = form.account.options;
            for (let i = 0; i < options.length; i++) {
                let cell = options[i];
                if (cell.selected) {
                    role = cell.value;
                }
            }
            this.saveToLocalStorage(name, email, role);
            name = localStorage.getItem("name");
            email = localStorage.getItem("email");
            role = localStorage.getItem("role");

            view.createTag(name, email, role);
            form.reset();
        });
    }
    saveToLocalStorage(name, email, role) {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("role", role);
    }
    createInputText(value, content) {
        return `<input type="text" id="text" value="${content}" required="">`;
    }

    editUser() {
        tbody.addEventListener('dblclick', (e) => {
            if (e.target.tagName == "A") {
                let a = e.target;
                let value = e.target.textContent;
                let inputText = this.createInputText(value, a.textContent);
                a.textContent = "";
                a.insertAdjacentHTML("beforeEnd", inputText);

                this.saveAfterEdit();
            };
        });
    }
    saveAfterEdit() {
        let inputText = document.getElementById('text');
        let a = document.querySelector('a');

        inputText.addEventListener('blur', () => {
            inputText.focus();
            a.innerHTML = inputText.value;
            a.style.display = 'inline-block';
            inputText.style.display = 'none';
        });
    }
    render() {
        this.addUser();
        this.editUser();
    }
}
let controller = new Controller();
controller.render();