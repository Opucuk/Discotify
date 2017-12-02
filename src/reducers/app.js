import {
  APP_STATUS_ALBUMS_FETCHED
} from '../dicts/app'

import {
  SPOTIFY_SEARCH_ALBUM,
  SPOTIFY_SEARCH_ALBUM_SUCCESS,
  SPOTIFY_MATCHING_SUCCESS,
  SPOTIFY_EXPORT_STARTED,
  SPOTIFY_EXPORT_SUCCESS
} from '../dicts/spotify'

const app = (state = {}, action) => {
  switch (action.type) {
    case APP_STATUS_ALBUMS_FETCHED:
    case SPOTIFY_SEARCH_ALBUM_SUCCESS:
      return Object.assign({}, state, {
        release_matching_ready: true
      })

    case SPOTIFY_SEARCH_ALBUM:
      return Object.assign({}, state, {
        release_matching_ready: false
      })

    case SPOTIFY_MATCHING_SUCCESS:
      return Object.assign({}, state, {
        release_matching_done: true
      })

    case SPOTIFY_EXPORT_STARTED:
      return Object.assign({}, state, {
        release_export_ready: true
      })

    case SPOTIFY_EXPORT_SUCCESS:
      return Object.assign({}, state, {
        release_export_done: true
      })

    default:
      return state
  }
}

export default app
