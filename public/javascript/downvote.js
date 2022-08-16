async function downvoteClickHandler(event) {
    event.preventDefault();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch('/api/comments/downvote', {
      method: 'PUT',
      body: JSON.stringify({
        comment_id: id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
  
  const buttons = document.querySelectorAll(".downvote-btn");
buttons.forEach((button) => {
  button.addEventListener("click", downvoteClickHandler);
});