exports.createMarkup = (post) => {
	const date = new Date();
	return(
		`<!doctype html>
		<html lang="en" prefix="op: http://media.facebook.com/op#">
		<head>
  		<meta charset="utf-8">  
  		<link rel="canonical" href="https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg/">
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
						<a href=${post.itunes_url}>iTunes</a>|<a href=${post.itunes_url}>Spotify</a>|<a href=${post.itunes_url}>Tidal</a>|<a href=${post.itunes_url}>Amazon</a>|<a href=${post.itunes_url}>Google</a>|<a href=${post.itunes_url}>Youtube</a>
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
	    </article>
	  </body>
		</html>`
	);
}