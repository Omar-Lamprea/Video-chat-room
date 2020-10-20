
function openMessageNotification(){
  
  const modalNotification = document.getElementById('modalNotification')

  const showModal = 
    `<div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">New Message</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            A new user without audio and video permissions has entered the room.
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>`
  const div = document.createElement('div')

  div.innerHTML = showModal
  modalNotification.appendChild(div)

  return $('#myModal').modal('toggle')
}
