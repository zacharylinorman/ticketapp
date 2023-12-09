import {
  faGlobe,
  faHome,
  faTicket,
  faUser,
  faUserAstronaut,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const Nav = async () => {
  const session = await getServerSession(options);

  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/" title="Home">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/TicketPage/new" title="New Ticket">
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>
      <div className="flex gap-10">
        <Link href="/CreateUser" title="Create User">
          <FontAwesomeIcon icon={faUserPlus} className="icon" />
        </Link>
        <Link href="/ClientMember" title="Client Member">
          <FontAwesomeIcon icon={faUser} className="icon" />
        </Link>
        <Link href="/Member" title="Member">
          <FontAwesomeIcon icon={faUserAstronaut} className="icon" />
        </Link>
        <Link href="/Public" title="Public">
          <FontAwesomeIcon icon={faGlobe} className="icon" />
        </Link>
        {session ? (
          <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
        ) : (
          <Link href="/api/auth/signin">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
