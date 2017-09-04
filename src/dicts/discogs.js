const DISCOGS_BASE_URL = 'https://api.discogs.com'

export const DISCOGS_REQUEST_TOKEN_ENDPOINT = new URL('/oauth/request_token', DISCOGS_BASE_URL)
export const DISCOGS_ACCESS_TOKEN_ENDPOINT = new URL('/oauth/access_token', DISCOGS_BASE_URL)
export const DISCOGS_IDENTITY_ENDPOINT = new URL('/oauth/identity', DISCOGS_BASE_URL)
export const DISCOGS_AUTORIZE_TOKEN_URL = new URL('https://www.discogs.com/oauth/authorize')

export function DISCOGS_COLLECTION_ENDPOINT (username) {
  if (!username)
    throw new Error('Username needed!')

  return new URL(`/users/${username}/collection/folders/0/releases`, DISCOGS_BASE_URL)
}

export const DISCOGS_FETCH_ALBUMS = 'DISCOGS_FETCH_ALBUMS'
export const DISCOGS_FETCH_ALBUMS_SUCCESS = 'DISCOGS_FETCH_ALBUMS_SUCCESS'
export const DISCOGS_FETCH_ALBUMS_FAIL = 'DISCOGS_FETCH_ALBUMS_FAIL'

export const DISCOGS_FETCH_USER_INFO = 'DISCOGS_FETCH_USER_INFO'
export const DISCOGS_FETCH_USER_INFO_SUCCESS = 'DISCOGS_FETCH_USER_INFO_SUCCESS'
export const DISCOGS_FETCH_USER_INFO_FAIL = 'DISCOGS_FETCH_USER_INFO_FAIL'

export const DISCOGS_REQUEST_TOKEN = 'DISCOGS_REQUEST_TOKEN'
export const DISCOGS_REQUEST_TOKEN_FAIL = 'DISCOGS_REQUEST_TOKEN_FAIL'

export const DISCOGS_OAUTH_CONFIRM = 'DISCOGS_OAUTH_CONFIRM'
export const DISCOGS_OAUTH_CONFIRM_SUCCESS = 'DISCOGS_OAUTH_CONFIRM_SUCCESS'
export const DISCOGS_OAUTH_CONFIRM_FAIL = 'DISCOGS_OAUTH_CONFIRM_FAIL'