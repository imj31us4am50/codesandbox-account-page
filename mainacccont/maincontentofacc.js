import MainContentOfAccCSS from "/mainacccont/maincontentofacc.css";

export default function MainContentOfAcc() {
  return (
    <div className="container-fluid" style={MainContentOfAccCSS}>
      <div className="aibf2u container-fluid d-flex align-items-start">
        <div className="accout-pfp text-center w-100 mb-5">
          <img
            src="https://imj31us4am50.github.io/imgs/feline-bw.jpeg"
            className="profile-picture"
          ></img>
          <div className="tltp">
            <img
              src="https://imj31us4am50.github.io/imgs/edit-pencil-icon.png"
              className="edit-pencil-icon"
            />
            <span className="tltptext">Schimbă imaginea de profil</span>
          </div>
        </div>
        <div className="account-information h4 w-100 mt-4">
          {/* looks bad
          <div className="d-flex container-of-infoacc align-items-center">
            <div className="thediv">Nume utilizator:</div>
            <span id="username" className="thespan ml-2">
              naturelover271
            </span>
          </div>
          <br />
          <div className="d-flex container-of-infoacc align-items-center">
            <div className="thediv">Parolă:</div>
            <span id="password" className="thespan ml-2"></span>
          </div> */}
          <div className="info1 p-2">
            <div className="username-require d-inline">Nume utilizator: </div>
            <input
              type="text"
              readOnly
              value="naturelover271"
              id="username-add"
            />
            <div className="tltp-feature">
              <img
                src="https://imj31us4am50.github.io/imgs/edit-pencil-icon.png"
                className="edit-feature d-inline"
              />
              <span className="tltptext-feature">Schimbă numele</span>
            </div>
          </div>
          <div className="info2 p-2">
            <div className="password-require d-inline">Parolă: </div>
            <input
              type="password"
              readOnly
              value="myPassword123"
              id="password-add"
            />
            <div className="tltp-feature">
              <img
                src="https://imj31us4am50.github.io/imgs/view-eye.png"
                className="view-feature d-inline"
              />
              <span className="tltptext-feature">Vizualizează parola</span>
            </div>
            <div className="tltp-feature">
              <img
                src="https://imj31us4am50.github.io/imgs/edit-pencil-icon.png"
                className="edit-feature d-inline"
              />
              <span className="tltptext-feature">Schimbă parola</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
