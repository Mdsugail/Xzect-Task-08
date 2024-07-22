import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import ClientSideAOS from './ClientSideAOS';


export default function Home() {
  

  return (
    <>
    <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>GoDocs</title>
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {/* Custom CSS */}
        <link rel="stylesheet" href="style.css" />
        {/* AOS Animations */}
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script src="/custom.js"></script>
      <ClientSideAOS>
    <header>
      {/* navbar section */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className=" menu-top container my-2">
          <a className="navbar-brand m-auto" href="#">
            <img
              src="./pics/icon.png"
              alt="Logo"
              width={30}
              height={30}
              className="d-inline-block align-text-top my-1"
              style={{ zIndex: -1 }}
            />
            GoDocs
          </a>
          {/* <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> */}
          <span className="navbar-toggler-icon p-2" id="menu" />
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className=" navbar-li navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Github
                </a>
              </li>
              <li className="nav-item mt-2">
                <select aria-label="Language">
                  <option value="En">En</option>
                  <option value="Fr">Fr</option>
                </select>
              </li>
            </ul>
            <div className="d-flex menu-btn">
              <button className="btn btn-outline-danger me-5 px-4 py-2">
                Changelog
              </button>
              <button className="btn btn-danger px-4 py-2 main-btn">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
    {/* .......... Navbar End........ */}
    <main className="container mt-5 main-container">
      <div className="row">
        <div className="col-md-6 mt-5 text-center text-md-start">
          <h1 className="main-h1">
            Documentation <br />
            <span className="text-danger">Theme By</span> <br /> Gethugothemes
          </h1>
          <p className="mt-4" style={{ color: "grey" }}>
            GoDocs is an open-source documentation generator for Go projects. It
            is a command-line tool that generates documentation for projects and
            any source from Go source code.
          </p>
        </div>
        <div className="col-md-6 text-center d-none d-md-block">
          <img
            className="img-fluid main-img mt-5 main-img"
            src="./pics/main.webp"
            alt="Main Image"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 d-flex justify-content-center ">
          <button id="main-btn">Get Started</button>
        </div>
        <div className="searche col-12 mt-3 col-md-6  ">
          <div className="search pe-md-5 ">
            <form id="search-form" className="d-flex justify-content-center-md">
              <input
                type="text"
                id="search-box"
                placeholder="Search GoDocs..."
                className="w-100"
              />
            </form>
          </div>
        </div>
      </div>
    </main>
    {/* Popup elements */}
    <div className="popup-overlay" id="popup-overlay" />
    <div className="pop-box" id="pop-box">
      <form id="popup-search" className="d-flex justify-content-start">
        <input
          type="text"
          id="search-box-popup"
          placeholder="Search GoDocs..."
          className="w-100"
        />{" "}
        <span id="cancelbtn" className="ctrl1">
          ESC
        </span>
      </form>
    </div>
    {/* Animation */}
    <div className="area">
      <ul className="circles">
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </div>
    {/* .... content section...... */}
    
    <section className="container my-5">
      <h1 className="text-center mb-4 card-h1 ">Browse Your Topics</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col">
      
          <div className="card" id="card-1" data-aos="fade-right">
            <img src="./pics/adjust2.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Basic Startup</h5>
              <p className="card-text text-muted">
                GoDocs simplifies the task of creating comprehensive documentation
                for your Go projects GoDocs makes it easy to document and share
                your codebase.
              </p>
            </div>
          </div>
      
        </div>
        <div className="col">
          <div className="card" id="card-1" data-aos="fade-right">
            <img src="./pics/shopping.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Easy Integration</h5>
              <p className="card-text text-muted">
                lnstall GoDocs via command line, point it to your project
                directory, and it handles the rest and extensive configuration
                options, customization is straightforward.
              </p>
            </div>
          </div>
    
        </div>
        <div className="col">
          <div className="card" id="card-1" data-aos="fade-left">
            <img src="./pics/comment.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Key Features</h5>
              <p className="card-text text-muted">
                GoDocs automates API reference generation, offers customizable
                themes, and seamlessly integrates with your development
                environment, ensuring your documentation
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" id="card-1" data-aos="fade-left">
            <img
              src="./pics/_tools_settings_icon.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Customizable Themes</h5>
              <p className="card-text text-muted">
                Personalize your documentation with clean, minimalistic layouts or
                vibrant designs tailored to your project's needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


    {/*...........card section end........ */}
    {/* ..........content section.... */}
    <section className="container my-5">
      <h1 className="text-center mb-4 container-h1">Mostly Asked Questions</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col" data-aos="fade-right">
          <div className="card card-2 m-2 p-4">
            <div className="card-body">
              <h5 className="card-title">Will updates also be free ?</h5>
              <p className="card-text ">
                {" "}
                Absolutely! Updates to GoDocs are provided free of charge as part
                of our commitment to continuously enhance the functionality and
                features of the tool. We believe in keeping our users equipped
                with the latest improvements, bug fixes, and new features without
                any additional cost.to create engaging content that highlights the
                strengths and appeal of GoDocs for potential users and
                contributors to your frontend project!
              </p>
            </div>
          </div>
        </div>
        <div className="col" data-aos="fade-left">
          <div className="card card-2 m-2 p-4">
            <div className="card-body">
              <h5 className="card-title">
                Is there any documentation and support?
              </h5>
              <p className="card-text">
                Yes, GoDocs comes with comprehensive documentation to assist you
                at every stage of using the tool. Our documentation covers
                installation instructions, configuration options, customization
                guides, and integration tips, ensuring you can leverage GoDocs
                efficiently and effectively. Additionally, we offer dedicated
                support to address any queries or issues you may encounter. Our
                support team is responsive and committed to helping you maximize
                your experience with GoDocs
              </p>
            </div>
          </div>
        </div>
        <div className="col" data-aos="fade-right">
          <div className="card card-2 m-2 p-4">
            <div className="card-body">
              <h5 className="card-title">What is a product key?</h5>
              <p className="card-text">
                In the cotontext of GoDocs, a product key typically refers to a
                unique identifier used for licensing purposes or accessing premium
                features. However, GoDocs is open-source and does not require a
                product key for basic usage. You can freely download, install, and
                use GoDocs without any restrictions. We aim to keep the tool
                accessible and straightforward for all users, ensuring you can
                generate documentation seamlessly from your Go projects
              </p>
            </div>
          </div>
        </div>
        <div className="col" data-aos="fade-left">
          <div className="card card-2 m-2 p-4">
            <div className="card-body">
              <h5 className="card-title">Automatic API Reference?</h5>
              <p className="card-text">
                GoDocs simplifies the process of generating API references
                automatically from your Go source code. By analyzing your
                codebase, GoDocs extracts and organizes relevant information about
                functions, methods, packages, and more into structured
                documentation. This feature saves you time and effort, ensuring
                your documentation remains up-to-date and synchronized with your
                project's codebase automatically.
              </p>
            </div>
          </div>
        </div>
        <div className="col" data-aos="fade-right">
          <div className="card card-2 m-2 p-4">
            <div className="card-body">
              <h5 className="card-title">Community &amp; Support?</h5>
              <p className="card-text">
                Join the GoDocs community today and become part of a thriving
                network focused on support and collaboration. Whether you're
                seeking assistance, have questions, or are eager to contribute to
                our project, our community stands ready. Visit our GitHub
                repository where you can report issues, suggest new features, and
                contribute code and improvements. Connect with fellow Go
                developers to exchange insights and experiences.Together, let's
                make GoDocs even better for everyone!
              </p>
            </div>
          </div>
        </div>
        <div className="col" data-aos="fade-left">
          <div className="card card-2 m-2 p-4">
            <div className="card-body">
              <h5 className="card-title">Usage?</h5>
              <p className="card-text">
                Discover how easy it is to create comprehensive documentation for
                your project using GoDocs. Simply navigate to your Go project
                directory in the terminal and execute the command godocs generate.
                GoDocs will swiftly scan your source code, utilizing your comments
                and structure to generate documentation. Once complete, access
                your documentation in the specified output format and location.
                With GoDocs, documenting your Go projects is streamlined and
                efficient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*...........content section end........ */}
    {/* ............side content........ */}
    <div className="container-fluid px-0 text-center">
      <div className="row align-items-center">
        <div className="col-md-6 text-center px-0 d-none d-md-block">
          <img
            src="./pics/sideimg.webp"
            alt="Side Image"
            className="img-fluid mt-5 mx-auto d-block"
          />
        </div>
        <div className="col-md-6 col-12  text-center px-5">
          <h1>Still Didn't Find Your Answer?</h1>
          <p>
            If you still have questions or need assistance, feel free to reach out
            to our dedicated support team. Our team is available 24/7 to assist
            you with any queries or issues you may encounter. We're here to help,
            and we look forward to hearing from you!
          </p>
          <button className="btn btn-danger mt-4 px-5 py-3 side-btn" data-aos="fade-left">
            Submit A Ticket
          </button>
        </div>
      </div>
    </div>
    {/* ...........Footer....... */}
    <footer className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 mb-3 mb-md-0" >
            <ul
              className="d-flex flex-wrap justify-content-center justify-content-md-start list-unstyled"
              id="footer-links" data-aos="fade-up"
            >
              <li className="footer-li mb-2 mb-md-0">
                <a
                  href="#"
                  className="fw-bold text-muted text-decoration-none pe-2 pe-md-4"
                >
                  Changelog
                </a>
              </li>
              <li className="footer-li mb-2 mb-md-0">
                <a
                  href="#"
                  className="fw-bold text-muted text-decoration-none px-2"
                >
                  Contact
                </a>
              </li>
              <li className="footer-li mb-2 mb-md-0">
                <a
                  href="#"
                  className="fw-bold text-muted text-decoration-none ps-2 ps-md-4"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
            <img
              src="./pics/icon.png"
              alt="Logo"
              width={30}
              height={30}
              className="footer-icon d-inline-block align-text-top"
            />
            <span className="h4 fw-bold ms-2">GoDocs</span>
          </div>
          <div className="col-12 col-md-4 text-center text-md-end">
            <ul className="list-inline" data-aos="fade-left">
              <li className="footer-social list-inline-item pe-4" >
                <a href="#" className="text-muted ">
                <FontAwesomeIcon icon={faFacebook} style={{color: "antiquewhite",}} />
                </a>
              </li>
              <li className="footer-social list-inline-item pe-4">
                <a href="#" className="text-muted">
                <FontAwesomeIcon icon={faTwitter} style={{color: "antiquewhite",}} />
                </a>
              </li>
              <li className="footer-social list-inline-item pe-4">
                <a href="#" className="text-muted">
                <FontAwesomeIcon icon={faGithub} style={{color: "antiquewhite",}} />
                </a>
              </li>
              <li className="footer-social list-inline-item ">
              <a href="#" className="text-muted">
              <FontAwesomeIcon icon={faLinkedin} style={{color: "antiquewhite",}} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-4 border-top">
          <div className="col-12 text-center">
            <p className="text-muted m-0 pt-3">
              © 2024 GoDocs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>

    </ClientSideAOS>


  </>
  
  );
}
