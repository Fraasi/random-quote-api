import App from "@/app";
import IndexRoute from "@routes/index.route";
import AllRoute from "@routes/all.route";

const app = new App([new IndexRoute(), new AllRoute()]);

app.listen();
