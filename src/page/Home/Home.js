import "./Home.scss";
import {
  SyncOutlined,
  ShareAltOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="firist">
          <div className="img-doi">
            <div className="img1">
              <img src="https://static01.nyt.com/images/2023/02/14/business/00digital-hearts-print1/00digital-hearts-print1-mediumSquareAt3X.jpg" />
            </div>
            <div className="img1">
              <img src="https://static01.nyt.com/images/2023/02/14/business/00digital-hearts-print1/00digital-hearts-print1-mediumSquareAt3X.jpg" />
            </div>
          </div>
          <div className="name">
            <p className="name-male">Name Male</p>
            <p className="famale">Name Famale</p>
          </div>
          <div className="info">
            <div className="row">
              <div className="col-4">
                <p>Sad Opening</p>
              </div>
              <div className="col-4">
                <p>Event Happy: 1</p>
              </div>
              <div className="col-4">
                <p>Event Sad: 10</p>
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <p>Sweetheart: 4</p>
              </div>
              <div className="col-4">
                <p>Sad Endding</p>
              </div>
              <div className="col-4">
                <div className="icon">
                  <div className="icon-info">
                    <SyncOutlined />
                  </div>
                  <div className="icon-info">
                    <ShareAltOutlined />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second">
          <div className="title">
            <h2>Happy</h2>
          </div>
          <div className="sub-title">
            <p>You and your love will get married at the beach</p>
          </div>
          <div className="thiep">
            <div className="text">
              <p className="wedding">The Wedding of</p>
              <p className="male">Name Male</p>
              <p className="and">&</p>
              <p className="famale">Name Famale</p>
              <p className="date">14-04-2023</p>
              <p className="at">at</p>
              <p className="location">The Beach</p>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="title">
            <p>Content</p>
          </div>
          <div className="time">
            <ClockCircleOutlined />
            <span>01:01:01:01</span>
          </div>
          <div className="title2">
            <p>from MY</p>
            <p className="font">Heart</p>
          </div>
        </div>

        <div className="content">
          <div className="title">
            <p>Content</p>
          </div>
          <div className="time">
            <ClockCircleOutlined />
            <span>01:01:01:01</span>
          </div>
          <div className="title2">
            <p className="font">Happy Valentine</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
