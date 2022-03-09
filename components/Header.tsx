import SiloLogo from "../assets/icons/logo.svg";
import ActiveLink from "../components/ActiveLink";
import styled from "styled-components";
import { Image as ImageIcon } from "react-feather";

const activeClassName = "ACTIVE";

const StyledNavLink = styled.a.attrs({ activeClassName })`
  height: 100%;
  color: rgb(171, 169, 167);
  cursor: pointer;
  text-decoration: none;
  background: transparent;
  display: inline-block;
  position: relative;
  user-select: none;
  word-break: normal;

  :hover {
    color: white;
  }

  &.${activeClassName} {
    color: white;

    &:after {
      width: 100%;
      background: linear-gradient(
        to right,
        rgb(99, 102, 241),
        rgb(168, 85, 247)
      );
    }
  }

  &:after {
    content: "";
    display: block;
    width: 0px;
    height: 2px;
    margin-top: -2px;
    background: transparent;
    border-radius: 3px;
    transition: width 0.3s ease, background-color 0.3s ease;
  }

  &:hover:after {
    width: 100%;
    background: linear-gradient(to right, rgb(99, 102, 241), rgb(168, 85, 247));
  }
`;

const Header = () => {
  return (
    <header className="bg-zinc-900 px-8 flex flex-row items-center">
      <div className="w-24 h-10 mr-36 my-4">
        <SiloLogo />
      </div>

      <nav className="flex-1 self-stretch">
        <ul className="nav flex flex-row items-center gap-6 h-full">
          <li className="h-full flex items-center">
            <ActiveLink activeClassName="ACTIVE" href="/">
              <StyledNavLink>
                <span className="h-full flex items-center text-inherit text-sm">
                  Markets
                </span>
              </StyledNavLink>
            </ActiveLink>
          </li>
          <li className="h-full">
            <ActiveLink activeClassName="ACTIVE" href="/dashboard">
              <StyledNavLink>
                <span className="h-full flex items-center text-inherit text-sm">
                  Dashboard
                </span>
              </StyledNavLink>
            </ActiveLink>
          </li>
        </ul>
      </nav>

      <div className="flex flex-row items-center gap-3 my-2">
        <button className="bg-black p-3  rounded-lg inline-flex items-center">
          <ImageIcon className="mr-2" width={20} height={20} /> Ethereum
        </button>

        <button className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-lg inline-flex items-center">
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

export default Header;
