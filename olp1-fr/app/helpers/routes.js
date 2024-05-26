import { ChallengesScene } from "../scenes/private/challenges";
import { CreateModuloSceneCss, CssScene } from "../scenes/private/css";
import { ForumScene } from "../scenes/private/forum";
import { HomeScene } from "../scenes/private/home";
import { CreateModuloScene, HtmlScene } from "../scenes/private/html";
import { CreateModuloSceneJavascript, JavascriptScene } from "../scenes/private/javascript";
import { ProfileScene } from "../scenes/private/profile";
import { UserScene } from "../scenes/private/users";
import { LoginPage } from "../scenes/public/login";
import { RegisterPage } from "../scenes/public/register";

export const routes = {
  private: [
    { path: "/dashboard", component: HomeScene },
    { path: "/dashboard/users", component: UserScene },
    { path: "/dashboard/forum", component: ForumScene },
    { path: "/dashboard/profile", component: ProfileScene },
    { path: "/dashboard/html", component: HtmlScene },
    { path: "/dashboard/html/create", component: CreateModuloScene },
    { path: "/dashboard/css", component: CssScene },
    { path: "/dashboard/css/create", component: CreateModuloSceneCss },
    { path: "/dashboard/javascript", component: JavascriptScene },
    { path: "/dashboard/javascript/create", component: CreateModuloSceneJavascript },
    { path: "/dashboard/challenges", component: ChallengesScene },
  ],
  public: [
    { path: "/login", component: LoginPage },
    { path: "/register", component: RegisterPage },
  ],
};
