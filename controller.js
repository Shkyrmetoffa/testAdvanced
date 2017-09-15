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

            view.createTag(name, email, role);

            form.reset();
        });
    }
    saveToLocalStorage(name, email, role) {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("role", role);

        // console.log(localStorage.getItem("name"));
    }
    createTextArea(value) {
        return `<textarea class="edit-area">${value}</textarea>`;
    }
    aNone(tag) {
        let a = tag.firstChild;
        if (a.style.display == 'none') {
            a.style.display = 'inline-block';
        } else {
            a.style.display = 'none';
        }
    }
    editUser() {
        tbody.addEventListener('dblclick', (e) => {
            if (e.target.tagName == "TD") {
                let td = e.target;
                let value = e.target.textContent;
                let textArea = this.createTextArea(value);
                // this.aNone(td);
                td.insertAdjacentHTML("beforeEnd", textArea);
                console.log(textArea);
                this.saveAfterEdit();

            };
        });
    }
    saveAfterEdit() {
        let textArea = document.querySelector('textArea');
        let a = document.querySelector('a');

        textArea.addEventListener('blur', () => {
            console.log('hello');
            a.style.display = 'inline-block';
            a.innerHTML = textArea.textContent;
            console.log(a);

            // textArea.style = none;
        });
    }

    render() {
        this.addUser();
        this.editUser();

    }
}
let controller = new Controller();
controller.render();