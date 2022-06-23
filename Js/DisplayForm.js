window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const HeaderHtml = "<tr><th>Full Name</th><th>Address</th><th>City</th><th>State</th>" +
    "<th>Phone No</th><th>Zip Code</th><th>Options</th></tr>";
    const innerHtml = `${HeaderHtml}
        
                <tr>
                    <td>Anshul Rathore</td>
                    <td>1 D 23 talwandi</td>
                    <td>
                       Kota
                    </td>
                    <td>Rajasthan</td>
                    <td>91 8764314432</td>
                    <td>324 005</td>
                    <td>
                        <img id="1" onclick="remove(this)" alt="delete" src="/Assets/icons/delete-black-18dp.svg">
                        <img id="1" alt="edit" onclick="update(this)" src="/Assets/icons/create-black-18dp.svg">
                    </td>
                </tr>
                `;
    document.querySelector('#display').innerHTML = innerHtml;
}