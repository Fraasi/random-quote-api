import App from "@/app";
import IndexRoute from "@routes/index.route";
import AllRoute from "@routes/all.route";
import AuthorsRoute from "@routes/authors.route";
import StatsRoute from "@routes/stats.route";
import SearchRoute from "@routes/search.route";

const app = new App([
  new IndexRoute(),
  new AllRoute(),
  new AuthorsRoute(),
  new SearchRoute(),
  new StatsRoute(),
]);

app.listen();
