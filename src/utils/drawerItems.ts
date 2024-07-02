import AddIcon from "@mui/icons-material/Add";

export const drawerItems = () => {
  const defaultMenus = [
    {
      title: "Skills",
      path: `skills`,
      icon: AddIcon,
    },
    {
      title: "Projects",
      path: `projects`,
      icon: AddIcon,
    },
    {
      title: "Blogs",
      path: `blogs`,
      icon: AddIcon,
    },
  ];

  return [...defaultMenus];
};
