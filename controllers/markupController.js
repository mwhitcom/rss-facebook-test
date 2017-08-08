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
	        <figure>
	          <img src="${post.image}" />
					</figure>
					<h1>${post.playlist_name}</h1>
					<h2>
						Stream On: 
						<span><a href=${post.itunes_url}>iTunes | </a></span>
						<span><a href=${post.itunes_url}>Spotify | </a></span>
						<span><a href=${post.itunes_url}>Tidal | </a></span>
						<span><a href=${post.itunes_url}>Amazon | </a></span>
						<span><a href=${post.itunes_url}>Google | </a></span>
						<span><a href=${post.itunes_url}>Youtube</a></span>
					</h2>
	        <time class="op-published" datetime=${date}>${date}</time>        
				</header>
				<p>Song List</p>
				<ol>
					<li>Song Title</li>
					<li>Song Title</li>
					<li>Song Title</li>
					<li>Song Title</li>
					<li>Song Title</li>
					<li>Song Title</li>
				</ol>
				<p>Playlist Radio</p>
	    </article>
	  </body>
		</html>`
	);
}