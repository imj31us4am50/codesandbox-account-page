import MainContentOfAccCSS from "/mainacccont/maincontentofacc.css";

export default function MainContentOfAcc() {
  return (
    <div className="container-fluid" style={MainContentOfAccCSS}>
      <div className="aibf2u container-fluid d-flex">
        <div className="accout-pfp">
          <img src="#" className="profile-picture bg-danger"></img>
        </div>
        <div className="account-information"></div>
      </div>
    </div>
  );
}
