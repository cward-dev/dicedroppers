import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Episodes from "./Episodes";
import CampaignNotes from "./CampaignNotes";
import MeetTheCrew from "../pages/meet-the-crew/meet-the-crew";

/*
  A <Switch> looks through its children <Route>s and 
  renders the first one that matches the current URL.
*/
function MyRouter() {

  return (
    <Switch>
      <Route path="/meet-the-crew" component={MeetTheCrew} />
      <Route path="/campaign-notes" component={CampaignNotes} />
      <Route path="/episodes" component={Episodes} />
      <Route path="/blog" component={Blog} />
      <Route path="/" component={Home} />
    </Switch>
  );

}

export default MyRouter;