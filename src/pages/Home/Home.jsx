import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import Brands from "../../components/Brands/Brands";
import Footer from "../../components/Footer/Footer";
import Team from "../../components/Team/Team";

const Home = () => {
  return (
    <div className="font-roboto">
      <Banner></Banner>

      <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto px-4 lg:px-0">
        {/* Brands section */}
        <div className="mt-16">
          <h2 className="text-neutral-800 text-3xl md:text-4xl font-bold text-center my-10">
            Our Brands
          </h2>
          <Brands></Brands>
        </div>
      </div>

      {/* About Us */}
      <AboutUs></AboutUs>

      {/* Our Team */}
      <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto px-4 lg:px-0">
        <h2 className="text-neutral-800 text-3xl md:text-4xl font-bold text-center my-12">
          Our Team
        </h2>
        <Team></Team>
      </div>

      {/* Footer */}
      <div className="bg-slate-800 mt-16">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
