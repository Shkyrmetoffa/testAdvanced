import { form } from './model';
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
            view.createTag(name, email, role);
            form.reset();
        });
    }
    render() {
        this.addUser();
    }
}
let controller = new Controller();
controller.render();