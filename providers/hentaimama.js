function getStreams(tmdbId, mediaType, season, episode) {
  /*
   * This provider intentionally does not attempt to bypass
   * DRM, authentication, or protected player mechanisms.
   *
   * A direct publicly exposed HLS/MP4 URL is required.
   *
   * Hentaimama episode URLs are not derivable from a TMDB ID alone,
   * so without an accessible public stream endpoint this provider
   * cannot resolve a playable source.
   */

  console.log(
    "[Hentaimama] Requested:",
    tmdbId,
    mediaType,
    season,
    episode
  );

  return Promise.resolve([]);
}

module.exports = {
  getStreams
};
