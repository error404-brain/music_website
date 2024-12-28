import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SongList = () => {
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null); // Define selectedSong state
  const [audio, setAudio] = useState(null); // State to handle audio instance
  const [currentTime, setCurrentTime] = useState(0); // State for current playback time
  const [duration, setDuration] = useState(0); // State for the song duration

  useEffect(() => {
    // Fetch all songs from the API
    axios.get('http://localhost:3000/api/songs')
      .then(response => {
        console.log(response.data);  // Check the API response
        if (Array.isArray(response.data)) {
          const processedSongs = response.data.map(song => ({
            ...song,
            audioFile: song.audioFile?.replace('uploadMusic\\', ''), // Remove the prefix
            imageFile: song.imageFile?.replace('uploadImage\\', '')  // Remove the prefix
          }));
          setSongs(processedSongs);
        } else {
          setSongs([]); // Fallback to an empty array if data is not an array
        }
      })
      .catch(error => {
        console.error('There was an error fetching the songs!', error);
      });
  }, []);

  useEffect(() => {
    if (audio) {
      // Update the current time and duration while the song is playing
      const interval = setInterval(() => {
        if (!audio.paused) {
          setCurrentTime(audio.currentTime);
          setDuration(audio.duration);
        }
      }, 1000); // Update every second

      // Clean up the interval when the audio is paused or finished
      return () => clearInterval(interval);
    }
  }, [audio]);

  const handlePlayMusic = (fileName) => {
    // If there's already an audio playing, stop it
    if (audio) {
      audio.pause();
      setSelectedSong(null);
    }

    // Play the new audio file
    const newAudio = new Audio(`http://localhost:3000/api/songs/play/${fileName}`);
    newAudio.play();
    setAudio(newAudio); // Set the new audio instance
    setSelectedSong(fileName); // Update selectedSong when a song is played
  };

  const handlePauseMusic = () => {
    if (audio) {
      audio.pause();
      setSelectedSong(null); // Reset selectedSong when audio is paused
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Song List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {songs.map(song => (
          <div key={song.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img
              src={`http://localhost:3000/api/songs/image/${song.imageFile}`}
              alt={song.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-center text-gray-800">{song.title}</h3>
            <p className="text-center text-gray-600">{song.artist}</p>
            <p className="text-center text-gray-400">{song.genre}</p>
            <div className="text-center text-gray-500 mt-2">
              {selectedSong === song.audioFile && (
                <span>
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              )}
            </div>
            {song.audioFile && (
              <button
                onClick={() => {
                  if (selectedSong === song.audioFile) {
                    handlePauseMusic(); // Pause if the song is already playing
                  } else {
                    handlePlayMusic(song.audioFile); // Play the new song
                  }
                }}
                className="w-full bg-green-500 text-white py-2 rounded-lg mt-4 hover:bg-green-600 transition-colors"
              >
                {selectedSong === song.audioFile ? 'Pause' : 'Play'}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongList;
