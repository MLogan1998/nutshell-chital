import authData from '../../helpers/data/authData';
import majorData from '../../helpers/data/major/majorData';
import majorCardMaker from './major';
import utils from '../../helpers/utils';

const buildAuthRequiredModal = () => {
  const alertModal = `
  <div class="modal" tabindex="-1" role="dialog" id="myModal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Authentication Required</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>You must be logged in to perform that action.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`;

  return alertModal;
};

const buildMajorList = () => {
  utils.clearGridClasses();
  majorData.getMajors()
    .then((majors) => {
      let domString = buildAuthRequiredModal();
      domString += `
      <div class="formDiv hide"></div>
      <div class="mainModule">
      <h2 class="text-center homeH3 mt-3">Clown College Majors</h2>`;
      if (authData.isAuthenticated()) {
        domString += `
        <div class="text-center">
          <button class="btn btn-primary drop-shadow-1" id="add-major">Add/Create a Major<i class="fas fa-plus ml-1"></i></button>
        </div>
        `;
      } else {
        domString += `
        <div class="text-center"><i class="fas fa-plus-circle fa-2x hide" id="add-major"></i></div>
        `;
      }
      domString += '<div class="d-flex flex-wrap mt-2">';

      majors.forEach((major) => {
        domString += majorCardMaker.majorCardMaker(major);
      });

      domString += `
      </div>
      </div>
      <div class="infoDiv hide"></div>`;

      utils.printToDom('#content', domString);
    })
    .catch((err) => console.error('buildMajorList failed', err));
};

export default {
  buildMajorList,
};
