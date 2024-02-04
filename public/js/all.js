async function http(url, data = {}, method = 'GET') {
  if (method === 'GET') {
    return await fetch(url);
  }

  return await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

function createElement(tag = 'div', attributes = {}, otehrsAttributes = {}, children = [], father = "", events = {}) {
  const element = document.createElement(tag);

  Object.keys(attributes)?.forEach(key => element.setAttribute(key, attributes[key]));
  Object.keys(otehrsAttributes)?.forEach(key => element[key] = otehrsAttributes[key]);
  Object.keys(children)?.forEach(key => createElement(children[key].tag, children[key].attributes, children[key].otehrsAttributes, children[key].children, element));
  Object.keys(events)?.forEach(key => element.addEventListener(key, events[key]));

  if (father)
    father.appendChild(element);
  else
    return element;
}

function dateFormat(datee = new Date(), format = 'DD de MM de YYYY ás HH:mm', lang = 'pt-br') {
  let date = new Date(datee);

  if (isNaN(date.getTime()))
    date = new Date();

  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
    month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1,
    year = date.getFullYear(),
    hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
    minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
    second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds(),
    months = new Array(12).fill(0).map((_, i) => new Date(2020, i, 1).toLocaleString(lang, { month: 'long' }));

  switch (format) {
    case 'DD/MM/YYYY':
      return `${day}/${month}/${year}`;
    case 'DD/MM/YYYY HH:mm':
      return `${day}/${month}/${year} ${hour}:${minute}`;
    case 'DD/MM/YYYY HH:mm:ss':
      return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
    case 'DD de Month de YYYY':
      return `${day} de ${months[month - 1]} de ${year}`;
    case 'DD de Month de YYYY ás HH:mm':
      return `${day} de ${months[month - 1]} de ${year} às ${hour}:${minute}`;
    case 'DD de Month de YYYY ás HH:mm:ss':
      return `${day} de ${months[month - 1]} de ${year} às ${hour}:${minute}:${second}`;
    case 'DD de Month às HH:mm':
      return `${day} de ${months[month - 1]} às ${hour}:${minute}`;
    case 'HH:mm':
      return `${hour}:${minute}`;
    case 'HH:mm:ss':
      return `${hour}:${minute}:${second}`;
    default:
      return `${day}/${month}/${year}`;
  }
}

function createAlert(message, type = 'info', time = 5000) {
  const alert = createElement('div', {
    class: 'alert alert-' + type,
    role: 'alert'
  }, {
    innerHTML: message
  });

  document.body.appendChild(alert);

  setTimeout(() => alertElement.remove(), time);
}

function IDgenerator(quantity = 10) {
  const alp =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZLMNOPQRSTUVWXYZYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const d = new Date(),
    minutes = d.getMinutes(), // 0-59
    seconds = d.getSeconds(), // 0-59
    milliseconds = d.getMilliseconds(); // 0-999

  const random = (min = 0, max = alp.length) => {
    return Math.random() * (max - min) + min;
  };

  const part = () => {
    const option = Math.random() * (8 - 1) + 1;
    const length = alp.length - 1;

    if (option === 1 || option == 5) return alp.charAt(random(0, length));
    if (option === 2 || option == 6)
      return alp.charAt(random(milliseconds, length));
    if (option === 3 || option == 7)
      return alp.charAt(random(minutes, length));
    if (option === 4 || option == 8)
      return alp.charAt(random(seconds, length));
    else return alp.charAt(random(0, length));
  };

  let id = "";
  for (let i = 0; i < quantity; i++) id += part();

  return id;
}

const btnsModalOpen = document.querySelectorAll('[data-modal-open]');
const modalsComponentes = document.querySelectorAll('[data-modal]');
const btnsModalClose = document.querySelectorAll('[data-modal-close]');

btnsModalOpen?.forEach(btn => {
  btn.addEventListener('click', () => document.querySelector(`[data-modal="${btn.dataset.modalOpen}"]`)?.classList.add('modal-open'));
});

btnsModalClose?.forEach(btn => {
  btn.addEventListener('click', () => document.querySelector(`[data-modal="${btn.dataset.modalClose}"]`)?.classList.remove('modal-open'));
});

modalsComponentes?.forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('modal-open');
  });

  document.addEventListener('keyup', e => {
    if (e.key === 'Escape') modal.classList.remove('modal-open');
  });
});

const inputSearch = document.getElementById('search'),
  inputTo = document.getElementById('to'),
  divUsersSuggestions = document.getElementById('users-suggestions');

inputSearch?.addEventListener('input', () => {
  const value = inputSearch.value;

  if (value.length > 0) {
    divUsersSuggestions.innerHTML = '';

    http('/search/user/', { data: value }, 'POST')
      .then(data => data.json())
      .then(data => {
        if (data.status === 200) {
          data.users?.forEach(user => {
            createElement('div', {}, {}, [{
              tag: 'div',
              attributes: {
                style: 'display: flex; align-items: center; padding: 0.5em; border-bottom: 1px solid #ccc; cursor: pointer;'
              },
              children: [{
                tag: 'img',
                attributes: {
                  src: user.avatar,
                  width: '30px',
                  height: '30px',
                  style: 'border-radius: 50%;'
                }
              }, {
                tag: 'span',
                attributes: {
                  style: 'margin-left: 0.5em;'
                },
                children: [{
                  tag: 'strong',
                  attributes: {},
                  otehrsAttributes: {
                    innerHTML: user.name + ' - ' + user.username
                  }
                },
                {
                  tag: 'small',
                  attributes: {
                    style: 'display: block;'
                  },
                  otehrsAttributes: {
                    innerHTML: user.email
                  }
                }]
              }]
            }],
              divUsersSuggestions,
              {
                click: () => {
                  inputTo.value = user.id;
                  inputSearch.value = user.email;
                  divUsersSuggestions.innerHTML = '';
                }
              });
          });
        } else {
          divUsersSuggestions.innerHTML = 'Nenhum usuário encontrado';
        }
      });
  } else {
    divUsersSuggestions.innerHTML = 'Nenhum usuário encontrado';
  }
});