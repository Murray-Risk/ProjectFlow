import { createBrowserRouter } from "react-router-dom";

import ProjectsPage from "../pages/Projects/ProjectsPage";
import CharterPage from "../pages/Charter/CharterPage";
import WBSPage from "../pages/WBS/WBSPage";
import TasksPage from "../pages/Tasks/TasksPage";
import MilestonesPage from "../pages/Milestones/MilestonesPage";
import StakeholdersPage from "../pages/Stakeholders/StakeholdersPage";
import TeamPage from "../pages/Team/TeamPage";
import SitesPage from "../pages/Sites/SitesPage";
import DocsPage from "../pages/Docs/DocsPage";
import RiskPage from "../pages/Risk/RiskPage";
import OHSPage from "../pages/OHS/OHSPage";
import EMSPage from "../pages/EMS/EMSPage";
import AssetPage from "../pages/Asset/AssetPage";
import IssuesPage from "../pages/Issues/IssuesPage";
import ChangesPage from "../pages/Changes/ChangesPage";
import QualityPage from "../pages/Quality/QualityPage";
import LessonsPage from "../pages/Lessons/LessonsPage";
import CommunicationsPage from "../pages/Communications/CommunicationsPage";

export const router = createBrowserRouter([
  { path: "/", element: <ProjectsPage /> },
  { path: "/projects", element: <ProjectsPage /> },
  { path: "/charter", element: <CharterPage /> },
  { path: "/wbs", element: <WBSPage /> },
  { path: "/tasks", element: <TasksPage /> },
  { path: "/milestones", element: <MilestonesPage /> },
  { path: "/stakeholders", element: <StakeholdersPage /> },
  { path: "/team", element: <TeamPage /> },
  { path: "/sites", element: <SitesPage /> },
  { path: "/docs", element: <DocsPage /> },
  { path: "/risk", element: <RiskPage /> },
  { path: "/ohs", element: <OHSPage /> },
  { path: "/ems", element: <EMSPage /> },
  { path: "/asset", element: <AssetPage /> },
  { path: "/issues", element: <IssuesPage /> },
  { path: "/changes", element: <ChangesPage /> },
  { path: "/quality", element: <QualityPage /> },
  { path: "/lessons", element: <LessonsPage /> },
  { path: "/communications", element: <CommunicationsPage /> },
]);
