import { RoutePath } from "domain/routPaths";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HEADER_BG_COLOR, MIN_CONTENT_WIDTH, SIDE_PADDING } from "variables";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${HEADER_BG_COLOR};
  height: 70px;
  padding: 0 20px;
`;

const Menu = styled.div`
  display: flex;
  gap: ${SIDE_PADDING};
  margin: 0 auto;
  min-width: ${MIN_CONTENT_WIDTH};
`;

const MenuItem = styled.div`
  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      color: #fcd535;
    }
  }
`;

interface IMenuItem {
  link: string;
  caption: string;
}

const menuItems: IMenuItem[] = [
  { link: RoutePath.baseUrl, caption: "Home Page" },
];

export default function Header() {
  return (
    <Wrapper>
      <Menu>
        {menuItems.map(({ link, caption }) => (
          <MenuItem key={link}>
            <Link to={link}>{caption}</Link>
          </MenuItem>
        ))}
      </Menu>
    </Wrapper>
  );
}
