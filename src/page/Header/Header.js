import "./Header.scss";
import { LeftOutlined, AlignCenterOutlined } from "@ant-design/icons";
function Header() {
  return (
    <div className="header">
      <div className="back-icon">
        <LeftOutlined />
      </div>
      <div className="text-content">
        <p>The future of your love...!</p>
      </div>
      <div className="menu-icon">
        <AlignCenterOutlined />
      </div>
    </div>
  );
}

export default Header;
