import utils from '../../helpers/utils';

const showEditStudentForm = (fbStudentId, {
  imageUrl,
  studentName,
  major,
}) => {
  $('.formDiv').removeClass('hide');
  utils.addFormGrid();
  const domString = `
  <div class="container">
  <div class="closeButton">
    <i class="fas fa-window-close closeForm mb-1"></i>
  </div>
  <h2>Update Student</h2>
  <form class="hide" id="edit-student-form">
    <div class="form-group">
      <label for="inputImageUrl">Address</label>
      <input type="text" class="form-control" id="inputImageUrl" value="${imageUrl}">
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputName">Name</label>
        <input type="text" class="form-control" id="inputName" value="${studentName}">
      </div>
      <div class="form-group col-md-4">
        <label for="inputMajor">Phone Number</label>
        <input type="text" class="form-control" id="inputMajor" value="${major}">
      </div>
    </div>
    <button type="submit" class="btn btn-primary" id="submit-update-student" data-firebase-student-id="${fbStudentId}">Update Student</button>
  </form> 
  </div>
  `;

  utils.printToDom('.formDiv', domString);
};

export default {
  showEditStudentForm,
};
