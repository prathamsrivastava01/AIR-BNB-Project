(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {

    const fields = form.querySelectorAll('input[required], textarea[required]')

    // Submit validation
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) event.preventDefault()
      form.classList.add('was-validated')

      fields.forEach(f => {
        f.classList.toggle('is-invalid', !f.value.trim())
        f.classList.toggle('is-valid', !!f.value.trim())
      })
    })

    // Real-time validation on typing
    fields.forEach(f => {
      f.addEventListener('input', () => {
        f.classList.toggle('is-invalid', !f.value.trim() && form.classList.contains('was-validated'))
        f.classList.toggle('is-valid', !!f.value.trim())
      })
    })

  })
})();
