!function() {

const modal = document.querySelector('[data-library-modal]');
const links = document.querySelectorAll('[data-library-list] a');
const iframe = document.querySelector('[data-library-iframe]');
const close = document.querySelector('[data-library-close]');
const body = document.body;

const MODAL_OPEN_CLASS = 'library--open';
const BODY_MODAL_OPEN_CLASS = 'library-is-open';
const LINK_ACTIVE_CLASS = 'library-link-active';

const openModal = () => {
  modal.classList.add(MODAL_OPEN_CLASS);
  body.classList.add(BODY_MODAL_OPEN_CLASS);
};

const closeModal = () => {
  modal.classList.remove(MODAL_OPEN_CLASS);
  body.classList.remove(BODY_MODAL_OPEN_CLASS);
}

const setIframeSrc = url => {
  const currentActiveLink = modal.querySelector(`a[href="${iframe.src}"]`);
  const nextActiveLink = modal.querySelector(`a[href="${url}"]`);

  iframe.src = url;
  nextActiveLink.classList.add(LINK_ACTIVE_CLASS);

  if (currentActiveLink) {
    currentActiveLink.classList.remove(LINK_ACTIVE_CLASS);
  }
}

links.forEach(elem => {
  elem.addEventListener('click', e => {
    e.preventDefault();
    openModal();
    setIframeSrc(e.target.href);
  });
});

close.addEventListener('click', closeModal);

}();
