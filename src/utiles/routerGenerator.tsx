import { TPath, TRoute } from "../Types";


const routerGenerator = (item: TPath[]) => {
  // console.log("object",item);
  const router = item.reduce((acc: TRoute[], item) => {
    if (item?.path == "dashboard" && item?.element) {
      acc.push({
        path: "",
        // index: item?.index,
        element: item.element,
      });
    }
    if (item?.path && item?.element) {
      acc.push({
        path: item?.path,
        element: item.element,
      });
    }
    if (item?.children) {
      item?.children?.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child?.element,
        });
      });
    }
    return acc;
  }, []);
  // console.log(router);
  return router;
};

export default routerGenerator;