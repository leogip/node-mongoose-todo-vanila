document.addEventListener('DOMContentLoaded', () => {
  const btnDelet = document.querySelectorAll('button.btn-delete')

  btnDelet.forEach(btn => {
    btn.addEventListener('click', function(event) {
      event.preventDefault()
      fetch(`http://localhost:3000/${this.dataset.id}`, {
        method: 'DELETE',
        body: this.dataset.id
      })
        .then(response => {
          if (response.ok) {
            location.pathname = '/'
          }
        })
        .catch(err => console.log(err))
    })
  })
})
