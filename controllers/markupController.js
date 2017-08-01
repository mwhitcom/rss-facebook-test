exports.createMarkup = (post) => {
	const date = new Date();
	return(
		`<!doctype html>
		<html lang="en" prefix="op: http://media.facebook.com/op#">
		<head>
  		<meta charset="utf-8">  
  		<link rel="canonical" href="https://calm-wildwood-87141.herokuapp.com/">
  		<meta property="op:markup_version" content="v1.0">
		</head>
	  <body>
	    <article>
	      <header>
	        <h1>${post.playlist_name}</h1>
	        <h2>Article Subtitle</h2>
	        <time class="op-published" datetime=${date}>${date}</time>  
	        <figure>
	          <img src="${post.image}"" />
	          <figcaption>${post.playlist_name}</figcaption>
	        </figure>      
	      </header>
				<figure>
					<a href="${post.spotify_url}">Spotify</a>
					<a href="${post.itunes_url}">iTunes</a>
				</figure>
	    </article>
	  </body>
		</html>`
	);
}