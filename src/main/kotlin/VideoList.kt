import csstype.FontWeight
import csstype.NamedColor
import emotion.react.css
import react.FC
import react.Props
import react.dom.html.ReactHTML.h3
import react.dom.html.ReactHTML.p
import react.key

external interface VideoListProps : Props {
    var title: String
    var videos: List<Video>
    var selectedVideo: Video?
    var onSelectVideo: (Video) -> Unit
}

val VideoList = FC<VideoListProps> {  props ->
    h3 {
        +props.title
    }
    for (video in props.videos) {
        p {
            key = video.id.toString()
            onClick = {
                props.onSelectVideo(video)
            }
            if (video == props.selectedVideo) {
                css {
                    fontWeight = FontWeight.bold
                    color = NamedColor.blueviolet
                }
                +"▶ "
            }
            +"${video.speaker}: ${video.title}"
        }
    }
}