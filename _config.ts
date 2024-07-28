import lume from "lume/mod.ts";
import nav from "lume/plugins/nav.ts";

const site = lume();
site.use(nav());

export default site;
