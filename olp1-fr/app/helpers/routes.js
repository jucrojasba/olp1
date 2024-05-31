import { ChallengesScene, CreateChallengesScene, ChallengeDisplayScene } from "../scenes/private/challenges";
import { CreateModuloSceneCss, CssScene, juegoSceneCss } from "../scenes/private/css";
import { ForumScene } from "../scenes/private/forum";
import { HomeScene } from "../scenes/private/home";
import {
  CreateModuloScene,
  HtmlScene,
  juegoScene,
} from "../scenes/private/html";
import {
  CreateModuloSceneJavascript,
  JavascriptScene, juegoSceneJS
} from "../scenes/private/javascript";
import { ProfileScene } from "../scenes/private/profile";
import { UserScene } from "../scenes/private/users";
import { LoginPage } from "../scenes/public/login";
import { RegisterPage } from "../scenes/public/register";
import { RankingTableScene } from "../scenes/private/rank";

console.log(RankingTableScene )

export const routes = {
  private: [
    { path: "/dashboard", component: HomeScene },
    { path: "/dashboard/users", component: UserScene },
    { path: "/dashboard/forum", component: ForumScene },
    { path: "/dashboard/profile", component: ProfileScene },
    { path: "/dashboard/html", component: HtmlScene },
    { path: "/dashboard/html/create", component: CreateModuloScene },
    { path: "/dashboard/html/juego", component: juegoScene },
    { path: "/dashboard/css", component: CssScene },
    { path: "/dashboard/css/create", component: CreateModuloSceneCss },
    { path: "/dashboard/css/juego", component: juegoSceneCss },
    { path: "/dashboard/javascript", component: JavascriptScene },
    {
      path: "/dashboard/javascript/create",
      component: CreateModuloSceneJavascript,
    },
    { path: "/dashboard/javascript/juego", component: juegoSceneJS },
    { path: "/dashboard/challenges", component: ChallengesScene },
    { path: "/dashboard/challenges/create", component: CreateChallengesScene },
    { path: "/dashboard/challenge/display_challenge", component: ChallengeDisplayScene },
    { path: "/dashboard/rank", component: RankingTableScene },
  ],
  public: [
    { path: "/login", component: LoginPage },
    { path: "/register", component: RegisterPage },
  ],
};
