function loadRepos() {

   let url = 'https://api.github.com/users/testnakov/repos';

   fetch(url)
   .then(onResponse)
   .then(onData)
   .catch(onError);

   function onResponse(res){
      if(!res.ok){
         throw res.json();
      }

      return res.text();
   }

   function onData(data){
      let output = document.getElementById('res');
      output.textContent = data;
   }

   function onError(err){
      console.log(err);
   }
}