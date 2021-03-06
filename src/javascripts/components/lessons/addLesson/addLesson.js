import './addLesson.scss';
import utils from '../../../helpers/utils';
import lessonData from '../../../helpers/data/lesson/lessonData';
import buildLessons from '../displayLessons/lesson';
import auth from '../../../helpers/data/authData';

const showLessonForm = () => {
  if (!auth.isAuthenticated()) return;
  $('.formDiv').removeClass('hide');
  utils.addFormGrid();
  const domString = `
    <div class="closeButton">
        <i class="fas fa-window-close closeForm mb-1"></i>
    </div>
    <form>
      <div class="form-group col-sm-8">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="lesson-name-val" placeholder="Name">
      </div>
      <div class="form-group col-sm-6">
        <label for="lesson-hours">Another label</label>
        <input type="text" class="form-control" id="lesson-hours-val" placeholder="How Long?">
      </div>
      <div class="form-check col-sm-6">
        <label >Materials Provided:</label>
        <select class="form-control" id="lesson-materials-val">
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
    <button class="btn btn-primary" id="addLesson">Submit</button>
    </form>
    `;
  utils.printToDom('.formDiv', domString);
};

const addLessonEvent = (e) => {
  e.preventDefault();
  if (!auth.isAuthenticated()) return;
  const newLesson = {
    name: $('#lesson-name-val').val(),
    hours: $('#lesson-hours-val').val(),
    materialsProvided: $('#lesson-materials-val').val(),
  };
  lessonData.addLesson(newLesson)
    .then(() => {
      buildLessons.printLessons();
      utils.printToDom('#new-lesson-form', '');
    })
    .catch((err) => console.error('add lesson broke', err));
};
export default {
  showLessonForm,
  addLessonEvent,
};
