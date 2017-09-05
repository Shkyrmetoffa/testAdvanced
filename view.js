class View {
    constructor() {}
    createTag(name, email, role) {
        let tbody = document.querySelector('tbody');
        tbody.innerHTML += `<tr><td><a data-toggle="tab" href="#contact-2" class="client-link">${name}</a>
                                            </td>
                                            <td>
                                                <a data-toggle="tab" href="#" class="client-link">${email}</a>
                                            </td>
                                            <td>
                                                <a data-toggle="tab" href="#contact-2" class="client-link">${role}</a>
                                            </td></tr>`;
        return tbody;
    }
}
let view = new View();
export { view };