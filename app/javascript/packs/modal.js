let modal = (id, modalType) => `
<div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
<div class="block min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

  <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div class="sm:flex sm:items-start">
        <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
            ${modalType == 0 ? 'Excluir post' : 'Excluir usuário'}
          </h3>
          <div class="mt-2">
            <p class="text-sm text-gray-500">
              Você tem certeza que deseja excluir esse ${modalType == 0 ? 'post' : 'usuário'}? Essa ação não poderá ser desfeita.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
      <a rel="nofollow" data-method="delete" href="/${modalType == 0 ? 'blog' : 'user'}/${id}" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">
        Excluir
      </a>
      <button id="closeModal" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
        Cancelar
      </button>
    </div>
  </div>
</div>
</div>
`

window.modalToggle = (id, modalType) => {
  divModal = document.getElementById('modalPlace');
  divModal.innerHTML += modal(id, modalType).replace(/(\r\n|\n|\r)/gm, "");

  document.getElementById('closeModal').addEventListener('click', () => {
    divModal.innerHTML = '';
  })
}