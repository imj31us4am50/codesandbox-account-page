import MainContentOfAccCSS from "/mainacccont/maincontentofacc.css";

export default function MainContentOfAcc() {
  return (
    <div className="container-fluid" style={MainContentOfAccCSS}>
      <div className="aibf2u container-fluid d-flex align-items-start">
        <div className="accout-pfp text-center w-100 mb-5">
          <img
            src="https://imj31us4am50.github.io/imgs/feline-bw.jpeg"
            className="profile-picture"
            id="profile-picture-to-change"
          />
          <div className="tltp">
            {/* <img
              src="https://imj31us4am50.github.io/imgs/edit-pencil-icon.png"
              className="edit-pencil-icon feature-icon"
            /> */}
            <div class="image-upload">
              <label for="file-input" onClick={() => {}}>
                <img
                  src="https://imj31us4am50.github.io/imgs/edit-pencil-icon.png"
                  className="edit-pencil-icon feature-icon"
                />
              </label>

              <input id="file-input" type="file" />
            </div>
            <span className="tltptext">Schimbă imaginea de profil</span>
          </div>
        </div>
        <div className="account-information h4 w-100">
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
          <div className="info1 pb-3">
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
                className="edit-feature d-inline feature-icon"
              />
              <span className="tltptext-feature">Schimbă numele</span>
            </div>
          </div>
          <div className="info2 pb-3">
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
                className="view-feature d-inline feature-icon"
                id="view-password-icon"
                onClick={() => {
                  let passTooltip = document.getElementById("spanforpass");
                  let passInput = document.getElementById("password-add");
                  if (passInput.type == "password") {
                    passInput.type = "text";
                    passTooltip.textContent = "Ascunde parola";
                  } else {
                    passInput.type = "password";
                    passTooltip.textContent = "Vizualizează parola";
                  }
                }}
              />
              <span className="tltptext-feature" id="spanforpass">
                Vizualizează parola
              </span>
            </div>
            <div className="tltp-feature">
              <img
                src="https://imj31us4am50.github.io/imgs/edit-pencil-icon.png"
                className="edit-feature d-inline feature-icon"
              />
              <span className="tltptext-feature">Schimbă parola</span>
            </div>
          </div>
          <div className="info3 pb-3">
            <div className="email-require d-inline">Email: </div>
            <input
              type="email"
              readOnly
              value="qorisa23@yahoo.com"
              id="email-add"
            />
            <div className="tltp-feature">
              <img
                src="https://imj31us4am50.github.io/imgs/edit-pencil-icon.png"
                className="edit-feature d-inline feature-icon"
              />
              <span className="tltptext-feature">Schimbă email-ul</span>
            </div>
          </div>
          <div className="info4 pb-3">
            <div className="bio-require d-inline">Bio: </div>
            <textarea
              readOnly
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              id="bio-add"
            />
            <div className="tltp-feature">
              <img
                src="https://imj31us4am50.github.io/imgs/edit-pencil-icon.png"
                className="edit-feature d-inline feature-icon"
              />
              <span className="tltptext-feature">Editează biografia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
