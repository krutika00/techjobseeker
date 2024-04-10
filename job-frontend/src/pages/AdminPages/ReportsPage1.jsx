import React, { useEffect } from "react";
import Content from "../../components/dashboard/Reports/Content1";

// import Tabular from "../../components/dashboard/Reports/Tabular";
import Config from "../../config/Config.json";

export default function ReportsPage1() {
  useEffect(() => {
    document.title = Config.TITLE.REPORTS;
  }, []);
  return (
    <React.Fragment>
      <Content />
      {/* <Tabular /> */}
    </React.Fragment>
  );
}
