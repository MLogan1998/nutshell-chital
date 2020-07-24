import authData from '../../../helpers/data/authData';
import classData from '../../../helpers/data/classesData';
import utils from '../../../helpers/utils';
import './buildClasses.scss';

const buildClassModule = () => {
  let domString = '';
  classData.getClasses()
    .then((classes) => {
      domString += `
      <h2 class="homeH3 mt-2">Classes</h2>
      <div class=classCreate>
      `;
      if (authData.isAuthenticated()) {
        domString += '<button class="btn btn-primary createClassBtn">Create A Class<i class="fas fa-plus ml-1"></i></button>';
      } else {
        domString += '<button class="btn btn-primary createClassBtn hide">Create A Class<i class="fas fa-plus ml-1"></i></button>';
      }
      domString += `
      </div>
      <div class="classForm"></div>
      <div class="classContainer mt-1">
      `;
      classes.forEach((singleClass) => {
        domString += `
        <div id=${singleClass.id} class="card classCard" style="width: 18rem;">
        <img src="${singleClass.imageUrl}" class="card-img-top" alt="...">
        <div class="card-header lassTitle">
        <h5 class="text-center">${singleClass.name}</h5>
        </div>
        <div class ="card-body text-center">
        `;
        if (authData.isAuthenticated()) {
          domString += '<button class="btn btn-warning classEditBtn">Edit</button>';
        } else {
          domString += '<button class="btn btn-warning classEditBtn hide">Edit</button>';
        }
        domString += `
        `;
        if (authData.isAuthenticated()) {
          domString += '<button class="btn btn-danger deleteClassIcon">Delete</button>';
        } else {
          domString += '<button class="btn btn-danger deleteClassIcon hide">Delete</button>';
        }
        domString += `
        </div>
        <div class="card-footer classFooter">
        <p class="text-center mb-0"><span class="footerBold">Schedule: </span>${singleClass.schedule}</p>
        </div>
        </div>
        `;
      });
      domString += '</div>';
      utils.printToDom('#content', domString);
    })
    .catch((err) => console.error('bork', err));
};

export default {
  buildClassModule,
};
