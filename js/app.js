document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', createdNewForm);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', deleteAll);
})

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
