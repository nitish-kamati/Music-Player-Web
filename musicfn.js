document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const playlist = document.getElementById('playlist');

    const songs = [
        { name: 'Song 1', source: 'song1.mp3' },
        { name: 'Song 2', source: 'song2.mp3' },
        // Add more songs as needed
    ];

    songs.forEach(song => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = song.name;
        link.addEventListener('click', function (event) {
            event.preventDefault();
            audioPlayer.src = song.source;
            audioPlayer.play();
        });
        listItem.appendChild(link);
        playlist.appendChild(listItem);
    });
});
