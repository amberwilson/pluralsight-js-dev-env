import "./index.css";
import { getUsers, deleteUser } from "./api/userApi";

getUsers().then(result => {
  let usersBody = "";
  result.forEach(user => {
    usersBody += `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
    </tr>`;
  });

  global.document.getElementById("users").innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName("deleteUser");

  // Must user Array.from to create a real array from  DOM collection
  // getElementsByClassname only returns an "array like" object
  Array.from(deleteLinks, link => {
    link.onclick = event => {
      event.preventDefault();
      if (confirm("Are you sure want to delete this user?")) {
        const element = event.target;
        deleteUser(element.attributes["data-id"].value);
        const row = element.parentNode.parentNode;
        row.parentNode.removeChild(row);
      }
    };
  });
});
