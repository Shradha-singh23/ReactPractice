//Action Creator
export const selectSong = (song) => {
    //returns an action(object)
    return {
        type: 'SONG_SELECTED',
        payload: song
    };   
};