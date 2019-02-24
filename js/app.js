
const initialLoad = () => {
  const firstSubmitButton = document.querySelector('#initial-form');
  firstSubmitButton.addEventListener('submit', onStartForm);
}

const onStartForm = () => {
  const radioForm= document.querySelector('#initial-form');
  radioForm.classList.add('hidden');
  event.preventDefault();
  newBackground();
  formItem();
}

function newBackground() {
    if (document.getElementById("boxing").checked) {
    document.getElementById("picture").src = "https://images.pexels.com/photos/3797/black-and-white-sport-fight-boxer.jpg?auto=compress&cs=tinysrgb&h=750&w=1260";
  } else if (document.getElementById("weights").checked) {
    document.getElementById("picture").src = "https://images.pexels.com/photos/949132/pexels-photo-949132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
    } else if (document.getElementById("bjj").checked) {
    document.getElementById("picture").src = "https://i.ytimg.com/vi/L7pZ-2u8JnQ/maxresdefault.jpg";
    } else if (document.getElementById("wrestling").checked) {
    document.getElementById("picture").src = "https://cdn.vox-cdn.com/thumbor/nkkCu3w9K8d-Nf4L1RhL7kJg7OU=/0x0:3704x2777/1200x800/filters:focal(1747x580:2339x1172)/cdn.vox-cdn.com/uploads/chorus_image/image/62350557/DSC_5884.0.jpg";
    }
}

const formItem = function (form) {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', createdNewForm);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', deleteAll);
}

const createdNewForm = function (event) {
  event.preventDefault();

  const trainingListItem = createTrainingListItem(event.target);
  const trainingList = document.querySelector('#training-list');
  trainingList.appendChild(trainingListItem);

  event.target.reset();
}

const createTrainingListItem = function (form) {
  const trainingListItem = document.createElement('li');
  trainingListItem.classList.add('training-list-item');

  const training = document.createElement('h2');
  training.textContent = form.training.value;
  trainingListItem.appendChild(training);

  const time = document.createElement('p');
  time.textContent = form.time.value;
  trainingListItem.appendChild(time);

  const day = document.createElement('p');
  day.textContent = form.day.value;
  trainingListItem.appendChild(day);

  const intensity = document.createElement('p');
  intensity.textContent = form.intensity.value;
  trainingListItem.appendChild(intensity);

  return trainingListItem;
}

const deleteAll = function (event) {
  const trainingList = document.querySelector('#training-list');
  trainingList.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', initialLoad)
