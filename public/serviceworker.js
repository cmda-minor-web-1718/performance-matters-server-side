// Special thanks to (https://github.com/Cascuna)

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('pokeCache')
        .then(function(cache) {
            cache.addAll([
                '../',
                '../views',
                'script/script.js',
                'styles/style.css'
            ])
        })
        .then(self.skipWaiting())
    )
})

self.addEventListener('fetch', function(event){

    event.respondWith(caches.match(event.request)
        .then(function(response){
            if(response) {
                return response // Geef het aan mij als het er al is
            } 
            else{
                return fetch(event.request)
                
                .then(function(newResponse){
                    return caches.open('dynamicPokeCache') // Of voeg het hier aan toe als het er nog niet is
                    
                    .then(function(cache) {
                        cache.put(event.request.url, newResponse.clone())
                        return newResponse
                    })
                })
            }
        })
    )
})