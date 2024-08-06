import AboutUs from "./Dashboard/AboutUs"
import DashboardMain from "./Dashboard/DashboardMain"
import Footer from "./Dashboard/Footer";
import Navbar from "./Dashboard/navbar";
import Pricing from "./Dashboard/Pricing";
import Bookdemo from "./Dashboard/Bookdemo";

export default function Home() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden flex flex-col items-center">
        <Navbar />
        <div className="grid-background pt-16 lg:mt-0 mt-20 w-full"> {/* Add padding-top to compensate for the fixed navbar */}
          <section id="dashboard">
            <DashboardMain />
          </section>
          <section className="pt-14" id="about">
            <AboutUs />
          </section>
          <section id='bookademo'>
            <Bookdemo />
          </section>
          <section id="pricingplan">
            <Pricing />
          </section>
          <section id="footer">
            <Footer />
          </section>

        </div>
      </div>
    </>

  );
}
