import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="links">
      <a href="https://training.zuri.team/" id="btn__zuri">
        zuri team
      </a>
      <a
        href="http://books.zuri.team"
        title="Find books about design and coding"
        id="books"
      >
        zuri book
      </a>
      <a
        href="https://books.zuri.team/python-for-beginners?ref_id=jargohillzz"
        title="A book about the wonderful world of coding and all its beauties!, learn about everything you need to create amazing and professional designs"
        id="book__python"
      >
        python books
      </a>
      <a
        href="https://background.zuri.team"
        title="hello there, we check everything necessary for coders with great reviews"
        id="pitch"
      >
        background check for coders
      </a>
      <a
        href=" https://books.zuri.team/design-rules"
        title="this book gives you the necessary knowledge needed to create a professional design that is up to date with the trends!"
        id="book__design"
      >
        design books
      </a>
      <Link to="/contact" id="contact">
        contact me
      </Link>
    </div>
  );
};

export default Links;
