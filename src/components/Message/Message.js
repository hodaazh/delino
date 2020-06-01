import React, { useState } from "react";
import "./message.css";

function Message() {
  const [state, setState] = useState(false);
  return (
    <div className="retina">
      <div
        className={state ? "active retina-launcher" : "retina-launcher "}
        onClick={() => setState(!state)}
      ></div>
      <div className="retina-container">
        <div className="retina-container-toolbar">
          <div className="retina-container-toolbar-logo">
            <span>دلینو</span>
          </div>
          <div className="retina-container-toolbar-people">
            <div>
              <img
                src="https://retain.ir/images/no_pic_300.png"
                alt="حمید"
                class="avatar"
              />
              <span>حمید</span>
            </div>
            <div>
              <img
                src="https://retain.ir/uploads/images/square100/b170bd232524c2cf1ba269bd54f224c5.png"
                alt="پیمان"
                class="avatar"
              />
              <span>پیمان</span>
            </div>
            <div>
              <img
                src="https://retain.ir/uploads/images/square100/b170bd232524c2cf1ba269bd54f224c5.png"
                alt="مهیار"
                class="avatar"
              />
              <span>مهیار</span>
            </div>
          </div>
          <p>هر گونه سوال یا مشکلی دارید تیم ما آماده پاسخگویی میباشد</p>
          <div>معمولا در چند دقیقه جواب شما را میدهیم</div>
        </div>
        <div className="retina-container-text"></div>
        <div className="retina-container-sending">
          <textarea placeholder="پیام خود را بنویسید..." />
          <div>
            <i className="icon-smile" />
            <i className="icon-attachment" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Message;
