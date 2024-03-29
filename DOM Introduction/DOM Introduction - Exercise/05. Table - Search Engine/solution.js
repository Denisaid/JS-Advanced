function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const input = document.getElementById('searchField');
   const rows = document.querySelectorAll('tbody tr');

   function onClick() {
      for (const row of rows) {
         row.classList.remove('select');
         if (input.value !== '' && row.textContent.includes(input.value)) {
            row.className = 'select';
         }
      }
      input.value='';
   }
}