import "./Background.css";
function Background() {
  return (
    <div className="background">
    <p className="background_text">Прогноз погоды</p>
      <video
        autoPlay
        muted
        loop
        className="background_video"
        src="mixkit-autumn-leaves-falling-in-a-park-33237-hd-ready.mp4"
      ></video>
    </div>
  );
}
export default Background;
