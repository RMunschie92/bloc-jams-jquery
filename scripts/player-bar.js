$(document).ready(function () {
  // PAUSE/PLAY BUTTON
  $('button#play-pause').click(function() {
    player.playPause();
    $(this).attr('playState', player.playState);
  });

  // NEXT BUTTON
  $('button#next').click( function() {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length) { return; }

    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
  });

  // PREVIOUS BUTTON
  $('button#previous').click(function () {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const previousSongIndex = currentSongIndex - 1;
    if (previousSongIndex < 0) { return; }

    const previousSong = album.songs[previousSongIndex];
    player.playPause(previousSong);
  });

});
