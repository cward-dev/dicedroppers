import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "../pages/home/home";
import Blog from "../pages/blog/blog";
import Episodes from "../pages/episodes/episodes";
import CampaignNotes from "../pages/campaign-notes/campaign-notes";
import MeetTheCrew from "../pages/meet-the-crew/meet-the-crew";
import WikiHome from "../pages/wiki/wiki-home";

/*
  A <Switch> looks through its children <Route>s and 
  renders the first one that matches the current URL.
*/
function MyRouter() {

  return (
    <Switch>
      <Route path="/wiki/Karst_Sunborne" component={WikiHome} />
      <Route path="/meet-the-crew" component={MeetTheCrew} />
      <Route path="/campaign-notes" component={CampaignNotes} />
      <Route path="/episodes" component={Episodes} />
      <Route path="/blog" component={Blog} />
      <Route path="/" component={Home} />
    </Switch>
  );

}

export default MyRouter;