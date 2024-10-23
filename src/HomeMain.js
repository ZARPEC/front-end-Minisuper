import homeMainTemplate from "./View/pages/home.html";

const HomeMain = () => {
  return <div dangerouslySetInnerHTML={{ __html: homeMainTemplate }} />;
};

export default HomeMain;
