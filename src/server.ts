import App from "@/app";
import IndexRoute from "@routes/index.route";
import AllRoute from "@routes/all.route";
import HelpRoute from "@routes/help.route";
import AuthorsRoute from "@routes/authors.route";
import StatsRoute from "@routes/stats.route";

const app = new App([
  new IndexRoute(),
  new AllRoute(),
  new HelpRoute(),
  new AuthorsRoute(),
  new StatsRoute(),
]);

app.listen();
