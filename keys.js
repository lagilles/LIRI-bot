console.log("keys loaded\n");

exports.bands = {
  key: process.env.BANDS_KEY
};

exports.omdb = {
  key: process.env.OMDB_KEY
};
exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
