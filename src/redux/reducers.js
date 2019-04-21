import { createReducer } from 'redux-starter-kit';
import { saveArtist, removeArtist } from './actions';

const localStorageKey = 'reduxStore';

function saveStateToLocalStorage(state) {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
}

let localStorageState;
try {
  localStorageState = JSON.parse(localStorage.getItem(localStorageKey));
} catch (e) {
  console.error(e);
}

const initialState = localStorageState || {
  savedArtists: [],
  searchQuery: 'Tiger',
};

const rootReducer = createReducer(initialState, {
  [saveArtist]: (state, { payload: id }) => {
    // immer gotcha, can't destruct
    // eslint-disable-next-line
    const savedArtists = state.savedArtists;
    if (!savedArtists.includes(id)) {
      savedArtists.push(id);

      saveStateToLocalStorage(state);
    }
  },
  [removeArtist]: (state, { payload: id }) => {
    const savedArtists = state.savedArtists.filter(_id => _id !== id);

    saveStateToLocalStorage(state);

    return {
      ...state,
      savedArtists,
    };
  },
});

export default rootReducer;
export { initialState };
