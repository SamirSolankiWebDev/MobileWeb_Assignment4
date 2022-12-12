// Example starter JavaScript for disabling form submissions if there are invalid fields
// (() => {
//   'use strict'

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   const form = document.getElementById('needs-validation')

//   // Loop over them and prevent submission
//   Array.from(form).forEach(form => {
//     form.addEventListener('submit', event => {
//       event.preventDefault()
//       event.stopPropagation()
//       if (form.checkValidity()) {
//         // validation passed, so we can open a modal
//         // This link leads to the documentation on how to create a modal in JavaScript
//         // https://getbootstrap.com/docs/5.2/components/modal/#via-javascript
//         // Given the code found there, first create your new instance of a Modal, by selecting your pages HTML modal (you don't need to pass in options)

//         // then open it by using the show() method
//         $('#exampleModal').modal('show');

//       }

//       form.classList.add('was-validated')
//     }, false)
//   })
// })()

(function () {
  "use strict";

  var form = document.getElementById("needs-validation");
  form.addEventListener(
    "submit",
    function (event) {
      required();
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    },
    false
  );

  $("body, .close").click(function () {
    $("#exampleModal").modal("hide");
  });
})();

function required() {
  $("input").each(function () {
    if ($(this).val() != "") {
      console.log("all inputs filled");
      $("#exampleModal").modal("show");
    } else {
      console.log("theres an empty input");
      return false;
    }
  });
}
