import React from "react";
import styled from "styled-components";
import { Search, X, Heart, ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "Give & Transparency",
    children: [
      {
        label: "Ways to Give",
        children: [
          "One-Time Donation",
          "Monthly Giving",
          "Corporate Partnerships",
        ],
      },
      {
        label: "Financial Transparency",
        children: ["Annual Report", "Financial Statements"],
      },
    ],
  },
  {
    label: "Programs & Impact",
    children: [
      {
        label: "Children’s Health",
        children: ["Safe Water", "Mental Health", "Community Health Workers"],
      },
      {
        label: "Children’s Education",
        children: ["Equity"],
      },
      "Child Protection",
      "Climate & Environment",
      "Emergency Response",
      "Where UNICEF Works",
    ],
  },
  {
    label: "Take Action",
    children: [
      "Advocate",
      "Fundraise",
      "UNICEF Clubs",
      "Volunteer Opportunities",
      "Impact Investing",
    ],
  },
  {
    label: "About Us",
    children: ["About UNICEF USA", "Leadership", "Partnerships", "Careers"],
  },
  {
    label: "Stories ",
    children: [
      "Impact Stories",
      "Program Updates",
      "FAQs",
      "Educational Resources",
    ],
  },
  {
    label: "Support",
    children: ["Contact Us", "Help / Support Center"],
  },
];

const Header = () => {
  return (
    <HeaderWrapper>
      <TopBar>
        <TopInner>
          <LogoLink
            href="https://www.unicefusa.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logo>Unicef USA</Logo>
          </LogoLink>

          <TopLinks>
            <a>GIFT CATALOG</a>
            <DonateBtn>
              <Heart size={18} fill="white" />
              Donate
            </DonateBtn>
          </TopLinks>
        </TopInner>
      </TopBar>

      <MainNav>
        <NavInner>
          <NavList>
            {navItems.map((item, index) => (
              <NavItem key={index}>
                <NavButton>
                  {item.label}
                  <ChevronDown size={16} />
                </NavButton>

                <Dropdown>
                  {item.children.map((child, i) =>
                    typeof child === "string" ? (
                      <DropdownLink key={i}>{child}</DropdownLink>
                    ) : (
                      <DropdownGroup key={i}>
                        <DropdownGroupTitle>
                          {child.label}
                          <ChevronDown size={15} />
                        </DropdownGroupTitle>

                        <SubDropdown>
                          {child.children.map((sub, s) => (
                            <SubDropdownLink key={s}>{sub}</SubDropdownLink>
                          ))}
                        </SubDropdown>
                      </DropdownGroup>
                    ),
                  )}
                </Dropdown>
              </NavItem>
            ))}
          </NavList>

          <RightActions>
            <SearchBox>
              <input placeholder="Search..." />
              <X size={18} />
              <Divider />
              <Search size={22} />
            </SearchBox>
          </RightActions>
        </NavInner>
      </MainNav>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  font-family: Arial, sans-serif;
`;

const TopBar = styled.div`
  background: #062f4f;
  color: white;
`;
const LogoLink = styled.a`
  text-decoration: none;
  color: inherit;
`;
const TopInner = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  height: 58px;
  padding: 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.55rem;
  font-weight: 700;

  span {
    font-weight: 400;
    font-size: 1.05rem;
    margin-left: 0.4rem;
  }
`;

const TopLinks = styled.div`
  display: flex;
  gap: 1.7rem;
  align-items: center;

  a {
    color: white;
    font-size: 0.85rem;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    @media (min-width: 768px) {
      font-size: 0.95rem;
    }

    /* Laptop */
    @media (min-width: 1024px) {
      font-size: 1rem;
    }

    /* Large screen / Projector */
    @media (min-width: 1440px) {
      font-size: 1rem;
    }

    /* Extra large (presentation screens) */
    @media (min-width: 1800px) {
      font-size: 1.2rem;
    }
  }
`;

const MainNav = styled.div`
  background: #078bd3;
`;

const NavInner = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  height: 76px;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavList = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavItem = styled.div`
  position: relative;
  height: 76px;
  display: flex;
  align-items: center;

  &:hover > div {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  white-space: nowrap;

  /* Tablet */
  @media (min-width: 768px) {
    font-size: 0.95rem;
  }

  /* Laptop */
  @media (min-width: 1024px) {
    font-size: 1rem;
  }

  /* Large screen / Projector */
  @media (min-width: 1440px) {
    font-size: 1rem;
  }

  /* Extra large (presentation screens) */
  @media (min-width: 1800px) {
    font-size: 1.2rem;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 76px;
  left: 0;
  min-width: 285px;
  background: white;
  border-radius: 0 0 14px 14px;
  padding: 0.8rem 0;
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.18);
  opacity: 0;
  visibility: hidden;
  transform: translateY(12px);
  transition: all 0.25s ease;
`;

const DropdownLink = styled.div`
  padding: 0.85rem 1.2rem;
  color: #062f4f;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: #eaf7fd;
    color: #078bd3;
  }
`;

const DropdownGroup = styled.div`
  position: relative;

  &:hover > div:last-child {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }
`;

const DropdownGroupTitle = styled.div`
  padding: 0.85rem 1.2rem;
  color: #062f4f;
  font-weight: 800;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: #eaf7fd;
    color: #078bd3;
  }
`;

const SubDropdown = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  min-width: 250px;
  background: #f7fcff;
  border-left: 3px solid #37bdf2;
  border-radius: 0 12px 12px 0;
  padding: 0.6rem 0;
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.16);
  opacity: 0;
  visibility: hidden;
  transform: translateX(12px);
  transition: all 0.25s ease;
`;

const SubDropdownLink = styled.div`
  padding: 0.8rem 1.2rem;
  color: #062f4f;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: #37bdf2;
    color: white;
  }
`;

const RightActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SearchBox = styled.div`
  width: 270px;
  height: 48px;
  background: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 0.9rem;
  gap: 0.7rem;

  input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 0.95rem;
    color: #062f4f;
  }

  svg {
    color: #062f4f;
    cursor: pointer;
  }
`;

const Divider = styled.span`
  width: 1px;
  height: 24px;
  background: #d9e7ef;
`;

const DonateBtn = styled.button`
  background: #ff4b22;
  color: white;
  border: none;
  border-radius: 8px;
  height: 48px;
  padding: 0 1.4rem;
  font-weight: 800;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.45rem;

  &:hover {
    background: #e33d18;
  }
`;
