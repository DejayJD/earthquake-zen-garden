import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ROUTES } from "./routes";
import { Navbar } from "./components/navbar";
import "./app-styles.scss";
import sourceData from "./sourceData.json";
import { ListView } from "./views/ListView/ListView";
import { DetailView } from "./views/DetailView/DetailView";
import { ProfileView } from "./views/ProfileView/ProfileView";
import { Helmet } from "react-helmet";

console.log(sourceData);
export const App = () => (
  <Router>
    <Helmet>
      <title>{sourceData.site.title}</title>
    </Helmet>
    <Navbar
      firstName={sourceData.profile.firstName}
      logoUrl={sourceData.site.logoImage}
      title={sourceData.site.title}
    />
    <Switch>
      <Route path={ROUTES.profile}>
        <ProfileView profile={sourceData.profile} />
      </Route>
      <Route path={`${ROUTES.detail}/:id`}>
        <DetailView featureList={sourceData.data.features} />
      </Route>
      <Route path={ROUTES.home}>
        <ListView featureData={sourceData.data} />
      </Route>
    </Switch>
  </Router>
);
