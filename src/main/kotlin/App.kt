import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import react.FC
import react.Props
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h1
import react.useEffectOnce
import react.useState

val mainScope = MainScope()

val App = FC<Props> {
    var unwatchedVideos: List<Video> by useState(emptyList())
    var watchedVideos: List<Video> by useState(emptyList())

    useEffectOnce {
        mainScope.launch {
            unwatchedVideos = fetchVideos(25)
        }
    }

    var currentVideo: Video? by useState(null)
    val onClickVideo = { video: Video ->
        currentVideo = if (video != currentVideo) video else null
    }
    h1 {
        +"Hello, React+Kotlin/JS!"
    }
    div {
        VideoList {
            title = "Videos to watch"
            videos = unwatchedVideos
            selectedVideo = currentVideo
            onSelectVideo = onClickVideo
        }
        VideoList {
            title = "Videos watched"
            videos = watchedVideos
            selectedVideo = currentVideo
            onSelectVideo = onClickVideo
        }
    }
    currentVideo?.let { curr ->
        VideoPlayer {
            video = curr
            unwatchedVideo = curr in unwatchedVideos
            onWatchedButtonPressed = {
                if (video in unwatchedVideos) {
                    unwatchedVideos = (unwatchedVideos - video).sortedBy { it.id }
                    watchedVideos = (watchedVideos + video).sortedBy { it.id }
                } else {
                    watchedVideos = (watchedVideos - video).sortedBy { it.id }
                    unwatchedVideos = (unwatchedVideos + video).sortedBy { it.id }
                }
            }
        }
    }
}
