const {
  Router,
  Route,
  hashHistory
} = ReactRouter;

Routes = class Routes extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="about" component={About}/>
          <Route path="*" component={NoMatch} />
        </Route>
      </Router>
    );
  }
};
