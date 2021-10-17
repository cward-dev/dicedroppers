import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from "./Homepage";
import Blog from "./Blog";
import Episodes from "./Episodes";
import CampaignNotes from "./CampaignNotes";
import MeetTheCrew from "./MeetTheCrew";

function MyRouter() {

  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/meet-the-crew">
            <MeetTheCrew />
          </Route>
          <Route path="/campaign-notes">
            <CampaignNotes />
          </Route>
          <Route path="/episodes">
            <Episodes />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );

}

export default MyRouter;