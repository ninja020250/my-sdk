import { useState } from "react";

export const useITabController = ({ tabsLength = 0 }: { tabsLength?: number }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  const next = () => {
    setTabIndex(tabsLength - 1 === tabIndex ? 0 : tabIndex + 1);
  };

  const back = () => {
    setTabIndex(0 === tabIndex ? tabsLength - 1 : tabIndex - 1);
  };

  return {
    tabIndex,
    setTabIndex,
    next,
    back,
    handleTabsChange,
  };
};

export default useITabController;
