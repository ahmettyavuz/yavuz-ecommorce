import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHeart,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

export const NavBar = () => {
  return (
    <section className="text-sm">
      <address className="bg-[#252B42] text-white flex justify-between px-5 py-2">
        <div className="flex gap-5">
          <p>(225) 555-0118</p>
          <p>michelle.rivera@example.com</p>
        </div>
        <div>
          <p>Follow Us and get a chance to win 80% off</p>
        </div>
        <div className="flex items-center gap-2">
          <p>Follow Us :</p>
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faXTwitter} />
        </div>
      </address>
      <article className="flex justify-between px-5 py-3 items-center">
        <div className="flex gap-9  items-center">
          <h1 className="text-2xl">BrandName</h1>
          <nav className="flex text-[#737373] gap-2">
            <a href="">Home</a>
            <a href="">Shop ^</a>
            <a href="">About</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
            <a href="">Pages</a>
          </nav>
        </div>
        <div className="flex gap-5 text-[#23A6F0] items-center">
          <div className="">
            <button>Login</button>/<button>Register</button>
          </div>
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faShoppingCart} />
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </article>
    </section>
  );
};
