import { LoginPage } from "../scenes/public/login";
import { HomeScene } from "../scenes/private/home";
import { UserScene } from "../scenes/private/users";
import { ForumScene } from "../scenes/private/forum";
import { RegisterPage } from "../scenes/public/register";
import { ProfileScene } from "../scenes/private/profile";
import { LearningPathScene } from "../scenes/private/learning-path";
import { HtmlScene, CreateModulesScene } from "../scenes/private/html";
import { CssScene } from "../scenes/private/css";
import { JavascriptScene } from "../scenes/private/javascript";
import { ChallengesScene } from "../scenes/private/challenges";

export const routes = {
  private: [
    { path: "/dashboard", component: HomeScene },
    { path: "/dashboard/users", component: UserScene },
    { path: "/dashboard/forum", component: ForumScene },
    { path: "/dashboard/profile", component: ProfileScene },
    { path: "/dashboard/learning-path", component: LearningPathScene },
    { path: "/dashboard/html", component: HtmlScene },
    { path: "/dashboard/css", component: CssScene },
    { path: "/dashboard/javascript", component: JavascriptScene },
    { path: "/dashboard/challenges", component: ChallengesScene },
  ],
  public: [
    { path: "/login", component: LoginPage },
    { path: "/register", component: RegisterPage },
  ],
};
