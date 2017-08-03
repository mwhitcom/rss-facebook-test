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
	        <figure>
	          <img src="${post.image}" />
	        </figure>
	        <time class="op-published" datetime=${date}>${date}</time>        
	      </header>
	      <p>Stream On:</p>
				<figure>
					<a href=#><img src="https://calm-wildwood-87141.herokuapp.com/assets/images/google-icon.png"></a>
					<a href=#><img src="https://calm-wildwood-87141.herokuapp.com/assets/images/itunes-icon.png"></a>
					<a href=#><img src="https://calm-wildwood-87141.herokuapp.com/assets/images/spotify-icon.png"></a>
					<a href=#><img src="https://calm-wildwood-87141.herokuapp.com/assets/images/tidal-icon.png"></a>
					<a href=#><img src="https://calm-wildwood-87141.herokuapp.com/assets/images/youtube-icon.png"></a>
					<a href=#><img src="https://calm-wildwood-87141.herokuapp.com/assets/images/amazon-icon.png"></a>
				</figure>
	    </article>
	  </body>
		</html>`
	);
}