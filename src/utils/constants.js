const GOOGLE_API_KEY = "AIzaSyCUzzLMQZ3oPlz3_VGjDyDNzrwe-V10sgs"

export const LIVE_CHAT_OFFSET = 25

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" + GOOGLE_API_KEY;

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="