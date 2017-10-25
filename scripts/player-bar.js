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

  // ALLOWS CLICKING ON TIME RANGE SLIDER TO CHANGE PLAYBACK POSITION OF CURRENT SONG
  $('#time-control input').on('input', function (event) {
    player.skipTo(event.target.value);
  });

  // SETS TIME AND INTERVALS SLIDER
  setInterval( () => {
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
    const songTime = player.prettyTime(currentTime);
    $('#time-control .current-time').text( songTime );
    const songTotal = player.prettyTime(duration);
    $('#time-control .total-time').text( songTotal );
    $('#time-control input').val(percent);
  }, 1000);

  //  VOLUME CONTROL SLIDER
  $('#volume-control input').on('input', function (event) {
    player.setVolume(event.target.value);
  });

});
