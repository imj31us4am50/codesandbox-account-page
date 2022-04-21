import MainContentOfAccCSS from "/mainacccont/maincontentofacc.css";

export default function MainContentOfAcc() {
  return (
    <div className="container-fluid" style={MainContentOfAccCSS}>
      <div className="aibf2u container-fluid d-flex">
        <div className="accout-pfp text-center w-100 bg-success">
          <img
            src="https://imj31us4am50.github.io/imgs/feline-bw.jpeg"
            className="profile-picture"
          ></img>
        </div>
        <div className="account-information text-center w-100 bg-danger">
          annaoop
        </div>
      </div>
    </div>
  );
}
